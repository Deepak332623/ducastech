import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scan, Cpu, ShieldCheck, CheckCircle2, Fingerprint, Lock, Eye } from 'lucide-react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  defaultTransition,
  useScrollAnimation,
} from '../utils/animations';
import './HowItWorks.css';

const stages = [
  {
    step: 1,
    title: 'Capture',
    subtitle: 'Biometric Data Acquisition',
    description:
      'The process begins with a biometric sensor capturing the user\'s unique identifier. This could involve palm vein scanning, fingerprint recognition, or other biometric modalities. The capture is designed to be quick, non-intrusive, and reliable across diverse conditions.',
    icon: Scan,
    detail: 'The sensor device interacts with the user in a natural, intuitive way — requiring minimal instruction and creating a seamless experience.',
  },
  {
    step: 2,
    title: 'Process',
    subtitle: 'Secure Feature Extraction',
    description:
      'Once captured, the biometric data undergoes secure processing. Advanced algorithms extract unique identifying features from the raw data, creating a mathematical template that represents the individual\'s biometric identity.',
    icon: Cpu,
    detail: 'Note: The specific technical architecture, processing methods, and security protocols should be confirmed with Duchas Technologies before making detailed public claims.',
  },
  {
    step: 3,
    title: 'Verify',
    subtitle: 'Identity Confirmation',
    description:
      'The extracted biometric template is compared against enrolled records using advanced matching algorithms. The system evaluates the match quality and returns a verification decision with a confidence score.',
    icon: ShieldCheck,
    detail: 'The verification process is designed to balance security with user convenience, minimizing false rejections while maintaining robust protection against unauthorized access.',
  },
  {
    step: 4,
    title: 'Complete the Interaction',
    subtitle: 'Authorized Action',
    description:
      'Upon successful verification, the authorized action is completed. This could be a payment transaction, physical access grant, identity confirmation, digital system login, or any other interaction that requires verified identity.',
    icon: CheckCircle2,
    detail: 'The entire process is designed to feel natural and immediate, making the technology invisible to the user while maintaining the highest standards of security.',
  },
];

const useCasesPreview = [
  {
    title: 'Biometric Payments',
    description: 'Authorize transactions with verified biometric identity.',
    icon: Fingerprint,
  },
  {
    title: 'Physical Access',
    description: 'Grant entry to secured spaces through identity verification.',
    icon: Lock,
  },
  {
    title: 'Digital Identity',
    description: 'Confirm identity for digital services and platforms.',
    icon: Eye,
  },
];

const HowItWorks: React.FC = () => {
  const stagesAnim = useScrollAnimation();
  const useCasesAnim = useScrollAnimation();
  const privacyAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="label" variants={fadeInUp} transition={defaultTransition}>
              How It Works
            </motion.span>
            <motion.h1 variants={fadeInUp} transition={defaultTransition}>
              From Recognition to <span className="gradient-text">Action.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} transition={defaultTransition}>
              Explore how a thoughtfully designed identity workflow can connect people,
              verification, and digital interactions. This is a conceptual overview —
              specific implementations are adapted to each product and deployment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stages */}
      <section className="section hiw-stages">
        <div className="container">
          <motion.div
            ref={stagesAnim.ref}
            className="hiw-stages__list"
            initial="hidden"
            animate={stagesAnim.controls}
            variants={staggerContainer}
          >
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={stage.step}
                  className="hiw-stage"
                  variants={isEven ? fadeInLeft : fadeInRight}
                  transition={defaultTransition}
                >
                  <div className={`hiw-stage__inner ${isEven ? '' : 'hiw-stage__inner--reverse'}`}>
                    <div className="hiw-stage__visual">
                      <div className="hiw-stage__circle">
                        <div className="hiw-stage__step-number">
                          {String(stage.step).padStart(2, '0')}
                        </div>
                        <Icon size={32} className="hiw-stage__icon" />
                      </div>
                      {index < stages.length - 1 && (
                        <div className="hiw-stage__connector" />
                      )}
                    </div>
                    <div className="hiw-stage__content glass-card">
                      <span className="hiw-stage__label">Stage {String(stage.step).padStart(2, '0')}</span>
                      <h3>{stage.title}</h3>
                      <h5 className="hiw-stage__subtitle">{stage.subtitle}</h5>
                      <p>{stage.description}</p>
                      <p className="hiw-stage__detail">{stage.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="section hiw-usecases">
        <div className="hiw-usecases__bg" />
        <div className="container">
          <div className="section-header">
            <span className="label">Applications</span>
            <h2>Where This Workflow Applies</h2>
            <p>The identity workflow can be adapted to support various interaction types.</p>
          </div>
          <motion.div
            ref={useCasesAnim.ref}
            className="hiw-usecases__grid"
            initial="hidden"
            animate={useCasesAnim.controls}
            variants={staggerContainer}
          >
            {useCasesPreview.map((uc) => {
              const UCIcon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  className="hiw-usecase-card glass-card"
                  variants={scaleIn}
                  transition={defaultTransition}
                >
                  <div className="hiw-usecase-card__icon">
                    <UCIcon size={28} />
                  </div>
                  <h4>{uc.title}</h4>
                  <p>{uc.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Privacy by Design */}
      <section className="section hiw-privacy">
        <div className="container">
          <motion.div
            ref={privacyAnim.ref}
            className="hiw-privacy__inner glass-card"
            initial="hidden"
            animate={privacyAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <span className="label">Privacy by Design</span>
            <h3>Security and Privacy at Every Stage</h3>
            <p>
              Every stage of the workflow is designed with privacy and security as foundational
              principles. From secure data capture to encrypted processing and verified
              interactions, the system aims to protect user identity and personal data throughout
              the entire process.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
              Specific security measures, encryption standards, and privacy protocols should be
              confirmed with Duchas Technologies before publication. This section represents
              design intent, not verified implementation details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section hiw-cta">
        <div className="container">
          <motion.div
            ref={ctaAnim.ref}
            className="hiw-cta__inner"
            initial="hidden"
            animate={ctaAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <h2>Ready to See Our Solutions in Action?</h2>
            <p>
              Explore our product range or get in touch with our team to discuss how our
              technology can address your specific requirements.
            </p>
            <div className="hiw-cta__actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
