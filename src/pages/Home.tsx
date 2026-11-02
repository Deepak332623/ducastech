import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Cloud, Cpu, Fingerprint, Server, Globe, ArrowDown } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { products, capabilities, processSteps } from '../data/content';
import { fadeInUp, scaleIn, staggerContainer, defaultTransition, useScrollAnimation } from '../utils/animations';
import './Home.css';

const stats = [
  { value: '99.97%', label: 'Uptime SLA', icon: Server },
  { value: '<200ms', label: 'Auth Speed', icon: Zap },
  { value: '10M+', label: 'Capacity', icon: Globe },
  { value: 'SOC 2', label: 'Compliant', icon: Shield },
];

const techStack = [
  { phase: 'Capture', desc: 'Biometric sensor captures identity', icon: Fingerprint, color: '#b8860b' },
  { phase: 'AWS Process', desc: 'Lambda + SageMaker ML pipeline', icon: Cloud, color: '#FF9900' },
  { phase: 'NVIDIA Verify', desc: 'GPU-accelerated liveness detection', icon: Cpu, color: '#76B900' },
  { phase: 'Authorize', desc: 'Secure token via API Gateway', icon: Shield, color: '#b8860b' },
];

const Home: React.FC = () => {
  const capsAnim = useScrollAnimation();
  const solAnim = useScrollAnimation();
  const procAnim = useScrollAnimation();
  const techAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg"><div className="hero__gradient" /><div className="hero__grid-pattern" />
          {Array.from({length:20}).map((_,i)=>(<div key={i} className="hero__particle" style={{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`}} />))}
          <div className="hero__glow hero__glow--1" /><div className="hero__glow hero__glow--2" />
        </div>
        <div className="container hero__container">
          <motion.div className="hero__content" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div className="hero__badge" variants={fadeInUp} transition={defaultTransition}><span className="hero__badge-dot" /> Powered by AWS · Biometric Identity Platform</motion.div>
            <motion.h1 variants={fadeInUp} transition={defaultTransition}>The Future of<br /><span className="gradient-text-animated">Digital Identity</span><br />Starts Here.</motion.h1>
            <motion.p className="hero__desc" variants={fadeInUp} transition={defaultTransition}>Enterprise-grade biometric authentication, contactless payments & identity verification — built on AWS with AI-powered precision.</motion.p>
            <motion.div className="hero__actions" variants={fadeInUp} transition={defaultTransition}>
              <Link to="/products" className="btn btn-primary btn-lg">Explore Solutions <ArrowRight size={18} /></Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">See How It Works</Link>
            </motion.div>
            <motion.div className="hero__trust" variants={fadeInUp} transition={defaultTransition}><span>☁️ AWS Cloud</span><span>🟢 NVIDIA AI Ready</span><span>🇮🇳 Made in India</span></motion.div>
          </motion.div>
          <motion.div className="hero__visual" style={{y:heroY}} initial={{opacity:0,scale:0.88}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:0.3}}>
            <div className="hero__image-wrapper">
              <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1600&q=95&auto=format" alt="Human fingerprint biometric scan" className="hero__image" loading="eager" />
              <div className="hero__image-glow" /><div className="hero__image-border" />
            </div>
            <motion.div className="hero__float hero__float--1" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:0.8}}><div className="hero__float-card glass-card"><Zap size={18} style={{color:'#b8860b'}} /><div><strong>&lt;200ms</strong><span>Auth Speed</span></div></div></motion.div>
            <motion.div className="hero__float hero__float--2" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:1}}><div className="hero__float-card glass-card"><Shield size={18} style={{color:'#059669'}} /><div><strong>99.97%</strong><span>Accuracy</span></div></div></motion.div>
          </motion.div>
        </div>
        <motion.div className="hero__scroll-hint" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}><ArrowDown size={18} className="hero__scroll-arrow" /><span>Scroll to explore</span></motion.div>
      </section>

      {/* STATS */}
      <section className="stats-bar"><div className="container">
        <motion.div className="stats-bar__grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} variants={staggerContainer}>
          {stats.map(s=>{const I=s.icon;return(<motion.div key={s.label} className="stats-bar__item" variants={scaleIn} transition={defaultTransition}><I size={22} className="stats-bar__icon" /><div><span className="stats-bar__value">{s.value}</span><span className="stats-bar__label">{s.label}</span></div></motion.div>);})}
        </motion.div>
      </div></section>

      {/* CAPABILITIES */}
      <section className="section capabilities"><div className="container">
        <SectionHeader label="Core Capabilities" title="Why Enterprises Choose Duchas" description="Four pillars powering our biometric identity platform." />
        <motion.div ref={capsAnim.ref} className="capabilities__grid" initial="hidden" animate={capsAnim.controls} variants={staggerContainer}>
          {capabilities.map(c=>{const I=c.icon;return(<motion.div key={c.title} className="capabilities__item glass-card" variants={scaleIn} transition={defaultTransition}><div className="capabilities__icon"><I size={28}/></div><h3>{c.title}</h3><p>{c.description}</p></motion.div>);})}
        </motion.div>
      </div></section>

      {/* SOLUTIONS */}
      <section className="section solutions"><div className="container">
        <SectionHeader label="Our Solutions" title="Biometric Products for Every Enterprise Need" />
        <motion.div ref={solAnim.ref} className="solutions__grid" initial="hidden" animate={solAnim.controls} variants={staggerContainer}>
          {products.map(p=>{const I=p.icon;return(<motion.div key={p.id} variants={scaleIn} transition={defaultTransition}><Link to={`/products/${p.slug}`} className="solution-card glass-card">
            <div className="solution-card__img"><img src={p.image} alt={p.name} loading="lazy" /><div className="solution-card__overlay" /></div>
            <div className="solution-card__body"><div className="solution-card__icon" style={{background:`${p.color}12`,borderColor:`${p.color}25`}}><I size={22} style={{color:p.color}} /></div><h3>{p.name}</h3><p>{p.tagline}</p><span className="solution-card__link">Learn More <ArrowRight size={14}/></span></div>
          </Link></motion.div>);})}
        </motion.div>
      </div></section>

      {/* AWS + NVIDIA TECH WORKFLOW */}
      <section className="section tech-workflow">
        <div className="tech-workflow__bg" />
        <div className="container">
          <SectionHeader label="Technology Architecture" title="Cloud-Native Biometric Pipeline" description="From fingerprint capture to secure authorization — powered by AWS and NVIDIA AI." />
          <motion.div ref={techAnim.ref} className="tech-workflow__map" initial="hidden" animate={techAnim.controls} variants={staggerContainer}>
            {techStack.map((t,i)=>{const I=t.icon;return(<React.Fragment key={t.phase}>
              <motion.div className="tech-node" variants={scaleIn} transition={{...defaultTransition,delay:i*0.15}}>
                <div className="tech-node__ring" style={{borderColor:t.color,boxShadow:`0 0 20px ${t.color}20`}}>
                  <div className="tech-node__inner" style={{background:`${t.color}12`}}><I size={28} style={{color:t.color}} /></div>
                </div>
                <div className="tech-node__label"><strong>{t.phase}</strong><span>{t.desc}</span></div>
                <div className="tech-node__tag" style={{color:t.color,borderColor:`${t.color}30`,background:`${t.color}08`}}>{i===1?'AWS':i===2?'NVIDIA':'Duchas'}</div>
              </motion.div>
              {i<techStack.length-1 && <motion.div className="tech-connector" variants={fadeInUp} transition={{...defaultTransition,delay:i*0.15+0.1}}><div className="tech-connector__line" /><div className="tech-connector__arrow">→</div></motion.div>}
            </React.Fragment>);})}
          </motion.div>
          <motion.div className="tech-workflow__badges" initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}>
            <motion.div className="tech-badge glass-card" variants={scaleIn} transition={defaultTransition}><span className="tech-badge__icon">☁️</span><div><strong>Amazon Web Services</strong><span>EC2 · S3 · Lambda · SageMaker · CloudFront · API Gateway</span></div></motion.div>
            <motion.div className="tech-badge glass-card" variants={scaleIn} transition={defaultTransition}><span className="tech-badge__icon">🟢</span><div><strong>NVIDIA AI Platform</strong><span>CUDA · TensorRT · Triton Inference · DeepStream (Future)</span></div></motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-preview"><div className="container">
        <SectionHeader label="How It Works" title="Four Steps to Verified Identity" description="A seamless journey from biometric capture to authorized interaction." />
        <motion.div ref={procAnim.ref} className="process-preview__steps" initial="hidden" animate={procAnim.controls} variants={staggerContainer}>
          {processSteps.map(s=>(<motion.div key={s.step} className="process-step glass-card" variants={fadeInUp} transition={defaultTransition}>
            <div className="process-step__num">{String(s.step).padStart(2,'0')}</div><h3>{s.title}</h3><p>{s.description}</p>
          </motion.div>))}
        </motion.div>
        <div style={{textAlign:'center',marginTop:'var(--space-xl)'}}><Link to="/how-it-works" className="btn btn-secondary">Full Workflow Details <ArrowRight size={16}/></Link></div>
      </div></section>

      {/* CTA */}
      <section className="section final-cta"><div className="final-cta__bg" /><div className="container">
        <motion.div ref={ctaAnim.ref} className="final-cta__inner" initial="hidden" animate={ctaAnim.controls} variants={fadeInUp} transition={defaultTransition}>
          <h2>Ready to Build the Future of Digital Identity?</h2>
          <p>Connect with Duchas Technologies — enterprise biometric solutions built on AWS.</p>
          <div className="final-cta__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us <ArrowRight size={18}/></Link>
            <Link to="/products" className="btn btn-secondary btn-lg">Explore Products</Link>
          </div>
        </motion.div>
      </div></section>
    </main>
  );
};
export default Home;
