"use client";
import { motion, Variants } from "framer-motion"; // 🟢 Added Variants import
import Link from "next/link";
import { useState } from "react";

const DevoraIcon = () => {
  // 🟢 FIXED: Explicitly typed as Variants and changed ease array to "easeOut"
  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 1.5, 
        ease: "easeOut", // 🟢 FIXED: Removed the number array causing the crash
        delay: 0.2 
      }
    }
  };

  return (
    <motion.div
      className="relative w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
      initial="hidden"
      animate="visible"
      variants={iconVariants}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }} 
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_15px_3px_rgba(56,189,248,0.7)]"></div>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M50 15L93.3013 40V60L50 85L6.69873 60V40L50 15Z"
          stroke="url(#baseGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-90 mix-blend-lighten"
        />
        
        <motion.path
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          d="M38 42L28 50L38 58M62 42L72 50L62 58"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        />

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          d="M50 35V65M35 50H65"
          stroke="url(#focusGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-60"
        />

        <defs>
          <linearGradient id="baseGradient" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="focusGradient" x1="50" y1="35" x2="50" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[20px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-500"></div>
    </motion.div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#05050A]/60 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3.5 group">
          <DevoraIcon />
          <span className="text-3xl font-black tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
            Devora<span className="text-cyan-400">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="relative hover:text-cyan-400 transition-colors group-nav">
            Capabilities
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-nav-hover:w-full"></span>
          </Link>
          <Link href="#process" className="relative hover:text-purple-400 transition-colors group-nav">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-purple-400 transition-all duration-300 group-nav-hover:w-full"></span>
          </Link>
          <Link href="#pricing" className="relative hover:text-cyan-400 transition-colors group-nav">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-nav-hover:w-full"></span>
          </Link>
        </div>

        <Link href="#meeting" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-white/10 hover:border-purple-500/30 text-white text-sm font-bold transition-all backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:scale-[1.03]">
          Let's Talk
        </Link>
      </div>
    </motion.nav>
  );
}