import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 1. Updated AnimatedField component to properly receive controlled input state properties
const AnimatedField = ({ 
  placeholder, 
  name, 
  value, 
  onChange, 
  type = "text", 
  isTextArea = false, 
  className = "", 
  delay = 0 
}) => {
  const InputTag = isTextArea ? 'textarea' : 'input';
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
      className={`relative p-[1.5px] overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)] pointer-events-none opacity-70"></div>
      <InputTag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={isTextArea ? "4" : undefined}
        className="relative w-full bg-[#0a1219] text-white px-4 py-3 rounded-[7px] focus:outline-none z-10 resize-none placeholder:text-gray-500 text-sm"
        required
      />
    </motion.div>
  );
};

const ContactUs = () => {
  // 2. Setup internal unified local state mapped to the Express extraction schema
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    Service: 'Select Target Vertical',
    description: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  // 3. Centralized input state monitor updates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Asynchronous data form pipeline processing handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Service === 'Select Target Vertical') {
      setStatus({ type: 'error', message: 'Please select a valid target vertical option.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Submitting consultation request...' });

    try {
      const response = await fetch('https://three60quotesbackend.onrender.com/Contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form data successfully saved!' });
        // Clear inputs upon successful response loop execution
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          Service: 'Select Target Vertical',
          description: ''
        });
      } else {
        setStatus({ type: 'error', message: 'Error processing submission requests on database storage layer.' });
      }
    } catch (err) {
      console.error('API Post Connectivity Exception:', err);
      setStatus({ type: 'error', message: 'Network connectivity error. Failed to reach the server.' });
    }
  };

  return (
    <section className="relative bg-[#020617] pt-32 pb-24 px-4 md:px-12 overflow-hidden font-sans border-t border-white/10">
      {/* STRAIGHT LINE DECOR */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent"
      ></motion.div>

      {/* --- GET IN TOUCH BADGE --- */}
      <motion.div 
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="relative p-[1.5px] overflow-hidden rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)]"></div>
          <div className="relative bg-white px-8 py-2 rounded-full text-black font-black text-xs tracking-[0.2em] z-10 whitespace-nowrap uppercase">
            Get In Touch
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Let’s Build Something <span className="text-[#22D3EE]">Scalable</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
            If you're serious about acquiring high-quality leads and calls, we’re ready to partner with you.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          
          {/* Left Content Card */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            viewport={{ once: true }}
            className="relative z-30 w-full max-w-xl lg:-mr-10"
          >
            <div className="relative p-[1.5px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)]"></div>
              <div className="relative rounded-[15px] overflow-hidden bg-black z-10">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Strategy" 
                  className="w-full h-[450px] lg:h-[550px] object-cover opacity-40"
                />
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-center items-start bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#22D3EE] text-black text-[10px] font-black px-3 py-1 rounded mb-4 uppercase tracking-widest"
                  >
                    Limited Client Onboarding
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                    Serious <br /> <span className="text-[#22D3EE]">Inquiries Only.</span>
                  </h3>
                  <p className="text-gray-300 mt-6 max-w-xs text-sm leading-relaxed">
                    We prioritize performance and exclusivity. Every campaign is aligned with your revenue goals.
                  </p>

                  <div className="mt-8 space-y-2">
                    <div className="flex items-center gap-3 text-white">
                      <span className="text-[#22D3EE] text-xs font-bold uppercase tracking-widest w-12">Email</span>
                      <span className="font-medium">info@conversionmatrix360.org</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <span className="text-[#22D3EE] text-xs font-bold uppercase tracking-widest w-12">Phone</span>
                      <span className="font-medium">+1 XXX XXX XXXX</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 relative inline-block group mb-3"
                  >
                    <div className="absolute inset-0 p-[2px] rounded-full overflow-hidden">
                      <div className="absolute inset-0 w-[400%] h-[400%] top-[-150%] left-[-150%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)]"></div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => {
                        const element = document.getElementById('contact-type-input');
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className="relative flex items-center bg-white rounded-full pl-7 pr-1.5 py-1.5 z-10 cursor-pointer"
                    >
                      <span className="text-[#0a1219] font-black text-sm mr-4 tracking-tighter uppercase select-none">
                        Let's Discuss Growth
                      </span>
                      <div className="bg-[#0a1219] w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl relative p-[1.5px] overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)]"></div>
            
            <div className="relative bg-[#0a1219] rounded-[23px] p-8 md:p-12 z-10">
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Request a Consultation</h3>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Built for quality and scale</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <AnimatedField placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleInputChange} delay={0.2} />
                <AnimatedField placeholder="Last Name" name="last_name" value={formData.last_name} onChange={handleInputChange} delay={0.3} />
                <AnimatedField placeholder="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} delay={0.4} />
                <AnimatedField placeholder="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} delay={0.5} />
                
                {/* --- SELECTION DROP-DOWN FIELD --- */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 relative p-[1.5px] overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#22D3EE,#8B2CF5,#22D3EE)] pointer-events-none opacity-50"></div>
                  <select 
                    id="contact-type-input"
                    name="Service"
                    value={formData.Service}
                    onChange={handleInputChange}
                    className="relative w-full bg-[#0a1219] text-white px-4 py-3 rounded-[7px] focus:outline-none z-10 appearance-none cursor-pointer text-sm"
                  >
                    <option value="Select Target Vertical" disabled>Select Target Vertical</option>
                    <option value="Publisher">Publisher</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#22D3EE] z-20 pointer-events-none">▼</span>
                </motion.div>

                <AnimatedField 
                  placeholder="How can we help scale your acquisition strategy?" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  isTextArea={true} 
                  className="md:col-span-2" 
                  delay={0.7} 
                />

                {/* Submission Feedback Message Banner */}
                {status.message && (
                  <div className={`md:col-span-2 text-sm text-center font-bold mt-2 ${
                    status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-cyan-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="md:col-span-2 mt-4 bg-[#22D3EE] hover:bg-white text-black font-black py-4 rounded-lg transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? 'Processing...' : 'Submit Proposal'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] text-white/40 tracking-[0.6em] uppercase">
            Strategic Intelligence • Operational Excellence
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;