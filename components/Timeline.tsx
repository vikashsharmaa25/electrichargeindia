"use client";

import React, { useRef, useState } from "react";
import { FileText, Search, ClipboardCheck, MessageSquarePlus, Activity, Power, Construction, HeartHandshake } from "lucide-react";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Submit Portal Application",
      desc: "Fill our secure compliance portal with property parameters, locations, and electrical capacities.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Property Verification",
      desc: "Our geo-consulting team audits the traffic density, proximity to sub-stations, and accessibility.",
      icon: Search,
    },
    {
      num: "03",
      title: "Documentation Assistance",
      desc: "We draft land NOCs, corporate authorizations, and municipal boundary approvals.",
      icon: ClipboardCheck,
    },
    {
      num: "04",
      title: "Investment Selection",
      desc: "Choose an investment range and CPO model matching your risk profiles and tax structures.",
      icon: MessageSquarePlus,
    },
    {
      num: "05",
      title: "Site Engineering Audit",
      desc: "On-site engineers review soil metrics, grid cabling paths, and transformer space limits.",
      icon: Activity,
    },
    {
      num: "06",
      title: "Grid Load Clearance",
      desc: "Advisory desk coordinates with local DISCOMs to secure the electricity load sanctions.",
      icon: Power,
    },
    {
      num: "07",
      title: "Installation Planning",
      desc: "Detailed blueprint mapping of cable routing, structural protection, and signage layout.",
      icon: Construction,
    },
    {
      num: "08",
      title: "Execution & Active Support",
      desc: "Chargers are installed, tested, synced with billing systems, and set live for public use.",
      icon: HeartHandshake,
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="verification" className="py-10 md:py-16 bg-bg-base relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            VERIFICATION TIMELINE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-4">
            Deployment & Launch Roadmap
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">
            Grab and slide the timeline horizontally to review the step-by-step roadmap from registration to grid activation.
          </p>
        </div>

        {/* Drag-to-Scroll Horizontal Timeline Track */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="overflow-x-auto scrollbar-none pb-8 cursor-grab"
        >
          <div className="flex space-x-6 min-w-max px-4">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="relative w-[300px] shrink-0 flex flex-col items-start group">

                  {/* Circle Step Number Indicator */}
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-border-subtle text-text-muted mb-6 transition-all duration-300 group-hover:border-accent group-hover:text-accent shadow-xs shrink-0">
                    <span className="text-xs font-bold font-heading">{step.num}</span>
                  </div>

                  {/* Horizontal Connector Line running between bubbles */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-[21px] left-[44px] w-[280px] h-[2px] bg-border-subtle -z-10" />
                  )}

                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-custom-lg border border-border-subtle shadow-xs hover:border-primary/20 luxury-shadow-hover w-full grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                          <IconComponent className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <h3 className="font-heading font-semibold text-base text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
