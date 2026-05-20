import React from 'react';
import { motion } from 'framer-motion'; 
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import Expertise from '../Components/Expertise';
import Progress from '../Components/Progress';
import WhyChooseUs from '../Components/Why';
import Form from '../Components/Form';
import Footer from '../Components/Layout/Footer';
import AboutUs from '../Components/AboutUs';
import Industries from '../Components/Industries';
import Compilance from '../Components/Compilance';
import PartnershipSection from '../Components/Partners';
import ContactUs from '../Components/ContactUs';

const Home = () => {
  // Helper to render letters with staggered delays
  const renderStaggeredText = (text, delayOffset = 0) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block animate-letter-reveal"
        style={{ animationDelay: `${(index + delayOffset) * 0.1}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  // Animation Variants for a professional feel
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.8, ease: "easeOut" }
    })
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { delay: 0.4, duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full bg-white text-[#111827] font-sans overflow-x-hidden selection:bg-[#0077c8]/20">
      <style>{`
        @keyframes letter-reveal {
          0%, 10% { transform: translateY(100%); opacity: 0; }
          25%, 75% { transform: translateY(0); opacity: 1; }
          90%, 100% { transform: translateY(-100%); opacity: 0; }
        }

        .animate-letter-reveal {
          display: inline-block;
          animation: letter-reveal 4s cubic-bezier(0.6, 0.01, 0.05, 0.95) infinite;
          fill-mode: both;
        }

        .reveal-container {
          display: inline-flex;
          overflow: hidden;
          vertical-align: bottom;
          height: 1.2em;
          color: #0077c8;
        }
      `}</style>
      
      {/* 1. HERO HOME SECTION */}
      <section id="home" className="relative w-full overflow-hidden bg-white">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 grid md:grid-cols-2 items-center gap-12 lg:gap-12">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-8 max-w-5xl mx-auto md:mx-0 order-2 md:order-1">
            <motion.h1 
              custom={0.1} initial="hidden" animate="visible" variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-950"
            >
              High-Intent Inbound Calls That Drive {" "}
              <span className="reveal-container">
                {renderStaggeredText("Real Conversions")}
              </span>
            </motion.h1>

            <motion.p 
              custom={0.3} initial="hidden" animate="visible" variants={fadeInUp}
              className="text-lg md:text-xl text-[#374151] leading-relaxed max-w-xl"
            >
              Conversion Matrix 360 specializes in compliant inbound call generation and opt-in lead solutions for Insurance, SSDI, Final Expense (FE), and Home Services.
            </motion.p>

            <motion.div 
              custom={0.5} initial="hidden" animate="visible" variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4"
            >
              {/* Primary Button */}
              <button className="group relative cursor-pointer p-[1.2px] inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 active:scale-95 w-full sm:w-auto">
                <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#01ffff_0%,#3b1c8f_40%,#7a00ff_50%,#3b1c8f_60%,#01ffff_100%)]" />
                <div className="relative inline-flex items-center justify-between gap-4 px-8 py-3 bg-white text-[#111827] rounded-full text-lg w-full h-full shadow-sm">
                  <span>Get Started</span>
                  <div className="rounded-full p-2 bg-white border-2 border-gray-100 transition-all duration-300 group-hover:border-[#0077c8] group-hover:bg-[#f0f9ff] group-hover:translate-x-1 flex items-center justify-center">
                    <FaArrowRightLong className="text-[#111827] group-hover:text-[#0077c8]" />
                  </div>
                </div>
              </button>

              {/* Secondary Button */}
              <button className="group relative cursor-pointer p-[1.2px] inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 active:scale-95 w-full sm:w-auto">
                <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#01ffff_0%,#3b1c8f_40%,#7a00ff_50%,#3b1c8f_60%,#01ffff_100%)]" />
                <div className="relative inline-flex items-center justify-between gap-4 px-8 py-3 bg-white text-[#111827] rounded-full text-lg w-full h-full shadow-sm">
                  <span>Request Demo</span>
                  <div className="rounded-full p-2 bg-white border-2 border-gray-100 transition-all duration-300 group-hover:border-[#0077c8] group-hover:bg-[#f0f9ff] group-hover:scale-110 flex items-center justify-center">
                    <IoCallSharp className="text-[#111827] group-hover:text-[#0077c8]" />
                  </div>
                </div>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial="hidden" animate="visible" variants={imageFade}
            className="relative w-full flex justify-center md:justify-end order-1 md:order-2"
          >
            <img 
              src="https://res.cloudinary.com/diicgo6ay/image/upload/v1776711809/Gemini_Generated_Image_yhkuijyhkuijyhku_hgxngs.png"
              alt="Conversion Matrix 360 Inbound Call Agent" 
              className="w-full max-w-[900px] object-contain"
            />
          </motion.div>
        </div>
        
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-sky-50 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-20 -z-10" />
      </section>

      {/* Middle Inline Sections */}
      <Progress />
      <WhyChooseUs />
      <Form />

      {/* 2. TARGET SECTIONS IDENTIFIED BY INTERSECTION OBSERVER */}
      <section id="about-us">
        <AboutUs />
      </section>

      <section id="services">
        <Expertise />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <section id="compliance">
        <Compilance />
      </section>

      <section id="partners">
        <PartnershipSection />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;