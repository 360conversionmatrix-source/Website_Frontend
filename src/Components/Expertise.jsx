import React from 'react';
import { motion } from 'framer-motion'; 
import { 
  Search, 
  Monitor, 
  Megaphone, 
  PhoneIncoming, 
  BarChart3, 
  Zap, 
  Layers, 
  PhoneForwarded, 
  PieChart, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import img from "../assets/360.png";

const services = [
  { title: "SEARCH ENGINE OPTIMIZATION - SEO", description: "Enhance your online visibility with our professional SEO services. We optimize websites and landing pages to rank higher on search engines.", icon: <Search className="w-8 h-8" /> },
  { title: "WEBSITE DESIGN & DEVELOPMENT", description: "Create a powerful digital presence with our modern website and landing page solutions tailored for inbound calls and lead capture.", icon: <Monitor className="w-8 h-8" /> },
  { title: "SOCIAL MEDIA MARKETING", description: "Engage targeted audiences and build brand trust through social media strategies across Facebook, Instagram, and other platforms.", icon: <Megaphone className="w-8 h-8" /> },
  { title: "INBOUND CALL LEAD GENERATION", description: "Drive high-intent customer calls with our specialized inbound marketing systems for insurance and home service verticals.", icon: <PhoneIncoming className="w-8 h-8" /> },
  { title: "PERFORMANCE MARKETING (PAY-PER-CALL)", description: "Maximize ROI with our performance-based acquisition models. We deliver qualified calls on a cost-per-call or cost-per-lead basis.", icon: <BarChart3 className="w-8 h-8" /> },
  { title: "GOOGLE ADS - SEARCH & CALL", description: "High-converting Google Ads campaigns designed for inbound calls. From keyword targeting to call-only ads.", icon: <Zap className="w-8 h-8" /> },
  { title: "LANDING PAGE & FUNNEL OPTIMIZATION", description: "Our team designs high-performing landing pages built for maximum call conversion and optimized for mobile users.", icon: <Layers className="w-8 h-8" /> },
  { title: "LIVE TRANSFER & CALL ROUTING", description: "We provide warm, qualified live transfer calls routed directly to your sales agents using smart distribution systems.", icon: <PhoneForwarded className="w-8 h-8" /> },
  { title: "CALL TRACKING & ANALYTICS", description: "Complete call tracking and performance reporting using industry-leading platforms like Ringba and TrackDrive.", icon: <PieChart className="w-8 h-8" /> },
  { title: "COMPLIANCE & VERIFIED LEADS", description: "Strict compliance standards providing TCPA-compliant opt-in data and Jornaya ID lead validation.", icon: <ShieldCheck className="w-8 h-8" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
};

const ExpertiseSection = ({ setSelectedService, onRedirect }) => {
  
  const handleServiceSelection = (serviceTitle) => {
    if (setSelectedService) {
      setSelectedService(serviceTitle);
    }
    if (onRedirect) {
      // Small timeout allows asynchronous layout states to settle completely
      setTimeout(() => {
        onRedirect();
      }, 50);
    }
  };

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
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 pt-10"
        >
          <div className="relative group shadow-[0_0_20px_rgba(139,44,245,0.3)]">
            <div className="relative p-[1.5px] rounded-full overflow-hidden">
              <div className="absolute inset-[-1000%] animate-spin-slow button-gradient-rail" />
              <div className="relative bg-[#020617] pl-6 pr-10 py-2 rounded-full z-10">
                <span className="font-bold tracking-wider text-md uppercase text-white">
                  Conversion Matrix
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.07, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex justify-center items-center select-none pointer-events-none -top-8 md:-top-12"
          >
            <span className="text-6xl md:text-[12rem] lg:text-[15rem] font-black whitespace-nowrap uppercase tracking-tighter">
                EXPERTISE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-6xl lg:text-6xl font-black tracking-tight relative z-10 uppercase italic leading-tight px-4"
          >
            Our Digital Marketing <br className="hidden md:block" /> 
            <span className="text-[#22D3EE]">Expertise</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.button 
              key={index} 
              variants={cardVariants}
              type="button"
              onClick={() => handleServiceSelection(service.title)}
              className="group text-left block w-full relative rounded-2xl p-[1.5px] transition-all duration-500 md:hover:-translate-y-3 overflow-hidden bg-transparent border-0 outline-none focus:outline-none cursor-pointer"
            >
              <div className="absolute inset-[-400%] animate-spin-slow button-gradient-rail opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl p-6 flex flex-col h-full min-h-[310px] z-10 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 opacity-20 md:opacity-10 md:group-hover:opacity-30 transition-opacity duration-500" 
                  style={{
                    background: 'radial-gradient(circle at top right, #8B2CF5, #22D3EE, transparent)'
                  }}
                />
                
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative z-20 transition-transform group-hover:scale-110">
                   <div className="text-[#10143E]">
                    {service.icon}
                   </div>
                </div>

                <div className="relative z-20 flex-grow">
                  <h3 className="font-black text-xs lg:text-sm tracking-widest leading-tight mb-3 min-h-[40px] uppercase text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 md:text-slate-400 text-[10px] lg:text-[11px] leading-relaxed mb-6 font-medium md:group-hover:text-slate-200 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-end mt-auto relative z-20">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#22D3EE]/10 md:bg-white/5 border border-[#22D3EE]/30 md:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] group-hover:shadow-[0_0_15px_#22D3EE]">
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#22D3EE] group-hover:text-[#10143E] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 blur-2xl rounded-2xl -z-10 opacity-30 md:opacity-0 md:group-hover:opacity-40 transition-opacity button-gradient-rail" />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertiseSection;