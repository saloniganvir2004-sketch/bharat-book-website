"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Lock } from "lucide-react";

export function QuestionSection() {
  const questions = [
    "What was built?",
    "What was lost?",
    "What survived?",
    "What was forgotten?",
    "What do the records actually say?",
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050B15] text-center border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#0B1628] via-[#050B15] to-[#050B15] opacity-90" />
        <div className="absolute inset-0 astronomical-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>UNANSWERED QUESTIONS</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#F2EBDD] leading-tight">
            WHAT IF THE STORY YOU KNOW <br className="hidden sm:inline" />
            <span className="gold-text-gradient">IS ONLY PART OF THE STORY?</span>
          </h2>
        </motion.div>

        {/* Individual Questions Reveal (Optimized vertical padding by 25%) */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {questions.map((question, idx) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="py-4 px-6 rounded-sm bg-[#07101F]/80 border border-[#C9973E]/20 hover:border-[#C9973E]/50 transition-all duration-300 shadow-md flex items-center justify-between group"
            >
              <p className="font-cormorant text-xl sm:text-2xl text-[#F2EBDD] font-light italic text-left group-hover:text-[#E5B869] transition-colors">
                {question}
              </p>
              <Lock className="w-4 h-4 text-[#C9973E]/50 group-hover:text-[#C9973E] transition-colors flex-shrink-0 ml-4" />
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 border-t border-[#C9973E]/25 space-y-2"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#C9973E]">
            THE ANSWERS ARE INSIDE
          </p>
          <h3 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.25em] text-[#F2EBDD]">
            BHARAT
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
