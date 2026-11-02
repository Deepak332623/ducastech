import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Users, Shield, RefreshCw } from 'lucide-react';
import { companyPrinciples } from '../data/content';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  defaultTransition,
  useScrollAnimation,
} from '../utils/animations';
import './About.css';

const principleIcons = [Lightbulb, Users, Shield, RefreshCw];

const About: React.FC = () => {
  const overviewAnim = useScrollAnimation();
  const visionAnim = useScrollAnimation();
  const principlesAnim = useScrollAnimation();
  const journeyAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90&auto=format"
            alt="Modern technology office with ambient blue lighting"
            loading="eager"
          />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="label" variants={fadeInUp} transition={defaultTransition}>
              About Us
            </motion.span>
            <motion.h1 variants={fadeInUp} transition={defaultTransition}>
              Innovating the Way People Connect With{' '}
              <span className="gradient-text-animated">Technology.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section about-overview">
        <div className="container">
          <motion.div
            ref={overviewAnim.ref}
            className="about-overview__grid"
            initial="hidden"
            animate={overviewAnim.controls}
          >
            <motion.div
              className="about-overview__content"
              variants={fadeInLeft}
              transition={defaultTransition}
            >
              <span className="label">Who We Are</span>
              <h2>Our Story</h2>
              <p>
                Duchas Technologies Pvt Ltd (CIN: U62013GJ2023PTC140824), incorporated on May 04, 2023 
                in Vadodara, Gujarat, is an AI-first technology company focused on building next-generation 
                AI-powered biometric authentication, intelligent fraud detection, identity verification, 
                and contactless digital experiences. Founded by Jay Chintan Patel, we bridge the gap 
                between advanced artificial intelligence and practical real-world security applications.
              </p>
              <p>
                As an <strong>AWS Activate member</strong>, our platform is built on AWS cloud infrastructure 
                — leveraging Amazon's enterprise-grade compute, storage, SageMaker AI/ML, and Rekognition services 
                to deliver scalable, secure, and globally available AI-driven biometric solutions. As a proud 
                member of the <strong>NVIDIA Inception Program</strong>, we harness NVIDIA GPU-accelerated computing, 
                CUDA cores, TensorRT, and deep learning frameworks for real-time liveness detection, 
                AI-powered fraud prevention, and intelligent threat analytics.
              </p>
            </motion.div>
            <motion.div
              className="about-overview__image"
              variants={fadeInRight}
              transition={defaultTransition}
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=90&auto=format"
                alt="Biometric technology sensor"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section about-vm">
        <div className="about-vm__bg" />
        <div className="container">
          <motion.div
            ref={visionAnim.ref}
            className="about-vm__grid"
            initial="hidden"
            animate={visionAnim.controls}
            variants={staggerContainer}
          >
            <motion.div className="about-vm__card glass-card" variants={scaleIn} transition={defaultTransition}>
              <span className="label">Our Vision</span>
              <h3>Where We're Heading</h3>
              <p>
                To help shape a future where digital interactions are more seamless,
                intuitive, and accessible through thoughtful technological innovation.
              </p>
            </motion.div>
            <motion.div className="about-vm__card glass-card" variants={scaleIn} transition={defaultTransition}>
              <span className="label">Our Mission</span>
              <h3>What Drives Us</h3>
              <p>
                To explore and develop practical technology solutions that simplify
                identity-related interactions, address real-world challenges, and
                create meaningful value for businesses and the people they serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach / Principles */}
      <section className="section about-principles">
        <div className="container">
          <div className="section-header">
            <span className="label">Our Approach</span>
            <h2>Guided by Purpose</h2>
            <p>The principles that shape how we develop and deliver technology.</p>
          </div>
          <motion.div
            ref={principlesAnim.ref}
            className="about-principles__grid"
            initial="hidden"
            animate={principlesAnim.controls}
            variants={staggerContainer}
          >
            {companyPrinciples.map((principle, index) => {
              const Icon = principleIcons[index];
              return (
                <motion.div
                  key={principle.title}
                  className="about-principle-card glass-card"
                  variants={scaleIn}
                  transition={defaultTransition}
                >
                  <div className="about-principle-card__icon">
                    <Icon size={24} />
                  </div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="section about-journey">
        <div className="about-journey__bg" />
        <div className="container">
          <motion.div
            ref={journeyAnim.ref}
            className="about-journey__inner"
            initial="hidden"
            animate={journeyAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <div className="section-header" style={{ marginBottom: 'var(--space-2xl)' }}>
              <span className="label">Our Journey</span>
              <h2>Our Journey Continues</h2>
            </div>

            <div className="about-journey__content glass-card">
              <p>
                Duchas Technologies is on a continuous journey of innovation and growth.
                As we develop our products, expand our team, and serve new industries,
                this section will be updated with verified milestones, product launches,
                partnerships, and achievements.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                Verified founding dates, milestones, awards, product launches, and company
                history will be added once confirmed by the company. We do not invent or
                fabricate company history.
              </p>
              <div className="about-journey__placeholder">
                <div className="about-journey__milestone">
                  <div className="about-journey__dot" />
                  <div>
                    <h5>Company Incorporated</h5>
                    <p>May 04, 2023 — Duchas Technologies Pvt Ltd registered in Vadodara, Gujarat (CIN: U62013GJ2023PTC140824)</p>
                  </div>
                </div>
                <div className="about-journey__milestone">
                  <div className="about-journey__dot" />
                  <div>
                    <h5>Platform Development on AWS</h5>
                    <p>Building cloud-native biometric authentication platform on Amazon Web Services infrastructure</p>
                  </div>
                </div>
                <div className="about-journey__milestone">
                  <div className="about-journey__dot about-journey__dot--active" />
                  <div>
                    <h5>Present — Scaling & Innovation</h5>
                    <p>Expanding product suite, exploring NVIDIA AI integration, and onboarding enterprise customers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section about-team">
        <div className="container">
          <div className="section-header">
            <span className="label">Leadership</span>
            <h2>The Visionaries Behind Duchas Technologies</h2>
          </div>
          <div className="about-team__grid">
            <div className="about-team__card glass-card">
              <div className="about-team__avatar">JP</div>
              <h3>Jay Chintan Patel</h3>
              <p className="about-team__role">Founder & Director</p>
              <p className="about-team__bio">
                A visionary technologist and entrepreneur, Jay Chintan Patel founded Duchas Technologies 
                with a bold mission: to make biometric identity verification seamless, secure, and 
                universally accessible. His deep expertise in cloud architecture, AI/ML systems, and 
                enterprise software drives the company's innovation roadmap and strategic direction.
              </p>
            </div>
            <div className="about-team__card glass-card">
              <div className="about-team__avatar">HP</div>
              <h3>Hemaben Chintankumar Patel</h3>
              <p className="about-team__role">Director</p>
              <p className="about-team__bio">
                Hemaben Chintankumar Patel brings exceptional leadership in corporate governance, 
                financial strategy, and operational excellence. Her dedication to building a 
                sustainable, ethically-driven technology company ensures Duchas Technologies maintains 
                the highest standards of integrity, compliance, and stakeholder trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section about-tech">
        <div className="container">
          <div className="section-header">
            <span className="label">Technology Stack & Program Memberships</span>
            <h2>Powered by Industry Leaders — AI at the Core</h2>
            <p>We leverage world-class cloud and AI infrastructure, backed by official program memberships, to build our intelligent platform.</p>
          </div>
          <div className="about-tech__grid">
            <div className="about-tech__card glass-card">
              <div className="about-tech__badge">AWS Activate Member</div>
              <h3>☁️ Amazon Web Services</h3>
              <p>As an AWS Activate member, our entire AI-powered biometric platform runs on AWS infrastructure — EC2, S3, Lambda, SageMaker AI, Rekognition, and CloudFront — delivering enterprise-grade reliability, global scalability, and SOC 2 compliant security with built-in machine learning capabilities.</p>
            </div>
            <div className="about-tech__card glass-card">
              <div className="about-tech__badge about-tech__badge--future">NVIDIA Inception Member</div>
              <h3>🟢 NVIDIA AI Platform</h3>
              <p>As a member of the NVIDIA Inception Program, we leverage NVIDIA GPU-accelerated computing, CUDA cores, TensorRT, and Triton Inference Server for deep learning biometric models, real-time AI liveness detection, intelligent fraud prevention, and edge AI deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <motion.div
            ref={ctaAnim.ref}
            className="about-cta__inner"
            initial="hidden"
            animate={ctaAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <h2>Join Us in Exploring What's Possible.</h2>
            <p>
              Whether you're interested in our technology, a potential partner, or looking
              to join our team, we'd love to hear from you.
            </p>
            <div className="about-cta__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Our Team <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-secondary btn-lg">
                Explore Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
