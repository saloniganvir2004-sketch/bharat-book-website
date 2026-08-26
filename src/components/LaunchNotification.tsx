"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell, CheckCircle2 } from "lucide-react";

export function LaunchNotification() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStatusMessage("Thank you — you're subscribed.");
      setEmail("");
    }
  };

  return (
    <section id="publication-alert" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050B15] border-t border-b border-[#C9973E]/20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#0B1628] to-transparent opacity-80 blur-3xl" />
        <div className="absolute inset-0 astronomical-grid opacity-15" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1628] border border-[#C9973E]/30 text-[#C9973E] text-[10px] font-mono tracking-[0.3em] uppercase">
          <Bell className="w-3.5 h-3.5" />
          <span>PUBLICATION ALERTS</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#F2EBDD]">
          STAY CONNECTED TO BHARAT.
        </h2>

        <p className="font-cormorant text-xl sm:text-2xl text-[#A3B1C6] font-light max-w-xl mx-auto leading-relaxed">
          Get updates on new editions, future writing, and the story behind BHARAT.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-1">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9973E]/60" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-12 pr-4 py-3.5 rounded-sm bg-[#0B1628] border border-[#C9973E]/30 text-[#F2EBDD] placeholder-[#A3B1C6]/60 text-sm font-sans focus:outline-none focus:border-[#C9973E] focus:ring-1 focus:ring-[#C9973E] transition-colors"
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap px-8 py-3.5 rounded-sm border border-[#C9973E] bg-[#C9973E] text-[#07101F] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E5B869] transition-all duration-300 shadow-[0_0_20px_rgba(201,151,62,0.3)] cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </div>

          {/* Feedback Message */}
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-sm bg-[#0B1628] border border-[#C9973E]/50 text-xs font-mono text-[#E5B869] flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#C9973E]" />
              <span>{statusMessage}</span>
            </motion.div>
          )}
        </form>

      </div>
    </section>
  );
}
