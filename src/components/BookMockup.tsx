"use client";

import React from "react";
import { Sparkles, Shield, Compass } from "lucide-react";

export function BookMockup() {
  return (
    <div className="relative group perspective-1000 flex items-center justify-center py-6">
      {/* Background Soft Gold Ambient Glow */}
      <div className="absolute -inset-4 bg-radial from-[#C9973E]/20 via-[#0B1628]/40 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-1000 pointer-events-none" />
      
      {/* Outer Floating Wrapper */}
      <div className="relative animate-float transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
        
        {/* Hardcover Book Spine & Page Shadow Container */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[410px] sm:h-[470px] md:h-[520px] bg-[#091426] rounded-r-lg rounded-l-sm shadow-[25px_25px_50px_rgba(0,0,0,0.8),-5px_0_15px_rgba(201,151,62,0.15)] border-t border-b border-r border-[#C9973E]/30 overflow-hidden flex flex-col justify-between p-7 sm:p-9 text-center select-none">
          
          {/* Subtle Leather & Paper Grain Texture */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050C17] via-[#0B1628] to-[#12223C] opacity-95" />
          <div className="absolute inset-0 astronomical-grid opacity-30 pointer-events-none" />

          {/* Left Spine Effect */}
          <div className="absolute top-0 bottom-0 left-0 w-[14px] bg-gradient-to-r from-[#03070E] via-[#0B1628] to-[#07101F] border-r border-[#C9973E]/30 shadow-inner" />
          
          {/* Top Decorative Border */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#C9973E] opacity-75 mb-2">
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C9973E]" />
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C9973E]" />
            </div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#C9973E]">
              A DOCUMENTED HISTORY
            </p>
          </div>

          {/* Book Center Artwork & Title */}
          <div className="relative z-10 my-auto flex flex-col items-center py-4">
            
            {/* Celestial Orbit Foil Design Motif */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#C9973E]/30 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-dashed border-[#C9973E]/20 animate-spin-reverse-slow" />
              <div className="absolute inset-6 rounded-full border border-[#C9973E]/40" />
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[#C9973E] drop-shadow-[0_0_12px_rgba(201,151,62,0.4)]" />
            </div>

            {/* Main Title Embossing */}
            <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.25em] text-[#F2EBDD] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-2">
              BHARAT
            </h3>

            {/* Gold Rule Line */}
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9973E] to-transparent my-3" />

            {/* Subtitle */}
            <p className="font-cormorant text-base sm:text-lg italic text-[#F2EBDD]/90 max-w-[240px] leading-tight">
              The Hindu Civilization & Its Politics
            </p>
          </div>

          {/* Bottom Author Section */}
          <div className="relative z-10 pt-4 border-t border-[#C9973E]/20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A3B1C6]">
              BY
            </p>
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#E5B869] mt-0.5">
              MAYUR MASKHARE
            </p>
          </div>

          {/* Subtle Sheen Gradient Highlight */}
          <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 pointer-events-none group-hover:translate-x-12 transition-transform duration-1000" />
        </div>

        {/* Floating Official Artwork Badge */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#0B1628]/95 border border-[#C9973E]/60 text-[10px] font-mono tracking-widest text-[#E5B869] uppercase shadow-lg flex items-center gap-1.5 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#C9973E] animate-pulse" />
          <span>OFFICIAL COVER ARTWORK COMING SOON</span>
        </div>
      </div>
    </div>
  );
}
