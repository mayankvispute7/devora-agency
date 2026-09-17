"use client";
import { motion } from "framer-motion";

export default function CDSpine({ project, onClick }: { project: any, onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -24, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      // Strict sizing forces the layout to stay intact
      style={{ minWidth: "64px", minHeight: "320px" }}
      className="relative w-16 h-[320px] flex-shrink-0 cursor-pointer rounded-sm bg-[#08080C] border border-white/20 group overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.05),-5px_0_15px_rgba(0,0,0,0.8)]"
    >
      {/* Plastic Jewel Case Highlights */}
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-white/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[2px] bg-black/60" />

      {/* ID Number at Top */}
      <div className="absolute top-4 left-0 w-full flex justify-center pointer-events-none">
        <span className="text-[10px] font-mono text-gray-600">{project.id}</span>
      </div>

      {/* Rotated Spine Text (Absolute positioning prevents bounding box collapse) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap pointer-events-none">
        <span className="text-sm uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-white transition-colors">
          {project.title}
        </span>
      </div>
      
      {/* Glowing bottom edge indicator */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-40 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_currentColor]`} />
    </motion.div>
  );
}