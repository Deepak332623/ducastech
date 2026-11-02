import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { defaultTransition } from '../utils/animations';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            className="legal-hero__content"
          >
            <span className="label">Data Governance & Trust</span>
            <h1>Privacy Policy</h1>
            <p className="legal-hero__date">Last Updated: October 2026 · Version 1.0 (Draft)</p>
          </motion.div>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-layout">
          {/* Quick Summary Aside */}
          <aside className="legal-aside">
            <div className="glass-card legal-summary-card">
              <div className="legal-summary-card__header">
                <Shield size={20} />
                <h4>Privacy Highlights</h4>
              </div>
              <ul className="legal-summary-list">
                <li>
                  <CheckCircle size={16} />
                  <span>Biometric templates are irreversibly hashed and mathematically encrypted.</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>We never sell, rent, or commercialize individual identity records.</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>Strict multi-tier access controls and audit logging protocols.</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>Compliant with prevailing data protection frameworks and privacy standards.</span>
                </li>
              </ul>

              <div className="legal-note-box">
                <AlertCircle size={16} />
                <p>
                  This document serves as a draft corporate privacy framework and will be updated
                  following formal regulatory and legal council review.
                </p>
              </div>
            </div>
          </aside>

          {/* Document Body */}
          <article className="legal-body glass-card">
            <section className="legal-section">
              <h2>1. Introduction & Scope</h2>
              <p>
                Duchas Technologies Pvt Ltd (&ldquo;Duchas Technologies,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
                committed to respecting and safeguarding the personal information and biometric privacy of
                our clients, end users, and website visitors.
              </p>
              <p>
                This Privacy Policy explains how information is collected, processed, protected, and stored
                when utilizing our website, biometric recognition platforms, payment SDKs, and enterprise
                access control solutions.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Biometric Data Processing & Protection</h2>
              <p>
                Biometric data constitutes sensitive personal information. Duchas Technologies adheres to the
                highest standards of biometric architecture and data protection:
              </p>
              <ul>
                <li>
                  <strong>Template Mathematical Vectorization:</strong> Raw biometric captures (such as high-resolution
                  palm vein imagery or fingerprint scans) are immediately processed into irreversible, mathematical
                  vector templates at the sensor or local client edge.
                </li>
                <li>
                  <strong>Irreversibility:</strong> Biometric templates cannot be reverse-engineered or reconstructed into
                  the original physical biometric image or physiological likeness.
                </li>
                <li>
                  <strong>Cryptographic Protection:</strong> All biometric templates are encrypted at rest using AES-256
                  and in transit using TLS 1.3 encryption protocols.
                </li>
                <li>
                  <strong>Zero Commercial Monetization:</strong> We do not monetize, rent, or cross-market biometric
                  data to advertising networks or third-party data brokers under any circumstances.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Information We Collect</h2>
              <p>Depending on your interaction with our platforms, we may collect the following categories of data:</p>
              <ul>
                <li>
                  <strong>Contact & Business Information:</strong> Name, work email address, telephone number,
                  organization title, and company details submitted through our contact forms or inquiries.
                </li>
                <li>
                  <strong>System & Interaction Telemetry:</strong> Anonymized usage analytics, API request logs, timestamp
                  records, browser/device types, and error diagnostic logs necessary for platform uptime and threat defense.
                </li>
                <li>
                  <strong>Enterprise Authentication Logs:</strong> Verification timestamps, tokenized transaction IDs,
                  and access status results generated during authorized authentication workflows.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Purpose of Data Processing</h2>
              <p>We process information strictly for legitimate commercial and operational purposes, including:</p>
              <ul>
                <li>Executing verified biometric authentication and contactless payment transactions.</li>
                <li>Preventing presentation attacks, credential compromise, identity fraud, and system abuses.</li>
                <li>Providing technical support, service maintenance, and SLA compliance to enterprise customers.</li>
                <li>Fulfilling legal obligations, enterprise security audits, and regulatory compliance requirements.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Data Retention & Erasure</h2>
              <p>
                We retain biometric templates and transaction logs only as long as necessary to fulfill the
                contractual purpose for which they were collected or as mandated by statutory compliance guidelines.
                Upon enterprise client termination or verified user revocation requests, templates are permanently
                deleted using cryptographic erasure procedures.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Your Rights & Inquiries</h2>
              <p>
                Individuals have the right to request clarification regarding the processing of their personal data,
                request verification of their enrolled biometric profiles, or seek erasure subject to enterprise
                administrator protocols.
              </p>
              <p>
                For privacy inquiries or compliance questions, please contact our Data Governance Officer at{' '}
                <a href="mailto:hello@duchastechnologies.com" className="legal-link">
                  hello@duchastechnologies.com
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
