import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import './App.css';

// Keep only essential imports
import Navbar from './components/Navbar';
import MinimalNavbar from './components/MinimalNavbar';
import Footer from './components/Footer';

// Move translations to separate file to reduce bundle size
import { translations } from './data/translations';

// Lazy load page components with better error boundaries
const Home = lazy(() => import(/* webpackChunkName: "home" */ './page/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './page/About'));
const Product = lazy(() => import(/* webpackChunkName: "product" */ './page/Product'));
const Return = lazy(() => import(/* webpackChunkName: "policies" */ './page/Return'));
const Privacy = lazy(() => import(/* webpackChunkName: "policies" */ './page/Privacy'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './page/Contact'));
const Checkout = lazy(() => import(/* webpackChunkName: "checkout" */ './page/Checkout'));
const TermsAndConditions = lazy(() => import(/* webpackChunkName: "policies" */ './page/Terms'));
const CancelPolicy = lazy(() => import(/* webpackChunkName: "policies" */ './page/Cancel'));
const ShippingPolicy = lazy(() => import(/* webpackChunkName: "policies" */ './page/Shipping'));
const ThankYou = lazy(() => import(/* webpackChunkName: "misc" */ './page/ThankYou'));


// Optimized loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
  </div>
);

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Simplified language options
const languages = [{ code: 'en', name: 'English' }];

const App = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  };

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleCall = () => {
    window.location.href = 'tel:+919908016333';
  };

  // Component to conditionally render Navbar
  const ConditionalNavbar = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/Drjoints';
    const isLandingPage2 = location.pathname === '/Drjoints2';
    const isLandingPage3 = location.pathname === '/Drjoints3';
    const isAgentPage = location.pathname === '/agent';
    
    if (isLandingPage || isLandingPage2 || isLandingPage3 || isAgentPage) {
      return (isLandingPage || isLandingPage2 || isLandingPage3) ? <MinimalNavbar /> : null;
    } else {
      return <Navbar currentLang={currentLang} setCurrentLang={handleLanguageChange} translations={translations || {}} languages={languages} />;
    }
  };

  // Component to conditionally render Footer
  const ConditionalFooter = () => {
    const location = useLocation();
    const shouldShowFooter = location.pathname !== '/Drjoints' && 
                           location.pathname !== '/Drjoints2' && 
                           location.pathname !== '/Drjoints3' && 
                           location.pathname !== '/agent';
    
    return shouldShowFooter ? (
      <Footer currentLang={currentLang} translations={translations || {}} />
    ) : null;
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <ConditionalNavbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Home currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/about' element={<About currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/product' element={<Product currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/return' element={<Return currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/privacy' element={<Privacy currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/contact' element={<Contact currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/checkout' element={<Checkout currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/terms' element={<TermsAndConditions currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/cancel' element={<CancelPolicy currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/shipping' element={<ShippingPolicy currentLang={currentLang} translations={translations || {}} />} />
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ConditionalFooter />
      </BrowserRouter>
    </div>
  )
}

export default App




