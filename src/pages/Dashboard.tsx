import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar,Clock,Crown,ArrowRight,Shield,Video,LogOut,User,Settings,Lock,AlertTriangle,Fingerprint,Wifi,Server,Users,Activity,BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fadeInUp,scaleIn,staggerContainer,defaultTransition } from '../utils/animations';
import './Dashboard.css';
const ST=[{l:'Account Created',d:true},{l:'Products Selected',d:true},{l:'Plan Chosen',d:true},{l:'Meeting Scheduled',d:true},{l:'Meeting Completed',d:false},{l:'KYC Verified',d:false},{l:'Agreement Signed',d:false},{l:'Account Active',d:false}];
const Dashboard:React.FC=()=>{
  const{isAuthenticated,user,plan,logout}=useAuth();
  if(!isAuthenticated)return<Navigate to="/login" replace/>;if(!plan)return<Navigate to="/choose-plan" replace/>;if(!plan.meetingBooked)return<Navigate to="/book-meeting" replace/>;
  return(<main className="dash-page">
    <div className="dash-page__bg"><div className="dash-page__g"/><div className="dash-page__o1"/><div className="dash-page__o2"/></div>
    <div className="container dash-cnt">
      <motion.div className="dash-hdr" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div className="dash-welcome" variants={fadeInUp} transition={defaultTransition}><div className="dash-avatar"><User size={28}/></div><div><h1>Welcome, {user?.fullName}</h1><p className="dash-email">{user?.email}</p></div></motion.div>
        <motion.div className="dash-acts" variants={fadeInUp} transition={defaultTransition}><Link to="/profile" className="btn btn-secondary btn-sm"><Settings size={16}/> Profile</Link><button className="btn btn-secondary btn-sm" onClick={logout}><LogOut size={16}/> Out</button></motion.div>
      </motion.div>
      <motion.div className="dash-grid" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div className="dash-card glass-card" variants={scaleIn} transition={defaultTransition}><div className="dch"><Crown size={20} style={{color:'#b8860b'}}/><h3>Plan</h3></div><div className="dash-pn">{plan.planName}</div><p className="dash-ps"><span className="dash-dot dash-dot--p"/> Pending</p><Link to="/choose-plan" className="btn btn-secondary btn-sm">Change</Link></motion.div>
        <motion.div className="dash-card glass-card" variants={scaleIn} transition={defaultTransition}><div className="dch"><Calendar size={20} style={{color:'#b8860b'}}/><h3>Meeting</h3></div><div className="dash-mtg"><div className="dash-mr"><Calendar size={16}/>{plan.meetingDate}</div><div className="dash-mr"><Clock size={16}/>{plan.meetingTime}</div><div className="dash-mr"><Video size={16}/>Video</div></div><Link to="/book-meeting" className="btn btn-primary btn-sm">Reschedule <ArrowRight size={14}/></Link></motion.div>
        <motion.div className="dash-card glass-card" variants={scaleIn} transition={defaultTransition}><div className="dch"><Shield size={20} style={{color:'#10b981'}}/><h3>Onboarding</h3></div><div className="dash-steps">{ST.map((s,i)=>(<div key={i} className={`dash-step ${s.d?'dash-step--d':'dash-step--p'}`}><span className="dash-sd"/><span>{s.l}</span></div>))}</div></motion.div>
      </motion.div>
      <motion.div className="dash-prev" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.4}}>
        <div className="dash-disc glass-card"><Lock size={20}/><div><strong>Dashboard Preview</strong><p>Full access after meeting, KYC & agreement.</p></div></div>
        <div className="dash-blur-w">
          <div className="dash-blur-o"><AlertTriangle size={32}/><h3>Locked — Complete Onboarding</h3><p>Finish meeting, KYC, and sign agreement.</p></div>
          <div className="dash-dummy">
            <div className="dd-hdr"><h2>Biometric Dashboard</h2><span className="dd-live"><Activity size={14}/> Live</span></div>
            <div className="dd-stats"><div className="dd-stat"><Fingerprint size={20}/><div><b>2,847</b><span>Auth Today</span></div></div><div className="dd-stat"><Users size={20}/><div><b>1,243</b><span>Users</span></div></div><div className="dd-stat"><Server size={20}/><div><b>99.97%</b><span>Uptime</span></div></div><div className="dd-stat"><Wifi size={20}/><div><b>12</b><span>Devices</span></div></div></div>
            <div className="dd-row"><div className="dd-chart glass-card"><BarChart3 size={18}/><h4>Trends</h4><div className="dd-bars">{[65,45,80,55,70,90,60,75,85,50].map((h,i)=>(<div key={i} className="dd-bar" style={{height:`${h}%`}}/>))}</div></div><div className="dd-devs glass-card"><h4>Devices</h4>{['Entrance A - On','Entrance B - On','Server Room - On','Parking - Off','Floor 2 - On'].map((d,i)=>(<div key={i} className="dd-dev"><span className={`dd-ddot ${d.includes('Off')?'dd-ddot--off':''}`}/>{d}</div>))}</div></div>
            <div className="dd-row"><div className="dd-recent glass-card"><h4>Activity</h4>{['Palm auth: John','Access: Server Room','New device: Floor 3','Report generated'].map((a,i)=>(<div key={i} className="dd-act"><span className="dd-t">2m</span>{a}</div>))}</div><div className="dd-api glass-card"><h4>API Health</h4><div className="dd-ar"><span>Auth</span><span className="dd-ok">● OK</span></div><div className="dd-ar"><span>Pay</span><span className="dd-ok">● OK</span></div><div className="dd-ar"><span>Access</span><span className="dd-ok">● OK</span></div><div className="dd-ar"><span>Hooks</span><span className="dd-wrn">● Deg</span></div></div></div>
          </div>
        </div>
      </motion.div>
    </div>
  </main>);
};
export default Dashboard;
