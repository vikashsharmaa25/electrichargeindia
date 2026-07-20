"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sanjay Singhal",
      role: "Highway Property Landowner (NH-48 Corridor)",
      quote: "EV Hindustan Corp navigated the entire CLU land conversion and NHAI clearance process. Today, we host standard CPO fast chargers earning monthly rent margins without operating risks.",
      rating: 5,
      type: "Highway Partnership",
      image: "/sanjay_singhal.jpg"
    },
    {
      name: "Radhika Kulkarni",
      role: "Operations Director, Blue Horizons Resorts",
      quote: "Our hospitality locations required seamless integration that wouldn't drop our local power grids. The layout blueprints and step-down transformer coordination provided by EV Hindustan were outstanding.",
      rating: 5,
      type: "Hospitality Sync",
      image: "/radhika_kulkarni.jpg"
    },
    {
      name: "Vikramaditya Mehta",
      role: "Managing Director, Mehta Logistics Bunkers",
      quote: "The empanelment approval from DISCOM had been stuck for months. EV Hindustan Corp resolved the compliance gaps in 10 days. Exceptional speed and professional corporate team.",
      rating: 5,
      type: "Grid Liaison",
      image: "/vikramaditya_mehta.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            PARTNER TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Hear From Our Land & Corporate Partners
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Read how we have helped property developers, landowners, and hospitality operators launch compliant grid systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-custom-lg border border-border-subtle p-8 flex flex-col justify-between luxury-shadow hover:border-accent/40 hover:scale-[1.01] transition-all duration-350 overflow-hidden"
            >
              {/* Large quotation mark graphic backdrop */}
              <div className="absolute top-2 right-4 text-bg-secondary text-8xl font-serif select-none pointer-events-none opacity-45 font-bold leading-none">
                &ldquo;
              </div>

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex items-center space-x-1 text-accent mb-6">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs md:text-sm text-text-muted italic leading-relaxed font-sans mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Badge */}
              <div className="relative z-10 pt-6 border-t border-border-subtle flex items-center justify-between gap-2">
                <div className="flex items-center space-x-3 shrink-0 max-w-[70%]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-sm">
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-primary truncate">
                      {rev.name}
                    </h4>
                    <p className="text-[8px] sm:text-[9px] text-text-muted mt-0.5 leading-tight font-sans truncate">
                      {rev.role}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[8px] font-semibold bg-[#E6ECE8] text-primary border border-primary/5 tracking-wider uppercase shrink-0">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-accent" /> {rev.type}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
