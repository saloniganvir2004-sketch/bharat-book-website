"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Layers, ShieldCheck, Sparkles } from "lucide-react";

export function AboutTheBook() {
  const highlights = [
    { label: "15 CHAPTERS", desc: "A comprehensive civilizational scope", icon: Layers },
    { label: "ANCIENT → MODERN", desc: "Across thousands of recorded years", icon: BookOpen },
    { label: "DOCUMENTED SOURCES", desc: "Built strictly on historical records", icon: ShieldCheck },
    { label: "FIRST EDITION • 2026", desc: "Official hardcover release", icon: Sparkles },
  ];

  return (
    <section id="the-book" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Tag */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <span className="h-[1px] w-8 bg-[#C9973E]" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E]">
            THE BOOK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT & STAT HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] text-[#F2EBDD] leading-tight">
              THIS IS NOT A SHORT STORY. <br className="hidden sm:inline" />
              <span className="gold-text-gradient">IT IS A CIVILIZATION.</span>
            </h2>

            <p className="font-cormorant text-xl sm:text-2xl text-[#A3B1C6] font-light leading-relaxed max-w-2xl">
              BHARAT travels across thousands of years of Indian civilization — through history, knowledge, conflict, discovery, politics and questions that continue into the present.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="p-5 rounded-sm bg-[#0B1628]/80 border border-[#C9973E]/20 hover:border-[#C9973E]/50 transition-all duration-300 shadow-lg text-left"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-sm bg-[#C9973E]/10 border border-[#C9973E]/30 text-[#C9973E]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-cinzel text-sm font-bold tracking-[0.2em] text-[#F2EBDD]">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A3B1C6] font-sans pl-11">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          {/* RIGHT: TASTEFUL SMALLER COVER PRESENTATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group p-4 rounded-xl bg-[#0B1628]/60 border border-[#C9973E]/25 shadow-2xl backdrop-blur-md">
              <div className="relative w-[220px] sm:w-[260px] md:w-[290px] h-[300px] sm:h-[360px] md:h-[400px] rounded-md overflow-hidden border border-[#C9973E]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/BHARAT_Cover_final.png"
                  alt="BHARAT Cover Artwork"
                  fill
                  sizes="290px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="pt-4 text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9973E]">
                  OFFICIAL HARDCOVER EDITION
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
