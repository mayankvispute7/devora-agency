"use client";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion"; 
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const AURA_PHRASES = [
  { 
    text: "BE SEEN.", 
    style: "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
  },
  { 
    text: "BE REMEMBERED.", 
    style: "text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
  },
  { 
    text: "WITH AURA.", 
    style: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
  }
];

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Fast skeleton removal
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); 
    return () => clearTimeout(timer);
  }, []);

  // Text Loop Timer
  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % AURA_PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isLoading]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 px-6 z-10">
      
      {/* SKELETON LOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(10px)" }} transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none gap-6"
          >
            <div className="w-48 h-6 bg-white/5 rounded-full animate-pulse blur-sm"></div>
            <div className="w-[80vw] max-w-3xl h-20 md:h-32 bg-white/5 rounded-2xl animate-pulse blur-sm"></div>
            <div className="w-[60vw] max-w-xl h-4 bg-white/5 rounded-full animate-pulse blur-sm mt-4"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          className="relative w-full max-w-5xl mx-auto text-center flex flex-col items-center mt-10 z-30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ARCHITECTURE BADGE */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.03)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300"></span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Devora Digital Architecture
              </span>
            </div>
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[5rem] font-semibold text-gray-300 tracking-tight leading-[1.1] mb-2 md:mb-4">
            YOUR{" "}
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-100 via-white to-purple-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
              BUSINESS
            </span>{" "}
            NEEDS&nbsp;IT.
            <br className="block" />
            <span className="block mt-2 font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 text-5xl md:text-7xl lg:text-[6.5rem]">
              WE BUILD IT.
            </span>
          </motion.h1>

          {/* 🟢 THE COLORFUL LOOPING SUB-HEADLINE */}
          <motion.div variants={itemVariants} className="h-12 md:h-16 flex items-center justify-center mb-6 md:mb-8 relative overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={phraseIndex}
                initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute text-2xl md:text-3xl font-playfair tracking-[0.3em] font-bold ${AURA_PHRASES[phraseIndex].style}`}
              >
                {AURA_PHRASES[phraseIndex].text}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* SHORT PREMIUM COMPANY BIO */}
          <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-400 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Devora is a premium digital engineering studio. We bridge the gap between ambitious business ideas and scalable digital systems, specializing in AI, custom software, and immersive web experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-12">
            <Link 
              href="#contact" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden"
            >
              Start A Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="#work" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white font-medium text-sm tracking-wide transition-all backdrop-blur-md"
            >
              <Sparkles size={16} className="text-gray-400 group-hover:text-cyan-300 transition-colors" />
              See Our Work
            </Link>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}