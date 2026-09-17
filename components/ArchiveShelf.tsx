"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CDCase from "./CDCase";
import ProjectModal from "./ProjectModal";

export default function ArchiveShelf({ shelf }: { shelf: any }) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <div className="relative w-full mb-24">
      {/* Category Header */}
      <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${shelf.color}`} />
        <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-white">{shelf.category}</h2>
      </div>

      {/* The CD Box Container */}
      <div className="w-full relative px-2">
        {/* The back wall of the CD box */}
        <div className="absolute inset-0 bg-[#050508] border border-white/5 rounded-md z-0" />
        
        {/* The CDs stacked tightly */}
        <div className="relative z-10 flex flex-row items-end gap-[2px] py-4 px-2 overflow-x-auto hide-scrollbar">
          {shelf.projects.map((project: any, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <CDCase 
                project={{...project, color: shelf.color}} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </div>
        
        {/* The front glass lip of the CD box */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-white/5 backdrop-blur-sm border-t border-white/10 z-20 rounded-b-md" />
      </div>

      {/* Modal is injected here when a CD is clicked */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}