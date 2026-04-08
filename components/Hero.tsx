"use client";
import { motion, Variants } from "framer-motion"; 
import { Sparkles, ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // 🟢 THIS IS THE FIX VERCEL NEEDS: ease: "easeOut"
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05050A] pt-20 px-6">
      
      <div className="absolute inset-0 z-0 bg-[#05050A]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105 opacity-80"
          src="/assets/videos/hero-bg.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/60 via-transparent to-[#05050A]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 mix-blend-overlay"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Full Digital Solutions
            </span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-6">
          We Build Anything Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            Business Needs
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-12 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-purple-500"></span>
          Websites, Apps &amp; Systems
          <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link href="#meeting" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.4)] overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
            Start Your Project <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="#features" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg transition-all backdrop-blur-md">
            <LayoutGrid size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            View Features
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05050A] to-transparent pointer-events-none"></div>
    </section>
  );
}