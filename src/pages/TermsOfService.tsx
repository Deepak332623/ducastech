import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2 } from 'lucide-react';
import { defaultTransition } from '../utils/animations';
import './Legal.css';

const TermsOfService: React.FC = () => {
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
            <span className="label">Legal Framework</span>
            <h1>Terms of Service</h1>
            <p className="legal-hero__date">Last Updated: October 2026 · Version 1.0 (Draft)</p>
          </motion.div>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <div className="glass-card legal-summary-card">
              <div className="legal-summary-card__header">
                <Scale size={20} />
                <h4>Agreement Summary</h4>
              </div>
              <ul className="legal-summary-list">
                <li>
                  <CheckCircle2 size={16} />
                  <span>Governs access to Duchas Technologies websites, portals, and APIs.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Enterprise service levels are dictated by individual Master Service Agreements.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Strict restrictions against reverse engineering or adversarial testing.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>All intellectual property and biometric algorithms remain proprietary.</span>
                </li>
              </ul>
            </div>
          </aside>

          <article className="legal-body glass-card">
            <section className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or utilizing the websites, software development kits (SDKs), application
                programming interfaces (APIs), or technology demonstrations provided by Duchas Technologies
                Pvt Ltd (&ldquo;Duchas Technologies&rdquo;), you acknowledge that you have read, understood, and
                agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Enterprise Software & API Licenses</h2>
              <p>
                Access to commercial production instances of our Biometric Authentication engines, Contactless
                Payment SDKs, and Access Control controllers is provided under distinct Master Services
                Agreements (MSA) and Service Level Agreements (SLA). In the event of any conflict between
                these general website terms and a negotiated MSA, the MSA provisions shall take precedence.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Intellectual Property Rights</h2>
              <p>
                All proprietary software, neural biometric matching models, palm vein vector algorithms,
                patented hardware designs, user interfaces, branding, and documentation displayed or utilized
                across our services remain the exclusive intellectual property of Duchas Technologies Pvt Ltd
                and its licensors.
              </p>
              <p>
                Users and enterprise evaluation partners may not copy, reverse engineer, decompile, disassemble,
                or create derivative works from our technology without explicit written authorization.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Acceptable Use Policy</h2>
              <p>When utilizing our systems, APIs, or website demonstrations, you agree not to:</p>
              <ul>
                <li>Conduct denial-of-service, penetration, or load testing without prior formal authorization.</li>
                <li>Submit synthetic, deceptive, or adversarial presentation spoof attacks against our biometric sensors.</li>
                <li>Attempt to harvest, scrape, or extract biometric template data or proprietary system embeddings.</li>
                <li>Use our identity platforms for any discriminatory, unlawful, or coercive surveillance activities.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Disclaimers & Warranties</h2>
              <p>
                Website demonstrations, technical whitepapers, and conceptual descriptions are provided on an
                &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for exploratory and educational purposes.
                While we strive for precision in all biometric algorithms and reliability metrics, official
                guarantees, throughput rates, and False Acceptance/Rejection Rates (FAR/FRR) are defined
                solely within formal enterprise contractual agreements.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of India.
                Any disputes arising from or relating to these terms shall be subject to the exclusive
                jurisdiction of the courts of India (specific city/jurisdiction to be confirmed upon
                finalization of corporate charter).
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Contact Information</h2>
              <p>
                For questions concerning our Terms of Service or enterprise legal agreements, please reach us at{' '}
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

export default TermsOfService;
