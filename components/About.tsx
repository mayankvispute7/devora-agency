"use client";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, Terminal, Bot, Database, Workflow, CodeXml, Infinity as InfinityIcon } from "lucide-react";

const architectureNodes = [
  { id: 1, title: "AI Agents", icon: <Bot className="text-purple-400" size={16} />, pos: { x: "-25%", y: "-35%" }, delay: 0 },
  { id: 2, title: "Next.js", icon: <CodeXml className="text-cyan-400" size={16} />, pos: { x: "25%", y: "-35%" }, delay: 0.2 },
  { id: 3, title: "Cloud DB", icon: <Database className="text-blue-400" size={16} />, pos: { x: "40%", y: "0%" }, delay: 0.4 },
  { id: 4, title: "Workflows", icon: <Workflow className="text-pink-400" size={16} />, pos: { x: "-40%", y: "0%" }, delay: 0.6 },
  { id: 5, title: "Scalability", icon: <InfinityIcon className="text-emerald-400" size={16} />, pos: { x: "0%", y: "40%" }, delay: 0.8 },
];

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    });
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 px-4 sm:px-6 relative bg-transparent overflow-hidden cursor-default perspective-[2000px]"
    >
      {/* Interactive Magnetic Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-0"
        style={{ background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.05), transparent 40%)` }}
      />

      <motion.div 
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <div className="grid md:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT SIDE: THE GLASS REACTOR --- */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center bg-[#0A0A10]/60 rounded-full border border-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              
              {/* Center Profile Node */}
              <div className="absolute w-32 h-32 rounded-3xl bg-[#05050A] border border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.3),inset_0_0_20px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center group overflow-hidden z-20 transition-transform duration-700 hover:scale-110">
                  <Terminal size={28} className="text-purple-400 mb-1 opacity-80 group-hover:animate-pulse" />
                  <span className="text-4xl font-black text-white relative z-10 tracking-tighter">MV</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Orbiting Tech Nodes */}
              {architectureNodes.map((node) => (
                <motion.div 
                  key={node.id}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                  style={{ left: `calc(50% + ${node.pos.x})`, top: `calc(50% + ${node.pos.y})` }}
                  className="absolute p-3 rounded-2xl bg-[#0A0A10]/90 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 z-10 w-max -translate-x-1/2 -translate-y-1/2 shadow-2xl"
                >
                    <div className="p-2 bg-white/5 border border-white/10 rounded-xl shadow-inner group-hover:scale-110 transition-transform">{node.icon}</div>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{node.title}</span>
                </motion.div>
              ))}

              {/* Radar Rings */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-full border border-white/[0.03]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-white/[0.05]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full border border-white/[0.08]"></div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FOUNDER TEXT --- */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-purple-500/30 bg-[#0A0A10]/80 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(139,92,246,0.3)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Founder & Chief Architect
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter mb-8 leading-[1.05]">
              Hey, I'm <br className="hidden md:block"/>
              <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-400 pr-2">
                Mayank Vispute.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light mb-12 max-w-2xl">
              <p>
                I started Devora with a singular vision: to bridge the gap between enterprise-level technology and ambitious businesses.
              </p>
              <p>
                From deploying AI integrations to engineering scalable full-stack platforms, my approach is driven by an obsession with modern aesthetics and elite performance. We don't just write code; we build intelligent systems designed to give your business an unfair advantage.
              </p>
            </div>

            {/* Premium Contact Cards */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] w-full sm:w-auto">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A10] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 shadow-inner transition-colors">
                  <Phone size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Line</p>
                  <p className="text-white text-sm font-medium tracking-wide">+91 95112 29694</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] w-full sm:w-auto">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A10] border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 shadow-inner transition-colors">
                  <Mail size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                  <p className="text-white text-sm font-medium tracking-wide">visputemayank007@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}