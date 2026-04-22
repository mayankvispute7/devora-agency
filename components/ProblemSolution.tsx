"use client";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Rocket, Bot, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  
  const problemReveal: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: { 
      opacity: 1, y: 0, rotateX: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const solutionContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const crashDuration = 1.0; 

  const leftBoxCrash: Variants = {
    hidden: { opacity: 0, x: -800, rotate: -30 },
    visible: { 
      opacity: 1, x: [null, 80, -20, 0], rotate: [null, 15, -5, 0],     
      transition: { duration: crashDuration, times: [0, 0.5, 0.75, 1], ease: "easeInOut" }
    }
  };

  const rightBoxCrash: Variants = {
    hidden: { opacity: 0, x: 800, rotate: 30 },
    visible: { 
      opacity: 1, x: [null, -80, 20, 0], rotate: [null, -15, 5, 0],     
      transition: { duration: crashDuration, times: [0, 0.5, 0.75, 1], ease: "easeInOut" }
    }
  };

  const middleBoxCrash: Variants = {
    hidden: { opacity: 0, y: 800, scale: 0.5 },
    visible: { 
      opacity: 1, y: [null, -60, 15, 0], scale: [null, 1.1, 0.95, 1],   
      transition: { duration: crashDuration, times: [0, 0.5, 0.75, 1], ease: "easeInOut" }
    }
  };

  // 🟢 FIXED: Explicitly typed as TargetAndTransition so TS knows "spring" is valid!
  const wowHover: TargetAndTransition = { 
    y: -12, 
    scale: 1.03, 
    transition: { duration: 0.4, type: "spring", bounce: 0.5 } 
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 relative font-sans overflow-hidden bg-transparent perspective-[2000px]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-[#0A0A10]/80 text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            The Paradigm Shift
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-semibold text-white tracking-tighter leading-[1.05] max-w-4xl"
          >
            Stop losing revenue. <br className="hidden md:block" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 pr-2">
              Start scaling automatically.
            </span>
          </motion.h2>
        </div>

        <motion.div 
          variants={problemReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.01, boxShadow: "0px 0px 50px rgba(239,68,68,0.15), inset 0px 0px 30px rgba(239,68,68,0.05)", borderColor: "rgba(239,68,68,0.4)" }}
          className="relative group rounded-[2.5rem] bg-[#08080C]/90 backdrop-blur-3xl border border-red-900/40 p-8 md:p-12 overflow-hidden shadow-[0_20px_60px_rgba(239,68,68,0.1)] mb-24 max-w-4xl mx-auto transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600/80 to-transparent opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-red-600/20 transition-colors duration-500"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 shrink-0 rounded-[2rem] bg-red-950/50 flex items-center justify-center border border-red-500/30 shadow-[inset_0_0_30px_rgba(239,68,68,0.2)] group-hover:bg-red-900/60 transition-colors duration-500">
              <AlertTriangle className="text-red-500 group-hover:scale-110 group-hover:animate-pulse transition-transform" size={40} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">The <span className="font-playfair italic text-red-400">Challenge</span></h3>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-gray-200 font-medium mb-2 flex items-center justify-center md:justify-start gap-3 text-lg tracking-wide">
                    <TrendingDown className="text-red-500/70 group-hover:text-red-400 transition-colors" size={20}/> Outdated Presence
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Slow, clunky websites that destroy customer trust, tank your SEO, and send clients directly to your competitors.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-200 font-medium mb-2 flex items-center justify-center md:justify-start gap-3 text-lg tracking-wide">
                    <Clock className="text-red-500/70 group-hover:text-red-400 transition-colors" size={20}/> Manual Chaos
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Wasting hundreds of hours on manual bookings, phone orders, and spreadsheets instead of growing your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center mb-16 mt-12">
            <div className="w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-900/20 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)] mb-4">
              <CheckCircle2 className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              The <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 pr-2">Solution</span>
            </h3>
        </div>

        <motion.div 
          variants={solutionContainerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: "0px" }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 overflow-visible"
        >
          <motion.div variants={leftBoxCrash} whileHover={wowHover} className="relative group rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 p-8 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] z-10 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-500/30 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:-translate-y-2 transition-all duration-300">
                <Rocket className="text-gray-300 group-hover:text-cyan-300" size={24} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">Premium Ecosystems</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200">Lightning-fast, Apple-level user interfaces that convert visitors into high-paying clients instantly.</p>
            </div>
          </motion.div>

          <motion.div variants={middleBoxCrash} whileHover={wowHover} className="relative group rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 p-8 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] z-20 hover:border-purple-500/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-purple-500/30 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 group-hover:-translate-y-2 transition-all duration-300">
                <Bot className="text-gray-300 group-hover:text-purple-300" size={24} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">AI & Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200">Intelligent systems seamlessly handle your lead capture and customer support 24/7 on autopilot.</p>
            </div>
          </motion.div>

          <motion.div variants={rightBoxCrash} whileHover={wowHover} className="relative group rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 p-8 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] z-10 hover:border-emerald-400/60 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-500/30 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-white/10 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10 group-hover:-translate-y-2 transition-all duration-300">
                <ShieldCheck className="text-gray-300 group-hover:text-emerald-300" size={24} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">Market Leadership</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200">Future-proof, enterprise-grade architecture engineered strictly to scale your revenue.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}