"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Shield, Activity, Zap, CheckCircle } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const statItems = [
    { value: "₹180+ Cr", label: "Consulted CAPEX" },
    { value: "1,850+", label: "Verified Locations" },
    { value: "100%", label: "Subsidy Facilitation" },
    { value: "14 Days", label: "Avg. Grid Clearance" },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-12 sm:pt-32 md:pt-36 md:pb-24 flex flex-col justify-center bg-[#0a2e26] overflow-hidden text-white">
      {/* Background SVG vector shapes & Premium Electric Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowing radial backdrops */}
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-radial-to-bl from-[#185e4e]/40 via-[#0a2e26]/90 to-[#071d18] opacity-100" />
        <div className="absolute top-[15%] left-[5%] w-96 h-96 rounded-full bg-accent/5 filter blur-3xl" />
        <div className="absolute bottom-[5%] right-[20%] w-125 h-125 rounded-full bg-primary/10 filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Animated Tech Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(199, 164, 124, 0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          {/* Connecting Circuit Nodes */}
          <path d="M 100 150 L 250 150 L 300 200 L 500 200" fill="none" stroke="#C7A44C" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 800 600 L 950 500 L 1200 500" fill="none" stroke="#2D7A63" strokeWidth="1.5" />

          <circle cx="250" cy="150" r="4" fill="#C7A44C" className="animate-ping" />
          <circle cx="300" cy="200" r="3" fill="#C7A44C" />
          <circle cx="950" cy="500" r="4" fill="#2D7A63" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 md:space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="self-start">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#113e33] text-accent border border-accent/20 tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5 mr-2 text-accent" />
                Govt-Authorized EV Infrastructure Consulting
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-heading leading-[1.1] tracking-tight"
            >
              Power Your Property with the <span className="text-accent relative inline-block">Future<span className="absolute bottom-1 left-0 w-full h-1.5 bg-accent/30 rounded" /></span> of EV Charging
            </motion.h1>

            {/* Narrative Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans max-w-xl"
            >
              Helping landowners, petrol pumps, malls, hotels, and commercial establishments qualify, register, and deploy certified EV Charging stations under optimized investment models with guaranteed compliance.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-accent text-primary font-bold rounded-full shadow-[0_4px_20px_rgba(199,164,76,0.3)] hover:bg-[#b0903f] hover:shadow-[0_4px_30px_rgba(199,164,76,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Apply Online Now
                <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#investment-models"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Explore Investment Plans
              </Link>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/10"
            >
              {statItems.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-semibold text-accent font-heading">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60 mt-1 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Rendering & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-120 aspect-4/5 rounded-4xl overflow-hidden shadow-[0_15px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(199,164,76,0.15)] accent-border-gradient">
              {/* Main Image */}
              <Image
                src="/hero.png"
                alt="EV Hindustan Corp Premium Charging Hub"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className="object-cover transition-transform duration-8000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a2e26]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Cards */}
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -right-4 sm:-right-6 md:-right-10 bg-[#0d3b31]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl items-center space-x-3 w-40 sm:w-48 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Zap className="w-5 h-5 fill-current animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 font-medium">Clearance Rate</p>
                <p className="text-xs sm:text-sm font-semibold text-accent font-heading">100% Guaranteed</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-8 -left-4 sm:-left-6 md:-left-10 bg-[#0d3b31]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl items-center space-x-3 w-44 sm:w-52 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 font-medium">State-Level Empanelled</p>
                <p className="text-xs sm:text-sm font-semibold text-white font-heading">Grid Sync Approval</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
