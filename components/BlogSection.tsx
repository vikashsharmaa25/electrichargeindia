"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      tag: "Policy & Subsidy",
      title: "Understanding FAME-III & State Grid Subsidies (2026 Update)",
      desc: "An in-depth guide for commercial property owners on applying for government capital incentives for charging stations.",
      date: "July 15, 2026",
      readTime: "6 Min Read",
      image: "/blog_fame_subsidy.jpg"
    },
    {
      tag: "Technology",
      title: "DC Fast vs. Ultra-Fast Chargers: Which Model Fits Highway Plots?",
      desc: "Evaluating energy transmission efficiencies, charging curve gaps, and capital yields of 60kW to 150kW CSS2 chargers.",
      date: "June 28, 2026",
      readTime: "5 Min Read",
      image: "/blog_charger_comparison.jpg"
    },
    {
      tag: "Infrastructure",
      title: "How to Secure DISCOM Grid Capacity Clearances in India",
      desc: "Step-by-step roadmap to calculate on-site electricity loads, submit line feasibility queries, and obtain permissions.",
      date: "May 10, 2026",
      readTime: "8 Min Read",
      image: "/blog_grid_clearance.jpg"
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
              className="bg-white rounded-custom-lg border border-border-subtle overflow-hidden flex flex-col justify-between hover:border-accent/40 transition-all duration-350 group shadow-sm hover:scale-[1.01]"
            >
              <div>
                {/* Image Header with Tag overlay */}
                <div className="relative w-full aspect-16/10 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                  {/* Tag Overlay */}
                  <span className="absolute top-4 left-4 inline-block text-[9px] font-bold text-white uppercase tracking-widest bg-primary px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {blog.tag}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Read Time */}
                  <div className="flex items-center space-x-1.5 text-text-muted text-[10px] font-medium font-sans mb-3">
                    <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {blog.desc}
                  </p>
                </div>
              </div>

              {/* Footer Meta */}
              <div className="mx-6 pb-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[10px] text-text-muted font-medium font-sans">
                  <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
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
