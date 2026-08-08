"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, MapPin, BookOpen } from "lucide-react";

// Easily insert official retailer URLs here when available:
const RETAILER_CONFIG = {
  amazonUrl: "https://www.amazon.in/BHARAT-Hindu-Civilization-Its-Politics-ebook/dp/B0HC6JHM73/ref=sr_1_1?crid=2T5TGYNSLVM8T&dib=eyJ2IjoiMSJ9.qUbisCulTmcwlanN_TzRs1Z4mw3eg514-8Rul_hY9AqEaycw02AkFswb7pG6973WratAVhb0r7_BLCz3Uzks4bYZ6uzXztJsd_G-SshR6uUZFZObM9_LxAx8KtwW1WELh_u2_L4ECWHnWCrA21L9Mg.s37R5UWcMrzz7fEr93d9rYr4JEbZecHnUHq1dalDEb0&dib_tag=se&keywords=bharat+the+hindu+civilization+%26+its+politics&qid=1786204922&sprefix=bharat+the+hindu%2Caps%2C518&sr=8-1",
  kindleUrl: "https://read.amazon.in/kp/kshare?asin=B0HC6JHM73&id=t2uknc4bkzd33aodsulvys3jgi",
  flipkartUrl: "", // e.g. "https://flipkart.com/..."
};

export function ComingSoonBuy() {
  return (
    <section id="coming-soon" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-radial from-[#0B1628] via-[#07101F] to-[#07101F] opacity-90" />
        <div className="absolute inset-0 astronomical-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: OFFICIAL BOOK COVER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-radial from-[#C9973E]/30 via-[#0B1628]/50 to-transparent rounded-2xl blur-3xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative w-[280px] sm:w-[330px] h-[390px] sm:h-[460px] rounded-lg border border-[#C9973E]/40 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] bg-[#091426]">
                <Image
                  src="/images/BHARAT_Cover_final.png"
                  alt="BHARAT Official Book Cover"
                  fill
                  sizes="330px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: HEADING & RETAILER BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PUBLICATION ANNOUNCEMENT</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] text-[#F2EBDD] leading-tight">
                THE PAST IS WRITTEN. <br />
                <span className="gold-text-gradient">THE QUESTION IS WHETHER YOU WILL READ IT.</span>
              </h2>

              <div className="pt-1">
                <p className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.2em] text-[#E5B869]">
                  BHARAT
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E] mt-1">
                  AVAILABLE NOW
                </p>
              </div>
            </div>

            {/* Retailer Buttons Container */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3B1C6]">
                OFFICIAL RETAIL PARTNERS
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center lg:justify-start">
                
                {/* AMAZON BUTTON */}
                <a
                  href={RETAILER_CONFIG.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-w-[200px] flex items-center justify-between gap-4 px-6 py-4 rounded-sm border border-[#C9973E]/70 bg-[#0B1628] hover:bg-[#C9973E] text-[#F2EBDD] hover:text-[#07101F] transition-all shadow-lg group"
                  title="Buy on Amazon"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-[#C9973E] group-hover:text-[#07101F] transition-colors" />
                    <span className="font-cinzel text-sm font-bold tracking-[0.15em]">
                      AMAZON
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#07101F] bg-[#C9973E] group-hover:bg-[#07101F] group-hover:text-[#C9973E] px-2.5 py-1 rounded font-bold uppercase transition-colors">
                    BUY ON AMAZON
                  </span>
                </a>

                {/* KINDLE BUTTON */}
                <a
                  href={RETAILER_CONFIG.kindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-w-[200px] flex items-center justify-between gap-4 px-6 py-4 rounded-sm border border-[#C9973E]/70 bg-[#0B1628] hover:bg-[#C9973E] text-[#F2EBDD] hover:text-[#07101F] transition-all shadow-lg group"
                  title="Read on Kindle"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#C9973E] group-hover:text-[#07101F] transition-colors" />
                    <span className="font-cinzel text-sm font-bold tracking-[0.15em]">
                      KINDLE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#07101F] bg-[#C9973E] group-hover:bg-[#07101F] group-hover:text-[#C9973E] px-2.5 py-1 rounded font-bold uppercase transition-colors">
                    READ ON KINDLE
                  </span>
                </a>

                {/* FLIPKART BUTTON */}
                <a
                  href="#coming-soon"
                  className="w-full sm:w-auto min-w-[200px] flex items-center justify-between gap-4 px-6 py-4 rounded-sm border border-[#C9973E]/30 bg-[#0B1628]/60 text-[#A3B1C6] cursor-not-allowed opacity-95 transition-all shadow-lg"
                  title="Flipkart purchasing link will activate upon publication"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-[#C9973E]/50" />
                    <span className="font-cinzel text-sm font-bold tracking-[0.15em]">
                      FLIPKART
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#C9973E] bg-[#C9973E]/10 px-2 py-0.5 rounded border border-[#C9973E]/30 uppercase">
                    COMING SOON
                  </span>
                </a>

              </div>
            </div>

            {/* Subtext */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-[0.25em] text-[#A3B1C6] pt-1">
              <MapPin className="w-4 h-4 text-[#C9973E]" />
              <span>AVAILABLE SOON IN INDIA</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
