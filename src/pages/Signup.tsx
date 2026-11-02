import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail,Lock,User,ArrowRight,Eye,EyeOff,Fingerprint,Shield,Zap,CheckCircle,AlertTriangle,XCircle,Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { validateEmail } from '../utils/emailValidator';
import MathCaptcha from '../components/MathCaptcha';
import { fadeInUp,staggerContainer,defaultTransition } from '../utils/animations';
import './Auth.css';

const EI=({quality,reason}:{quality:string;reason?:string})=>(<div className={`email-status email-status--${quality}`}>{quality==='good'?<CheckCircle size={14}/>:quality==='suspicious'?<AlertTriangle size={14}/>:<XCircle size={14}/>}<span>{reason||'Email looks good'}</span></div>);

const Signup: React.FC = () => {
  const [fn,setFn]=useState('');const [em,setEm]=useState('');const [ph,setPh]=useState('');
  const [pw,setPw]=useState('');const [cpw,setCpw]=useState('');const [showPw,setShowPw]=useState(false);
  const [err,setErr]=useState('');const [ld,setLd]=useState(false);const [capOk,setCapOk]=useState(false);
  const [ec,setEc]=useState<{quality:string;reason?:string}|null>(null);
  const {signup}=useAuth();const nav=useNavigate();
  const emailBlur=()=>{if(!em.trim()){setEc(null);return;}const r=validateEmail(em);setEc({quality:r.quality,reason:r.reason});};
  const onCap=useCallback((v:boolean)=>setCapOk(v),[]);
  const sub=(e:React.FormEvent)=>{e.preventDefault();setErr('');
    if(!fn.trim()||!em.trim()||!pw.trim()){setErr('All fields required.');return;}
    const ev=validateEmail(em);if(!ev.valid){setErr(ev.reason||'Invalid email.');return;}
    if(pw!==cpw){setErr('Passwords do not match.');return;}
    if(pw.length<6){setErr('Password must be at least 6 characters.');return;}
    if(!capOk){setErr('Solve the security challenge.');return;}
    setLd(true);setTimeout(()=>{const r=signup(fn,em,pw,ph);setLd(false);
      r.success?nav('/login',{state:{signupSuccess:true}}):setErr(r.error||'Failed.');},800);};
  return (
    <main className="auth-page">
      <div className="auth-page__bg"><div className="auth-page__gradient"/><div className="auth-page__grid-pattern"/><div className="auth-page__orb auth-page__orb--1"/><div className="auth-page__orb auth-page__orb--2"/></div>
      <div className="auth-page__container">
        <motion.div className="auth-page__branding" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div className="auth-brand__icon" variants={fadeInUp} transition={defaultTransition}><Fingerprint size={48}/></motion.div>
          <motion.h2 variants={fadeInUp} transition={defaultTransition}>Join <span className="gradient-text">Duchas Technologies</span></motion.h2>
          <motion.p variants={fadeInUp} transition={defaultTransition}>Create your account and access our biometric identity platform.</motion.p>
          <motion.div className="auth-brand__features" variants={fadeInUp} transition={defaultTransition}>
            <div className="auth-brand__feature"><Shield size={20}/><span>Enterprise Security</span></div>
            <div className="auth-brand__feature"><Zap size={20}/><span>Instant Setup</span></div>
          </motion.div>
        </motion.div>
        <motion.div className="auth-page__form-wrapper" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <div className="auth-form glass-card">
            <div className="auth-form__header"><h1>Create Account</h1><p>Fill in your details to get started</p></div>
            {err&&<motion.div className="auth-form__error" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>{err}</motion.div>}
            <form onSubmit={sub} className="auth-form__body">
              <div className="auth-input-group"><label>Full Name</label><div className="auth-input-wrapper"><User size={18} className="auth-input-icon"/><input type="text" value={fn} onChange={e=>setFn(e.target.value)} placeholder="John Doe"/></div></div>
              <div className="auth-input-group"><label>Email</label><div className="auth-input-wrapper"><Mail size={18} className="auth-input-icon"/><input type="email" value={em} onChange={e=>setEm(e.target.value)} onBlur={emailBlur} placeholder="you@company.com"/></div>{ec&&<EI {...ec}/>}</div>
              <div className="auth-input-group"><label>Phone (optional)</label><div className="auth-input-wrapper"><Phone size={18} className="auth-input-icon"/><input type="tel" value={ph} onChange={e=>setPh(e.target.value)} placeholder="+91 9876543210"/></div></div>
              <div className="auth-input-group"><label>Password</label><div className="auth-input-wrapper"><Lock size={18} className="auth-input-icon"/><input type={showPw?'text':'password'} value={pw} onChange={e=>setPw(e.target.value)} placeholder="Min. 6 characters"/><button type="button" className="auth-input-toggle" onClick={()=>setShowPw(!showPw)}>{showPw?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>
              <div className="auth-input-group"><label>Confirm Password</label><div className="auth-input-wrapper"><Lock size={18} className="auth-input-icon"/><input type="password" value={cpw} onChange={e=>setCpw(e.target.value)} placeholder="Repeat password"/></div></div>
              <MathCaptcha onVerify={onCap}/>
              <button type="submit" className="btn btn-primary btn-lg auth-submit-btn" disabled={ld||!capOk}>{ld?<span className="auth-spinner"/>:<>Create Account <ArrowRight size={18}/></>}</button>
            </form>
            <div className="auth-form__footer"><p>Have an account? <Link to="/login" className="auth-link">Sign In</Link></p></div>
          </div>
        </motion.div>
      </div>
    </main>);
};
export default Signup;
