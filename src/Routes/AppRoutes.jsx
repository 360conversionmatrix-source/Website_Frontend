import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Services from '../Pages/Services.jsx';
import Industries from '../Pages/Industries.jsx';
import Compliance from '../Pages/Compliance.jsx';
import Partners from '../Pages/Partners.jsx';
import Contact from '../Pages/Contact.jsx';
import PrivacyComponent from '../Components/Privacy.jsx';
import Terms from '../Components/Terms.jsx';

// 1. Moved outside AppRoutes so it doesn't break React lifecycle/render cycles
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  const standardFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const slideUpFade = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        {/* HOME */}
        <Route 
          path="/" 
          element={
            <motion.div {...standardFade}>
              <Home />
            </motion.div>
          } 
        />

        {/* ABOUT Us */}
        <Route 
          path="/about" 
          element={
            <motion.div {...slideUpFade}>
              <About />
            </motion.div>
          } 
        />

        {/* Services */}
        <Route 
          path="/services" 
          element={
            <motion.div {...slideUpFade}>
              <Services />
            </motion.div>
          } 
        />

        {/* Industries */}
        <Route 
          path="/industries" 
          element={
            <motion.div {...standardFade}>
              <Industries />
            </motion.div>
          } 
        />

        {/* Compliance */}
        <Route 
          path="/compliance" 
          element={
            <motion.div {...standardFade}>
              <Compliance />
            </motion.div>
          } 
        />

        {/* Partners */}
        <Route 
          path="/partners" 
          element={
            <motion.div {...slideUpFade}>
              <Partners />
            </motion.div>
          } 
        />

        {/* Contact */}
        <Route 
          path="/contact" 
          element={
            <motion.div {...slideUpFade}>
              <Contact />
            </motion.div>
          } 
        />

        {/* Privacy Policy */}
        <Route 
          path="/privacy-policy" 
          element={
            <motion.div {...standardFade}>
              <PrivacyComponent />
            </motion.div>
          } 
        />

        {/* Terms and Conditions */}
        <Route 
          path="/terms-and-conditions" 
          element={
            <motion.div {...standardFade}>
              <Terms />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;