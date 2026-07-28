"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

export function HistoricalJourney() {
  const periods = [
    { title: "ANCIENT BHARAT", desc: "Foundations of thought, cosmology & Vedic science" },
    { title: "CLASSICAL AGE", desc: "Monuments of architecture, literature & mathematics" },
    { title: "MEDIEVAL INDIA", desc: "Eras of resistance, synthesis & preserved knowledge" },
    { title: "COLONIAL INDIA", desc: "Documented archives, resource drain & systemic erasure" },
    { title: "INDEPENDENCE", desc: "The reclaiming of identity and constitutional politics" },
    { title: "MODERN BHARAT", desc: "Civilizational renaissance in a multipolar world" },
    { title: "BEYOND THE KNOWN", desc: "The cosmic horizon & eternal heritage" },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050B15] border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#0B1628] via-[#050B15] to-[#050B15] opacity-80" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>CIVILIZATIONAL TIMELINE</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight">
            THOUSANDS OF YEARS. <br />
            <span className="gold-text-gradient">ONE CONTINUING STORY.</span>
          </h2>

          <p className="font-cormorant text-xl text-[#A3B1C6] font-light italic">
            From civilization and knowledge to conflict, politics and unanswered questions.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Layout */}
        <div className="relative pt-8 pb-4">
          
          {/* Connecting Antique Gold Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9973E]/60 to-transparent -translate-y-1/2 z-0" />
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#C9973E]/60 to-transparent z-0" />

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
            {periods.map((period, idx) => (
              <motion.div
                key={period.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group pl-12 lg:pl-0"
              >
                {/* Node Icon/Point */}
                <div className="absolute lg:relative left-3 lg:left-auto flex items-center justify-center w-7 h-7 rounded-full bg-[#07101F] border-2 border-[#C9973E] group-hover:bg-[#C9973E] group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(201,151,62,0.3)] mb-0 lg:mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#C9973E] group-hover:bg-[#07101F] transition-colors" />
                </div>

                {/* Content */}
                <div className="p-4 rounded-sm bg-[#0B1628]/80 border border-[#C9973E]/15 group-hover:border-[#C9973E]/40 transition-all duration-300 w-full">
                  <h3 className="font-cinzel text-xs font-bold tracking-[0.15em] text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors mb-1">
                    {period.title}
                  </h3>
                  <p className="text-[11px] text-[#A3B1C6] font-sans leading-tight">
                    {period.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="#the-book"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border border-[#C9973E] bg-[#C9973E]/10 text-xs font-bold uppercase tracking-[0.25em] text-[#F2EBDD] hover:bg-[#C9973E] hover:text-[#07101F] transition-all duration-300 shadow-[0_0_20px_rgba(201,151,62,0.2)]"
          >
            <span>THE JOURNEY IS INSIDE BHARAT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
