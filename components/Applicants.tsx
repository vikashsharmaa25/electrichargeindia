"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hotel, Fuel, Landmark, Building, MapPin, Warehouse, Trees, School, Hospital, ShieldCheck } from "lucide-react";

export default function Applicants() {
  const [activeCategory, setActiveCategory] = useState<"all" | "commercial" | "highway" | "institutional">("all");

  const categories = [
    { id: "all", label: "All Properties" },
    { id: "commercial", label: "Commercial & Hospitality" },
    { id: "highway", label: "Highway & Land" },
    { id: "institutional", label: "Institutional & Residential" },
  ];

  const properties = [
    { name: "Hotels & Resorts", cat: "commercial", icon: Hotel, desc: "Enhance guest retention with premium high-speed destination chargers." },
    { name: "Petrol Pumps & Bunks", cat: "highway", icon: Fuel, desc: "Diversify energy delivery by launching high-revenue DC charger points." },
    { name: "Malls & Retail Parks", cat: "commercial", icon: Building, desc: "Increase consumer dwell times and capture retail charging margins." },
    { name: "Restaurants & Dhabas", cat: "commercial", icon: Landmark, desc: "Perfect rest stops for highway EV travelers waiting during meals." },
    { name: "Commercial Office Parks", cat: "commercial", icon: Building, desc: "Deploy EV charging structures for corporate fleets and executives." },
    { name: "Highway Property Land", cat: "highway", icon: MapPin, desc: "Convert empty bypass parcels into key national transit charging depots." },
    { name: "Warehouse & Logistics Hubs", cat: "highway", icon: Warehouse, desc: "Power delivery fleets overnight with smart load management systems." },
    { name: "Private Land Owners", cat: "highway", icon: Trees, desc: "Lease highly visible city bypass plots to national Charge Point Operators." },
    { name: "Apartment & Housing Societies", cat: "institutional", icon: Building, desc: "Turn residential parking spaces into certified, safe grid charging zones." },
    { name: "Educational Institutes", cat: "institutional", icon: School, desc: "Establish green credentials with student, staff, and fleet charging points." },
    { name: "Hospitals & Medical Centers", cat: "institutional", icon: Hospital, desc: "Provide emergency-ready, reliable charging ports for visitor vehicles." },
  ];

  const filteredProperties = activeCategory === "all"
    ? properties
    : properties.filter(p => p.cat === activeCategory);

  return (
    <section id="applicants" className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            ELIGIBILITY LIST
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Who Can Establish Charging Stations?
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Our empanelled network consults across a diverse footprint of commercial, hospitality, institutional, and land holdings.
          </p>

          {/* Categories Tab Selector */}
          <div className="mt-8 max-w-full overflow-x-auto scrollbar-none p-1 bg-white rounded-full border border-border-subtle shadow-sm flex items-center justify-start md:justify-center gap-1.5 md:max-w-2xl mx-auto whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-300 z-10 select-none cursor-pointer shrink-0 ${activeCategory === cat.id
                  ? "text-white"
                  : "text-text-muted hover:text-text-main hover:bg-bg-secondary/50"
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeApplicantTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProperties.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <motion.div
                key={prop.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-custom-lg border border-border-subtle luxury-shadow luxury-shadow-hover flex flex-col justify-between"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center text-primary shrink-0">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-primary mb-2">
                      {prop.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">
                      {prop.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="inline-flex items-center text-[10px] font-semibold text-accent uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Grid Compatible
                  </span>
                  <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                    {prop.cat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
