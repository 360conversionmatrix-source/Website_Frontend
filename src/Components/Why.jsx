import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const FeatureCard = ({ number, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="relative mt-10 group"
  >
    {/* Animated Border Container */}
    <div className="relative p-[1px] overflow-hidden rounded-2xl bg-slate-300">
      <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#00f2fe_25%,#7c3aed_50%,#00f2fe_75%,transparent_100%)]"></div>
      
      {/* Inner Card Content */}
      <div className="relative bg-white rounded-[15px] p-8 pt-10 h-full z-10">
        <h3 className="text-xl font-bold text-slate-700 mb-4">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    {/* Floating Number - Staggered entrance to match card */}
    <motion.span 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index * 0.2) + 0.3 }}
      className="absolute -top-8 left-6 text-7xl font-bold text-[#0685B1] bg-white px-2 z-20"
    >
      {number}.
    </motion.span>
  </motion.div>
);

function Why() {
  const features = [
    {
      number: "1",
      title: "High-Intent Inbound Call Leads",
      description: "We specialize in delivering exclusive, high-quality inbound calls across insurance and home service verticals. Our leads are pre-qualified, conversion-focused, and generated through proven marketing funnels to ensure maximum ROI for buyers."
    },
    {
      number: "2",
      title: "Performance-Driven Pay-Per-Call & CPL Campaigns",
      description: "Conversion Matrix 360 operates on a results-based model, offering scalable pay-per-call and cost-per-lead solutions. We help partners grow efficiently with transparent pricing and measurable performance."
    },
    {
      number: "3",
      title: "End-to-End Digital Marketing Expertise",
      description: "From Google Ads and social media campaigns to landing page optimization, we manage the full lead generation ecosystem. Our integrated approach ensures consistent traffic, better targeting, and higher conversions."
    },
    {
      number: "4",
      title: "SEO & Website Development for Lead Growth",
      description: "We build high-converting websites and optimize them with SEO strategies that improve online visibility and drive organic inbound opportunities. Every page is designed to capture customer intent and generate real business results."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-sans my-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Title and Intro Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-light text-slate-800 tracking-tight">
            <span className="text-[#0685B1] font-bold border-r-2 border-[#0685B1] pr-3 mr-7">WHY</span> 
            Conversion Matrix 360?
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              At Conversion Matrix 360 we specialize in providing top-notch lead-generation services 
              that can help take your business to the next level! Our team of industry 
              experts uses the latest pay-per-call marketing technologies.
            </p>
            <p>
              We're dedicated to helping your company grow faster and more efficiently 
              through our effective lead-generation solutions.
            </p>
          </div>

          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#0685B1] rounded-2xl p-8 text-white mt-12 relative overflow-hidden group"
          >
            <h3 className="text-3xl font-bold mb-8 leading-tight">
              Expand your <br /> business
            </h3>

            {/* Animated Border Button */}
            <div className="relative inline-block">
              <button className="relative flex items-center justify-between min-w-[200px] bg-[#0685B1] text-white font-bold py-[1px] px-[1px] rounded-full overflow-hidden transition-all duration-300 active:scale-95">
                <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#00f2fe_25%,#7c3aed_50%,#00f2fe_75%,transparent_100%)]"></div>
                
                <div className="relative flex items-center justify-between w-full h-full bg-[#0685B1] rounded-full py-3 px-6 z-10">
                  <span className="tracking-wide">LET'S TALK</span>
                  <div className="bg-white p-2 rounded-full shadow-lg ml-4 transition-transform group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Columns: Features Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((item, idx) => (
            <FeatureCard key={idx} index={idx} {...item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Why;