"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardEdit, FileSpreadsheet, Compass, Coins, HelpCircle, HardDrive, Wrench, Headphones, Handshake, Briefcase } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: ClipboardEdit,
      title: "Registration Assistance",
      desc: "End-to-end guidance to register your property under state EV policies and obtain official empanelment licenses.",
    },
    {
      icon: FileSpreadsheet,
      title: "Regulatory Documentation",
      desc: "Drafting of precise legal files, DISCOM load applications, local municipal approvals, and environmental clearances.",
    },
    {
      icon: Compass,
      title: "Location Feasibility Analysis",
      desc: "Comprehensive engineering analysis measuring regional EV traffic profiles, local grid capacities, and accessibility.",
    },
    {
      icon: Coins,
      title: "Investment & Capex Planning",
      desc: "Financial mapping to compare Return-on-Investment (ROI) margins between company-owned and partner-owned models.",
    },
    {
      icon: HelpCircle,
      title: "Subsidy Allocation Guidance",
      desc: "Streamlined navigation to claim government incentives under state-specific policies and FAME-II frameworks.",
    },
    {
      icon: HardDrive,
      title: "Grid Infrastructure Layouts",
      desc: "Developing architectural layouts for power step-down transformers, grid wiring routes, and space management.",
    },
    {
      icon: Wrench,
      title: "Installation Management",
      desc: "Technical supervision during civil foundations, panel wiring, cabling safety checks, and charger commissioning.",
    },
    {
      icon: Headphones,
      title: "Operational Desk Support",
      desc: "Dedicated compliance helpdesk to manage software integrations, real-time power analytics, and billing sync.",
    },
    {
      icon: Handshake,
      title: "CPO Matchmaking",
      desc: "Bridging the gap between landowners and national charging networks (Statiq, Tata Power, ChargeZone) for lease optimization.",
    },
    {
      icon: Briefcase,
      title: "Commercial Consultation",
      desc: "Targeted strategies for hotel chains, multi-tenant offices, and retail park operators to optimize parking returns.",
    },
  ];

  return (
    <section id="services" className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            CONSULTING SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Custom Consultation Solutions
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Our expert team offers complete regulatory and technical support to launch, operate, and maximize EV charging points.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isSelected = selectedService === idx;

            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setSelectedService(isSelected ? null : idx)}
                className={`group cursor-pointer p-6 rounded-custom-lg border bg-white transition-all duration-350 relative overflow-hidden flex flex-col justify-between ${
                  isSelected 
                    ? "col-span-1 md:col-span-2 border-accent ring-2 ring-accent/30 shadow-lg" 
                    : "border-border-subtle hover:border-primary/45 luxury-shadow-hover hover:shadow-xl"
                }`}
                style={{ minHeight: "220px" }}
              >
                {/* Glowing gradient backdrop visible on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Visual tech matrix dot pattern on card corners */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[radial-gradient(#C7A44C_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm md:text-base text-primary mb-3 group-hover:text-[#2D7A63] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Standard Short Description */}
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {isSelected ? service.desc : `${service.desc.substring(0, 80)}...`}
                  </p>
                </div>

                <div className="relative z-10 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                    {isSelected ? "Collapse" : "Read Details"}
                  </span>
                  <span className="text-[11px] font-medium text-text-muted">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
