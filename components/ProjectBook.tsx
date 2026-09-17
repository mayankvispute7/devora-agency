"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectBook({ project, isActive, onHover, isMobile }: { project: any, isActive: boolean, onHover: () => void, isMobile: boolean }) {
  // Random delay so they don't all float perfectly in sync
  const floatDelay = Math.random() * 2;

  return (
    <motion.div
      onClick={onHover}
      onMouseEnter={!isMobile ? onHover : undefined}
      // Strict dimensions to prevent collapsing
      animate={{ 
        width: isActive ? (isMobile ? 280 : 400) : (isMobile ? 50 : 64),
        y: isActive ? -15 : [0, -4, 0] // Pull out when active, float when idle
      }}
      transition={{ 
        width: { type: "spring", bounce: 0.2, duration: 0.6 },
        y: isActive ? { type: "spring", bounce: 0.4 } : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: floatDelay }
      }}
      className={`relative h-[320px] flex-shrink-0 cursor-pointer rounded-md overflow-hidden border border-white/10 ${project.depth}`}
      style={{ 
        zIndex: isActive ? 50 : 10,
        rotate: isActive ? "0deg" : `${project.tilt}deg`,
        boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.05)" : "0 5px 10px rgba(0,0,0,0.5)"
      }}
    >
      {/* 1. CLOSED SPINE STATE */}
      <div className={`absolute inset-0 flex flex-col items-center justify-end pb-8 transition-opacity duration-300 z-10 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute top-4 w-full flex justify-center">
          <span className="text-[10px] font-mono text-gray-500">{project.id}</span>
        </div>
        <div className="whitespace-nowrap -rotate-90 origin-bottom flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gray-300">{project.title}</span>
        </div>
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* 2. OPEN COVER STATE */}
      <div className={`absolute inset-0 bg-[#05050A] z-20 transition-opacity duration-400 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-[160px] object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/90 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col h-[200px] justify-end">
          <p className={`${project.accent} text-[9px] font-bold uppercase tracking-widest mb-1`}>{project.type}</p>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase mb-2">{project.title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light line-clamp-2">{project.desc}</p>
          
          <Link href={project.link} className="group/btn flex items-center justify-between w-full pt-4 border-t border-white/10 text-[10px] font-bold uppercase tracking-widest text-white hover:text-white transition-colors">
            Access Protocol 
            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}