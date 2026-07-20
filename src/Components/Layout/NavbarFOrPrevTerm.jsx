import { useState } from 'react';
import { motion } from 'framer-motion'; 
import { useLocation } from 'react-router-dom';
import img from "/logo.png";

const Navbar = ({ activeLink, setActiveLink, setContactType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
  ];

  const handleNavClick = (linkName, sectionId, path = '/', formValue = null) => {
    if (setActiveLink) setActiveLink(linkName);
    setIsMenuOpen(false);
    
    if (formValue && typeof setContactType === 'function') {
      setContactType(formValue);
    }

    if (linkName === 'Home') {
      // Direct window location set forces a page reload back to home
      window.location.href = path;
    } else {
      // Normal single-page scroll behavior for other links
      if (location.pathname !== path) {
        window.location.href = `${path}#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  const dropIn = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: inline-block;
          animation: scroll 35s linear infinite;
        }

        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-border 6s linear infinite;
        }
      `}</style>

      {/* --- MAIN NAVBAR SECTION --- */} 
      <div className="bg-black text-white mx-auto w-full relative z-50">
        <div className="px-3 md:px-4 flex items-center justify-between gap-2 mx-auto w-full lg:w-[95%] xl:w-[90%] py-4">
          
          {/* Logo Section (Clicking logo also reloads Home) */}
          <motion.div 
            initial="hidden" animate="visible" custom={0} variants={dropIn}
            className="flex items-center cursor-pointer shrink-0"
            onClick={() => handleNavClick('Home', 'home', '/')}
          >
            <img 
              src={img} 
              alt="logo" 
              className="w-28 sm:w-36 md:w-44 xl:w-50 transition-all" 
            />
          </motion.div>

          {/* Central Navigation (Desktop Only) */}
          <nav className="hidden xl:flex relative p-[1px] overflow-hidden rounded-full border border-white/10">
            <div className="absolute inset-[-500%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#0ea5e9_25%,transparent_50%,#a855f7_75%,transparent_100%)]" />
            <div className="relative flex items-center bg-black rounded-full p-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  custom={index + 1}
                  initial="hidden"
                  animate="visible"
                  variants={dropIn}
                  onClick={() => handleNavClick(link.name, link.id, link.path)}
                  className={`px-5 py-2 text-md font-medium transition-all duration-300 rounded-full outline-none z-10 ${
                    activeLink === link.name
                      ? 'bg-white text-[#0077c8] shadow-md'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-3 shrink-0">

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden flex items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black border-t border-white/10 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name, link.id, link.path)}
                className={`w-full text-left px-6 py-3 rounded-xl transition-all ${
                  activeLink === link.name
                    ? 'bg-[#0077c8] text-white font-bold'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;