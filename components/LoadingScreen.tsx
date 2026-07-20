"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    // Fast progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a2821]"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,164,76,0.06)_0%,transparent_60%)] pointer-events-none" />

          {/* Animated Logo Container */}
          <div className="relative flex flex-col items-center select-none pointer-events-none z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(20,90,74,0.3)] border border-white/5 mb-6"
            >
              {/* Spinning/pulsing aura */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-1.5 rounded-xl border border-dashed border-accent/30"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Zap className="w-8 h-8 text-accent fill-current drop-shadow-[0_0_8px_rgba(199,164,76,0.5)]" />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-2xl font-semibold tracking-widest text-bg-base font-heading"
            >
              EV HINDUSTAN
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-[9px] uppercase tracking-[0.25em] text-bg-base mt-1.5 font-medium text-center"
            >
              National Infrastructure Partner
            </motion.p>
          </div>

          {/* Luxury Progress Indicator */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mt-10 relative z-10">
            <motion.div
              className="h-full bg-linear-to-r from-accent to-[#e2c16e] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Loading percentage text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-[10px] font-mono text-bg-base/85 mt-3.5 tracking-[0.15em] z-10"
          >
            {progress}% CHARGED
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
