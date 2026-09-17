"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between bg-transparent pointer-events-auto"
    >
      {/* --- THE FLARE MOTION LOGO --- */}
      <Link href="/" className="flex items-center gap-4 group">
        {/* Glowing Star/Flare Element */}
        <div className="relative flex items-center justify-center w-4 h-4">
          {/* Center Dot */}
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] z-10" />
          {/* Vertical Ray */}
          <div className="absolute w-[1px] h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent group-hover:scale-y-[1.5] transition-transform duration-500 ease-out" />
          {/* Horizontal Ray */}
          <div className="absolute h-[1px] w-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:scale-x-[1.5] transition-transform duration-500 ease-out" />
        </div>
        
        {/* Animated Gradient Text */}
        <span className="text-2xl md:text-3xl font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide pr-2">
          Devora.
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/work" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          Work
        </Link>
        <Link href="/#process" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          Process
        </Link>
        <Link href="/#pricing" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          Pricing
        </Link>
        <Link href="/about" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
          About
        </Link>
      </div>

      <Link 
        href="/#contact"
        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
      >
        Let's Talk
      </Link>
      
      <div className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 cursor-pointer">
        <div className="w-full h-[2px] bg-white rounded-full" />
        <div className="w-2/3 h-[2px] bg-white rounded-full" />
      </div>
    </motion.nav>
  );
}