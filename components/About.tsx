"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export default function About() {
  const points = [
    "Empanelled grid synchronisation consultants",
    "Expertise in FAME-II subsidy documentation and approval",
    "Customised investment portfolios tailored to local site traffic",
    "Partner network spanning leading charge-point operators (CPOs)",
  ];

  return (
    <section id="about" className="py-10 md:py-16 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium Image Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden luxury-shadow accent-border-gradient">
              <Image
                src="/corporate_consultation.png"
                alt="Corporate EV consulting board room meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Float Card */}
            <div className="absolute bottom-6 -right-4 sm:-right-6 md:-right-8 bg-white/95 backdrop-blur border border-border-subtle p-4 sm:p-6 rounded-2xl luxury-shadow max-w-xs hidden sm:block">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-heading font-extrabold text-sm text-primary">Certified Compliant</p>
                  <p className="text-xs text-text-muted mt-1 leading-normal">
                    Adhering strictly to CEA standards, MoP regulations, and DISCOM synchronization laws.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              WHO WE ARE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary font-heading leading-tight tracking-tight">
              Facilitating India's Premier EV Power Grid Infrastructure
            </h2>

            <p className="text-base text-text-muted leading-relaxed font-sans">
              At EV Hindustan Corp, we function as a key regulatory and consulting bridge between property owners and premium charge-point networks. Our mission is to accelerate the transition to sustainable mobility by unlocking commercial estates, highway bypasses, and industrial sectors for high-yield EV charging deployments.
            </p>

            <p className="text-sm text-text-muted leading-relaxed font-sans">
              We do not build simple retail franchises. We orchestrate government-approved infrastructure synchronization projects. Whether you are a landowner seeking passive high-margin rental income or a commercial enterprise seeking green credentials, our specialized team tailors the deployment process to fit your operational reality.
            </p>

            {/* Custom Points list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-text-main font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center text-sm font-semibold text-primary group"
              >
                Start Feasibility Application
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 text-accent" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
