"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, ShieldCheck, Zap, Server, BarChart3, HelpCircle } from "lucide-react";

export default function InvestmentModels() {
  const [activeTab, setActiveTab] = useState<"urban" | "highway">("urban");

  const models = [
    {
      name: "Starter Model",
      badge: "Retail & Apartments",
      investment: "₹1.5 Lakh - ₹3 Lakh",
      suitability: "Appartment societies, retail storefronts, private parking garages.",
      chargers: "AC Chargers (3.3kW - 22kW)",
      gridType: "Single/Three-Phase Low Tension",
      support: [
        "Online Documentation templates",
        "Municipal NOC checklist",
        "Hardware selection advisory",
        "Email support desk",
      ],
      recommended: false,
    },
    {
      name: "Standard Model",
      badge: "Commercial Units",
      investment: "₹5 Lakh - ₹10 Lakh",
      suitability: "Hotels, upscale restaurants, urban retail showrooms, offices.",
      chargers: "Dual AC + DC Chargers (up to 30kW CCS2)",
      gridType: "Three-Phase 11kV Sync",
      support: [
        "Turnkey DISCOM application help",
        "On-site layout drafting",
        "NOC liaison assistance",
        "Dedicated account specialist",
      ],
      recommended: false,
    },
    {
      name: "Professional Model",
      badge: "Highways & Fuel Stations",
      investment: "₹15 Lakh - ₹30 Lakh",
      suitability: "Highway bypass land, bustling fuel bunks, commercial malls.",
      chargers: "High-voltage Dual DC Chargers (60kW - 120kW)",
      gridType: "Dedicated Step-down Transformer",
      support: [
        "100% turnkey liaison support",
        "CPO contract matchmaking desk",
        "State government subsidy filing",
        "Priority grid connection support",
      ],
      recommended: true,
    },
    {
      name: "Enterprise Model",
      badge: "National Infrastructure",
      investment: "₹40 Lakh+",
      suitability: "Large scale transit depots, industrial corridors, multi-acre land.",
      chargers: "Ultra-fast DC Charging Hubs (150kW - 360kW)",
      gridType: "High Tension 33kV Grid Sync",
      support: [
        "Joint-venture equity layout advisory",
        "Solar grid integration planning",
        "Custom billing software configuration",
        "Executive board advisory access",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="investment-models" className="py-10 md:py-16 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            INVESTMENT SCHEMES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Structured Deployment Models
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Select an infrastructure framework aligned with your property volume, electrical capacity, and capital requirements.
          </p>

          {/* Interactive Toggle */}
          <div className="mt-8 inline-flex p-1 bg-bg-secondary rounded-full border border-border-subtle">
            <button
              onClick={() => setActiveTab("urban")}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === "urban"
                ? "bg-primary text-white shadow"
                : "text-text-muted hover:text-text-main"
                }`}
            >
              Urban Commercial Units
            </button>
            <button
              onClick={() => setActiveTab("highway")}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === "highway"
                ? "bg-primary text-white shadow"
                : "text-text-muted hover:text-text-main"
                }`}
            >
              Highways & Industrial Depots
            </button>
          </div>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-custom-lg border p-8 flex flex-col justify-between transition-all duration-300 ${
                model.recommended
                  ? "border-accent ring-2 ring-accent/30 scale-[1.02] shadow-[0_15px_40px_-15px_rgba(199,164,76,0.18)] z-10"
                  : "border-border-subtle hover:border-primary/45 luxury-shadow-hover hover:scale-[1.01]"
              }`}
            >
              {model.recommended && (
                <>
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/15 via-transparent to-primary/10 rounded-custom-lg pointer-events-none" />
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold bg-accent text-primary tracking-widest uppercase shadow-md flex items-center gap-1 z-20">
                    <Zap className="w-3 h-3 fill-current animate-bounce" /> Highly Recommended
                  </span>
                </>
              )}

              {/* Vector tech pattern inside cards on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#145A4A_1px,transparent_1px)] [background-size:10px_10px] opacity-5 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-[10px] font-semibold tracking-wider text-accent uppercase bg-bg-secondary px-2.5 py-1 rounded-md">
                    {model.badge}
                  </span>
                  <h3 className="text-xl font-semibold font-heading text-primary mt-4 mb-2 group-hover:text-secondary transition-colors duration-300">
                    {model.name}
                  </h3>
                  <div className="mt-4">
                    <p className="text-xs text-text-muted">Estimated Capex Range</p>
                    <p className="text-2xl font-semibold text-primary font-heading mt-1">
                      {model.investment}
                    </p>
                  </div>
                </div>

                <hr className="border-border-subtle my-5" />

                {/* Scope of Fit */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-1 flex items-center">
                      <Zap className="w-3.5 h-3.5 mr-1 text-accent group-hover:animate-pulse" /> Chargers
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">{model.chargers}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-1 flex items-center">
                      <Server className="w-3.5 h-3.5 mr-1 text-primary" /> Grid Feed
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">{model.gridType}</p>
                  </div>
                </div>

                <hr className="border-border-subtle my-5" />

                {/* Support details */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-[11px] font-semibold text-text-main uppercase tracking-wider">
                    Included Consultation:
                  </h4>
                  {model.support.map((sup, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-xs text-text-muted leading-relaxed font-sans">{sup}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <a
                href="#apply"
                className={`relative z-10 w-full text-center block py-3 text-xs font-semibold rounded-xl transition-all duration-300 ${
                  model.recommended
                    ? "bg-primary text-white hover:bg-secondary shadow-md hover:shadow-lg"
                    : "bg-bg-secondary text-text-main hover:bg-border-subtle"
                }`}
              >
                Apply For {model.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote Badge */}
        <div className="mt-12 p-4 bg-bg-secondary rounded-custom-md border border-border-subtle flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-primary">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs font-medium font-sans">
              All investment models align with electricity tariff structures regulated by state authorities.
            </span>
          </div>
          <a href="#faq" className="text-xs font-semibold text-primary hover:text-accent transition-colors flex items-center">
            Review Compliance FAQs <Info className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
