"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CDSpine from "./CDSpine";
import ProjectModal from "./ProjectModal";

export default function CDArchiveBox({ shelf }: { shelf: any }) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <div className="relative w-full mb-32">
      {/* Category Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${shelf.color}`} />
        <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-white">{shelf.category}</h2>
      </div>

      {/* The Acrylic Plastic Box Container */}
      <div className="relative w-full rounded-xl bg-white/[0.01] border border-white/10 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.5)] p-4 md:p-6">
        
        {/* The CDs stacked tightly */}
        {/* Strict height h-[350px] guarantees it will never collapse into a line */}
        <div className="relative z-10 flex flex-row items-end gap-[2px] h-[300px] md:h-[350px] overflow-x-auto hide-scrollbar px-2">
          {shelf.projects.map((project: any, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <CDSpine 
                project={{...project, color: shelf.color}} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </div>

        {/* Front plastic lip of the box */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/[0.05] to-transparent rounded-b-xl border-b border-white/10 pointer-events-none" />
      </div>

      {/* Project Modal (Opens on Click) */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}