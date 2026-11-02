import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
export interface User { id:string; fullName:string; email:string; phone?:string; createdAt:string; }
export interface ProfileData { company?:string; billingAddress?:string; city?:string; country?:string; }
export interface PlanInfo { planId:'starter'|'premium'|'pro'; planName:string; selectedAt:string; meetingBooked:boolean; meetingDate?:string; meetingTime?:string; }
interface AuthCtx {
  user:User|null; plan:PlanInfo|null; profile:ProfileData; selectedProducts:string[];
  isAuthenticated:boolean;
  login:(e:string,p:string)=>{success:boolean;error?:string};
  signup:(n:string,e:string,p:string,ph?:string)=>{success:boolean;error?:string};
  logout:()=>void; selectPlan:(id:'starter'|'premium'|'pro',n:string)=>void;
  bookMeeting:(d:string,t:string)=>void; rescheduleMeeting:(d:string,t:string)=>void;
  updateProfile:(d:Partial<ProfileData>)=>void;
  updatePassword:(o:string,n:string)=>{success:boolean;error?:string};
  updateUser:(d:Partial<{fullName:string;phone:string}>)=>void;
  setSelectedProducts:(ids:string[])=>void;
}
const AuthContext=createContext<AuthCtx|undefined>(undefined);
const UK='duchas_users',CK='duchas_cur',PK='duchas_plans',FK='duchas_prof',SK='duchas_sprods';
interface SU{id:string;fullName:string;email:string;phone?:string;password:string;createdAt:string;}
export const AuthProvider:React.FC<{children:React.ReactNode}>=({children})=>{
  const[user,setUser]=useState<User|null>(null);
  const[plan,setPlan]=useState<PlanInfo|null>(null);
  const[profile,setProfile]=useState<ProfileData>({});
  const[sp,setSp]=useState<string[]>([]);
  const gu=():SU[]=>{try{return JSON.parse(localStorage.getItem(UK)||'[]');}catch{return[];}};
  useEffect(()=>{const s=localStorage.getItem(CK);if(!s)return;
    try{const p:User=JSON.parse(s);setUser(p);
      const pl=JSON.parse(localStorage.getItem(PK)||'{}');if(pl[p.id])setPlan(pl[p.id]);
      const pr=JSON.parse(localStorage.getItem(FK)||'{}');if(pr[p.id])setProfile(pr[p.id]);
      const x=JSON.parse(localStorage.getItem(SK)||'{}');if(x[p.id])setSp(x[p.id]);
    }catch{localStorage.removeItem(CK);}
  },[]);
  const signup=useCallback((n:string,e:string,p:string,ph?:string)=>{
    const us=gu();if(us.find(u=>u.email.toLowerCase()===e.toLowerCase()))return{success:false,error:'Account exists.'};
    if(p.length<6)return{success:false,error:'Password 6+ chars.'};
    us.push({id:crypto.randomUUID(),fullName:n,email:e.toLowerCase(),phone:ph,password:p,createdAt:new Date().toISOString()});
    localStorage.setItem(UK,JSON.stringify(us));return{success:true};
  },[]);
  const login=useCallback((e:string,p:string)=>{
    const f=gu().find(u=>u.email.toLowerCase()===e.toLowerCase()&&u.password===p);
    if(!f)return{success:false,error:'Invalid credentials. Sign up first.'};
    const su:User={id:f.id,fullName:f.fullName,email:f.email,phone:f.phone,createdAt:f.createdAt};
    setUser(su);localStorage.setItem(CK,JSON.stringify(su));
    const pl=JSON.parse(localStorage.getItem(PK)||'{}');if(pl[f.id])setPlan(pl[f.id]);
    const pr=JSON.parse(localStorage.getItem(FK)||'{}');if(pr[f.id])setProfile(pr[f.id]);
    const x=JSON.parse(localStorage.getItem(SK)||'{}');if(x[f.id])setSp(x[f.id]||[]);
    return{success:true};
  },[]);
  const logout=useCallback(()=>{setUser(null);setPlan(null);setProfile({});setSp([]);localStorage.removeItem(CK);},[]);
  const selectPlan=useCallback((id:'starter'|'premium'|'pro',nm:string)=>{
    if(!user)return;const np:PlanInfo={planId:id,planName:nm,selectedAt:new Date().toISOString(),meetingBooked:false};
    setPlan(np);const ps=JSON.parse(localStorage.getItem(PK)||'{}');ps[user.id]=np;localStorage.setItem(PK,JSON.stringify(ps));
  },[user]);
  const bookMeeting=useCallback((d:string,t:string)=>{if(!user||!plan)return;const u={...plan,meetingBooked:true,meetingDate:d,meetingTime:t};setPlan(u);const ps=JSON.parse(localStorage.getItem(PK)||'{}');ps[user.id]=u;localStorage.setItem(PK,JSON.stringify(ps));},[user,plan]);
  const rescheduleMeeting=useCallback((d:string,t:string)=>{if(!user||!plan)return;const u={...plan,meetingDate:d,meetingTime:t};setPlan(u);const ps=JSON.parse(localStorage.getItem(PK)||'{}');ps[user.id]=u;localStorage.setItem(PK,JSON.stringify(ps));},[user,plan]);
  const updateProfile=useCallback((d:Partial<ProfileData>)=>{if(!user)return;const np={...profile,...d};setProfile(np);const ps=JSON.parse(localStorage.getItem(FK)||'{}');ps[user.id]=np;localStorage.setItem(FK,JSON.stringify(ps));},[user,profile]);
  const updatePassword=useCallback((o:string,n:string)=>{if(!user)return{success:false,error:'Not logged in'};const us=gu();const i=us.findIndex(u=>u.id===user.id);if(i<0)return{success:false,error:'Not found'};if(us[i].password!==o)return{success:false,error:'Wrong current password'};if(n.length<6)return{success:false,error:'6+ chars needed'};us[i].password=n;localStorage.setItem(UK,JSON.stringify(us));return{success:true};},[user]);
  const updateUser=useCallback((d:Partial<{fullName:string;phone:string}>)=>{if(!user)return;const nu={...user,...d};setUser(nu);localStorage.setItem(CK,JSON.stringify(nu));const us=gu();const i=us.findIndex(u=>u.id===user.id);if(i>=0){Object.assign(us[i],d);localStorage.setItem(UK,JSON.stringify(us));}},[user]);
  const setSelectedProducts=useCallback((ids:string[])=>{setSp(ids);if(!user)return;const x=JSON.parse(localStorage.getItem(SK)||'{}');x[user.id]=ids;localStorage.setItem(SK,JSON.stringify(x));},[user]);
  return(<AuthContext.Provider value={{user,plan,profile,selectedProducts:sp,isAuthenticated:!!user,login,signup,logout,selectPlan,bookMeeting,rescheduleMeeting,updateProfile,updatePassword,updateUser,setSelectedProducts}}>{children}</AuthContext.Provider>);
};
export function useAuth(){const c=useContext(AuthContext);if(!c)throw new Error('useAuth needs AuthProvider');return c;}
