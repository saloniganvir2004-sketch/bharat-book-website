"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, CheckCircle2 } from "lucide-react";

export function BookDetails() {
  const specs = [
    { label: "Book Title", value: "BHARAT" },
    { label: "Subtitle", value: "The Hindu Civilization & Its Politics" },
    { label: "Author & Publisher", value: "Mayur Maskhare" },
    { label: "Edition", value: "First Edition" },
    { label: "Publication Year", value: "2026" },
    { label: "ISBN-13", value: "978-93-6068-755-7" },
    { label: "Language", value: "English" },
    { label: "Total Chapters", value: "15 Chapters" },
    { label: "Availability Status", value: "Coming Soon (2026)" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050B15] border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <Book className="w-3.5 h-3.5" />
            <span>ARCHIVAL INDEX</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#F2EBDD]">
            BOOK SPECIFICATIONS
          </h2>
        </div>

        {/* Specs Table / Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-sm bg-[#07101F]/90 border border-[#C9973E]/30 shadow-2xl space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 divide-y sm:divide-y-0 divide-[#C9973E]/15">
            {specs.map((item) => (
              <div key={item.label} className="pt-3 sm:pt-0 flex flex-col space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9973E]">
                  {item.label}
                </span>
                <span className="font-cinzel text-base font-semibold text-[#F2EBDD]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#C9973E]/20 flex items-center justify-center gap-2 text-xs font-mono text-[#A3B1C6]">
            <CheckCircle2 className="w-4 h-4 text-[#C9973E]" />
            <span>OFFICIAL PUBLICATION METADATA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
