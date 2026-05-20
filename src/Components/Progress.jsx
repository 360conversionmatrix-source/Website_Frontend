import {
  LuTarget,
  LuMegaphone,
  LuMonitor,
  LuMail,
  LuPhoneCall
} from "react-icons/lu";
import { FaArrowsSpin } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // 1. Import Framer Motion

const stations = [
  { id: "01", title: "TARGETING", desc: "DEFINE YOUR AUDIENCE", icon: LuTarget, color: "#a855f7" },
  { id: "02", title: "AD CAMPAIGNS", desc: "LAUNCH EFFECTIVE ADS", icon: LuMegaphone, color: "#eab308" },
  { id: "03", title: "LANDING PAGES", desc: "DESIGN HIGH-CONVERTING PAGES", icon: LuMonitor, color: "#f97316" },
  { id: "04", title: "FOLLOW-UP", desc: "CAPTURE & NURTURE LEADS", icon: LuMail, color: "#3b82f6" },
  { id: "05", title: "CALL ROUTING", desc: "DIRECT CALLS TO AGENTS", icon: FaArrowsSpin, color: "#06b6d4" },
  { id: "06", title: "INBOUND CALLS", desc: "ENGAGE & CONVERT CALLS", icon: LuPhoneCall, color: "#ec4899" }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const RoadmapHeader = () => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="text-center mb-16 md:mb-24 relative z-10"
  >
    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 md:mb-10">
      <span className="text-xs font-bold text-slate-300 tracking-wide uppercase">
        Your future. Without the noise.
      </span>
    </div>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-8 leading-tight bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] bg-clip-text text-transparent">
      HOW WE GENERATE LEADS
    </h1>
    <h2 className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed">
      PROCESS IN STEPS TO GENERATE INBOUND CALLS
    </h2>
  </motion.div>
);

const StationCard = ({ station, active, onClick }) => (
  <motion.div
    variants={fadeInUp}
    onClick={onClick}
    className="flex flex-col items-center text-center cursor-pointer transition-all duration-500 relative z-10"
  >
    <div className={`relative mb-12 transition-all duration-500 ${active ? "scale-110" : ""}`}>
      {active && (
        <div className="absolute inset-[-2px] rounded-[2rem] overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, transparent 50%, #818cf8 75%, #22d3ee 100%)"
            }}
          />
        </div>
      )}
      <div
        className={`w-24 h-24 rounded-[2rem] flex items-center justify-center relative z-10 backdrop-blur-xl border-2 transition-all duration-500 ${
          active ? "border-transparent bg-slate-900" : "bg-slate-900/50 border-slate-700"
        }`}
      >
        <station.icon className={`w-10 h-10 ${active ? "text-indigo-400" : "text-slate-600"}`} />
      </div>
    </div>
    <h3 className={`text-xl font-black mb-2 transition-colors duration-500 ${active ? "text-white" : "text-slate-600"}`}>
      {station.title}
    </h3>
    <p className={`text-[10px] font-bold uppercase tracking-[0.15em] max-w-[180px] px-2 transition-colors duration-500 ${active ? "text-slate-400" : "text-slate-700"}`}>
      {station.desc}
    </p>
  </motion.div>
);

const DesktopRoadmap = ({ stations, activeStep, setActiveStep }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="hidden md:block w-full max-w-[1400px] mx-auto relative pb-32"
  >
    {/* RAIL LINE: Now animates its width from 0 on scroll */}
    <div className="absolute top-12 left-12 right-12 h-0.5 bg-slate-800/50 overflow-hidden z-0">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(activeStep / (stations.length - 1)) * 100}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
      />
    </div>
    <div className="flex justify-between items-start relative px-0">
      {stations.map((station, i) => (
        <StationCard key={station.id} station={station} active={activeStep === i} onClick={() => setActiveStep(i)} />
      ))}
    </div>
  </motion.div>
);

const MobileRoadmap = ({ stations, activeStep, setActiveStep }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="md:hidden max-w-2xl mx-auto relative px-4"
  >
    <div className="absolute left-[44px] top-4 bottom-4 w-0.5 bg-slate-800/50 overflow-hidden z-0">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: `${(activeStep / (stations.length - 1)) * 100}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500"
      />
    </div>
    <div className="space-y-12 py-4">
      {stations.map((station, i) => {
        const active = activeStep === i;
        return (
          <motion.div 
            variants={fadeInUp}
            key={station.id} 
            onClick={() => setActiveStep(i)} 
            className="flex items-start gap-8 cursor-pointer relative z-10"
          >
            <div className={`relative transition-all duration-500 ${active ? "scale-110" : ""}`}>
              {active && (
                <div className="absolute inset-[-2px] rounded-2xl overflow-hidden pointer-events-none">
                  <div 
                    className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
                    style={{ background: "conic-gradient(from 0deg, transparent 0%, transparent 50%, #818cf8 75%, #22d3ee 100%)" }}
                  />
                </div>
              )}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 backdrop-blur-xl border-2 transition-all duration-500 ${active ? "border-transparent bg-slate-900" : "bg-slate-900/50 border-slate-700"}`}>
                <station.icon className={`w-8 h-8 ${active ? "text-indigo-400" : "text-slate-500"}`} />
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className={`text-xl font-black ${active ? "text-white" : "text-slate-400"}`}>{station.title}</h3>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{station.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((s) => (s + 1) % stations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-slate-950 py-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Glows with subtle pulse */}
      <motion.div 
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-[#0F172B]/90 top-[-300px] left-1/2 -translate-x-1/2 blur-[120px] rounded-full" 
      />
      <div className="absolute w-[500px] h-[500px] bg-sky-500/10 bottom-[-100px] right-[-100px] blur-[120px] rounded-full" />
      
      <RoadmapHeader />
      <DesktopRoadmap stations={stations} activeStep={activeStep} setActiveStep={setActiveStep} />
      <MobileRoadmap stations={stations} activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
  );
};

export default ProgressBar;