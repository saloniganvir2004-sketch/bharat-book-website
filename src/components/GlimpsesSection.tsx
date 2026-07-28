"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

export function GlimpsesSection() {
  const chapters = [
    { num: "01", title: "Civilization They Tried to Make You Forget", coord: "28.6139° N, 77.2090° E" },
    { num: "02", title: "What They Hid in Your Textbook", coord: "25.3176° N, 82.9739° E" },
    { num: "03", title: "Greatest Theft in History", coord: "15.3350° N, 76.4600° E" },
    { num: "04", title: "Dynasty That Betrayed Bharat", coord: "27.1767° N, 78.0081° E" },
    { num: "05", title: "Itihasa: This Is Not Mythology", coord: "30.0158° N, 76.8159° E" },
    { num: "06", title: "Temples of Science", coord: "20.0076° N, 86.0945° E" },
    { num: "07", title: "The Awakening", coord: "22.5726° N, 88.3639° E" },
    { num: "08", title: "The Final Push", coord: "18.9220° N, 72.8347° E" },
    { num: "09", title: "The Knowledge They Stole From Us", coord: "25.3748° N, 85.2796° E" },
    { num: "10", title: "Bimari Becho, Dawa Becho", coord: "23.2599° N, 77.4126° E" },
    { num: "11", title: "The Great Erasure", coord: "26.9124° N, 75.7873° E" },
    { num: "12", title: "Bharat Rising", coord: "23.0225° N, 72.5714° E" },
    { num: "13", title: "Sabka Kaccha Chitha", coord: "28.7041° N, 77.1025° E" },
    { num: "14", title: "The Connected Cosmos", coord: "10.7870° N, 79.1378° E" },
    { num: "15", title: "Gyan Ganj", coord: "30.3165° N, 78.0322° E" },
  ];

  return (
    <section id="glimpses" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
        <div className="absolute inset-0 archival-texture opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHIVAL REPOSITORY</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((chap, idx) => (
            <motion.div
              key={chap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
              className="relative group p-6 sm:p-7 rounded-sm bg-[#0B1628]/90 border border-[#C9973E]/20 hover:border-[#C9973E]/60 transition-all duration-500 shadow-lg flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(201,151,62,0.15)] transform hover:-translate-y-0.5"
            >
              {/* Card Archival Background Texture */}
              <div className="absolute inset-0 archival-texture opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none rounded-sm" />

              <div>
                {/* Chapter Number & Archival Coordinate */}
                <div className="flex items-center justify-between mb-4 border-b border-[#C9973E]/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-[#C9973E] tracking-widest">
                      CHAPTER {chap.num}
                    </span>
                    <Sparkles className="w-3 h-3 text-[#C9973E]/40 group-hover:text-[#C9973E] transition-colors" />
                  </div>
                  <span className="text-[9px] font-mono text-[#A3B1C6]/60 tracking-wider">
                    {chap.coord}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors leading-snug mb-6">
                  {chap.title}
                </h3>
              </div>

              {/* Mystery CTA */}
              <a
                href="#coming-soon"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C9973E] group-hover:text-[#F2EBDD] transition-colors pt-3 border-t border-[#C9973E]/15"
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
