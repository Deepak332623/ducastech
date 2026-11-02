import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductSelector from './pages/ProductSelector';
import ChoosePlan from './pages/ChoosePlan';
import BookMeeting from './pages/BookMeeting';
import Dashboard from './pages/Dashboard';
import ProfileSettings from './pages/ProfileSettings';

import './App.css';

const NotFound: React.FC = () => (
  <main className="not-found-page">
    <div className="container">
      <div className="not-found-card glass-card">
        <div className="not-found-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been relocated.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          <Link to="/products" className="btn btn-secondary">Explore Products</Link>
        </div>
      </div>
    </div>
  </main>
);

const App: React.FC = () => (
  <div className="app-layout">
    <ScrollToTop />
    <Navbar />
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-products" element={<ProductSelector />} />
        <Route path="/choose-plan" element={<ChoosePlan />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
