"use client";
import { motion, Variants } from "framer-motion"; 
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // 🟢 THE FIX: Delayed by 3.5 seconds so it waits for the logo & dots explosion!
      transition: { staggerChildren: 0.15, delayChildren: 3.5 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 px-6">
      
      {/* THE PREMIUM AURA */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[130px] mix-blend-screen"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
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

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05] mb-6">
          We engineer everything <br className="hidden md:block" />
          your business{" "}
          <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 pr-2">
            requires.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
          Forget templates. We build bespoke digital ecosystems, artificial intelligence workflows, and scalable platforms designed to dominate your market.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden"
          >
            Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            href="#capabilities" 
            onClick={(e) => { e.preventDefault(); document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 text-white font-medium text-sm tracking-wide transition-all backdrop-blur-md"
          >
            <Sparkles size={16} className="text-gray-400 group-hover:text-cyan-300 transition-colors" />
            Explore Capabilities
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}