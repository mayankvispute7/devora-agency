"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectModal({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-12">
          {/* Deep Blur Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#03010A]/90 backdrop-blur-xl cursor-pointer"
          />

          {/* Project Focus Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40, rotateX: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            style={{ perspective: 1000 }}
            className="relative w-full max-w-5xl bg-[#0A0A0E] border border-white/20 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-10 flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-30"
            >
              <X size={18} />
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative bg-black">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] md:bg-gradient-to-r md:from-transparent md:to-[#0A0A0E]" />
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">{project.type}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-6">{project.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.desc}</p>
              
              <Link 
                href={project.link} 
                className="mt-auto group flex items-center justify-center gap-3 w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors"
              >
                Initiate System Link 
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}