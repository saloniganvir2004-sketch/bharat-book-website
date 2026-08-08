"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "THE BOOK", href: "#the-book" },
    { name: "GLIMPSES", href: "#glimpses" },
    { name: "EVIDENCE", href: "#evidence" },
    { name: "AUTHOR", href: "#author" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07101F]/90 backdrop-blur-md border-b border-[#C9973E]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-[#C9973E]/40 bg-[#0B1628] group-hover:border-[#C9973E] transition-colors duration-300">
              <Compass className="w-5 h-5 text-[#C9973E] transition-transform duration-700 group-hover:rotate-90" />
              <div className="absolute inset-0 rounded-full bg-[#C9973E]/10 animate-pulse-subtle pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F2EBDD] group-hover:text-[#E5B869] transition-colors">
                BHARAT
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#C9973E]/80 font-mono -mt-1 hidden sm:block">
                CIVILIZATION & POLITICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#A3B1C6] hover:text-[#F2EBDD] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9973E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#coming-soon"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm border border-[#C9973E]/50 bg-[#0B1628]/80 text-xs font-semibold uppercase tracking-[0.2em] text-[#F2EBDD] hover:bg-[#C9973E] hover:text-[#07101F] hover:border-[#C9973E] transition-all duration-300 shadow-[0_0_15px_rgba(201,151,62,0.1)] hover:shadow-[0_0_25px_rgba(201,151,62,0.35)]"
            >
              <span>BUY NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#A3B1C6] hover:text-[#F2EBDD] bg-[#0B1628]/60 border border-[#C9973E]/30 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C9973E]" />
              ) : (
                <Menu className="w-6 h-6 text-[#C9973E]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07101F]/98 backdrop-blur-2xl border-b border-[#C9973E]/30 px-6 py-8 space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.25em] font-medium text-[#A3B1C6] hover:text-[#F2EBDD] transition-colors py-1 border-b border-[#C9973E]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#coming-soon"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-[#C9973E] bg-[#C9973E] text-[#07101F] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E5B869] transition-all"
              >
                <span>BUY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
