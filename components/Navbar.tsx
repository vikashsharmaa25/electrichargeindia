"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, CheckCircle2, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    {
      title: "Solutions",
      dropdown: "solutions",
      items: [
        { name: "Highway EV Corridors", desc: "Consulting for highway property owners under premium revenue share models.", href: "#applicants" },
        { name: "Commercial Charging Hubs", desc: "Custom charging plans for malls, office complexes, and luxury resorts.", href: "#applicants" },
        { name: "Interactive ROI Calculator", desc: "Evaluate charging income potential for highway, commercial, or residential properties.", href: "/investment-calculator" },
      ],
    },
    {
      title: "Investment Models",
      dropdown: "models",
      items: [
        { name: "Starter Model", desc: "Low investment, turnkey support for apartment hubs and retail storefronts.", href: "#investment-models" },
        { name: "Standard & Professional", desc: "Revenue-optimized setups with dedicated grid sync support.", href: "#investment-models" },
        { name: "Enterprise Franchise", desc: "Joint-venture structures for hotels, high-traffic fuel bunks, and major land parcels.", href: "#investment-models" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
          }`}
      >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center relative overflow-hidden shrink-0">
            <Zap className="w-5 h-5 text-accent fill-current" />
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-accent/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-semibold text-base sm:text-lg tracking-tight flex items-center transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
              EV HINDUSTAN
              <span className="hidden sm:inline-flex ml-2 px-1.5 py-0.5 text-[9px] font-medium bg-accent/15 text-accent border border-accent/20 rounded shrink-0">
                GOVT ADVISORY
              </span>
            </span>
            <span className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-medium transition-colors duration-300 ${isScrolled ? "text-text-muted" : "text-white/60"}`}>
              National Infrastructure Partner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.dropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center text-sm font-medium transition-colors py-2 duration-300 ${isScrolled ? "text-text-main hover:text-primary" : "text-white/80 hover:text-accent"}`}>
                {link.title}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === link.dropdown ? "rotate-180 text-accent" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === link.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-border-subtle rounded-2xl p-4 luxury-shadow"
                  >
                    <div className="grid gap-3">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="p-3 hover:bg-bg-secondary rounded-xl transition-colors group/item block"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-text-main group-hover/item:text-primary transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-accent" />
                          </div>
                          <p className="text-xs text-text-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link href="#about" className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-text-main hover:text-primary" : "text-white/80 hover:text-accent"}`}>
            Who We Are
          </Link>
          <Link href="#verification" className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-text-main hover:text-primary" : "text-white/80 hover:text-accent"}`}>
            Process
          </Link>
          <Link href="#faq" className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-text-main hover:text-primary" : "text-white/80 hover:text-accent"}`}>
            FAQs
          </Link>
        </div>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className={`flex items-center text-xs space-x-2 transition-colors duration-300 ${isScrolled ? "text-text-muted" : "text-white/60"}`}>
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-medium">100% Compliant Applications</span>
          </div>
          <Link
            href="/apply"
            className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full luxury-shadow hover:bg-secondary hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl border transition-colors duration-300 ${
              isScrolled 
                ? "border-border-subtle bg-white text-text-main hover:bg-bg-secondary" 
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Drawer Overlay */}
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black lg:hidden z-90"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-bg-base border-l border-border-subtle p-6 z-100 flex flex-col justify-between lg:hidden shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-sm text-primary">
                    EV HINDUSTAN CORP
                  </span>
                  <span className="text-[9px] text-text-muted">
                    INFRASTRUCTURE CONSULTANCY
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-bg-secondary border border-border-subtle transition-colors"
                >
                  <X className="w-4 h-4 text-text-main" />
                </button>
              </div>

              <div className="space-y-5">
                <span className="text-xs uppercase font-semibold text-text-muted tracking-wider">
                  Navigation
                </span>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-text-main hover:text-primary transition-colors"
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="#investment-models"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-text-main hover:text-primary transition-colors"
                  >
                    Investment Models
                  </Link>
                  <Link
                    href="#applicants"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-text-main hover:text-primary transition-colors"
                  >
                    Who Can Apply
                  </Link>
                  <Link
                    href="#verification"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-text-main hover:text-primary transition-colors"
                  >
                    Application Flow
                  </Link>
                  <Link
                    href="#faq"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-text-main hover:text-primary transition-colors"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border-subtle">
              <div className="flex items-center space-x-2 text-xs text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Authorized Grid Synchronization advisory</span>
              </div>
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block py-3 bg-primary text-white text-sm font-medium rounded-xl luxury-shadow hover:bg-secondary transition-colors"
              >
                Apply Online
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
