import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Fingerprint, Shield, Zap, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { validateEmail } from '../utils/emailValidator';
import MathCaptcha from '../components/MathCaptcha';
import { fadeInUp, staggerContainer, defaultTransition } from '../utils/animations';
import './Auth.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaOk, setCaptchaOk] = useState(false);
  const [emailCheck, setEmailCheck] = useState<{quality:string;reason?:string}|null>(null);
  const { login } = useAuth();
  const nav = useNavigate();

  const handleEmailBlur = () => {
    if (!email.trim()) { setEmailCheck(null); return; }
    const r = validateEmail(email);
    setEmailCheck({ quality: r.quality, reason: r.reason });
  };

  const onCaptcha = useCallback((v: boolean) => setCaptchaOk(v), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (!email.trim()||!password.trim()) { setError('Please fill in all fields.'); return; }
    const ev = validateEmail(email);
    if (!ev.valid) { setError(ev.reason||'Invalid email.'); return; }
    if (!captchaOk) { setError('Please solve the security challenge.'); return; }
    setLoading(true);
    setTimeout(() => { const r = login(email,password); setLoading(false);
      if (r.success) nav('/select-products'); else setError(r.error||'Login failed.');
    }, 800);
  };

  return (
    <main className="auth-page">
      <div className="auth-page__bg"><div className="auth-page__gradient"/><div className="auth-page__grid-pattern"/><div className="auth-page__orb auth-page__orb--1"/><div className="auth-page__orb auth-page__orb--2"/><div className="auth-page__orb auth-page__orb--3"/></div>
      <div className="auth-page__container">
        <motion.div className="auth-page__branding" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div className="auth-brand__icon" variants={fadeInUp} transition={defaultTransition}><Fingerprint size={48}/></motion.div>
          <motion.h2 variants={fadeInUp} transition={defaultTransition}>Welcome Back to<br/><span className="gradient-text">Duchas Technologies</span></motion.h2>
          <motion.p variants={fadeInUp} transition={defaultTransition}>Access your dashboard and manage biometric identity solutions.</motion.p>
          <motion.div className="auth-brand__features" variants={fadeInUp} transition={defaultTransition}>
            <div className="auth-brand__feature"><Shield size={20}/><span>Enterprise-Grade Security</span></div>
            <div className="auth-brand__feature"><Zap size={20}/><span>Lightning Fast Auth</span></div>
            <div className="auth-brand__feature"><Fingerprint size={20}/><span>Biometric Platform</span></div>
          </motion.div>
        </motion.div>
        <motion.div className="auth-page__form-wrapper" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <div className="auth-form glass-card">
            <div className="auth-form__header"><h1>Sign In</h1><p>Enter your credentials to continue</p></div>
            {error && <motion.div className="auth-form__error" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}>{error}</motion.div>}
            <form onSubmit={handleSubmit} className="auth-form__body">
              <div className="auth-input-group">
                <label htmlFor="login-email">Email Address</label>
                <div className="auth-input-wrapper"><Mail size={18} className="auth-input-icon"/><input id="login-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} onBlur={handleEmailBlur} placeholder="you@company.com" autoComplete="email"/></div>
                {emailCheck && <div className={`email-status email-status--${emailCheck.quality}`}>{emailCheck.quality==='good'?<CheckCircle size={14}/>:emailCheck.quality==='suspicious'?<AlertTriangle size={14}/>:<XCircle size={14}/>}<span>{emailCheck.reason||'Email looks good'}</span></div>}
              </div>
              <div className="auth-input-group">
                <label htmlFor="login-pw">Password</label>
                <div className="auth-input-wrapper"><Lock size={18} className="auth-input-icon"/><input id="login-pw" type={showPw?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password"/><button type="button" className="auth-input-toggle" onClick={()=>setShowPw(!showPw)}>{showPw?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>
              </div>
              <MathCaptcha onVerify={onCaptcha}/>
              <button type="submit" className="btn btn-primary btn-lg auth-submit-btn" disabled={loading||!captchaOk}>{loading?<span className="auth-spinner"/>:<>Sign In <ArrowRight size={18}/></>}</button>
            </form>
            <div className="auth-form__footer"><p>Don't have an account? <Link to="/signup" className="auth-link">Create Account</Link></p></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
export default Login;
