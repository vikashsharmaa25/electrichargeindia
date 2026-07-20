"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    // Simulating progress loading state
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 12);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const word1 = "EV";
  const word2 = "HINDUSTAN";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };


  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#07241e]"
        >
          {/* Subtle background tech glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,164,76,0.08)_0%,transparent_60%)] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

          {/* Animated Logo Container */}
          <div className="relative flex flex-col items-center select-none pointer-events-none z-10">
            
            {/* STYLISH LOGO */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
              {/* Outer Rotating Energy Ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute w-28 h-28"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="12 18 24 18"
                  className="opacity-70"
                />
              </motion.svg>

              {/* Inner Counter-Rotating Orbit Ring */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute w-20 h-20"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#C7A44C"
                  strokeWidth="1.5"
                  strokeDasharray="6 24"
                  className="opacity-90"
                />
              </motion.svg>

              {/* Center Stylized Lightning Core */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-14 h-14 bg-linear-to-br from-primary to-[#0a2821] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(199,164,76,0.4)] border border-accent/45 relative"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent drop-shadow-[0_0_6px_rgba(199,164,76,0.85)]">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    fill="currentColor"
                    stroke="#C7A44C"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              
              {/* SVG Definitions */}
              <svg className="absolute w-0 h-0">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C7A44C" />
                    <stop offset="50%" stopColor="#2D7A63" />
                    <stop offset="100%" stopColor="#C7A44C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Brand Name (Staggered Characters) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3.5"
            >
              <div className="flex">
                {Array.from(word1).map((char, idx) => (
                  <motion.span
                    key={`w1-${idx}`}
                    variants={letterVariants}
                    className="text-3xl sm:text-4xl font-semibold tracking-wider font-heading text-accent"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex">
                {Array.from(word2).map((char, idx) => (
                  <motion.span
                    key={`w2-${idx}`}
                    variants={letterVariants}
                    className="text-3xl sm:text-4xl font-semibold tracking-wider font-heading text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-[9px] uppercase tracking-[0.3em] text-bg-base mt-2.5 font-medium text-center font-sans"
            >
              National Infrastructure Partner
            </motion.p>
          </div>

          {/* Progress Indicator */}
          <div className="w-56 h-0.5 bg-white/10 rounded-full overflow-hidden mt-12 relative z-10">
            <motion.div
              className="h-full bg-linear-to-r from-accent to-[#e2c16e] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Loading status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-mono text-bg-base/85 mt-4 tracking-[0.2em] z-10"
          >
            {progress}% CHARGED
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
