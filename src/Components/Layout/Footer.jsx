import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import img from '../../../src/assets/360.png';

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#005a9c] text-white pt-16 pb-8 relative overflow-hidden font-sans">
      <style>{`
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-rotate {
          position: absolute;
          inset: -100%; 
          background: conic-gradient(
            from 0deg, 
            #00ffff, 
            #a855f7, 
            #00ffff
          );
          animation: border-spin 3s linear infinite;
        }
      `}</style>

      {/* Decorative Background Circles - Subtle Float Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-50px] bottom-10 w-64 h-64 border-[15px] border-dotted border-pink-500 rounded-full opacity-20 pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-20 w-24 h-24 border-[8px] border-yellow-400 rounded-full opacity-20 pointer-events-none"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img className='w-24 h-24' src={img} alt="Conversion Matrix 360 Logo" />
              <div className="leading-none">
                <h2 className="text-xl font-black tracking-widest uppercase">Conversion</h2>
                <h2 className="text-xl font-light tracking-[0.2em] uppercase">Matrix 360</h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-blue-50 max-w-sm">
              Conversion Matrix 360 specializes in compliant inbound call generation 
              and opt-in lead solutions for Insurance, SSDI, Final Expense (FE), 
              and Home Services.
            </p>

            {/* Follow Us Box */}
            <div className="relative pt-4 inline-block">
              <span className="absolute -top-3 left-4 bg-[#005a9c] px-2 text-lg font-normal tracking-wide z-30">
                Follow Us:
              </span>
              <div className="relative p-[2px] rounded-2xl overflow-hidden z-10">
                <div className="animate-gradient-rotate"></div>
                <div className="relative bg-[#005a9c] rounded-[14px] px-5 py-5 z-20 flex gap-4">
                  <SocialIcon icon={<FaFacebookF />} />
                  <SocialIcon icon={<FaLinkedinIn />} />
                  <SocialIcon icon={<FaInstagram />} />
                  <SocialIcon icon={<FaXTwitter />} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industries Column */}
          <motion.div variants={itemVariants} className="lg:pl-10">
            <h3 className="text-2xl font-bold mb-6">Industries</h3>
            <ul className="space-y-4 text-blue-50 font-medium">
              <FooterLink label="Insurance" />
              <FooterLink label="Financial Services" />
              <FooterLink label="Home services" />
              <FooterLink label="Legal" />
              <FooterLink label="Travel" />
              <FooterLink label="Real Estate" />
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-blue-50 font-medium">
              <FooterLink label="About us" />
              <FooterLink label="Privacy Policy" />
              <FooterLink label="Terms and Conditions" />
            </ul>
          </motion.div>

          {/* Contact Component Placeholder (Optional 4th col) */}
          <motion.div variants={itemVariants}>
             <h3 className="text-2xl font-bold mb-6">Contact</h3>
             <p className="text-sm text-blue-100">Questions? Reach out to our strategy team for a consultation.</p>
          </motion.div>
        </div>

        {/* Bottom Bar with Drawing Line Animation */}
        <div className="mt-20 relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-px bg-blue-400/30 absolute top-0 left-0"
          />
          <div className="pt-8 text-center">
            <p className="text-sm font-semibold tracking-wide text-blue-100">
              © 2025 Leads – www.conversionmatrix360.org Copyright Protected Content
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <motion.a 
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    href="#" 
    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#005a9c] shadow-md"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ label }) => (
  <li>
    <motion.a 
      whileHover={{ x: 5 }}
      href="#" 
      className="hover:text-cyan-300 transition-colors cursor-pointer block"
    >
      {label}
    </motion.a>
  </li>
);

export default Footer;