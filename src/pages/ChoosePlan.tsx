import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, Crown, Zap, Rocket, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fadeInUp, scaleIn, staggerContainer, defaultTransition } from '../utils/animations';
import './ChoosePlan.css';

const plans = [
  { id: 'starter' as const, name: 'Starter', price: '$49', period: '/mo', desc: 'Perfect for small teams exploring biometric authentication.', icon: Zap, popular: false, color: '#b8860b',
    features: [
      { t: 'Up to 500 authentications/mo', ok: true }, { t: 'Single biometric modality', ok: true },
      { t: 'Basic API access', ok: true }, { t: 'Email support', ok: true }, { t: 'Standard dashboard', ok: true },
      { t: 'Multi-modal biometrics', ok: false }, { t: 'Custom integration', ok: false },
      { t: 'Dedicated account manager', ok: false }, { t: 'SLA guarantee', ok: false }, { t: 'On-premises deploy', ok: false },
    ], support: 'Community + Email', response: '48 hours', dedication: 'Shared support team' },
  { id: 'premium' as const, name: 'Premium', price: '$199', period: '/mo', desc: 'For growing businesses needing advanced biometric features.', icon: Crown, popular: true, color: '#b8860b',
    features: [
      { t: 'Up to 10,000 auth/mo', ok: true }, { t: 'Multi-modal biometrics', ok: true },
      { t: 'Full API + SDK access', ok: true }, { t: 'Priority email & chat', ok: true },
      { t: 'Advanced analytics', ok: true }, { t: 'Custom integration', ok: true }, { t: 'Webhooks', ok: true },
      { t: 'Dedicated account manager', ok: false }, { t: 'SLA guarantee (99.9%)', ok: false }, { t: 'On-premises deploy', ok: false },
    ], support: 'Priority Email + Chat', response: '4 hours', dedication: 'Priority support queue' },
  { id: 'pro' as const, name: 'Pro', price: '$599', period: '/mo', desc: 'Enterprise-grade with dedicated support & full access.', icon: Rocket, popular: false, color: '#6b4c8a',
    features: [
      { t: 'Unlimited authentications', ok: true }, { t: 'All biometric modalities', ok: true },
      { t: 'Full API+SDK+Whitelabel', ok: true }, { t: '24/7 phone+chat+email', ok: true },
      { t: 'Enterprise analytics+BI', ok: true }, { t: 'Custom integration', ok: true },
      { t: 'Webhook+event streaming', ok: true }, { t: 'Dedicated account manager', ok: true },
      { t: 'SLA guarantee (99.99%)', ok: true }, { t: 'On-premises deploy', ok: true },
    ], support: '24/7 Phone+Chat+Email', response: '30 minutes', dedication: 'Dedicated account manager' },
];

const ChoosePlan: React.FC = () => {
  const { isAuthenticated, plan, selectPlan } = useAuth();
  const navigate = useNavigate();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (plan?.meetingBooked) return <Navigate to="/dashboard" replace />;
  const handleSelect = (p: typeof plans[0]) => { selectPlan(p.id, p.name); navigate('/book-meeting'); };

  return (
    <main className="plans-page">
      <div className="plans-page__bg"><div className="plans-page__gradient" /><div className="plans-page__orb plans-page__orb--1" /><div className="plans-page__orb plans-page__orb--2" /></div>
      <div className="container plans-page__container">
        <motion.div className="plans-page__header" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span className="label" variants={fadeInUp} transition={defaultTransition}>Choose Your Plan</motion.span>
          <motion.h1 variants={fadeInUp} transition={defaultTransition}>Select the Perfect <span className="gradient-text">Plan for You</span></motion.h1>
          <motion.p variants={fadeInUp} transition={defaultTransition}>Every plan includes a consultation meeting to activate your account.</motion.p>
        </motion.div>
        <motion.div className="plans-grid" initial="hidden" animate="visible" variants={staggerContainer}>
          {plans.map((p) => { const Icon = p.icon; return (
            <motion.div key={p.id} className={`plan-card glass-card ${p.popular ? 'plan-card--popular' : ''}`} variants={scaleIn} transition={defaultTransition}>
              {p.popular && <div className="plan-card__badge">Most Popular</div>}
              <div className="plan-card__icon" style={{ background: `${p.color}15`, borderColor: `${p.color}30` }}><Icon size={28} style={{ color: p.color }} /></div>
              <h3>{p.name}</h3>
              <div className="plan-card__price"><span className="plan-card__amount">{p.price}</span><span className="plan-card__period">{p.period}</span></div>
              <p className="plan-card__desc">{p.desc}</p><div className="plan-card__divider" />
              <div className="plan-card__section-title">Features</div>
              <ul className="plan-card__features">{p.features.map((f, i) => (<li key={i} className={f.ok?'included':'excluded'}>{f.ok?<Check size={16}/>:<X size={16}/>}<span>{f.t}</span></li>))}</ul>
              <div className="plan-card__divider" /><div className="plan-card__section-title">Support & Dedication</div>
              <div className="plan-card__meta"><strong>Channel:</strong> {p.support}</div>
              <div className="plan-card__meta"><strong>Response:</strong> {p.response}</div>
              <div className="plan-card__meta"><strong>Dedication:</strong> {p.dedication}</div>
              <button className={`btn ${p.popular?'btn-primary':'btn-secondary'} btn-lg plan-card__btn`} onClick={()=>handleSelect(p)}>Book Meeting <ArrowRight size={18}/></button>
            </motion.div>); })}
        </motion.div>
      </div>
    </main>);
};
export default ChoosePlan;
