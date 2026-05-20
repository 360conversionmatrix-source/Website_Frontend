// src/AppRoutes.jsx  (or wherever your routes are)
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Services from '../Pages/Services.jsx';
import Industries from '../Pages/Industries.jsx';
import Compliance from '../Pages/Compliance.jsx';
import Partners from '../Pages/Partners.jsx';
import Contact from '../Pages/Contact.jsx';

const AppRoutes = () => {
  const location = useLocation(); // ← THIS WAS MISSING!

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        {/* HOME */}
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Home />
            </motion.div>
          } 
        />

        {/* ABOUT  Us*/}
        <Route 
          path="/about" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <About/>
            </motion.div>
          } 
        />

        {/* Services*/}
        <Route 
          path="/services" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Services/>
            </motion.div>
          } 
        />

        {/* Industries */}
        <Route 
          path="/industries" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Industries />
            </motion.div>
          } 
        />
        {/* Compilance */}
        <Route 
          path="/compliance" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Compliance/>
            </motion.div>
          } 
        />


         <Route 
          path="/partners" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Partners />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Contact />
            </motion.div>
          } 
        />


      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;