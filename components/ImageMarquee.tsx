"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Zap, Layers, MapPin } from "lucide-react";

interface MarqueeItem {
  id: number;
  title: string;
  category: "stations" | "highways" | "tech";
  categoryLabel: string;
  subtitle: string;
  image: string;
  badgeIcon: React.ReactNode;
}

export default function ImageMarquee() {
  const [selectedImage, setSelectedImage] = useState<MarqueeItem | null>(null);

  const marqueeItems: MarqueeItem[] = [
    {
      id: 13,
      title: "Corporate Fleet Terminal",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Heavy-duty commercial charging facilities optimized for business fleet vehicles.",
      image: "/ev_station_13.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 14,
      title: "Semi-Public Charging Park",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Configured charging bays accessible to mixed corporate and public parkings.",
      image: "/ev_station_14.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 15,
      title: "High-Capacity Bus Depots",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Robust megawatt-level charging solutions for electric heavy transit buses.",
      image: "/ev_station_15.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 16,
      title: "Rural Highway Points",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "Grid-connected charging shelters supporting long-distance travel corridors.",
      image: "/ev_station_16.jpg",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />
    },
    {
      id: 17,
      title: "Multi-Standard CCS2 Chargers",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Intelligent DC units supporting modern European and Asian EV charging standards.",
      image: "/ev_station_17.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 18,
      title: "AC Type-2 Community Grid",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Smart load-managed AC wallbox configurations for community sharing.",
      image: "/ev_station_18.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 19,
      title: "Next-Gen Megawatt Station",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Cutting-edge liquid-cooled cables delivering high amperage to heavy electric trucks.",
      image: "/ev_station_19.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 20,
      title: "Solar Canopy Grid",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Environmentally sustainable charging stations powered by direct local solar grids.",
      image: "/ev_station_20.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 21,
      title: "Green Parking Plaza",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Urban parking structures integrating multi-bay smart chargers and green themes.",
      image: "/ev_station_21.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 22,
      title: "Smart Load Balancer Array",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Centralized load controllers managing charging distribution without grid overloads.",
      image: "/ev_station_22.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 23,
      title: "Substation Power Backup",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "High-capacity batteries stabilizing localized grids during high demand peaks.",
      image: "/ev_station_23.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 24,
      title: "Autonomous Fleet Hub",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Robotic contact charging pads ready for next-gen self-driving commercial fleets.",
      image: "/ev_station_24.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 25,
      title: "Interstate Expressway Node",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "High power charging plazas positioned along central commercial trade routes.",
      image: "/ev_station_25.jpg",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />
    },
    {
      id: 26,
      title: "Urban Micro-Mobility Pad",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "Compact charge ports servicing delivery bikes and last-mile electric scooters.",
      image: "/ev_station_26.jpg",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />
    },
    {
      id: 27,
      title: "Metropolitan Fast Charger",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Strategic commercial EV charging hubs nestled in high-traffic retail parks.",
      image: "/ev_station_27.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 28,
      title: "Smart Charging Kiosk",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "User-friendly interactive payment kiosks integrated with high-speed EV chargers.",
      image: "/ev_station_28.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 29,
      title: "Multi-Tenant Charging Loop",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Efficient shared EV loops installed in corporate and residential complexes.",
      image: "/ev_station_29.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 30,
      title: "Green Power Transformer",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Next-generation energy transformers boosting clean energy direct distribution.",
      image: "/ev_station_30.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 31,
      title: "Supercharged Highway Oasis",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "Oasis food-courts offering ultra-fast charging along major expressways.",
      image: "/ev_station_31.jpg",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />
    },
    {
      id: 32,
      title: "Airport Valet EV Zone",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Airport parking areas customized with high-security smart chargers.",
      image: "/ev_station_32.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 33,
      title: "Logistics Fleet Depots",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Dedicated logistics depots handling high power distribution for cargo fleets.",
      image: "/ev_station_33.jpg",
      badgeIcon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 34,
      title: "Public Plaza Energy Tree",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Aesthetic solar energy-harvesting structures doubling as public EV charge trees.",
      image: "/ev_station_34.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: 35,
      title: "Hyper-Fast 350kW Grid Node",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "Industrial-grade liquid-cooled charging nodes supplying lightning speeds.",
      image: "/ev_station_35.jpg",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-bg-secondary relative overflow-hidden border-b border-border-subtle">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-8">
        {/* Heading Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider text-accent bg-accent/10 rounded-full uppercase mb-2">
            Explore Our Footprint
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary font-heading tracking-tight mb-3">
            Active Charging Networks In Motion
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans max-w-xl">
            A glimpse of our charging stations and technological integrations powering vehicles on highways and metro hubs.
          </p>
        </div>
      </div>

      {/* Infinite Marquee row */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left and Right Glassy Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 py-4">
          {/* First Render */}
          {marqueeItems.map((item, idx) => (
            <div
              key={`marquee-1-${item.id}-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="relative w-95 h-95 sm:w-100 sm:h-100 rounded-3xl overflow-hidden shrink-0 shadow-md group border border-border-subtle bg-bg-base cursor-pointer transform transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glassmorphic hover details info overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent text-primary w-fit mb-2">
                  {item.badgeIcon}
                  {item.categoryLabel}
                </span>
                <h4 className="text-white text-lg font-semibold font-heading leading-tight">{item.title}</h4>
                <p className="text-white/80 text-xs mt-1 font-sans line-clamp-2">{item.subtitle}</p>
                <div className="mt-3 text-accent flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase animate-pulse">
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated Render for seamless marquee loop */}
          {marqueeItems.map((item, idx) => (
            <div
              key={`marquee-2-${item.id}-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="relative w-95 h-95 sm:w-100 sm:h-100 rounded-3xl overflow-hidden shrink-0 shadow-md group border border-border-subtle bg-bg-base cursor-pointer transform transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glassmorphic hover details info overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent text-primary w-fit mb-2">
                  {item.badgeIcon}
                  {item.categoryLabel}
                </span>
                <h4 className="text-white text-lg font-semibold font-heading leading-tight">{item.title}</h4>
                <p className="text-white/80 text-xs mt-1 font-sans line-clamp-2">{item.subtitle}</p>
                <div className="mt-3 text-accent flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase animate-pulse">
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full aspect-video rounded-3xl overflow-hidden bg-bg-base border border-border-subtle shadow-2xl flex flex-col justify-end"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold z-10"
              >
                ✕
              </button>

              {/* Text Info */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary text-white mb-3">
                  {selectedImage.badgeIcon}
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white font-heading">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base mt-2 max-w-2xl font-sans font-light">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
