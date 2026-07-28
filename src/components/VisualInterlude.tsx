"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Scroll, Shield, Cpu, Crown, Flag, Mountain } from "lucide-react";

export function VisualInterlude() {
  const visualCategories = [
    { title: "ANCIENT CITIES", icon: Landmark, motif: "Mohenjo-daro • Harappa • Dholavira • Varanasi" },
    { title: "MANUSCRIPTS", icon: Scroll, motif: "Palm leaf records • Birch bark • Astronomical charts" },
    { title: "TEMPLES", icon: Shield, motif: "Kailasa • Chola Bronzes • Konark • Tanjore" },
    { title: "KNOWLEDGE", icon: Cpu, motif: "Aryabhata • Sushruta • Metallurgy • Zero" },
    { title: "EMPIRES", icon: Crown, motif: "Maurya • Gupta • Chola • Vijayanagara • Maratha" },
    { title: "INDEPENDENCE", icon: Flag, motif: "1857 Resistance • Freedom Movement • Constitution" },
    { title: "THE HIMALAYAS", icon: Mountain, motif: "Sacred Peaks • Pilgrimage • High Altitude Archives" },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B15] border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Main Section Banner Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E]">
            VISUAL ARCHIVE PREVIEW
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight"
          >
            A CIVILIZATION CANNOT BE UNDERSTOOD <br className="hidden sm:inline" />
            <span className="gold-text-gradient">FROM A SINGLE MOMENT IN TIME.</span>
          </motion.h2>
        </div>

        {/* Visual Composition Cards (Local Image Ready) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visualCategories.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="relative group h-64 rounded-sm bg-[#07101F] border border-[#C9973E]/25 hover:border-[#C9973E]/60 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 shadow-lg"
              >
                {/* CSS Geometric Linework Composition (Placeholder for future image) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1628] via-[#07101F] to-[#03070E] opacity-90" />
                <div className="absolute inset-0 astronomical-grid opacity-30 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#C9973E]/10 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                {/* Top Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-2.5 rounded-sm bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] group-hover:bg-[#C9973E] group-hover:text-[#07101F] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-[#C9973E]/70 uppercase">
                    ARCHIVAL CATEGORY
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-cinzel text-lg font-bold tracking-[0.18em] text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#A3B1C6] font-sans">
                    {item.motif}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
