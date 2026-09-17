"use client";
import { motion } from "framer-motion";

export default function CDCase({ project, onClick }: { project: any, onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -15, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className="relative w-12 md:w-16 h-[250px] md:h-[300px] flex-shrink-0 cursor-pointer rounded-sm bg-[#111116] border border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.05),-5px_0_10px_rgba(0,0,0,0.5)] group overflow-hidden"
    >
      {/* Plastic Jewel Case Edge Reflection */}
      <div className="absolute inset-y-0 left-0 w-[2px] bg-white/20" />
      <div className="absolute inset-y-0 right-0 w-[1px] bg-black/50" />

      {/* Content rotated 90 degrees to look like a spine */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 pointer-events-none">
        <span className="text-[8px] font-mono text-gray-500 mb-4">{project.id}</span>
        <div className="whitespace-nowrap -rotate-90 origin-bottom flex items-center">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-gray-300 group-hover:text-white transition-colors">{project.title}</span>
        </div>
      </div>
      
      {/* Glowing bottom edge based on category color */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
}