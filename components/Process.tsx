"use client";
import { motion } from "framer-motion";
import { SearchCode, PenTool, Rocket, Cpu } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We analyze bottlenecks, tech stacks, and market positioning to identify exact areas for AI automation.",
    icon: <SearchCode size={26} className="text-cyan-400" />,
    color: "from-cyan-400 to-cyan-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    delay: 0.2 
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "We engineer a custom blueprint mapping out your new interfaces, databases, and AI workflows.",
    icon: <PenTool size={26} className="text-purple-400" />,
    color: "from-purple-400 to-purple-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    delay: 0.6 
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Our engineers build your systems using Next.js and custom LLM integrations with rapid feedback loops.",
    icon: <Cpu size={26} className="text-pink-400" />,
    color: "from-pink-400 to-pink-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]",
    delay: 1.0 
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "We launch to the cloud, monitor real-time analytics, and train your team to dominate the market.",
    icon: <Rocket size={26} className="text-emerald-400" />,
    color: "from-emerald-400 to-emerald-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    delay: 1.4 
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6 relative z-10 bg-transparent overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            How We Execute
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
          >
            THE DEPLOYMENT <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">PROTOCOL.</span>
          </motion.h2>
        </div>

        {/* --- THE DATA PIPELINE (Timeline) --- */}
        <div className="relative">
          
          {/* DESKTOP: Horizontal Background Track */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/5 rounded-full hidden md:block" />
          
          {/* DESKTOP: Animated Laser Pipeline */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-8 left-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-full hidden md:block shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          >
            {/* The Spark riding the front of the laser */}
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white]" />
          </motion.div>

          {/* MOBILE: Vertical Background Track */}
          <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-white/5 rounded-full md:hidden" />
          
          {/* MOBILE: Animated Vertical Laser */}
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-8 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 rounded-full md:hidden shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />

          {/* --- THE CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-8 md:pt-20">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-start md:items-center">
                
                {/* Desktop: The Drop Cable (Connects track to card) */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: 40 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: step.delay + 0.1 }}
                  className="absolute -top-[48px] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-white/40 to-transparent hidden md:block z-0"
                />

                {/* The Node Connection Point */}
                <div className="absolute -left-[5px] md:-top-[54px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#05050A] border-2 border-white/20 flex items-center justify-center z-10 ml-8 md:ml-0 mt-8 md:mt-0">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ type: "spring", delay: step.delay + 0.2 }} 
                    className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
                  />
                </div>

                {/* The Hardware Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: step.delay + 0.3 }}
                  className={`relative group w-full ml-16 md:ml-0 rounded-[1.5rem] bg-[#0A0A0E] border border-white/5 p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full ${step.shadow}`}
                >
                  {/* Subtle top edge lighting on card */}
                  <div className="absolute -top-[1px] left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Background Number Watermark */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none font-playfair italic">
                    {step.num}
                  </div>
                  
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#05050A] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500 shadow-inner">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold tracking-wide text-white mb-3 relative z-10 uppercase">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10">
                    {step.desc}
                  </p>
                  
                  {/* Bottom glowing indicator line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r ${step.color} rounded-t-full shadow-[0_0_10px_currentColor]`} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}