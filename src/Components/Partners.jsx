import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import { 
  Handshake, 
  Headset, 
  Network, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import img from "../assets/360.png";

const partners = [
  {
    title: "DIRECT BUYERS",
    description: "Partnering with brands that demand exclusive, high-intent traffic to fuel their internal sales teams.",
    icon: <Handshake className="w-8 h-8" />,
  },
  {
    title: "CALL CENTERS",
    description: "Supplying optimized inbound call volume and live transfers to high-performance operational centers.",
    icon: <Headset className="w-8 h-8" />,
  },
  {
    title: "AFFILIATE NETWORKS",
    description: "Collaborating with premium networks to expand reach while maintaining strict quality control.",
    icon: <Network className="w-8 h-8" />,
  },
  {
    title: "MEDIA PARTNERS",
    description: "Aligning with data and traffic providers who prioritize transparency and compliant acquisition.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "STRATEGIC VENDORS",
    description: "Deep integrations with technology providers to ensure seamless lead delivery and tracking.",
    icon: <Handshake className="w-8 h-8" />,
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const PartnershipSection = () => {
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 0.07, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex justify-center items-center select-none pointer-events-none -top-8 md:-top-12"
          >
            <span className="text-6xl md:text-[12rem] lg:text-[15rem] font-black whitespace-nowrap uppercase tracking-tighter">
                SCALABLE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl lg:text-6xl font-black tracking-tight relative z-10 uppercase italic leading-tight px-4"
          >
            Strategic Partnerships <br className="hidden md:block" /> 
            That <span className="text-[#22D3EE]">Scale</span>
          </motion.h2>
        </div>

        {/* --- INTRO CONTENT --- */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-300 text-lg mb-6"
            >
                We collaborate with a curated network of buyers, advertisers, and data providers to ensure <span className="text-white font-bold">consistent delivery</span> of high-quality traffic.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm border-l-2 border-[#22D3EE] pl-4 max-w-xl mx-auto"
            >
                We prioritize long-term relationships over short-term volume—creating a stable and scalable ecosystem for all stakeholders.
            </motion.p>
        </div>

        {/* Grid Section with Staggered Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6"
        >
          {partners.map((item, index) => (
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
                  <h3 className="font-black text-xs lg:text-sm tracking-widest leading-tight mb-3 min-h-[40px] uppercase text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] lg:text-[11px] leading-relaxed mb-6 font-medium group-hover:text-slate-200 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-end mt-auto relative z-20">
                  <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#22D3EE]/10 md:bg-white/5 border border-[#22D3EE]/30 md:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] group-hover:shadow-[0_0_15px_#22D3EE]">
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#22D3EE] group-hover:text-[#10143E] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Background Glow Overlay */}
              <div className="absolute inset-0 blur-2xl rounded-2xl -z-10 opacity-30 md:opacity-0 md:group-hover:opacity-40 transition-opacity button-gradient-rail" />
            </motion.div>
          ))}
        </motion.div>

        {/* --- CLOSING LINE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
            <h4 className="text-white text-xl md:text-2xl font-black italic tracking-tighter mb-4">
                "If you value quality, transparency, and scale—we’re built to work together."
            </h4>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-[#22D3EE] mx-auto rounded-full shadow-[0_0_10px_#22D3EE]" 
            />
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipSection;