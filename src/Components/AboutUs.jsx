import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import { 
  Users, 
  Database, 
  BarChart3, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import img from "../assets/360.png";

const differentiators = [
  {
    title: "SELECTIVE CLIENT ONBOARDING",
    description: "We only partner with brands where we can guarantee a significant impact. We prioritize quality over volume to ensure dedicated focus.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "DATA-FIRST ARCHITECTURE",
    description: "Every campaign is built on advanced media buying logic, data intelligence, and granular tracking to outperform industry benchmarks.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "FULL TRANSPARENCY & REPORTING",
    description: "We provide complete visibility into your performance metrics. No hidden data—just honest, results-driven partnerships.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "SCALABLE INFRASTRUCTURE",
    description: "Our operational excellence allows us to scale campaigns effectively across high-competition verticals and multiple time zones.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "OPERATIONAL EXCELLENCE",
    description: "Strategically designed systems aligned with your revenue goals. We don't just act as a vendor; we act as your growth partner.",
    icon: <Database className="w-8 h-8" />,
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const AboutUsSection = () => {
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
                alt="360 Logo" 
              />
            </div>
          </div>
        </motion.div>

        {/* --- LARGE HEADING SECTION --- */}
        <div className="text-center mb-12 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.07, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex justify-center items-center select-none pointer-events-none -top-8 md:-top-12"
          >
            <span className="text-6xl md:text-[10rem] lg:text-[13rem] font-black whitespace-nowrap uppercase tracking-tighter">
                PARTNERSHIP
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl lg:text-6xl font-black tracking-tight relative z-10 uppercase italic leading-tight px-4"
          >
            Performance. Precision. <br className="hidden md:block" /> 
            <span className="text-[#22D3EE]">Partnership.</span>
          </motion.h2>
        </div>

        {/* --- INTRO TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20 relative z-10"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-white font-bold">Conversion Matrix 360</span> is a performance marketing firm built for companies that demand more than volume—they demand results. We specialize in delivering high-quality inbound calls and leads through advanced media buying and operational excellence.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative rounded-2xl p-[1.5px] transition-all duration-500 md:hover:-translate-y-3 overflow-hidden"
              style={{ perspective: "1000px" }} // Added for the 3D rotation effect
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
                     {item.icon || <BarChart3 className="w-8 h-8" />}
                    </div>
                </div>

                <div className="relative z-20 flex-grow">
                  <h3 className="font-black text-xs lg:text-sm tracking-widest leading-tight mb-3 min-h-[40px] uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 md:text-slate-400 text-[10px] lg:text-[11px] leading-relaxed mb-6 font-medium md:group-hover:text-slate-200 transition-colors">
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
      </div>
    </div>
  );
};

export default AboutUsSection;