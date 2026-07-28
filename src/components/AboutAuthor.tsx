"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Feather, Sparkles } from "lucide-react";

export function AboutAuthor() {
  const [portraitError, setPortraitError] = useState(false);
  const authorImagePath = "/images/author/mayur-maskhare.webp";

  return (
    <section id="author" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-radial from-[#0B1628] to-transparent opacity-80 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: AUTHOR PORTRAIT WITH IMAGE FALLBACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group p-4 rounded-xl bg-[#0B1628]/80 border border-[#C9973E]/30 shadow-2xl backdrop-blur-md">
              <div className="relative w-[260px] sm:w-[300px] h-[340px] sm:h-[390px] rounded-lg border border-[#C9973E]/40 bg-[#07101F] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                
                {!portraitError ? (
                  <Image
                    src={authorImagePath}
                    alt="Mayur Maskhare"
                    fill
                    sizes="300px"
                    onError={() => setPortraitError(true)}
                    className="object-cover object-center rounded-lg"
                  />
                ) : (
                  /* Fallback when image does not exist yet */
                  <>
                    <div className="absolute inset-0 astronomical-grid opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-transparent to-[#07101F]/60" />

                    <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[#C9973E]/50 bg-[#0B1628] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,151,62,0.2)]">
                      <User className="w-12 h-12 text-[#C9973E]" />
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h3 className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F2EBDD]">
                        MAYUR MASKHARE
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9973E]">
                        AUTHOR & PUBLISHER
                      </p>
                    </div>
                  </>
                )}

              </div>

              {/* Tag below portrait */}
              <div className="pt-3 text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#A3B1C6]">
                  AUTHOR PORTRAIT
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: AUTHOR BIO COPY & BADGES */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
                <Feather className="w-3.5 h-3.5" />
                <span>MEET THE AUTHOR</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD]">
                ABOUT THE AUTHOR
              </h2>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E5B869] tracking-wider pt-1">
                MAYUR MASKHARE
              </h3>
            </div>

            {/* Author Copy */}
            <div className="space-y-4 font-cormorant text-xl sm:text-2xl text-[#A3B1C6] font-light leading-relaxed max-w-2xl">
              <p>
                Mayur Maskhare is the author and publisher of <strong className="text-[#F2EBDD] font-normal">BHARAT: The Hindu Civilization & Its Politics</strong>.
              </p>
              <p>
                BHARAT was written as an invitation to examine India&apos;s civilizational story through sources, competing interpretations and questions that deserve closer attention.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 border-t border-[#C9973E]/20">
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0B1628] border border-[#C9973E]/30 text-xs font-mono tracking-[0.2em] text-[#F2EBDD]">
                <Feather className="w-4 h-4 text-[#C9973E]" />
                <span>AUTHOR & PUBLISHER</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0B1628] border border-[#C9973E]/30 text-xs font-mono tracking-[0.2em] text-[#F2EBDD]">
                <Sparkles className="w-4 h-4 text-[#C9973E]" />
                <span>FIRST EDITION • 2026</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
