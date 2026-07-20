"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Zap, Layers, MapPin } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "stations" | "highways" | "tech";
  categoryLabel: string;
  subtitle: string;
  image: string;
  badgeIcon: React.ReactNode;
  aspect: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Commercial Retail Hubs",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "High-capacity charging facilities for shopping complexes and malls.",
      image: "/ev_station_1.png",
      badgeIcon: <Layers className="w-3.5 h-3.5" />,
      aspect: "aspect-video"
    },
    {
      id: 2,
      title: "Ultra-Fast DC Chargers",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "State-of-the-art fast chargers designed for rapid power delivery.",
      image: "/ev_station_2.png",
      badgeIcon: <Zap className="w-3.5 h-3.5" />,
      aspect: "aspect-[3/4]"
    },
    {
      id: 3,
      title: "Highway EV Corridors",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "High-power chargers positioned at key rest areas along national expressways.",
      image: "/highway_charging.png",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />,
      aspect: "aspect-[3/4]"
    },
    {
      id: 4,
      title: "Commercial EV Stations",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Multi-point charging solutions tailored for employees and corporate fleet vehicles.",
      image: "/property_commercial.png",
      badgeIcon: <Layers className="w-3.5 h-3.5" />,
      aspect: "aspect-video"
    },
    {
      id: 5,
      title: "Smart Grid Integration",
      category: "tech",
      categoryLabel: "Green Technology",
      subtitle: "High-capacity transformer grids ensuring reliable electrical load distribution.",
      image: "/ev_infrastructure.png",
      badgeIcon: <Zap className="w-3.5 h-3.5" />,
      aspect: "aspect-video"
    },
    {
      id: 6,
      title: "Expressway Fast Charging",
      category: "highways",
      categoryLabel: "Highway Corridors",
      subtitle: "Connecting cities with fast-speed charging stations along express routes.",
      image: "/property_highway.png",
      badgeIcon: <MapPin className="w-3.5 h-3.5" />,
      aspect: "aspect-[3/4]"
    },
    {
      id: 7,
      title: "Commercial Fleet Support",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Dedicated EV parking and smart charging arrays for high-density business hubs.",
      image: "/ev_car_1.png",
      badgeIcon: <Layers className="w-3.5 h-3.5" />,
      aspect: "aspect-[3/4]"
    },
    {
      id: 8,
      title: "Institutional Campus Layouts",
      category: "stations",
      categoryLabel: "Charging Hubs",
      subtitle: "Future-ready employee and visitor EV charging loops in corporate offices.",
      image: "/ev_car_2.png",
      badgeIcon: <Layers className="w-3.5 h-3.5" />,
      aspect: "aspect-video"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-bg-base relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading & Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-border-subtle gap-4">
          <div>
            <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider text-[#B45309] bg-[#FEF3C7] rounded-full uppercase mb-2">
              MOMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary font-heading tracking-tight">
              Glimpses from the field
            </h2>
          </div>
          <span className="text-xs sm:text-sm text-text-muted font-sans font-medium self-start md:self-end">
            8 of 80+ photos
          </span>
        </div>

        {/* Gallery Grid - Masonry style using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid mb-6 overflow-hidden rounded-2xl cursor-pointer group shadow-xs hover:shadow-lg border border-border-subtle transition-all duration-300 relative"
            >
              {/* Image Container */}
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-bg-secondary`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />

                {/* Clean hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-xs p-3 rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
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
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10 backdrop-blur-md"
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
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
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
                <p className="text-white/80 text-sm sm:text-base mt-2 max-w-2xl font-sans">
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

