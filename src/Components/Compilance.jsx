import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import { 
  ShieldCheck, 
  FileCheck, 
  UserCheck, 
  SearchCheck, 
  Database,
  ArrowRight 
} from 'lucide-react';
import img from "../assets/360.png";

const complianceStandards = [
  {
    title: "TCPA-COMPLIANT OUTREACH",
    description: "Strict adherence to Telephone Consumer Protection Act regulations to ensure all consumer communications are legally sound.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "VERIFIED OPT-IN DATA SOURCES",
    description: "We only utilize data from verified opt-in channels, maintaining the highest levels of consumer consent and brand safety.",
    icon: <UserCheck className="w-8 h-8" />,
  },
  {
    title: "DNC LIST ENFORCEMENT",
    description: "Rigorous scrub processes against Do Not Call registries to protect both our partners and the consumer experience.",
    icon: <FileCheck className="w-8 h-8" />,
  },
  {
    title: "CONSENT TRACKING (JORNAYA/TF)",
    description: "Every lead is backed by visual proof of consent via Jornaya or TrustedForm certificates for complete auditability.",
    icon: <SearchCheck className="w-8 h-8" />,
  },
  {
    title: "REAL-TIME MONITORING & AUDITING",
    description: "Continuous oversight of all marketing funnels to ensure long-term sustainability and regulatory compliance.",
    icon: <Database className="w-8 h-8" />,
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const ComplianceSection = () => {
  return (
    <div className="bg-[#020617] min-h-screen pb-20 px-6 font-sans overflow-hidden text-white">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 7s linear infinite;
          }
          
          .button-gradient-rail {
            background: conic-gradient(
              from 0deg,
              #10143E, 
              #8B2CF5, 
              #22D3EE, 
              #8B2CF5, 
              #10143E  
            );
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* --- TOP BADGE --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 pt-10"
        >
          <div className="relative group shadow-[0_0_20px_rgba(139,44,245,0.3)]">
            <div className="relative p-[1.5px] rounded-full overflow-hidden">
              <div className="absolute inset-[-1000%] animate-spin-slow button-gradient-rail" />
              <div className="relative bg-[#020617] pl-6 pr-10 py-2 rounded-full z-10">
                <span className="font-bold tracking-wider text-md uppercase text-white">
                  Conversion Matrix 360
                </span>
              </div>
            </div>

            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <img 
                className='h-12 w-12 object-contain block bg-black rounded-full border border-white/10' 
                src={img} 
                alt="360" 
              />
            </div>
          </div>
        </motion.div>

        {/* --- LARGE HEADING SECTION --- */}
        <div className="text-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.07, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex justify-center items-center select-none pointer-events-none -top-8 md:-top-12"
          >
            <span className="text-6xl md:text-[12rem] lg:text-[15rem] font-black whitespace-nowrap uppercase tracking-tighter">
                COMPLIANT
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl lg:text-6xl font-black tracking-tight relative z-10 uppercase italic leading-tight px-4"
          >
            Built on Compliance. <br className="hidden md:block" /> 
            Driven by <span className="text-[#22D3EE]">Integrity</span>
          </motion.h2>
        </div>

        {/* --- INTRO CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 relative z-10"
        >
            <p className="text-slate-300 text-lg mb-4">
                Compliance is not optional—it’s <span className="text-white font-bold underline decoration-[#22D3EE]">foundational</span> to everything we do. 
            </p>
            <p className="text-slate-400 text-sm italic">
                We adhere to strict regulatory frameworks to protect both our partners and consumers, ensuring long-term sustainability and trust.
            </p>
        </motion.div>

        {/* Compliance Grid with Staggered Scale-in */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6"
        >
          {complianceStandards.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative rounded-2xl p-[1.5px] transition-all duration-500 md:hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Border Animation */}
              <div className="absolute inset-[-400%] animate-spin-slow button-gradient-rail opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl p-6 flex flex-col h-full z-10 overflow-hidden bg-[#020617]">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-20 md:opacity-10 md:group-hover:opacity-30 transition-opacity duration-500" 
                  style={{
                    background: 'radial-gradient(circle at top right, #8B2CF5, #22D3EE, transparent)'
                  }}
                />
                
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative z-20 transition-transform group-hover:scale-110">
                    <div className="text-[#10143E]">
                     {item.icon}
                    </div>
                </div>

                <div className="relative z-20 flex-grow">
                  <h3 className="font-black text-[11px] lg:text-xs tracking-widest leading-tight mb-3 min-h-[40px] uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] lg:text-[11px] leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-end mt-auto relative z-20">
                  <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#22D3EE]/10 md:bg-white/5 border border-[#22D3EE]/30 md:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] group-hover:shadow-[0_0_15px_#22D3EE]">
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#22D3EE] group-hover:text-[#10143E] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 blur-2xl rounded-2xl -z-10 opacity-30 md:opacity-0 md:group-hover:opacity-40 transition-opacity button-gradient-rail" />
            </motion.div>
          ))}
        </motion.div>

        {/* --- CLOSING LINE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-white/5 pt-10"
        >
            <motion.p 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[#22D3EE] text-sm md:text-md font-bold tracking-widest uppercase"
            >
                Our compliance-first approach protects your brand while maximizing performance.
            </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplianceSection;