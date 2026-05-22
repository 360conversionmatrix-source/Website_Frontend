import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 1. Updated AnimatedField to accurately accept control props and forward them
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative p-[1.5px] overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)] pointer-events-none"></div>
      <InputTag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={isTextArea ? "4" : undefined}
        className="relative w-full bg-[#0a1219] text-white px-4 py-3 rounded-[7px] focus:outline-none z-10 resize-none placeholder:text-gray-500"
        required
      />
    </motion.div>
  );
};

const ProposalSection = () => {
  // 2. Local form tracking state synced explicitly with backend variable naming keys
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    Company: '',
    Website: '',
    email: '',
    phone: '',
    Service: 'Select Your Vertical',
    description: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState({ status: 'idle', message: '' });

  // 3. Centralized input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Async submission handler hitting your app.post("/Services/submit") endpoint
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.Service === 'Select Your Vertical') {
      setSubmissionStatus({ status: 'error', message: 'Please select a valid service vertical option.' });
      return;
    }

    setSubmissionStatus({ status: 'loading', message: 'Submitting your proposal request...' });

    try {
      const response = await fetch('/Services/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus({ status: 'success', message: 'Your proposal data has been successfully saved!' });
        // Clear all fields on clear success run
        setFormData({
          first_name: '',
          last_name: '',
          Company: '',
          Website: '',
          email: '',
          phone: '',
          Service: 'Select Your Vertical',
          description: ''
        });
      } else {
        setSubmissionStatus({ status: 'error', message: 'Server error saving form data. Please try again.' });
      }
    } catch (err) {
      console.error('Submission processing failure:', err);
      setSubmissionStatus({ status: 'error', message: 'Network error connectivity. Could not hit the database backend.' });
    }
  };

  return (
    <section className="relative bg-black pt-24 pb-16 px-4 md:px-12 overflow-hidden font-sans">
      {/* Top White Curve Decor */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white rounded-b-[100%] scale-x-125 origin-top"></div>

      {/* --- GET IN TOUCH BADGE --- */}
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
          
          {/* Left Content Card */}
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
                        
                        {/* --- MODIFIED TO CLICK TO CALL 111111111 --- */}
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-8 relative inline-block group"
                        >
                          <div className="absolute inset-0 p-[2px] rounded-full overflow-hidden">
                            <div className="absolute inset-0 w-[400%] h-[400%] top-[-150%] left-[-150%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)]"></div>
                          </div>
                          <a 
                            href="tel:111111111"
                            className="relative flex items-center bg-white rounded-full pl-7 pr-1.5 py-1.5 z-10 cursor-pointer decoration-none select-none"
                          >
                            <span className="text-[#0a1219] font-bold text-lg mr-4 tracking-tight">
                              Get Proposal Now!
                            </span>
                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-[#0a1219] fill-current" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                              </svg>
                            </div>
                          </a>
                        </motion.div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Right Form Card */}
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

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleFormSubmit}>
                    <AnimatedField placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleInputChange} delay={0.1} />
                    <AnimatedField placeholder="Last Name" name="last_name" value={formData.last_name} onChange={handleInputChange} delay={0.2} />
                    <AnimatedField placeholder="Company Name" name="Company" value={formData.Company} onChange={handleInputChange} delay={0.3} />
                    <AnimatedField placeholder="Website URL" name="Website" value={formData.Website} onChange={handleInputChange} delay={0.4} />
                    <AnimatedField placeholder="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} delay={0.5} />
                    <AnimatedField placeholder="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} delay={0.6} />
                    
                    {/* --- FIXED SELECT DROPDOWN ELEMENT --- */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                      className="md:col-span-2 relative p-[1.5px] overflow-hidden rounded-lg"
                    >
                      <div className="absolute inset-0 w-[600%] h-[600%] top-[-250%] left-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,#00f2fe,#7c3aed,#00f2fe)] pointer-events-none"></div>
                      <select 
                        id="vertical-selection-input"
                        name="Service"
                        value={formData.Service}
                        onChange={handleInputChange}
                        className="relative w-full bg-[#0a1219] text-white px-4 py-3 rounded-[7px] focus:outline-none z-10 appearance-none cursor-pointer text-sm font-medium"
                      >
                        <option value="Select Your Vertical" disabled>Select Your Vertical</option>
                        <option value="SEARCH ENGINE OPTIMIZATION - SEO">SEARCH ENGINE OPTIMIZATION - SEO</option>
                        <option value="WEBSITE DESIGN & DEVELOPMENT">WEBSITE DESIGN & DEVELOPMENT</option>
                        <option value="SOCIAL MEDIA MARKETING">SOCIAL MEDIA MARKETING</option>
                        <option value="INBOUND CALL LEAD GENERATION">INBOUND CALL LEAD GENERATION</option>
                        <option value="PERFORMANCE MARKETING (PAY-PER-CALL)">PERFORMANCE MARKETING (PAY-PER-CALL)</option>
                        <option value="GOOGLE ADS - SEARCH & CALL">GOOGLE ADS - SEARCH & CALL</option>
                        <option value="LANDING PAGE & FUNNEL OPTIMIZATION">LANDING PAGE & FUNNEL OPTIMIZATION</option>
                        <option value="LIVE TRANSFER & CALL ROUTING">LIVE TRANSFER & CALL ROUTING</option>
                        <option value="CALL TRACKING & ANALYTICS">CALL TRACKING & ANALYTICS</option>
                        <option value="COMPLIANCE & VERIFIED LEADS">COMPLIANCE & VERIFIED LEADS</option>
                        <option value="Other Services">Other Services</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20 pointer-events-none">▼</span>
                    </motion.div>

                    <AnimatedField 
                      placeholder="How can we help you grow?" 
                      name="description" 
                      value={formData.description} 
                      onChange={handleInputChange} 
                      isTextArea={true} 
                      className="md:col-span-2" 
                      delay={0.8} 
                    />

                    {/* Simple Inline Feedback Notification Block */}
                    {submissionStatus.message && (
                      <div className={`md:col-span-2 text-sm text-center font-bold mt-2 ${
                        submissionStatus.status === 'success' ? 'text-green-400' : submissionStatus.status === 'error' ? 'text-red-400' : 'text-cyan-400'
                      }`}>
                        {submissionStatus.message}
                      </div>
                    )}

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submissionStatus.status === 'loading'}
                      className="md:col-span-2 mt-4 bg-white hover:bg-gray-200 text-black font-extrabold py-4 rounded-lg transition-all uppercase tracking-widest shadow-xl cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {submissionStatus.status === 'loading' ? 'Processing...' : 'Submit Proposal'}
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