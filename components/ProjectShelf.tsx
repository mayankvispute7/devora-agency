"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectBook from "./ProjectBook";

export default function ProjectShelf({ shelf }: { shelf: any }) {
  const [activeBook, setActiveBook] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full mb-32" onMouseLeave={() => setActiveBook(null)}>
      
      {/* Category Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 flex items-center gap-4"
      >
        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${shelf.color}`} />
        <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-white">{shelf.category}</h2>
      </motion.div>

      {/* The Books */}
      <div className="w-full flex flex-row items-end gap-3 md:gap-4 pb-[2px] relative z-20 h-[350px] overflow-x-auto md:overflow-visible hide-scrollbar pl-2">
        {shelf.projects.map((project: any) => (
          <ProjectBook 
            key={project.id} 
            project={project} 
            isActive={activeBook === project.id}
            isMobile={isMobile}
            onHover={() => setActiveBook(project.id)}
          />
        ))}
      </div>

      {/* The Glowing Shelf Line */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`w-full h-[2px] bg-gradient-to-r ${shelf.color} origin-left shadow-[0_0_15px_currentColor]`}
        />
        <div className="w-full h-1 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </div>
  );
}