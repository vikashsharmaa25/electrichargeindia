"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShieldCheck, CheckCircle2, ChevronRight, Landmark, MapPin, BadgePercent, Coins } from "lucide-react";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profile: "",
    landArea: "",
    hasNoc: "",
    selectedModel: "",
    name: "",
    phone: "",
    email: "",
    state: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  return (
    <main className="min-h-screen bg-bg-base flex flex-col justify-between py-6 px-4 md:py-10 md:px-6">

      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-border-subtle">
        <Link href="/" className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Dashboard
        </Link>
        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest bg-bg-secondary px-3 py-1 rounded-md border border-border-subtle">
          Wizard Step 0{step} of 04
        </span>
      </div>

      {/* Main wizard card container */}
      <div className="max-w-xl mx-auto w-full my-auto py-4 md:py-10">
        <div className="bg-white p-5 sm:p-8 md:p-10 rounded-custom-lg border border-border-subtle luxury-shadow">
          <AnimatePresence mode="wait">

            {/* Step 1: Profile Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary font-heading">
                    Identify Your Profile
                  </h2>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed font-sans">
                    Choose the option that describes your asset ownership or regulatory structure.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "highway", label: "Highway Plot / Empty Landowner", icon: MapPin },
                    { id: "pump", label: "Petrol Pump / Fuel station franchisee", icon: Landmark },
                    { id: "retail", label: "Commercial retail mall / Business park owner", icon: Coins },
                    { id: "society", label: "Residential cooperative society head", icon: ShieldCheck },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.id}
                        onClick={() => updateField("profile", p.id)}
                        className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${formData.profile === p.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border-subtle hover:border-accent"
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="text-xs font-semibold text-text-main font-sans">{p.label}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.profile === p.id ? "bg-primary border-primary" : "border-border-subtle"}`}>
                          {formData.profile === p.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={!formData.profile}
                  onClick={handleNext}
                  className="w-full py-3.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* Step 2: Property Scale & Documents */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary font-heading">
                    Property Feasibility Parameters
                  </h2>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed font-sans">
                    Define the scale parameters and immediate document checks.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      Estimated Area Size (Sq. Ft.) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 sq.ft."
                      value={formData.landArea}
                      onChange={(e) => updateField("landArea", e.target.value)}
                      className="p-3 bg-bg-secondary border border-border-subtle rounded-xl text-xs text-text-main focus:outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      Do you have structural drawings or NOC files ready? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "yes", label: "Yes, files ready" },
                        { id: "no", label: "No, need support" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => updateField("hasNoc", opt.id)}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${formData.hasNoc === opt.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border-subtle text-text-muted"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handlePrev}
                    className="w-1/3 py-3 border border-border-subtle rounded-xl text-xs font-semibold text-text-muted hover:bg-bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button
                    disabled={!formData.landArea || !formData.hasNoc}
                    onClick={handleNext}
                    className="w-2/3 py-3 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-secondary transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Investment models Selection */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary font-heading">
                    Select Target Model
                  </h2>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed font-sans">
                    Choose the investment model matching your budget parameters.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "starter", title: "Starter Model", rate: "₹1.5L - ₹3L" },
                    { id: "standard", title: "Standard Model", rate: "₹5L - ₹10L" },
                    { id: "professional", title: "Professional Model", rate: "₹15L - ₹30L" },
                    { id: "enterprise", title: "Enterprise Model", rate: "₹40L+" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => updateField("selectedModel", m.id)}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${formData.selectedModel === m.id
                        ? "border-primary bg-primary/5"
                        : "border-border-subtle hover:border-accent"
                        }`}
                    >
                      <div>
                        <p className="text-xs font-semibold text-text-main font-sans">{m.title}</p>
                        <p className="text-[10px] text-text-muted mt-1">CAPEX Investment: {m.rate}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.selectedModel === m.id ? "bg-primary border-primary" : "border-border-subtle"}`}>
                        {formData.selectedModel === m.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handlePrev}
                    className="w-1/3 py-3 border border-border-subtle rounded-xl text-xs font-semibold text-text-muted hover:bg-bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button
                    disabled={!formData.selectedModel}
                    onClick={handleNext}
                    className="w-2/3 py-3 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-secondary transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary font-heading">
                    Final Coordination Details
                  </h2>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed font-sans">
                    Submit coordinates so our assigned relationship manager can lock the feasibility query.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      Applicant Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vijay Sharma"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="p-3 bg-bg-secondary border border-border-subtle rounded-xl text-xs text-text-main focus:outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="p-3 bg-bg-secondary border border-border-subtle rounded-xl text-xs text-text-main focus:outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. vijay.sharma@example.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="p-3 bg-bg-secondary border border-border-subtle rounded-xl text-xs text-text-main focus:outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-text-main mb-2">
                      State Location *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      className="p-3 bg-bg-secondary border border-border-subtle rounded-xl text-xs text-text-main focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handlePrev}
                    className="w-1/3 py-3 border border-border-subtle rounded-xl text-xs font-semibold text-text-muted hover:bg-bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button
                    disabled={!formData.name || !formData.phone || !formData.email || !formData.state}
                    onClick={() => setStep(5)}
                    className="w-2/3 py-3 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-secondary transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success Landing */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary">
                    Application Recorded
                  </h3>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed max-w-sm mx-auto">
                    Your feasibility code is: <strong>#EVHC-{Math.floor(1000 + Math.random() * 9000)}</strong>. A regional empanelled grid synchronisation engineer will audit your site parameters shortly.
                  </p>
                </div>
                <Link
                  href="/"
                  className="px-6 py-2.5 bg-bg-secondary text-primary text-xs font-semibold rounded-full border border-border-subtle hover:bg-border-subtle transition-colors"
                >
                  Return to Homepage
                </Link>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Footer message */}
      <div className="max-w-4xl mx-auto w-full text-center text-[10px] text-text-muted border-t border-border-subtle pt-6 flex items-center justify-center space-x-2">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <span>128-bit SSL encrypted transaction verification. All data conforms to grid security protocols.</span>
      </div>

    </main>
  );
}
