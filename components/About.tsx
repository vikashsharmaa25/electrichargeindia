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
            <div className="relative w-full aspect-square md:aspect-4/5 flex items-center justify-center min-h-95 sm:min-h-110">
              {/* Background dot grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#145A4A_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-15" />
              
              {/* Primary Image: Corporate/Meeting */}
              <div className="absolute top-0 left-0 w-[70%] aspect-square sm:w-[75%] rounded-[24px] overflow-hidden luxury-shadow border border-border-subtle z-10 transition-transform duration-500 hover:scale-102">
                <Image
                  src="/corporate_consultation.jpg"
                  alt="Corporate EV consulting board room meeting"
                  fill
                  sizes="(max-width: 768px) 70vw, 350px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Secondary Image: Highway Charging */}
              <div className="absolute bottom-6 right-0 w-[65%] aspect-square rounded-[24px] overflow-hidden luxury-shadow border-2 border-white z-20 transition-transform duration-500 hover:scale-102 shadow-2xl">
                <Image
                  src="/highway_charging.jpg"
                  alt="Highway EV fast charging station"
                  fill
                  sizes="(max-width: 768px) 65vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Float Card */}
              <div className="absolute -bottom-2 -left-2 sm:-left-4 bg-white/95 backdrop-blur border border-border-subtle p-3.5 sm:p-4 rounded-2xl luxury-shadow max-w-xs z-30 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-extrabold text-xs text-primary">Certified Compliant</p>
                    <p className="text-[10px] text-text-muted mt-1 leading-normal font-sans">
                      Adhering strictly to CEA standards, MoP regulations, and DISCOM synchronization laws.
                    </p>
                  </div>
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
