import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const IndustryCard = ({ number, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    className="relative mt-10 group"
  >
    {/* Animated Border Container */}
    <div className="relative p-[1px] overflow-hidden rounded-2xl bg-slate-200">
      {/* The Spinning Gradient */}
      <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#00f2fe_25%,#7c3aed_50%,#00f2fe_75%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Inner Card Content */}
      <div className="relative bg-white rounded-[15px] p-8 pt-12 h-full z-10 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    {/* Floating Number - Animates slightly after the card */}
    <motion.span 
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index * 0.2) + 0.2, type: "spring", stiffness: 100 }}
      className="absolute -top-10 left-6 text-7xl font-bold text-[#0685B1] bg-white px-2 z-20 pointer-events-none"
    >
      {number}.
    </motion.span>
  </motion.div>
);

function SpecializedIndustries() {
  const industries = [
    {
      number: "1",
      title: "Insurance",
      description: "Driving high-volume, high-intent traffic for Auto, Home, and Final Expense. We focus on connecting you with consumers actively seeking coverage to ensure a lower cost-per-acquisition."
    },
    {
      number: "2",
      title: "Medicare & ACA",
      description: "Specialized campaigns built around strict compliance and high conversion. We help you navigate the complexities of healthcare marketing while delivering qualified enrollment opportunities."
    },
    {
      number: "3",
      title: "Tax & Debt Relief",
      description: "Our campaigns target individuals seeking Tax Relief and Debt Settlement solutions. We utilize data-driven funnels to identify high-intent consumers in need of financial resolution."
    },
    {
      number: "4",
      title: "Legal & Financial",
      description: "From personal injury to financial planning, we generate leads that meet stringent quality standards. Our process ensures that every prospect is both qualified and ready for consultation."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-sans my-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Title and Intro Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-light text-slate-800 tracking-tight leading-tight">
            <span className="text-[#0685B1] font-bold border-r-2 border-[#0685B1] pr-3 mr-7 uppercase">Verticals</span> 
            <br className="hidden md:block" /> Specialized Industry Expertise
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              We operate in high-value verticals where quality and compliance are critical. 
              Our team understands the nuances of regulated markets, ensuring your 
              brand stays protected while your volume scales.
            </p>
            <p className="font-semibold text-slate-800">
              Our experience in regulated industries ensures every campaign is both 
              compliant and conversion-focused.
            </p>
          </div>

          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0685B1] rounded-2xl p-8 text-white mt-12 relative overflow-hidden group shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-8 leading-tight">
              Ready to scale <br /> your vertical?
            </h3>

            <div className="relative inline-block">
              <button className="relative flex items-center justify-between min-w-[200px] bg-[#0685B1] text-white font-bold py-[1px] px-[1px] rounded-full overflow-hidden transition-all duration-300 active:scale-95">
                <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#00f2fe_25%,#7c3aed_50%,#00f2fe_75%,transparent_100%)]"></div>
                
                <div className="relative flex items-center justify-between w-full h-full bg-[#0685B1] rounded-full py-3 px-6 z-10 hover:bg-[#05749a] transition-colors">
                  <span className="tracking-wide">VIEW ALL SERVICES</span>
                  <div className="bg-white p-2 rounded-full shadow-lg ml-4 transition-transform group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Right Columns: Industries Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {industries.map((item, idx) => (
            <IndustryCard key={idx} index={idx} {...item} />
          ))}
          
          {/* Home Services - Special Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="md:col-span-2 relative mt-4"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center justify-between group hover:border-[#0685B1] transition-all duration-300 hover:shadow-md">
                <div>
                    <h4 className="font-bold text-slate-800">Home Services</h4>
                    <p className="text-slate-500 text-sm">High-Intent campaigns for Solar, Roofing, and HVAC.</p>
                </div>
                <div className="text-[#0685B1] font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                    REVENUE FOCUSED
                </div>
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
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default SpecializedIndustries;