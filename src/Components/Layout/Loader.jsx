import React, { useEffect, useState } from 'react';
import img from '../../assets/360.png';

// Notice we accept the onComplete prop here from your App.jsx
const SciFiPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate smooth progress loading up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Let the user see 100% for a brief moment, then unmount the loader cleanly
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); 
          
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117] font-mono select-none overflow-hidden">
      
      {/* Dynamic CSS Injector for Custom Keyframes */}
      <style>{`
        @keyframes custom-spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes custom-spin-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes custom-ping-pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .animate-spin-slow { animation: custom-spin-clockwise 20s linear infinite; }
        .animate-spin-reverse-medium { animation: custom-spin-counter 12s linear infinite; }
        .animate-spin-fast { animation: custom-spin-clockwise 4s linear infinite; }
        .animate-spin-reverse-inner { animation: custom-spin-counter 6s linear infinite; }
        .animate-radar-pulse { animation: custom-ping-pulse 2.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Main Rings Container */}
      <div className="relative flex items-center justify-center h-96 w-96">
        
        {/* Layer 1: Deep Blue Central Glow */}
        <div className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute h-24 w-24 rounded-full bg-gradient-to-r from-cyan-600/30 to-blue-600/30 blur-xl" />

        {/* Layer 2: Expanding Radar Wave */}
        <div className="absolute h-72 w-72 rounded-full border border-cyan-500/40 animate-radar-pulse" />

        {/* Layer 3: Outermost Thin Segmented Ring */}
        <div className="absolute h-80 w-80 rounded-full border border-dashed border-slate-700 animate-spin-slow" />

        {/* Layer 4: Multi-Color Splash Ring */}
        <div className="absolute h-72 w-72 rounded-full border-4 border-double border-t-pink-500 border-r-yellow-400 border-b-cyan-500 border-l-transparent opacity-90 animate-spin-reverse-medium" />

        {/* Layer 5: Fast Tech Accent Ring */}
        <div className="absolute h-64 w-64 rounded-full border-2 border-dashed border-t-cyan-400 border-r-transparent border-b-pink-500 border-l-transparent animate-spin-fast" />

        {/* Layer 6: Inner Rotating Bracket Ring */}
        <div className="absolute h-48 w-48 rounded-full border-[3px] border-t-cyan-400 border-b-yellow-400 border-l-transparent border-r-transparent opacity-80 animate-spin-reverse-inner" />

        {/* Layer 7: Central Content (Logo & Percentage) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          
          <span className="mt-4 text-3xl font-light tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {progress}%
          </span>
        </div>

      </div>

      {/* System Status Subtext */}
      <div className="mt-4 flex flex-col items-center space-y-1 text-center">
        <div className="flex items-center space-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]">
            System Pre-Load In Progress
          </p>
        </div>
        <p className="text-[10px] tracking-widest text-slate-500 uppercase">
          Please Wait...
        </p>
      </div>

    </div>
  );
};

export default SciFiPreloader;