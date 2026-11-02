import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/content';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  defaultTransition,
  useScrollAnimation,
} from '../utils/animations';
import './Products.css';

const Products: React.FC = () => {
  const gridAnim = useScrollAnimation();
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
              Our Solutions
            </motion.span>
            <motion.h1 variants={fadeInUp} transition={defaultTransition}>
              Explore Our <span className="gradient-text-animated">Technology.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} transition={defaultTransition}>
              Discover solutions designed to support secure, intuitive, and connected
              experiences. Each product represents our commitment to practical innovation
              in biometric and contactless technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            ref={gridAnim.ref}
            className="products-grid"
            initial="hidden"
            animate={gridAnim.controls}
            variants={staggerContainer}
          >
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div key={product.id} variants={scaleIn} transition={defaultTransition}>
                  <Link to={`/products/${product.slug}`} className="product-card glass-card">
                    <div className="product-card__image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__image"
                        loading="lazy"
                      />
                      <div className="product-card__image-overlay" />
                      <div className="product-card__badge">
                        <Icon size={18} />
                      </div>
                    </div>
                    <div className="product-card__body">
                      <h3>{product.name}</h3>
                      <p className="product-card__tagline">{product.tagline}</p>
                      <p className="product-card__desc">{product.description.substring(0, 150)}...</p>
                      <div className="product-card__features">
                        {product.features.slice(0, 3).map((f) => (
                          <span key={f.title} className="product-card__feature-tag">
                            {f.title}
                          </span>
                        ))}
                      </div>
                      <span className="product-card__link">
                        View Solution Details <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            ref={ctaAnim.ref}
            className="products-cta glass-card"
            initial="hidden"
            animate={ctaAnim.controls}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <h2>Need a Custom Solution?</h2>
            <p>
              Our technology can be adapted to meet specific industry requirements and
              unique business challenges. Let's discuss your needs.
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

export default Products;
