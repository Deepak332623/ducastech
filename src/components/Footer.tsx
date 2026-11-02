import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Fingerprint } from 'lucide-react';
import Logo from './Logo';
import { products } from '../data/content';
import './Footer.css';

const Footer: React.FC = () => {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top-line" />
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-content">
            <Fingerprint size={28} className="footer__cta-icon" />
            <div>
              <h3>Ready to Transform Your Identity Infrastructure with AI?</h3>
              <p>Get in touch to explore AI-powered biometric solutions, intelligent fraud detection, and adaptive security for your enterprise.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={16} /></Link>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo size={42} showText />
            <p className="footer__desc">AI-powered enterprise biometric authentication, identity verification, fraud detection, and contactless payment platform built on cloud infrastructure with GPU-accelerated deep learning. Pioneering the future of intelligent digital identity.</p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/duchas/about/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Solutions</h4>
            <ul className="footer__list">
              {products.map(p => (<li key={p.id}><Link to={`/products/${p.slug}`}>{p.shortName}</Link></li>))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li><Mail size={15} /><a href="mailto:hello@duchastechnologies.com">hello@duchastechnologies.com</a></li>
              <li><MapPin size={15} /><span>201, Tower-A, Shashvat Fl, Motnath Mahadev Rd, Harni Colony, Vadodara, Gujarat, India 390022</span></li>
            </ul>

          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>&copy; {yr} Duchas Technologies Pvt Ltd. All rights reserved.</p>
            <p className="footer__cin">CIN: U62013GJ2023PTC140824 · Incorporated: May 04, 2023</p>
          </div>
          <div className="footer__bottom-right">
            <div className="footer__legal">
              <Link to="/privacy-policy">Privacy</Link>
              <span>·</span>
              <Link to="/terms">Terms</Link>
            </div>
            <p className="footer__founders-sm">&nbsp;</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
