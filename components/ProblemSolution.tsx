"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-32 px-6 relative bg-[#05050A] overflow-hidden">
      
      {/* --- Ambient Background Glows (Creates the Liquid Glass effect) --- */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
          >
            The Paradigm Shift
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Stop losing money. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Start scaling automatically.</span>
          </motion.h2>
        </div>

        {/* The Side-by-Side Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Optional Arrow Connector for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#0A0A10] border border-white/10 rounded-full items-center justify-center shadow-2xl">
            <ArrowRight className="text-gray-400" size={24} />
          </div>

          {/* ======================= */}
          {/* CARD 1: THE CHALLENGE   */}
          {/* ======================= */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative bg-[#0A0A10]/40 backdrop-blur-3xl border border-red-500/20 rounded-[2rem] p-8 md:p-12 hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Liquid Glass Inner Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest w-max shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                The Challenge
              </div>
              
              <h3 className="text-3xl font-black mb-8 text-white tracking-tight">
                Trapped in <span className="text-red-400">Bad Tech.</span>
              </h3>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-red-500/5 group-hover:border-red-500/10">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Outdated Digital Presence</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Slow, ugly websites that instantly destroy customer trust and tank SEO rankings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-red-500/5 group-hover:border-red-500/10">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Manual Chaos</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Wasting hours on manual bookings, phone orders, and spreadsheet inventory management.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-red-500/5 group-hover:border-red-500/10">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Bleeding Revenue</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Competitors with better apps and websites are quietly stealing your local market share.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================== */}
          {/* CARD 2: THE EVOLUTION    */}
          {/* ======================== */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group relative bg-[#0A0A10]/40 backdrop-blur-3xl border border-cyan-500/20 rounded-[2rem] p-8 md:p-12 hover:-translate-y-2 transition-transform duration-500 shadow-[0_0_80px_rgba(56,189,248,0.05)]"
          >
            {/* Liquid Glass Inner Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest w-max shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                The Evolution
              </div>
              
              <h3 className="text-3xl font-black mb-8 text-white tracking-tight">
                Built to <span className="text-cyan-400">Dominate.</span>
              </h3>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-cyan-500/5 group-hover:border-cyan-500/10">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Premium Ecosystems</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Lightning-fast, Apple-level UI that converts visitors into high-paying clients instantly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-cyan-500/5 group-hover:border-cyan-500/10">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">AI & Automation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Smart systems handle your bookings, digital menus, and customer support 24/7 on autopilot.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 transition-colors group-hover:bg-cyan-500/5 group-hover:border-cyan-500/10">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Market Leadership</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Future-proof architecture designed specifically to scale your revenue and crush competitors.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}