import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

// Reusable Component for Inputs with a Seamless Spinning Border
const AnimatedField = ({ placeholder, type = "text", isTextArea = false, className = "", delay = 0 }) => {
  const InputTag = isTextArea ? 'textarea' : 'input';
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative p-[1.5px] overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)] pointer-events-none"></div>
      <InputTag
        type={type}
        placeholder={placeholder}
        rows={isTextArea ? "4" : undefined}
        className="relative w-full bg-[#0a1219] text-white px-4 py-3 rounded-[7px] focus:outline-none z-10 resize-none placeholder:text-gray-500"
      />
    </motion.div>
  );
};

const ProposalSection = () => {
  return (
    <section className="relative bg-black pt-24 pb-16 px-4 md:px-12 overflow-hidden font-sans">
      {/* Top White Curve Decor */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white rounded-b-[100%] scale-x-125 origin-top"></div>

      {/* --- UPDATED "GET IN TOUCH" BADGE --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-16 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="relative p-[1.5px] overflow-hidden rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)]"></div>
          <div className="relative bg-white px-8 py-2 rounded-full text-black font-bold text-sm tracking-wide z-10 whitespace-nowrap">
            Get In Touch
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mt-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-4xl font-bold text-white tracking-wider mb-20 relative z-10 uppercase"
        >
          Get My Free Digital Marketing Proposal
        </motion.h2>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          
          {/* Left Content Card - Slides from Left */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-30 w-full max-w-xl lg:-mr-7"
          >
             <div className="relative p-[1.5px] overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)]"></div>
                <div className="relative rounded-[15px] overflow-hidden bg-black z-10">
                    <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                        alt="Strategy" 
                        className="w-full h-[400px] lg:h-[480px] object-cover opacity-50"
                    />
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-start">
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                          <span className="text-cyan-400">Innovate</span> <br /> Your Business!
                        </h3>
                        <p className="text-gray-300 mt-4 max-w-sm">
                          Conversion Matrix 360 has the expertise to drive your digital success.
                        </p>
                        
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-8 relative inline-block group"
                        >
                          <div className="absolute inset-0 p-[2px] rounded-full overflow-hidden">
                            <div className="absolute inset-0 w-[400%] h-[400%] top-[-150%] left-[-150%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)]"></div>
                          </div>
                          <button className="relative flex items-center bg-white rounded-full pl-7 pr-1.5 py-1.5 z-10">
                            <span className="text-[#0a1219] font-bold text-lg mr-4 tracking-tight">
                              Get Proposal Now!
                            </span>
                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-[#0a1219] fill-current" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                              </svg>
                            </div>
                          </button>
                        </motion.div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Right Form Card - Slides from Right */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-2xl relative p-[1.5px] overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)]"></div>
            
            <div className="relative bg-[#0a1219] rounded-[23px] p-8 md:p-12 z-10">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-white">Let's Discuss Your Project</h3>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AnimatedField placeholder="First Name" delay={0.1} />
                    <AnimatedField placeholder="Last Name" delay={0.2} />
                    <AnimatedField placeholder="Company Name" delay={0.3} />
                    <AnimatedField placeholder="Website URL" delay={0.4} />
                    <AnimatedField placeholder="Email Address" type="email" delay={0.5} />
                    <AnimatedField placeholder="Phone Number" type="tel" delay={0.6} />
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                      className="md:col-span-2 relative p-[1.5px] overflow-hidden rounded-lg"
                    >
                        <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)] pointer-events-none"></div>
                        <select className="relative w-full bg-[#0a1219] text-gray-400 px-4 py-3 rounded-[7px] focus:outline-none z-10 appearance-none cursor-pointer">
                            <option>Select Your Vertical</option>
                            <option>Insurance</option>
                            <option>Home Services</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20 pointer-events-none">▼</span>
                    </motion.div>

                    <AnimatedField placeholder="How can we help you grow?" isTextArea={true} className="md:col-span-2" delay={0.8} />

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="md:col-span-2 mt-4 bg-white hover:bg-gray-200 text-black font-extrabold py-4 rounded-lg transition-all uppercase tracking-widest shadow-xl"
                    >
                        Submit Proposal
                    </motion.button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProposalSection;