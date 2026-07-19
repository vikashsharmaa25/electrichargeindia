"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Landmark, Coins, TrendingUp, HelpCircle } from "lucide-react";

export default function InvestmentCalculator() {
  // Slider states
  const [chargerCount, setChargerCount] = useState<number>(2);
  const [sessionsPerDay, setSessionsPerDay] = useState<number>(8);
  const [marginPerKwh, setMarginPerKwh] = useState<number>(4); // margin in Rs
  const [chargerType, setChargerType] = useState<"ac" | "dc_fast" | "dc_ultra">("dc_fast");

  // Calculated metrics
  const [metrics, setMetrics] = useState({
    monthlyRev: 0,
    yearlyRev: 0,
    paybackMonths: 0,
    subsidyVal: 0,
    estimatedCapex: 0,
  });

  useEffect(() => {
    // Charger parameters
    // AC: capex 1L, avg session consumption 15kWh
    // DC Fast: capex 10L, avg session consumption 35kWh
    // DC Ultra: capex 20L, avg session consumption 60kWh
    let capexPerCharger = 1000000;
    let avgKwhPerSession = 35;
    let subsidyRate = 0.35; // 35% subsidy

    if (chargerType === "ac") {
      capexPerCharger = 200000;
      avgKwhPerSession = 15;
    } else if (chargerType === "dc_ultra") {
      capexPerCharger = 2200000;
      avgKwhPerSession = 65;
    }

    const estimatedCapex = capexPerCharger * chargerCount;
    const subsidyVal = estimatedCapex * subsidyRate;
    const netCapex = estimatedCapex - subsidyVal;

    // Daily Margin Calculation
    // Daily KWh = Charger Count * sessions per day * avg kWh per session
    const dailyKwh = chargerCount * sessionsPerDay * avgKwhPerSession;
    const dailyRev = dailyKwh * marginPerKwh;

    // Monthly Rev = Daily Rev * 30 days
    const monthlyRev = dailyRev * 30;
    const yearlyRev = monthlyRev * 12;

    // Payback in months
    const paybackMonths = monthlyRev > 0 ? netCapex / monthlyRev : 99;

    setMetrics({
      monthlyRev: Math.round(monthlyRev),
      yearlyRev: Math.round(yearlyRev),
      paybackMonths: Number(paybackMonths.toFixed(1)),
      subsidyVal: Math.round(subsidyVal),
      estimatedCapex,
    });
  }, [chargerCount, sessionsPerDay, marginPerKwh, chargerType]);

  return (
    <main className="min-h-screen bg-bg-base py-6 px-4 md:py-16 md:px-6">
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">

        {/* Back Link */}
        <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
          <Link href="/" className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Dashboard
          </Link>
          <span className="text-[10px] font-semibold text-accent uppercase tracking-widest bg-bg-secondary px-3 py-1 rounded-md border border-border-subtle">
            ROI Estimator Hub
          </span>
        </div>

        {/* Top Info */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight">
            EV Infrastructure Yield Calculator
          </h1>
          <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans">
            Adjust the sliders below to estimate the capital expenditures, government subsidy rebates, and operational payback cycles for your proposed charging bays.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Left Column: Sliders & Selectors */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-custom-lg border border-border-subtle luxury-shadow space-y-6 md:space-y-8">

            {/* Charger Type Selection */}
            <div className="space-y-3">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main block">
                Select Charger Framework
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: "ac", label: "AC Slow (7.4-22kW)" },
                  { id: "dc_fast", label: "DC Fast (30-60kW)" },
                  { id: "dc_ultra", label: "DC Ultra (120kW+)" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setChargerType(t.id as any)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${chargerType === t.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border-subtle text-text-muted hover:border-accent"
                      }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Charger Count Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-semibold font-heading">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-main">
                  Number of Charger Points
                </span>
                <span className="text-primary">{chargerCount} Units</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={chargerCount}
                onChange={(e) => setChargerCount(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Charging sessions per charger per day */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-semibold font-heading">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-main">
                  Daily Charging Sessions (Per unit)
                </span>
                <span className="text-primary">{sessionsPerDay} Sessions</span>
              </div>
              <input
                type="range"
                min="2"
                max="20"
                step="1"
                value={sessionsPerDay}
                onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Profit margin per kWh */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-semibold font-heading">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-main">
                  Revenue Profit Margin (Per kWh)
                </span>
                <span className="text-primary">₹{marginPerKwh} / kWh</span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                step="0.5"
                value={marginPerKwh}
                onChange={(e) => setMarginPerKwh(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

          </div>

          {/* Right Column: Calculations and Outputs */}
          <div className="lg:col-span-5 space-y-6">

            {/* Main Return Card */}
            <div className="bg-primary text-white p-5 sm:p-8 rounded-custom-lg border border-primary/10 luxury-shadow relative overflow-hidden flex flex-col justify-between min-h-[280px] md:min-h-[300px]">

              <div>
                <span className="text-[10px] font-semibold text-accent uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded">
                  ESTIMATED GROSS YIELD
                </span>
                <div className="mt-6">
                  <p className="text-[11px] text-[#A2C7B8]">Estimated Monthly Profit</p>
                  <p className="text-4xl font-semibold font-heading text-white mt-1">
                    ₹{metrics.monthlyRev.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[11px] text-[#A2C7B8]">Estimated Yearly Profit</p>
                  <p className="text-xl font-semibold font-heading text-accent mt-1">
                    ₹{metrics.yearlyRev.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-secondary mt-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#A2C7B8]">Payback Horizon</p>
                  <p className="text-base font-semibold font-heading text-white mt-0.5">
                    {metrics.paybackMonths} Months
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#A2C7B8]">State Subsidy Rebate</p>
                  <p className="text-base font-semibold font-heading text-accent mt-0.5">
                    ₹{metrics.subsidyVal.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

            </div>

            {/* CAPEX breakdown card */}
            <div className="bg-white p-6 rounded-custom-lg border border-border-subtle shadow-sm space-y-4">
              <div className="flex justify-between text-xs font-medium text-text-muted">
                <span>Estimated Station CAPEX (Gross):</span>
                <span className="font-semibold text-text-main">₹{metrics.estimatedCapex.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs font-medium text-text-muted">
                <span>Government FAME-II Subsidy rebate:</span>
                <span className="font-semibold text-accent">- ₹{metrics.subsidyVal.toLocaleString("en-IN")}</span>
              </div>
              <hr className="border-border-subtle" />
              <div className="flex justify-between text-xs font-semibold text-primary">
                <span>Estimated Net Investment:</span>
                <span>₹{(metrics.estimatedCapex - metrics.subsidyVal).toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Note badge */}
            <div className="p-4 bg-accent/5 rounded-2xl border border-accent/20 flex items-start space-x-3 text-[10px] text-text-muted leading-relaxed font-sans">
              <HelpCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <span>
                Calculations are projections based on industry averages (AC charging session avg. 15kWh; DC Fast charging session avg. 35kWh; DC Ultra charging session avg. 65kWh). Real yield metrics depend on site traffic conversions.
              </span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
