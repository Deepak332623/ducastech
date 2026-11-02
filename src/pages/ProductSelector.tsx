import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/content';
import { fadeInUp, scaleIn, staggerContainer, defaultTransition } from '../utils/animations';
import './ProductSelector.css';

const ProductSelector: React.FC = () => {
  const { isAuthenticated, selectedProducts, setSelectedProducts, plan } = useAuth();
  const [sel, setSel] = useState<string[]>(selectedProducts || []);
  const nav = useNavigate();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (plan?.meetingBooked) return <Navigate to="/dashboard" replace />;

  const toggle = (id: string) => setSel(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const proceed = () => { setSelectedProducts(sel); nav('/choose-plan'); };

  return (
    <main className="prodsel-page">
      <div className="prodsel-page__bg"><div className="prodsel-page__gradient" /><div className="prodsel-page__orb prodsel-page__orb--1" /><div className="prodsel-page__orb prodsel-page__orb--2" /></div>
      <div className="container prodsel-page__container">
        <motion.div className="prodsel-header" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span className="label" variants={fadeInUp} transition={defaultTransition}>Step 1 of 3</motion.span>
          <motion.h1 variants={fadeInUp} transition={defaultTransition}>Which Products Do <span className="gradient-text-animated">You Need?</span></motion.h1>
          <motion.p variants={fadeInUp} transition={defaultTransition}>Select one or more solutions you're interested in. This helps us recommend the best plan for you.</motion.p>
        </motion.div>
        <motion.div className="prodsel-grid" initial="hidden" animate="visible" variants={staggerContainer}>
          {products.map(p => {
            const Icon = p.icon; const active = sel.includes(p.id);
            return (
              <motion.button key={p.id} type="button" className={`prodsel-card glass-card ${active ? 'prodsel-card--active' : ''}`} variants={scaleIn} transition={defaultTransition} onClick={() => toggle(p.id)}>
                {active && <div className="prodsel-card__check"><Check size={18} /></div>}
                <div className="prodsel-card__img"><img src={p.image} alt={p.name} loading="lazy" /><div className="prodsel-card__overlay" /></div>
                <div className="prodsel-card__icon" style={{ background: `${p.color}15`, borderColor: `${p.color}30` }}><Icon size={24} style={{ color: p.color }} /></div>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </motion.button>
            );
          })}
        </motion.div>
        <motion.div className="prodsel-footer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <p className="prodsel-count">{sel.length} product{sel.length !== 1 ? 's' : ''} selected</p>
          <button className="btn btn-primary btn-lg" disabled={sel.length === 0} onClick={proceed}>Continue to Plans <ArrowRight size={18} /></button>
        </motion.div>
      </div>
    </main>
  );
};
export default ProductSelector;
