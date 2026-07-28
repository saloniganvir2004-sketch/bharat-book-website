"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export function GlimpsesSection() {
  const chapters = [
    { num: "01", title: "Civilization They Tried to Make You Forget" },
    { num: "02", title: "What They Hid in Your Textbook" },
    { num: "03", title: "Greatest Theft in History" },
    { num: "04", title: "Dynasty That Betrayed Bharat" },
    { num: "05", title: "Itihasa: This Is Not Mythology" },
    { num: "06", title: "Temples of Science" },
    { num: "07", title: "The Awakening" },
    { num: "08", title: "The Final Push" },
    { num: "09", title: "The Knowledge They Stole From Us" },
    { num: "10", title: "Bimari Becho, Dawa Becho" },
    { num: "11", title: "The Great Erasure" },
    { num: "12", title: "Bharat Rising" },
    { num: "13", title: "Sabka Kaccha Chitha" },
    { num: "14", title: "The Connected Cosmos" },
    { num: "15", title: "Gyan Ganj" },
  ];

  return (
    <section id="glimpses" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>GLIMPSES OF THE ARCHIVE</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight">
            FIFTEEN CHAPTERS. <br />
            <span className="gold-text-gradient">ONE JOURNEY THROUGH BHARAT.</span>
          </h2>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3B1C6]">
            Select glimpses into the documented civilizational record
          </p>
        </div>

        {/* 15 Chapter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chap, idx) => (
            <motion.div
              key={chap.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15, ease: "easeOut" }}
              className="relative group p-8 rounded-sm bg-[#0B1628]/90 border border-[#C9973E]/20 hover:border-[#C9973E]/60 transition-all duration-500 shadow-xl flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(201,151,62,0.15)] transform hover:-translate-y-1"
            >
              {/* Subtle Card Background Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm" />

              <div>
                {/* Chapter Number */}
                <div className="flex items-center justify-between mb-4 border-b border-[#C9973E]/15 pb-3">
                  <span className="font-mono text-2xl font-bold text-[#C9973E] tracking-widest">
                    CHAPTER {chap.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C9973E]/40 group-hover:bg-[#C9973E] transition-colors" />
                </div>

                {/* Chapter Title */}
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors leading-tight mb-6">
                  {chap.title}
                </h3>
              </div>

              {/* Mystery CTA */}
              <a
                href="#coming-soon"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C9973E] group-hover:text-[#F2EBDD] transition-colors pt-4 border-t border-[#C9973E]/15"
              >
                <span>DISCOVER IN THE BOOK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#C9973E]" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
