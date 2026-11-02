import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/content';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products', hasDropdown: true },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleDropdownEnter = useCallback(() => setIsDropdownOpen(true), []);
  const handleDropdownLeave = useCallback(() => setIsDropdownOpen(false), []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" aria-label="Duchas Technologies Home">
            <Logo size={44} showText />
          </Link>

          {/* Desktop Nav — hidden when logged in */}
          {!isAuthenticated && (
          <div className="navbar__links">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="navbar__link-wrapper"
                onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`navbar__chevron ${isDropdownOpen ? 'navbar__chevron--open' : ''}`}
                    />
                  )}
                </Link>

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <div className="navbar__dropdown-grid">
                          {products.map((product) => {
                            const Icon = product.icon;
                            return (
                              <Link
                                key={product.id}
                                to={`/products/${product.slug}`}
                                className="navbar__dropdown-item"
                              >
                                <div className="navbar__dropdown-icon" style={{ color: product.color }}>
                                  <Icon size={20} />
                                </div>
                                <div>
                                  <div className="navbar__dropdown-title">{product.shortName}</div>
                                  <div className="navbar__dropdown-desc">{product.tagline.substring(0, 60)}...</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="navbar__dropdown-footer">
                          <Link to="/products" className="navbar__dropdown-all">
                            View All Solutions →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
          )}

          <div className="navbar__actions">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn btn-secondary btn-sm navbar__user-btn">
                  <User size={16} />
                  <span className="navbar__user-name">{user?.fullName?.split(' ')[0]}</span>
                </Link>
                <button className="btn btn-ghost btn-sm navbar__logout-btn" onClick={logout}>
                  <LogOut size={16} />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary btn-sm navbar__login-btn">
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm navbar__cta">
                  Get Started
                </Link>
              </>
            )}

            <button
              className="navbar__mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="mobile-menu__inner">
              {!isAuthenticated ? (
              <div className="mobile-menu__links">
                {navLinks.map((link) => (
                  <React.Fragment key={link.path}>
                    <Link
                      to={link.path}
                      className={`mobile-menu__link ${isActive(link.path) ? 'mobile-menu__link--active' : ''}`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="mobile-menu__sub">
                        {products.map((product) => {
                          const Icon = product.icon;
                          return (
                            <Link
                              key={product.id}
                              to={`/products/${product.slug}`}
                              className="mobile-menu__sub-link"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <Icon size={16} style={{ color: product.color }} />
                              {product.shortName}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              ) : (
              <div className="mobile-menu__links">
                <Link to="/dashboard" className="mobile-menu__link" onClick={() => setIsMobileOpen(false)}>Dashboard</Link>
                <Link to="/profile" className="mobile-menu__link" onClick={() => setIsMobileOpen(false)}>Profile Settings</Link>
                <Link to="/choose-plan" className="mobile-menu__link" onClick={() => setIsMobileOpen(false)}>My Plan</Link>
              </div>
              )}
              {!isAuthenticated && (
              <>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => setIsMobileOpen(false)}>Request a Demo</Link>
              <Link to="/login" className="btn btn-secondary btn-lg" style={{ width: '100%' }} onClick={() => setIsMobileOpen(false)}>Sign In</Link>
              </>
              )}
              {isAuthenticated && (
              <button className="btn btn-secondary btn-lg" style={{ width: '100%' }} onClick={() => { logout(); setIsMobileOpen(false); }}>Sign Out</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
