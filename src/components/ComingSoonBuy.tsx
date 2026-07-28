"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, MapPin } from "lucide-react";

// Easily insert official retailer URLs here when available:
const RETAILER_CONFIG = {
  amazonUrl: "",   // e.g. "https://amazon.in/dp/..."
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
                  COMING 2026
                </p>
              </div>
            </div>

            {/* Retailer Buttons Container */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3B1C6]">
                OFFICIAL RETAIL PARTNERS
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                
                {/* AMAZON BUTTON */}
                <a
                  href={RETAILER_CONFIG.amazonUrl || "#coming-soon"}
                  target={RETAILER_CONFIG.amazonUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`w-full sm:w-auto min-w-[200px] flex items-center justify-between gap-4 px-6 py-4 rounded-sm border border-[#C9973E]/50 bg-[#0B1628] text-[#F2EBDD] transition-all shadow-lg ${
                    RETAILER_CONFIG.amazonUrl
                      ? "hover:border-[#C9973E] hover:bg-[#C9973E] hover:text-[#07101F]"
                      : "cursor-not-allowed opacity-95"
                  }`}
                  title={RETAILER_CONFIG.amazonUrl ? "Buy on Amazon" : "Amazon purchasing link will activate upon publication"}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-[#C9973E]" />
                    <span className="font-cinzel text-sm font-bold tracking-[0.15em]">
                      AMAZON
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#C9973E] bg-[#C9973E]/10 px-2 py-0.5 rounded border border-[#C9973E]/30 uppercase">
                    {RETAILER_CONFIG.amazonUrl ? "BUY NOW" : "COMING SOON"}
                  </span>
                </a>

                {/* FLIPKART BUTTON */}
                <a
                  href={RETAILER_CONFIG.flipkartUrl || "#coming-soon"}
                  target={RETAILER_CONFIG.flipkartUrl ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`w-full sm:w-auto min-w-[200px] flex items-center justify-between gap-4 px-6 py-4 rounded-sm border border-[#C9973E]/50 bg-[#0B1628] text-[#F2EBDD] transition-all shadow-lg ${
                    RETAILER_CONFIG.flipkartUrl
                      ? "hover:border-[#C9973E] hover:bg-[#C9973E] hover:text-[#07101F]"
                      : "cursor-not-allowed opacity-95"
                  }`}
                  title={RETAILER_CONFIG.flipkartUrl ? "Buy on Flipkart" : "Flipkart purchasing link will activate upon publication"}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-[#C9973E]" />
                    <span className="font-cinzel text-sm font-bold tracking-[0.15em]">
                      FLIPKART
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#C9973E] bg-[#C9973E]/10 px-2 py-0.5 rounded border border-[#C9973E]/30 uppercase">
                    {RETAILER_CONFIG.flipkartUrl ? "BUY NOW" : "COMING SOON"}
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
