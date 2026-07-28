"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Compass } from "lucide-react";

export function OpeningMystery() {
  const stanzas = [
    "Buried in chronicles.",
    "Preserved in manuscripts.",
    "Recorded in ruins.",
    "Waiting to be examined.",
  ];

  return (
    <section id="opening-mystery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050B15] text-center border-t border-b border-[#C9973E]/15 overflow-hidden">
      
      {/* Background Archival Atmosphere & Map Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#0B1628]/80 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
        <div className="absolute inset-0 archival-texture opacity-25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        
        {/* Top Compass Ornament */}
        <div className="flex items-center justify-center gap-3 text-[#C9973E] opacity-70">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9973E]" />
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9973E]" />
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight"
        >
          THE STORY WAS ALWAYS THERE.
        </motion.h2>

        {/* Stanzas Reveal */}
        <div className="space-y-3 py-2">
          {stanzas.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#A3B1C6] font-light italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Follow the evidence line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="pt-6 border-t border-[#C9973E]/20 max-w-xl mx-auto"
        >
          <p className="font-cinzel text-base sm:text-xl font-semibold tracking-[0.2em] gold-text-gradient uppercase">
            BHARAT FOLLOWS THE EVIDENCE ACROSS CENTURIES.
          </p>
        </motion.div>

        {/* Small CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pt-2"
        >
          <a
            href="#the-book"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C9973E] hover:text-[#E5B869] transition-colors py-2 px-4 rounded-full border border-[#C9973E]/30 bg-[#0B1628]/50 hover:bg-[#0B1628] shadow-sm"
          >
            <span>BEGIN THE JOURNEY</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C9973E]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
