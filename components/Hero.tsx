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
    <section className="relative min-h-screen pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-20 flex flex-col justify-center bg-bg-base overflow-hidden">
      {/* Background SVG vector shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="absolute top-0 right-0 w-1/2 h-full text-bg-secondary" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100 0 C70 30, 80 70, 100 100 Z" fill="currentColor" />
        </svg>
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-accent/5 filter blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-primary/5 filter blur-3xl" />
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
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#E6ECE8] text-primary border border-primary/10 tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5 mr-2 text-accent" />
                Govt-Authorized EV Infrastructure Consulting
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary font-heading leading-[1.1] tracking-tight"
            >
              Power Your Property with the <span className="text-secondary relative inline-block">Future<span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent/25 rounded" /></span> of EV Charging
            </motion.h1>

            {/* Narrative Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed font-sans max-w-xl"
            >
              Helping landowners, petrol pumps, malls, hotels, and commercial establishments qualify, register, and deploy certified EV Charging stations under optimized investment models with guaranteed compliance.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-primary text-white font-semibold rounded-full luxury-shadow hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Apply Online Now
                <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#investment-models"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white border border-border-subtle text-text-main font-medium rounded-full hover:bg-bg-secondary transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Explore Investment Plans
              </Link>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-border-subtle"
            >
              {statItems.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-semibold text-primary font-heading">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-muted mt-1 font-medium leading-tight">
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
            <div className="relative w-full max-w-[480px] aspect-4/5 rounded-[32px] overflow-hidden luxury-shadow accent-border-gradient">
              {/* Main Image */}
              <Image
                src="/hero_ev_hub.png"
                alt="EV Hindustan Corp Premium Charging Hub"
                fill
                priority
                className="object-cover transition-transform duration-8000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Cards */}
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -right-4 sm:-right-6 md:-right-10 bg-white/95 backdrop-blur-md border border-border-subtle p-3 sm:p-4 rounded-2xl luxury-shadow items-center space-x-3 w-40 sm:w-48 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium">Clearance Rate</p>
                <p className="text-sm font-semibold text-primary font-heading">100% Guaranteed</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-8 -left-4 sm:-left-6 md:-left-10 bg-white/95 backdrop-blur-md border border-border-subtle p-3 sm:p-4 rounded-2xl luxury-shadow items-center space-x-3 w-44 sm:w-52 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium">State-Level Empanelled</p>
                <p className="text-sm font-semibold text-secondary font-heading">Grid Sync Approval</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
