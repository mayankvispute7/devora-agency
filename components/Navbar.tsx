"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A10]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 🟢 NEW UNIFIED 3D LOGO: The Miniature Morphing Tesseract */}
        <Link href="/" onClick={(e) => scrollToSection(e, 'top')} className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center perspective-[300px]">
            {/* Cyan morphing box */}
            <motion.div
              animate={{ rotateX: [0, 180, 360], rotateY: [0, 180, 360], borderRadius: ["10%", "50%", "10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[2px] border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-shadow"
            />
            {/* Purple morphing box */}
            <motion.div
              animate={{ rotateX: [360, 180, 0], rotateY: [0, 180, 360], borderRadius: ["50%", "10%", "50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[2px] border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-shadow"
            />
            {/* Core */}
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff] group-hover:scale-150 transition-transform duration-300 animate-pulse" />
          </div>
          
          <span className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-gray-200 transition-colors">
            Devora<span className="text-cyan-400 font-playfair italic lowercase tracking-normal text-3xl leading-none">.</span>
          </span>
        </Link>

        {/* 🟢 Desktop Links - Added 'About' */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">Capabilities</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">Process</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">Pricing</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">About</a>
        </div>

        <div className="hidden md:flex">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🟢 Mobile Menu Dropdown - Added 'About' */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0A0A10]/95 backdrop-blur-3xl border-b border-white/5 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          <a href="#capabilities" onClick={(e) => scrollToSection(e, 'capabilities')} className="text-lg font-medium text-gray-300 hover:text-white">Capabilities</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="text-lg font-medium text-gray-300 hover:text-white">Process</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-lg font-medium text-gray-300 hover:text-white">Pricing</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-medium text-gray-300 hover:text-white">About</a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full py-4 rounded-xl bg-white text-black text-center font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
}