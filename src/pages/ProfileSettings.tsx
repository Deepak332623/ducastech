import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Building2, MapPin, Lock, Save, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fadeInUp, staggerContainer, defaultTransition } from '../utils/animations';
import './ProfileSettings.css';

const ProfileSettings: React.FC = () => {
  const { isAuthenticated, user, profile, updateProfile, updateUser, updatePassword } = useAuth();
  const [fn,setFn]=useState(user?.fullName||'');const [ph,setPh]=useState(user?.phone||'');
  const [co,setCo]=useState(profile.company||'');const [addr,setAddr]=useState(profile.billingAddress||'');
  const [city,setCity]=useState(profile.city||'');const [country,setCountry]=useState(profile.country||'');
  const [oldPw,setOldPw]=useState('');const [newPw,setNewPw]=useState('');const [cfPw,setCfPw]=useState('');
  const [msg,setMsg]=useState('');const [pwMsg,setPwMsg]=useState('');
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const saveProfile=(e:React.FormEvent)=>{e.preventDefault();updateUser({fullName:fn,phone:ph});updateProfile({company:co,billingAddress:addr,city,country});setMsg('Profile saved!');setTimeout(()=>setMsg(''),3000);};
  const savePw=(e:React.FormEvent)=>{e.preventDefault();if(newPw!==cfPw){setPwMsg('Passwords don\'t match');return;}const r=updatePassword(oldPw,newPw);if(r.success){setPwMsg('Password updated!');setOldPw('');setNewPw('');setCfPw('');}else setPwMsg(r.error||'Failed');setTimeout(()=>setPwMsg(''),3000);};

  return (
    <main className="prof-page">
      <div className="prof-page__bg"><div className="prof-page__gradient"/></div>
      <div className="container prof-page__container">
        <motion.div className="prof-header" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} transition={defaultTransition}>Profile Settings</motion.h1>
          <motion.p variants={fadeInUp} transition={defaultTransition}>Manage your account, company details, and billing address.</motion.p>
        </motion.div>
        <div className="prof-grid">
          <motion.form className="prof-section glass-card" onSubmit={saveProfile} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
            <div className="prof-section__header"><User size={20}/><h3>Personal Info</h3></div>
            <div className="prof-field"><label>Full Name</label><input value={fn} onChange={e=>setFn(e.target.value)} placeholder="Your name"/></div>
            <div className="prof-field"><label>Email</label><input value={user?.email||''} disabled className="prof-disabled"/></div>
            <div className="prof-field"><label>Phone</label><input value={ph} onChange={e=>setPh(e.target.value)} placeholder="+91 9876543210"/></div>
            <div className="prof-section__header"><Building2 size={20}/><h3>Company Details</h3></div>
            <div className="prof-field"><label>Company Name</label><input value={co} onChange={e=>setCo(e.target.value)} placeholder="Your company"/></div>
            <div className="prof-section__header"><MapPin size={20}/><h3>Billing Address</h3></div>
            <div className="prof-field"><label>Address</label><input value={addr} onChange={e=>setAddr(e.target.value)} placeholder="Street address"/></div>
            <div className="prof-row"><div className="prof-field"><label>City</label><input value={city} onChange={e=>setCity(e.target.value)} placeholder="City"/></div><div className="prof-field"><label>Country</label><input value={country} onChange={e=>setCountry(e.target.value)} placeholder="Country"/></div></div>
            <button type="submit" className="btn btn-primary prof-save"><Save size={16}/> Save Changes</button>
            {msg&&<div className="prof-msg"><CheckCircle size={16}/>{msg}</div>}
          </motion.form>
          <motion.form className="prof-section glass-card" onSubmit={savePw} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
            <div className="prof-section__header"><Lock size={20}/><h3>Change Password</h3></div>
            <div className="prof-field"><label>Current Password</label><input type="password" value={oldPw} onChange={e=>setOldPw(e.target.value)} placeholder="Current password"/></div>
            <div className="prof-field"><label>New Password</label><input type="password" value={newPw} onChange={e=>setNewPw(e.target.value)} placeholder="New password (6+ chars)"/></div>
            <div className="prof-field"><label>Confirm New Password</label><input type="password" value={cfPw} onChange={e=>setCfPw(e.target.value)} placeholder="Repeat new password"/></div>
            <button type="submit" className="btn btn-primary prof-save"><Lock size={16}/> Update Password</button>
            {pwMsg&&<div className={`prof-msg ${pwMsg.includes('updated')?'':'prof-msg--err'}`}><CheckCircle size={16}/>{pwMsg}</div>}
          </motion.form>
        </div>
      </div>
    </main>);
};
export default ProfileSettings;
