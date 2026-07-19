"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldAlert, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-primary/20 pt-20 pb-10 relative overflow-hidden">

      {/* Footer SVG Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg className="absolute bottom-0 right-0 w-1/3 h-1/2 text-accent" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,100 0,100 100,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-secondary">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-primary font-semibold text-base font-heading">
                H
              </div>
              <span className="font-heading font-semibold text-base tracking-tight text-white">
                EV HINDUSTAN CORP
              </span>
            </Link>
            <p className="text-xs text-[#A2C7B8] leading-relaxed max-w-sm font-sans">
              National EV infrastructure consulting partners empanelled with state electricity networks to deliver CEA-compliant charging networks.
            </p>
            <div className="flex flex-col space-y-2.5 text-xs text-[#A2C7B8]">
              <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-accent" /> +91 1800 258 9631 (Toll-Free)</span>
              <span className="flex items-center"><Mail className="w-4 h-4 mr-2 text-accent" /> support@evhindustancorp.com</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-accent" /> Level 8, DLF CyberPark, Phase II, Gurugram, HR - 122008</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-accent font-heading">
              Advisory Solutions
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#A2C7B8] font-sans">
              <Link href="#applicants" className="hover:text-white transition-colors">Highway Corridors</Link>
              <Link href="#applicants" className="hover:text-white transition-colors">Hospitality Parking</Link>
              <Link href="#applicants" className="hover:text-white transition-colors">Commercial Complexes</Link>
              <Link href="#applicants" className="hover:text-white transition-colors">Residential Societies</Link>
              <Link href="#investment-models" className="hover:text-white transition-colors">CPO Matchmaking</Link>
            </div>
          </div>

          {/* Column 3: Legal & Licenses */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-accent font-heading">
              Legal & Verification
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#A2C7B8] font-sans">
              <Link href="#documents" className="hover:text-white transition-colors">Document Checker</Link>
              <Link href="#verification" className="hover:text-white transition-colors">Verification Steps</Link>
              <Link href="#faq" className="hover:text-white transition-colors">Subsidy Rules</Link>
              <Link href="#faq" className="hover:text-white transition-colors">Tariff Guidelines</Link>
              <span className="text-[10px] text-accent/80 font-medium">Empanelment Lic: #EVHC/GRID-24</span>
            </div>
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-accent font-heading">
              Subscribe to Grid Updates
            </h4>
            <p className="text-xs text-[#A2C7B8] leading-relaxed font-sans">
              Get the latest state electricity tariff notifications and subsidy updates sent directly to your inbox.
            </p>
            <div className="flex bg-secondary/30 rounded-xl border border-secondary/60 p-1">
              <input
                type="email"
                placeholder="corporate@domain.com"
                className="bg-transparent px-3 py-2 text-xs text-white focus:outline-none grow font-sans"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white transition-colors flex items-center">
                <span>Join</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[#A2C7B8] text-[11px] font-sans gap-4">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-accent" />
            <span>
              Disclaimer: Tariff regulations and load clearance quotes depend on state-level regulatory commission mandates.
            </span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} EV Hindustan Corp. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
