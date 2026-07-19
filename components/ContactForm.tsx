"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck, MailOpen, PhoneCall } from "lucide-react";

interface ApplicationInputs {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  propertyLocation: string;
  investmentBudget: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ApplicationInputs>();

  const onSubmit = (data: ApplicationInputs) => {
    console.log("Application data submitted:", data);
    setIsSubmitted(true);
  };

  const propertyOptions = [
    "Highway Property / Empty Plot",
    "Petrol Pump / Fuel Bunk Owner",
    "Hotel / Resort Owner",
    "Restaurant / Highway Dhaba",
    "Commercial Mall / Retail Hub",
    "Corporate Office / Business Park",
    "Apartment / Housing Society",
    "Institutional / Warehouse Hub",
  ];

  const budgetOptions = [
    "Starter (₹1.5L - ₹3L)",
    "Standard (₹5L - ₹10L)",
    "Professional (₹15L - ₹30L)",
    "Enterprise (₹40L+)",
  ];

  return (
    <section id="apply" className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Left Column: Form Details & Copy */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              REGISTRATION PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary font-heading leading-tight tracking-tight">
              Initiate Feasibility Evaluation
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
              Register your land holding, hotel, or commercial establishment with our expert consultants. We will audit grid connectivity, local grid proximity, and regulatory parameters before advising on the optimal model.
            </p>

            <div className="space-y-4 pt-6 border-t border-border-subtle">
              <div className="flex items-center space-x-3 text-primary">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs font-medium font-sans">
                  Govt-Empanelled Grid Safety Checklists
                </span>
              </div>
              <div className="flex items-center space-x-3 text-primary">
                <MailOpen className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs font-medium font-sans">
                  Response within 24 working hours
                </span>
              </div>
              <div className="flex items-center space-x-3 text-primary">
                <PhoneCall className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs font-medium font-sans">
                  Dedicated consulting representative assigned
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] border border-border-subtle luxury-shadow relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Vijay Sharma"
                        className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.name.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10 digit number" }
                        })}
                        placeholder="+91 98765 43210"
                        className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.phone.message}</span>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="vijay.sharma@example.com"
                      className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.email.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Property Type Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                        Property category *
                      </label>
                      <select
                        {...register("propertyType", { required: "Select a property category" })}
                        className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans cursor-pointer"
                      >
                        <option value="">Select Category</option>
                        {propertyOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.propertyType && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.propertyType.message}</span>}
                    </div>

                    {/* Investment Budget Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                        Budget capacity *
                      </label>
                      <select
                        {...register("investmentBudget", { required: "Select a budget capacity" })}
                        className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans cursor-pointer"
                      >
                        <option value="">Select Budget</option>
                        {budgetOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.investmentBudget && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.investmentBudget.message}</span>}
                    </div>
                  </div>

                  {/* Property Location */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                      Property Location (City, State) *
                    </label>
                    <input
                      type="text"
                      {...register("propertyLocation", { required: "Location details required" })}
                      placeholder="e.g. Pune, Maharashtra"
                      className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                    />
                    {errors.propertyLocation && <span className="text-[10px] text-red-500 mt-1 font-sans">{errors.propertyLocation.message}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-semibold text-text-main uppercase tracking-wider mb-2">
                      Specific Inquiries / Property Area details
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Detail land dimensions, nearest sub-station distance, proximity to highways, etc."
                      className="p-3.5 bg-bg-secondary rounded-[14px] border border-border-subtle text-sm text-text-main focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-secondary transition-all shadow duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Register Site Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-2xl text-primary">
                      Application Submitted Successfully
                    </h3>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed max-w-sm mx-auto">
                      Thank you for submitting your details. Our relationship advisory team will contact you within 24 working hours to conduct the initial grid assessment.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-bg-secondary text-primary text-xs font-semibold rounded-full border border-border-subtle hover:bg-border-subtle transition-colors"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
