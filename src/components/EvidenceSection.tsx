"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scroll, Library, FileText, Search, ArrowRight } from "lucide-react";

export function EvidenceSection() {
  const cards = [
    {
      title: "PRIMARY SOURCES",
      desc: "Original records, texts and historical material examined in context.",
      icon: Scroll,
    },
    {
      title: "ACADEMIC RESEARCH",
      desc: "Research, scholarship and competing historical interpretations.",
      icon: Library,
    },
    {
      title: "HISTORICAL RECORDS",
      desc: "Documented records used to examine events across different periods.",
      icon: FileText,
    },
    {
      title: "DOCUMENTED EVIDENCE",
      desc: "Sources and citations that allow readers to examine claims for themselves.",
      icon: Search,
    },
  ];

  return (
    <section id="evidence" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-[#0B1628] to-transparent opacity-80 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <Search className="w-3.5 h-3.5" />
            <span>RESEARCH PHILOSOPHY</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight">
            DON&apos;T JUST BELIEVE IT. <br />
            <span className="gold-text-gradient">EXAMINE IT.</span>
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl text-[#A3B1C6] font-light leading-relaxed">
            BHARAT is built around a simple principle: claims should lead back to sources.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="p-7 rounded-sm bg-[#0B1628]/90 border border-[#C9973E]/20 hover:border-[#C9973E]/60 transition-all duration-300 shadow-lg flex items-start gap-4 group"
              >
                <div className="p-3 rounded-sm bg-[#C9973E]/10 border border-[#C9973E]/30 text-[#C9973E] group-hover:bg-[#C9973E] group-hover:text-[#07101F] transition-colors flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-cinzel text-base font-bold tracking-[0.18em] text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#A3B1C6] font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Philosophy Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="p-7 rounded-sm bg-[#0B1628]/60 border border-[#C9973E]/30 max-w-4xl mx-auto text-center space-y-5"
        >
          <p className="font-cormorant text-xl sm:text-2xl text-[#F2EBDD] font-light leading-relaxed">
            The book distinguishes between established facts, competing interpretations and questions where the historical record remains disputed.
          </p>

          <a
            href="#coming-soon"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-[#C9973E] bg-[#C9973E] text-[#07101F] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#E5B869] transition-all duration-300 shadow-[0_0_20px_rgba(201,151,62,0.25)]"
          >
            <span>FOLLOW THE SOURCES. FORM YOUR OWN VIEW.</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
