"use client";

import React from "react";
import Image from "next/image";
import { Compass, ChevronDown, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#07101F]">
      
      {/* ---------------- BACKGROUND ASTRONOMICAL ATMOSPHERE ---------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-radial from-[#0B1628] via-[#07101F] to-[#07101F] opacity-90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#C9973E]/12 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Astronomical Concentric SVG Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] sm:w-[950px] sm:h-[950px] opacity-20 animate-spin-slow">
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-[#C9973E]">
            <circle cx="500" cy="500" r="480" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="500" cy="500" r="380" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="500" cy="500" r="280" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 12" />
            <circle cx="500" cy="500" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="20" r="4" fill="currentColor" />
            <circle cx="980" cy="500" r="5" fill="currentColor" />
            <circle cx="500" cy="980" r="3" fill="currentColor" />
            <circle cx="20" cy="500" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Counter-Rotating Celestial Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] opacity-15 animate-spin-reverse-slow">
          <svg viewBox="0 0 600 600" className="w-full h-full text-[#E5B869]">
            <polygon points="300,30 534,165 534,435 300,570 66,435 66,165" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="300" cy="300" r="210" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 15" />
          </svg>
        </div>

        {/* Subtle Constellation Grid Background */}
        <div className="absolute inset-0 astronomical-grid opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-transparent to-[#07101F]/80" />
      </div>

      {/* ---------------- MAIN CONTENT GRID ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: TYPOGRAPHY & CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C9973E]/35 bg-[#0B1628]/80 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9973E] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E]">
                A DOCUMENTED HISTORY
              </span>
              <Compass className="w-3.5 h-3.5 text-[#C9973E]" />
            </div>

            {/* Main Book Title */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.18em] text-[#F2EBDD] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                BHARAT
              </h1>
              
              <h2 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-[#E5B869] italic pt-1">
                The Hindu Civilization & Its Politics
              </h2>
            </div>

            {/* Subtle Gold Line */}
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9973E]/70 to-transparent lg:to-transparent lg:from-[#C9973E]/70 my-2" />

            {/* Provocative Question */}
            <div className="space-y-2 max-w-2xl">
              <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#F2EBDD] font-light leading-tight">
                You were taught history.
              </p>
              <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl gold-text-gradient font-normal leading-tight">
                But were you taught all of it?
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#A3B1C6] max-w-xl font-sans tracking-wide leading-relaxed">
              Fifteen chapters. Hundreds of sources. One civilization.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#the-book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm border border-[#C9973E] bg-[#C9973E] text-[#07101F] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#E5B869] hover:border-[#E5B869] transition-all duration-300 shadow-[0_0_25px_rgba(201,151,62,0.3)] hover:shadow-[0_0_40px_rgba(201,151,62,0.5)] transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>DISCOVER BHARAT</span>
              </a>

              <a
                href="#coming-soon"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm border border-[#C9973E]/40 bg-[#0B1628]/70 backdrop-blur-md text-[#F2EBDD] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#0B1628] hover:border-[#C9973E] hover:text-[#E5B869] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <span>BUY NOW</span>
                <ArrowRight className="w-4 h-4 text-[#C9973E]" />
              </a>
            </div>

            {/* Author Credit */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A3B1C6]/70 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#C9973E]" />
              <span>BY MAYUR MASKHARE</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: OFFICIAL BOOK COVER DISPLAY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative group flex items-center justify-center">
              
              {/* Soft Restrained Gold Ambient Glow Behind Cover */}
              <div className="absolute -inset-6 bg-radial from-[#C9973E]/25 via-[#0B1628]/50 to-transparent rounded-2xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              {/* Cover Wrapper with Floating Animation & Perspective */}
              <div className="relative animate-float transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                
                <div className="relative w-[280px] sm:w-[330px] md:w-[370px] lg:w-[400px] h-[390px] sm:h-[460px] md:h-[510px] lg:h-[550px] rounded-lg shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(201,151,62,0.15)] border border-[#C9973E]/30 overflow-hidden bg-[#091426]">
                  
                  {/* Official Book Cover Image */}
                  <Image
                    src="/images/BHARAT_Cover_final.png"
                    alt="BHARAT: The Hindu Civilization & Its Politics by Mayur Maskhare"
                    fill
                    sizes="(max-width: 768px) 330px, (max-width: 1200px) 370px, 400px"
                    priority
                    className="object-cover object-center rounded-lg"
                  />
                  
                  {/* Subtle Metallic Sheen Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Subtle Shadow Floor Reflection */}
                <div className="w-[85%] h-5 mx-auto bg-black/60 rounded-full blur-md mt-4 pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ---------------- BOTTOM SCROLL INDICATOR ---------------- */}
      <a
        href="#opening-mystery"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#C9973E]">
          DISCOVER MORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#C9973E] animate-bounce" />
      </a>

    </section>
  );
}
