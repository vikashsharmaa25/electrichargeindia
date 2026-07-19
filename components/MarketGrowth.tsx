"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, PieChart, ShieldCheck, ArrowRight } from "lucide-react";

export default function MarketGrowth() {
  const years = ["2024", "2025", "2026", "2027", "2028", "2030 (Proj.)"];
  const salesData = [1.5, 2.8, 4.2, 6.5, 9.8, 16.0]; // in lakhs units/year

  const stats = [
    { label: "Target EV Sales by 2030", value: "30%", desc: "Government target for private passenger cars" },
    { label: "Required Charging Station Grid", value: "4,60,000+", desc: "Needed across national routes to sustain growth" },
    { label: "Projected Market Size by 2030", value: "₹2.4 Lakh Cr", desc: "Estimated EV capitalization scope in India" },
    { label: "Public to Charger Ratio Gap", value: "135:1", desc: "Significant supply gap represents clear commercial opportunity" },
  ];

  return (
    <section className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              MARKET POTENTIAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary font-heading leading-tight tracking-tight">
              Capturing the EV Infrastructure Inflow
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
              The Indian electric vehicle market is crossing its tipping point. With state mandates phasing out legacy fossil fuels and central subsidies supporting localized grid connections, establishing a charging station is no longer just a sustainable initiative—it is a secure, high-yield infrastructure asset class.
            </p>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans">
              Current charge point deployment lags behind vehicle adoption curves by a factor of 10x. Property owners who secure energy load authorizations now stand to capture localized monopolies as fleet and private buyers transition to electric.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[20px] border border-border-subtle shadow-sm">
                  <span className="text-xs text-text-muted font-medium block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold text-primary font-heading block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-text-muted mt-2 block leading-normal font-sans">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic SVG Infographics */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-[32px] border border-border-subtle luxury-shadow space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-semibold text-base text-primary">
                  Indian Annual EV Sales Trajectory
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider bg-bg-secondary px-2.5 py-1 rounded">
                Units in Lakhs
              </span>
            </div>

            {/* Custom SVG Bar Chart */}
            <div className="relative pt-6">
              <div className="flex items-end justify-between h-48 border-b border-border-subtle pb-2 relative">
                {salesData.map((val, idx) => {
                  const maxVal = Math.max(...salesData);
                  const heightPercent = `${(val / maxVal) * 100}%`;

                  return (
                    <div key={idx} className="flex flex-col items-center w-8 sm:w-12 group">
                      {/* Bar Value Indicator */}
                      <span className="text-[10px] font-semibold text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {val}L
                      </span>
                      {/* Bar Visual */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: heightPercent }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                        className="w-5 sm:w-8 bg-linear-to-t from-primary to-secondary rounded-t-md hover:from-accent hover:to-accent transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  );
                })}
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-between mt-2 pt-2">
                {years.map((yr, idx) => (
                  <span key={idx} className="text-[10px] font-semibold text-text-muted w-8 sm:w-12 text-center">
                    {yr}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid Opportunity Alert */}
            <div className="p-4 bg-primary/5 rounded-custom-md border border-primary/10 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-primary font-heading">
                  Grid Capacity Priorities
                </p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">
                  State governments are prioritising early applicants for grid capacity clearance. Once local sub-station load is fully allocated, approvals will be capped.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
