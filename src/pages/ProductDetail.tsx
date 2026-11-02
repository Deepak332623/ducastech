import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/content';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  defaultTransition,
  useScrollAnimation,
} from '../utils/animations';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id, slug } = useParams<{ id?: string; slug?: string }>();
  const identifier = slug || id;
  const product = products.find((p) => p.slug === identifier || p.id === identifier);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuresAnim = useScrollAnimation();
  const workflowAnim = useScrollAnimation();
  const useCasesAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = product.icon;

  return (
    <main>
      {/* Product Hero */}
      <section className="pd-hero">
        <div className="pd-hero__bg" />
        <div className="container pd-hero__container">
          <motion.div
            className="pd-hero__content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="pd-hero__badge" variants={fadeInUp} transition={defaultTransition}>
              <Icon size={18} style={{ color: product.color }} />
              <span>Solution</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} transition={defaultTransition}>
              {product.name}
            </motion.h1>
            <motion.p className="pd-hero__tagline" variants={fadeInUp} transition={defaultTransition}>
              {product.tagline}
            </motion.p>
            <motion.div className="pd-hero__actions" variants={fadeInUp} transition={defaultTransition}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Enquire About This Solution <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                How It Works
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="pd-hero__visual"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="pd-hero__image-wrapper">
              <img src={product.image} alt={product.name} loading="eager" />
              <div className="pd-hero__image-glow" style={{ background: `radial-gradient(ellipse at center, ${product.color}15 0%, transparent 60%)` }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section pd-overview">
        <div className="container">
          <div className="pd-overview__content">
            <span className="label">Overview</span>
            <h2>About This Solution</h2>
            <p>{product.description}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
              Note: Product capabilities described here are subject to company confirmation.
              Specific technical specifications, performance metrics, and compliance details
              should be verified before publication.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pd-features">
        <div className="pd-features__bg" />
        <div className="container">
          <div className="section-header">
            <span className="label">Features</span>
            <h2>Key Capabilities</h2>
            <p>Explore the designed capabilities of our {product.name.toLowerCase()} solution.</p>
          </div>
          <motion.div
            ref={featuresAnim.ref}
            className="pd-features__grid"
            initial="hidden"
            animate={featuresAnim.controls}
            variants={staggerContainer}
          >
            {product.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="pd-feature-card glass-card"
                  variants={scaleIn}
                  transition={defaultTransition}
                >
                  <div className="pd-feature-card__icon" style={{ color: product.color }}>
                    <FeatureIcon size={22} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section pd-workflow">
        <div className="container">
          <div className="section-header">
            <span className="label">Workflow</span>
            <h2>How It Works</h2>
            <p>A conceptual overview of the {product.name.toLowerCase()} process flow.</p>
          </div>
          <motion.div
            ref={workflowAnim.ref}
            className="pd-workflow__steps"
            initial="hidden"
            animate={workflowAnim.controls}
            variants={staggerContainer}
          >
            {product.workflow.map((step, index) => (
              <motion.div
                key={step.step}
                className="pd-workflow-step"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <div className="pd-workflow-step__marker">
                  <span style={{ color: product.color }}>{String(step.step).padStart(2, '0')}</span>
                  {index < product.workflow.length - 1 && <div className="pd-workflow-step__line" />}
                </div>
                <div className="pd-workflow-step__content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section pd-usecases">
        <div className="pd-usecases__bg" />
        <div className="container">
          <div className="section-header">
            <span className="label">Potential Use Cases</span>
            <h2>Industry Applications</h2>
            <p>
              Explore potential industry applications for {product.name.toLowerCase()}.
              These represent possible deployment scenarios, not confirmed implementations.
            </p>
          </div>
          <motion.div
            ref={useCasesAnim.ref}
            className="pd-usecases__grid"
            initial="hidden"
            animate={useCasesAnim.controls}
            variants={staggerContainer}
          >
            {product.useCases.map((useCase) => {
              const UCIcon = useCase.icon;
              return (
                <motion.div
                  key={useCase.industry}
                  className="pd-usecase-card glass-card"
                  variants={scaleIn}
                  transition={defaultTransition}
                >
                  <div className="pd-usecase-card__icon">
                    <UCIcon size={24} />
                  </div>
                  <h4>{useCase.industry}</h4>
                  <p>{useCase.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="section pd-privacy">
        <div className="container">
          <motion.div
            className="pd-privacy__inner glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <div className="pd-privacy__content">
              <span className="label">Privacy & Security</span>
              <h3>Designed With Privacy in Mind</h3>
              <p>
                Duchas Technologies is committed to responsible biometric data handling. Our
                solutions are designed with privacy considerations at their core, including
                secure data processing and storage practices.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                Specific security certifications, encryption standards, compliance frameworks,
                and data storage policies will be documented once verified by the company.
                Do not assume regulatory compliance without official confirmation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pd-faq">
        <div className="container">
          <div className="section-header">
            <span className="label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <motion.div
            ref={faqAnim.ref}
            className="pd-faq__list"
            initial="hidden"
            animate={faqAnim.controls}
            variants={staggerContainer}
          >
            {product.faq.map((item, index) => (
              <motion.div
                key={index}
                className={`pd-faq-item glass-card ${openFaq === index ? 'pd-faq-item--open' : ''}`}
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <button
                  className="pd-faq-item__question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{item.question}</span>
                  {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      className="pd-faq-item__answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pd-cta">
        <div className="container">
          <motion.div
            ref={ctaAnim.ref}
            className="pd-cta__inner"
            initial="hidden"
            animate={ctaAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <h2>Discuss Your Requirements With Our Team.</h2>
            <p>
              Ready to explore how {product.name.toLowerCase()} can support your business?
              Get in touch with our team.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
