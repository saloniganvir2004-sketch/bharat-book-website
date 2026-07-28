"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Scroll, Shield, Cpu, Crown, Flag, Mountain } from "lucide-react";

interface ArchiveCategory {
  id: string;
  title: string;
  copy: string;
  imageSrc: string;
  icon: React.ElementType;
  spanClass: string; // Tailored grid span class for desktop editorial masonry
}

export function VisualInterlude() {
  const categories: ArchiveCategory[] = [
    {
      id: "ancient-cities",
      title: "ANCIENT CITIES",
      copy: "Foundations beneath the present.",
      imageSrc: "/images/archive/ancient-cities.webp",
      icon: Landmark,
      spanClass: "lg:col-span-2 lg:row-span-1 h-72",
    },
    {
      id: "manuscripts",
      title: "MANUSCRIPTS",
      copy: "Words that survived centuries.",
      imageSrc: "/images/archive/manuscripts.webp",
      icon: Scroll,
      spanClass: "lg:col-span-1 lg:row-span-1 h-72",
    },
    {
      id: "temples",
      title: "TEMPLES",
      copy: "Stone. Geometry. Memory.",
      imageSrc: "/images/archive/temples.webp",
      icon: Shield,
      spanClass: "lg:col-span-1 lg:row-span-1 h-72",
    },
    {
      id: "knowledge",
      title: "KNOWLEDGE",
      copy: "Ideas carried across generations.",
      imageSrc: "/images/archive/knowledge.webp",
      icon: Cpu,
      spanClass: "lg:col-span-2 lg:row-span-1 h-72",
    },
    {
      id: "empires",
      title: "EMPIRES",
      copy: "Power written across time.",
      imageSrc: "/images/archive/empires.webp",
      icon: Crown,
      spanClass: "lg:col-span-1 lg:row-span-1 h-72",
    },
    {
      id: "independence",
      title: "INDEPENDENCE",
      copy: "A nation reclaimed.",
      imageSrc: "/images/archive/independence.webp",
      icon: Flag,
      spanClass: "lg:col-span-1 lg:row-span-1 h-72",
    },
    {
      id: "himalayas",
      title: "THE HIMALAYAS",
      copy: "Beyond the recorded horizon.",
      imageSrc: "/images/archive/himalayas.webp",
      icon: Mountain,
      spanClass: "lg:col-span-4 lg:row-span-1 h-80",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050B15] border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Banner Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E]">
            VISUAL ARCHIVE PREVIEW
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight"
          >
            A CIVILIZATION CANNOT BE UNDERSTOOD <br className="hidden sm:inline" />
            <span className="gold-text-gradient">FROM A SINGLE MOMENT IN TIME.</span>
          </motion.h2>
        </div>

        {/* Editorial Masonry Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item, idx) => (
            <ArchiveCard key={item.id} category={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

{/* Individual Card Component with Fallback Logic & Subdued Overlay */}
function ArchiveCard({ category, index }: { category: ArchiveCategory; index: number }) {
  const [imageError, setImageError] = useState(false);
  const IconComponent = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className={`relative group rounded-sm bg-[#07101F] border border-[#C9973E]/25 hover:border-[#C9973E]/60 overflow-hidden flex flex-col justify-between p-6 transition-all duration-700 shadow-xl ${category.spanClass}`}
    >
      {/* Background Image Layer (When local image is present) */}
      {!imageError ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={category.imageSrc}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
            className="object-cover object-center brightness-60 group-hover:brightness-85 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Dark Navy Overlay & Subtle Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-[#07101F]/60 to-transparent group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
        </div>
      ) : (
        /* Dark Navy/Gold Fallback Composition when image is not present yet */
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1628] via-[#07101F] to-[#03070E]">
          <div className="absolute inset-0 astronomical-grid opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="absolute inset-0 archival-texture opacity-25" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#C9973E]/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        </div>
      )}

      {/* Top Header Label & Icon */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="p-2 rounded-sm bg-[#0B1628]/90 border border-[#C9973E]/30 text-[#C9973E] group-hover:bg-[#C9973E] group-hover:text-[#07101F] transition-colors shadow-sm">
          <IconComponent className="w-4 h-4" />
        </div>
        <span className="text-[9px] font-mono tracking-widest text-[#C9973E]/80 uppercase bg-[#07101F]/70 px-2 py-0.5 rounded border border-[#C9973E]/20">
          ARCHIVE
        </span>
      </div>

      {/* Bottom Mystery Copy */}
      <div className="relative z-10 space-y-1 group-hover:-translate-y-1 transition-transform duration-500">
        <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-[#A3B1C6] font-sans font-light italic">
          {category.copy}
        </p>
      </div>
    </motion.div>
  );
}
