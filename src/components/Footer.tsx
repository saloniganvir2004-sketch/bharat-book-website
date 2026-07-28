"use client";

import React from "react";
import Link from "next/link";
import { Compass, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "THE BOOK", href: "#the-book" },
    { name: "GLIMPSES", href: "#glimpses" },
    { name: "EVIDENCE", href: "#evidence" },
    { name: "AUTHOR", href: "#author" },
  ];

  const socialPlaceholders = [
    { name: "Instagram", icon: Instagram, label: "Instagram (Coming Soon)" },
    { name: "YouTube", icon: Youtube, label: "YouTube (Coming Soon)" },
    { name: "X", icon: Twitter, label: "X (Coming Soon)" },
  ];

  return (
    <footer className="bg-[#03070E] text-[#A3B1C6] border-t border-[#C9973E]/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#C9973E]/40 bg-[#0B1628]">
                <Compass className="w-4 h-4 text-[#C9973E]" />
              </div>
              <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#F2EBDD]">
                BHARAT
              </span>
            </Link>

            <p className="font-cormorant text-lg text-[#A3B1C6] italic">
              The Hindu Civilization & Its Politics
            </p>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9973E]">
              BY MAYUR MASKHARE
            </p>
          </div>

          {/* Center Column: Nav Links */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#A3B1C6] hover:text-[#F2EBDD] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Column: Social Placeholders */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-4">
            {socialPlaceholders.map((soc) => {
              const IconComponent = soc.icon;
              return (
                <div
                  key={soc.name}
                  className="p-2.5 rounded-sm bg-[#0B1628] border border-[#C9973E]/20 text-[#A3B1C6]/60 cursor-not-allowed"
                  title={soc.label}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#C9973E]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A3B1C6]/60 gap-4">
          <p>© 2026 Mayur Maskhare. All rights reserved.</p>
          <p className="uppercase tracking-widest text-[#C9973E]/80">FIRST EDITION • COMING 2026</p>
        </div>

      </div>
    </footer>
  );
}
