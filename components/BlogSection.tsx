"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      tag: "Policy & Subsidy",
      title: "Understanding FAME-III & State Grid Subsidies (2026 Update)",
      desc: "An in-depth guide for commercial property owners on applying for government capital incentives for charging stations.",
      date: "July 15, 2026",
      readTime: "6 Min Read",
    },
    {
      tag: "Technology",
      title: "DC Fast vs. Ultra-Fast Chargers: Which Model Fits Highway Plots?",
      desc: "Evaluating energy transmission efficiencies, charging curve gaps, and capital yields of 60kW to 150kW CSS2 chargers.",
      date: "June 28, 2026",
      readTime: "5 Min Read",
    },
    {
      tag: "Infrastructure",
      title: "How to Secure DISCOM Grid Capacity Clearances in India",
      desc: "Step-by-step roadmap to calculate on-site electricity loads, submit line feasibility queries, and obtain permissions.",
      date: "May 10, 2026",
      readTime: "8 Min Read",
    },
  ];

  return (
    <section id="blog" className="py-10 md:py-16 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            INFORMATION HUB
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Insights & Regulatory Updates
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Stay informed on state EV mandates, high-voltage technical specs, and grid synchronization policies.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-custom-lg border border-border-subtle p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group shadow-sm"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-block text-[10px] font-semibold text-accent uppercase tracking-widest bg-bg-secondary px-2.5 py-1 rounded">
                    {blog.tag}
                  </span>
                  <div className="flex items-center space-x-1.5 text-text-muted text-[10px] font-medium font-sans">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-base md:text-lg text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-text-muted leading-relaxed font-sans mb-6">
                  {blog.desc}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[10px] text-text-muted font-medium font-sans">
                  <Calendar className="w-3 h-3" />
                  <span>{blog.date}</span>
                </div>
                <span className="text-[10px] font-semibold text-primary flex items-center group-hover:translate-x-1 transition-transform cursor-pointer">
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1 text-accent" />
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
