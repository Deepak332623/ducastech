import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Shield,
  HelpCircle,
} from 'lucide-react';
import { products } from '../data/content';
import {
  fadeInLeft,
  fadeInRight,
  defaultTransition,
  useScrollAnimation,
} from '../utils/animations';
import './Contact.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  productInterest: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.message.trim()) errors.message = 'Please provide a message or inquiry details';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            <span className="label">Get in Touch</span>
            <h1>
              Let's Connect and Explore <br />
              <span className="gradient-text-animated">Possibilities Together.</span>
            </h1>
            <p className="contact-hero__subtitle">
              Have questions about our biometric identity platform, contactless payments, or custom
              enterprise integrations? Our engineering and advisory teams are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Form */}
            <motion.div
              ref={formAnim.ref}
              className="contact-form-container glass-card"
              initial="hidden"
              animate={formAnim.controls}
              variants={fadeInLeft}
              transition={defaultTransition}
            >
              {isSubmitted ? (
                <div className="contact-success" role="status" aria-live="polite">
                  <div className="contact-success__icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Received</h3>
                  <p>
                    Thank you for reaching out to Duchas Technologies. Our enterprise solutions team
                    will review your inquiry and connect with you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__header">
                    <h2>Send Us an Inquiry</h2>
                    <p>Complete the form below and an enterprise specialist will follow up.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={formErrors.fullName ? 'has-error' : ''}
                      />
                      {formErrors.fullName && (
                        <span className="error-message">{formErrors.fullName}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Work Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'has-error' : ''}
                      />
                      {formErrors.email && (
                        <span className="error-message">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">
                        Organization / Company <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={handleChange}
                        className={formErrors.company ? 'has-error' : ''}
                      />
                      {formErrors.company && (
                        <span className="error-message">{formErrors.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productInterest">Solution of Primary Interest</label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select a solution (Optional)</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                      <option value="custom">Custom Enterprise R&D / Partnership</option>
                      <option value="general">General Inquiries / Media</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Project Details or Inquiry <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your use case, estimated volume, deployment timeline, or integration requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'has-error' : ''}
                    />
                    {formErrors.message && (
                      <span className="error-message">{formErrors.message}</span>
                    )}
                  </div>

                  <div className="form-privacy-note">
                    <Shield size={16} />
                    <span>
                      We respect your privacy. Inquiries are subject to our strict enterprise confidentiality
                      protocols and data protection guidelines.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="btn-spinner">Submitting...</span>
                    ) : (
                      <>
                        Submit Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Column: Company Info & Channels */}
            <motion.div
              ref={infoAnim.ref}
              className="contact-info-container"
              initial="hidden"
              animate={infoAnim.controls}
              variants={fadeInRight}
              transition={defaultTransition}
            >
              {/* Contact Details Card */}
              <div className="glass-card contact-channel-card">
                <h3>Direct Communications</h3>
                <p className="contact-channel-card__sub">
                  Reach out to the appropriate department directly for accelerated coordination.
                </p>

                <div className="contact-points">
                  <div className="contact-point">
                    <div className="contact-point__icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="contact-point__label">Email</span>
                      <a href="mailto:hello@duchastechnologies.com" className="contact-point__link">
                        hello@duchastechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-point">
                    <div className="contact-point__icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="contact-point__label">Registered Headquarters</span>
                      <span className="contact-point__text">
                        Duchas Technologies Pvt Ltd
                        <br />
                        201, Tower-A, Shashvat Fl, Motnath Mahadev Rd,
                        <br />
                        Harni Colony, Vadodara, Gujarat, India 390022
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="glass-card consultation-card">
                <div className="consultation-card__icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Schedule a Technology Briefing</h4>
                  <p>
                    Interested in an interactive demonstration or architecture discussion? Inquire
                    via the form to book a private technical walkthrough with our team.
                  </p>
                </div>
              </div>

              {/* FAQ Teaser Card */}
              <div className="glass-card contact-faq-card">
                <div className="contact-faq-card__header">
                  <HelpCircle size={20} />
                  <h4>Frequently Asked</h4>
                </div>
                <div className="contact-faq-item">
                  <strong>How quickly can pilots be established?</strong>
                  <p>
                    Initial sandbox access and developer SDK evaluations can typically be provisioned
                    within 48 hours following security clearance.
                  </p>
                </div>
                <div className="contact-faq-item">
                  <strong>Do you offer on-premises deployments?</strong>
                  <p>
                    Yes, our biometric processing and verification components support both private cloud
                    and air-gapped on-premises architectures.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
