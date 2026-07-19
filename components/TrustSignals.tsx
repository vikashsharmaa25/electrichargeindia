"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Landmark, FileCheck2, Map, ShieldAlert, UserCheck, CheckSquare, Zap, Cpu } from "lucide-react";

export default function TrustSignals() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const signals = [
    {
      icon: Landmark,
      title: "Government Scheme Navigation",
      desc: "Ensure complete alignment with central and state subsidies, FAME-II requirements, and state-level incentives.",
    },
    {
      icon: FileCheck2,
      title: "Complete Documentation Assistance",
      desc: "Step-by-step assistance in drafting NOCs, municipal permissions, power load certificates, and legal documentation.",
    },
    {
      icon: Map,
      title: "Advanced Site Evaluation",
      desc: "Feasibility inspections including traffic volume calculations, grid spacing assessments, and structural accessibility.",
    },
    {
      icon: Cpu,
      title: "Grid & Charger Sync Advisory",
      desc: "Professional guidance in choosing standard, fast, and ultra-fast charging hardware (CCS2, GB/T, AC Type 2).",
    },
    {
      icon: UserCheck,
      title: "Dedicated Relationship Manager",
      desc: "Single-point-of-contact advisory team guiding you through technical, legal, and operational onboarding.",
    },
    {
      icon: ShieldAlert,
      title: "Quick Approval Assistance",
      desc: "Facilitate speedy electricity load approvals, pollution clearances, and local body compliance checks.",
    },
    {
      icon: Zap,
      title: "Flexible Investment Frameworks",
      desc: "Compare Company-Owned (COCO), Partner-Owned (POPO), and Lease options according to budget constraints.",
    },
    {
      icon: CheckSquare,
      title: "End-to-End Implementation",
      desc: "Comprehensive engineering guidance from civil excavations and cabling to station activation and billing setup.",
    },
  ];

  return (
    <section id="trust" className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            TRUST & COMPLIANCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Why Lead With EV Hindustan Corp?
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Our framework is engineered to simplify the complex technical and regulatory pathways involved in installing commercial electric vehicle charging systems.
          </p>
        </div>

        {/* Signals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {signals.map((sig, idx) => {
            const IconComponent = sig.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white p-8 rounded-custom-lg border border-border-subtle luxury-shadow luxury-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-bg-secondary flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base md:text-lg text-primary mb-3 leading-tight">
                    {sig.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans">
                    {sig.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
