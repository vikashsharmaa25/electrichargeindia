"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("compliance");

  const categories = [
    { id: "compliance", label: "Policy & Compliance" },
    { id: "financials", label: "Financials & ROI" },
    { id: "technical", label: "Technical & Grid Sync" },
    { id: "operations", label: "Operations & Support" },
  ];

  const faqs = [
    // Policy & Compliance
    {
      cat: "compliance",
      q: "What is the official advisory role of EV Hindustan Corp?",
      a: "EV Hindustan Corp functions as a premium regulatory and engineering advisory firm. We guide applicants through documentation, feasibility assessments, DISCOM grid synchronization, and license registration under relevant state and central policies.",
    },
    {
      cat: "compliance",
      q: "Is EV Hindustan Corp a government body?",
      a: "No, we are an independent corporate consulting firm. We are empanelled with state electricity divisions to guide corporate and private entities in aligning layouts with standards set by the Central Electricity Authority (CEA) and Ministry of Power (MoP).",
    },
    {
      cat: "compliance",
      q: "What clearances are needed to operate a charging station in India?",
      a: "Key clearances include DISCOM power load sanctions, pollution control board NOCs, fire safety clearances, municipal zoning approvals, and local administrative permissions. We assist with drafting and liaisoning for all these approvals.",
    },
    {
      cat: "compliance",
      q: "Are there specific zoning rules for highway EV installations?",
      a: "Yes. Highway plots must satisfy access-permission buffer zones set by NHAI. The land must be converted for commercial use (CLU) and satisfy minimum distance rules from fuel bunks and high-tension towers.",
    },
    {
      cat: "compliance",
      q: "Can I install an EV station on leased land?",
      a: "Yes. Setting up a station requires a registered lease agreement with a remaining tenure of at least 5 to 10 years, accompanied by an explicit No Objection Certificate (NOC) from the landowner.",
    },
    {
      cat: "compliance",
      q: "Do I need a commercial retail license to sell electricity to EVs?",
      a: "The Ministry of Power has de-licensed the operation of public EV charging stations. This means charging station operators do not need an electricity distribution license, provided they meet safety and tariff rules.",
    },

    // Financials & ROI
    {
      cat: "financials",
      q: "What is the expected CAPEX range for setting up a charging station?",
      a: "The capital expenditure starts from ₹1.5 Lakh for basic AC setups in residential complexes and ranges up to ₹30 Lakh to ₹40 Lakh for high-capacity multi-charger DC highway charging hubs.",
    },
    {
      cat: "financials",
      q: "What is the typical timeline to achieve return on investment?",
      a: "Depending on location traffic volumes, charger types, and operational efficiency, ROI typically ranges from 24 to 36 months under optimized commercial models.",
    },
    {
      cat: "financials",
      q: "How do central and state government subsidies work?",
      a: "Government subsidies are structured under FAME-II and state-specific EV promotional schemes. These can provide 20% to 50% capital subsidies on charging equipment. We manage the compliance documentation to ensure you receive these incentives.",
    },
    {
      cat: "financials",
      q: "What are the common revenue models for property owners?",
      a: "We offer three primary models: Lease/Rentals (fixed monthly lease income from CPOs), Partner Owned (you buy the equipment and retain margins), and Company Owned (revenue-share split with CPOs).",
    },
    {
      cat: "financials",
      q: "Are there ongoing operational expenses (OPEX)?",
      a: "Yes. OPEX includes electricity utility bills, software subscription fees (CMS), local maintenance, security personnel, and land maintenance costs.",
    },
    {
      cat: "financials",
      q: "How is billing and user payment managed?",
      a: "Payments are processed digitally via CPO mobile applications (using UPI, credit cards, or digital wallets) integrated with Central Management System (CMS) platforms.",
    },

    // Technical & Grid Sync
    {
      cat: "technical",
      q: "What electrical connection type is required for fast DC chargers?",
      a: "Fast DC chargers (30kW to 120kW) require dedicated high-capacity Three-Phase connections, typically demanding dedicated step-down transformers to handle peak loads safely.",
    },
    {
      cat: "technical",
      q: "What are the differences between CCS2, GB/T, and AC Type 2 charger standards?",
      a: "CCS2 is the standard for European and Indian passenger cars, GB/T is common for older electric commercial fleets, and AC Type 2 is standard for slow home and overnight office charging setups.",
    },
    {
      cat: "technical",
      q: "Can I sync solar panels with my charging station?",
      a: "Yes. We consult on solar micro-grid configurations, net-metering synchronization, and hybrid solar storage setups to lower grid power costs.",
    },
    {
      cat: "technical",
      q: "What is a Charger Management System (CMS)?",
      a: "A CMS is a cloud-based software system that monitors chargers, processes user payments, tracks energy usage, and handles troubleshooting remotely.",
    },
    {
      cat: "technical",
      q: "What is the minimum physical space required?",
      a: "A basic dual-charger AC setup requires 1-2 standard parking bays (approx 150-300 sq.ft.). A highway hub with transformers and amenities demands 1,500 to 5,000 sq.ft.",
    },

    // Operations & Support
    {
      cat: "operations",
      q: "How does EV Hindustan Corp assist with technical installation?",
      a: "We draft engineering layouts, civil foundation designs, and electrical cable routes, and supervise site engineering teams during installation to ensure compliance.",
    },
    {
      cat: "operations",
      q: "What post-setup support is provided?",
      a: "We offer maintenance agreements, firmware updates, grid compliance reviews, and helpdesk support to resolve connectivity or payment processing issues.",
    },
    {
      cat: "operations",
      q: "What happens if a site is rejected during the initial feasibility review?",
      a: "If a site does not meet traffic or grid constraints, we provide an optimization report detailing grid upgrades or charger scale adjustments that can help secure approval.",
    },
    {
      cat: "operations",
      q: "Will I get a dedicated Relationship Manager?",
      a: "Yes. Every approved applicant is assigned a corporate manager who oversees grid filings, hardware selection, and site activation updates.",
    },
    {
      cat: "operations",
      q: "What is the average time to launch a station?",
      a: "The complete setup takes 30 to 60 days. This includes 15-30 days for utility grid load approvals, 7 days for civil works, and 7 days for charger integration and testing.",
    },
  ];

  const filteredFaqs = faqs.filter((f) => f.cat === activeCategory);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 md:py-16 bg-bg-base relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            INFORMATION DEPOT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Review detailed answers regarding corporate compliance, investment planning, and technical specifications.
          </p>

          {/* Accordion Selector Tabs */}
          <div className="mt-8 max-w-full overflow-x-auto scrollbar-none p-1 bg-bg-secondary rounded-full border border-border-subtle flex items-center justify-start md:justify-center gap-1.5 md:max-w-3xl mx-auto whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 ${activeCategory === cat.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-border-subtle transition-all duration-300 shadow-sm hover:border-primary/20 overflow-hidden"
              >
                {/* Header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3 text-primary">
                    <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-heading font-semibold text-sm md:text-base text-text-main leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                      }`}
                  />
                </button>

                {/* Answer block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border-subtle/50 text-xs md:text-sm text-text-muted leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
