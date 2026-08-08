"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is BHARAT about?",
      a: "BHARAT explores India's civilizational journey across history, knowledge, politics and questions that continue to shape the present.",
    },
    {
      q: "Is BHARAT available now?",
      a: "BHARAT is available now on Amazon and Kindle.",
    },
    {
      q: "Where can I purchase it?",
      a: "BHARAT is available for purchase on Amazon in paperback/ebook format and on Kindle.",
    },
    {
      q: "Are the claims in the book sourced?",
      a: "The book provides references and bibliographies so readers can examine the sources behind its historical claims.",
    },
    {
      q: "Will the entire book be available on this website?",
      a: "No. This website offers only selected glimpses into BHARAT. The complete journey belongs to the book.",
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07101F] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-radial from-[#0B1628] to-transparent opacity-70 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>INQUIRIES</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#F2EBDD]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-sm bg-[#0B1628]/80 border border-[#C9973E]/20 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-cinzel text-lg font-semibold tracking-wider text-[#F2EBDD]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9973E] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-cormorant text-xl text-[#A3B1C6] font-light border-t border-[#C9973E]/10 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
