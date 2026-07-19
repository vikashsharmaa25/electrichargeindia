"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, Shield, BookOpen, User } from "lucide-react";

type DocCategory = "residential" | "commercial" | "highway" | "industrial";

export default function Documents() {
  const [activeTab, setActiveTab] = useState<DocCategory>("residential");

  const tabs = [
    { id: "residential", label: "Residential Zones" },
    { id: "commercial", label: "Commercial Establishments" },
    { id: "highway", label: "Highway Plots & bypasses" },
    { id: "industrial", label: "Industrial Parks" },
  ];

  const documentData: Record<DocCategory, { title: string; docs: string[]; notes: string }> = {
    residential: {
      title: "Apartment & Housing Society Prerequisites",
      docs: [
        "Society Management Committee NOC (No Objection Certificate)",
        "Latest DISCOM electricity bill copy (Three-Phase setup preferred)",
        "Assigned parking layout schema outlining charger space coordinates",
        "Applicant identification credentials and registry title deed",
      ],
      notes: "Suitable for residential associations intending to install smart AC chargers for residents.",
    },
    commercial: {
      title: "Commercial & Corporate Office Prerequisites",
      docs: [
        "Property Registry Deed or registered Lease Agreement (min 5 years)",
        "Local Municipal Body NOC & Commercial Zoning Clearance certificate",
        "State Fire Safety Certificate (Fire NOC)",
        "Building layout blueprint highlighting structural charging points",
        "Corporate GST Registration and Board Resolution authorizations",
      ],
      notes: "Applicable to malls, IT parks, retail centers, resorts, and premium hotels.",
    },
    highway: {
      title: "National & State Highway Bypass Plots",
      docs: [
        "Official Land Registry Records (Khasra & Khatauni map layouts)",
        "NHAI (National Highways Authority of India) Access Permission NOC",
        "CLU (Change of Land Use) Commercial Conversion Certificate",
        "Topographical site drawing marking safety buffer margins",
        "Government-approved layout plans showing deceleration lanes",
      ],
      notes: "Critical checklist for setting up ultra-fast DC corridors near national highways.",
    },
    industrial: {
      title: "Industrial estates & Fleet depots",
      docs: [
        "Industrial Plot Allotment Letter / Corporate Industrial lease deed",
        "State Pollution Control Board Clearance certificate",
        "DISCOM HT (High Tension) line feasibility sync report",
        "Transformer load capacity and earthing safety certificate",
      ],
      notes: "Optimized for heavy-duty fleet operations, truck depots, and manufacturing parks.",
    },
  };

  return (
    <section id="documents" className="py-10 md:py-16 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            COMPLIANCE PAPERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Document Prerequisites
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Review the required documentation to expedite your state grid empanelment and connection load approval.
          </p>

          {/* Document Tabs */}
          <div className="mt-8 max-w-full overflow-x-auto scrollbar-none p-1 bg-bg-secondary rounded-full border border-border-subtle flex items-center justify-start md:justify-center gap-1.5 md:max-w-3xl mx-auto whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DocCategory)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 ${activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text-main"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-custom-lg border border-border-subtle p-6 sm:p-8 md:p-12 luxury-shadow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex items-center text-[10px] font-semibold text-accent uppercase tracking-wider bg-bg-secondary px-3 py-1 rounded-md mb-4">
                  Prerequisites Check
                </span>
                <h3 className="text-xl md:text-2xl font-semibold font-heading text-primary">
                  {documentData[activeTab].title}
                </h3>
                <p className="text-xs md:text-sm text-text-muted mt-2">
                  {documentData[activeTab].notes}
                </p>
              </div>

              {/* Document List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentData[activeTab].docs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-bg-secondary rounded-custom-md border border-border-subtle flex items-start space-x-3 hover:border-accent/45 transition-colors"
                  >
                    <FileCheck className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-xs md:text-sm text-text-main leading-relaxed font-sans font-medium">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legal Warning Notice */}
              <div className="p-4 bg-accent/5 rounded-2xl border border-accent/20 flex items-start space-x-3">
                <Shield className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  <strong>Important Compliance Note:</strong> The electrical load sanction depends on regional DISCOM network density. Our team will verify technical eligibility during site inspection.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
