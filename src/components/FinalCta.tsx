"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050B15] text-center border-t border-[#C9973E]/20 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial from-[#0B1628] via-[#050B15] to-[#050B15] opacity-95" />
        <div className="absolute inset-0 astronomical-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        
        <div className="flex items-center justify-center gap-3 text-[#C9973E] opacity-80">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9973E]" />
          <Compass className="w-5 h-5 animate-spin-slow" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9973E]" />
        </div>

        {/* Huge Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-[#A3B1C6] font-light leading-tight">
            SOME STORIES ARE TOLD.
          </h2>

          <h2 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.12em] gold-text-gradient leading-tight">
            OTHERS HAVE TO BE <br />
            REDISCOVERED.
          </h2>
        </motion.div>

        {/* Book Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-6 space-y-2"
        >
          <h3 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.2em] text-[#F2EBDD]">
            BHARAT
          </h3>

          <p className="font-cormorant text-xl sm:text-2xl text-[#E5B869] italic">
            The Hindu Civilization & Its Politics
          </p>

          <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#C9973E] pt-4">
            COMING 2026
          </p>
        </motion.div>

        {/* Button */}
        <div className="pt-6">
          <a
            href="#coming-soon"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-sm border border-[#C9973E] bg-[#C9973E] text-[#07101F] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#E5B869] transition-all duration-300 shadow-[0_0_30px_rgba(201,151,62,0.35)]"
          >
            <span>JOIN THE PUBLICATION LIST</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
