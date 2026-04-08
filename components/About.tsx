"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
// 🟢 FIXED: Renamed Infinity to InfinityIcon to avoid clash with Framer Motion's loop property
import { Phone, Mail, Terminal, Bot, Database, Workflow, CodeXml, Infinity as InfinityIcon } from "lucide-react";

const architectureNodes = [
  { id: 1, title: "AI Agents", icon: <Bot className="text-purple-400" size={16} />, pos: { x: "-22%", y: "-35%" } },
  { id: 2, title: "Next.js", icon: <CodeXml className="text-cyan-400" size={16} />, pos: { x: "22%", y: "-35%" } },
  { id: 3, title: "Cloud DB", icon: <Database className="text-blue-400" size={16} />, pos: { x: "35%", y: "0%" } },
  { id: 4, title: "Workflows", icon: <Workflow className="text-pink-400" size={16} />, pos: { x: "-35%", y: "0%" } },
  // 🟢 FIXED: Used InfinityIcon here
  { id: 5, title: "Scalability", icon: <InfinityIcon className="text-emerald-400" size={16} />, pos: { x: "0%", y: "35%" } },
];

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
      className="py-32 px-6 relative bg-[#05050A] overflow-hidden border-t border-white/5 cursor-default"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-0"
        style={{ background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.05), transparent 40%)` }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="md:col-span-5 flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center bg-[#0A0A10]/40 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute w-28 h-28 rounded-3xl bg-[#05050A] border border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.2)] flex flex-col items-center justify-center group overflow-hidden z-20 transition-transform duration-500 hover:scale-110">
                  <Terminal size={24} className="text-purple-400 mb-1 opacity-80" />
                  <span className="text-4xl font-black text-white relative z-10 tracking-tighter">
                      MV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {architectureNodes.map((node, index) => (
                <motion.div 
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  style={{ left: `calc(50% + ${node.pos.x})`, top: `calc(50% + ${node.pos.y})` }}
                  className="absolute p-3 rounded-2xl bg-[#0A0A10]/80 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-white/20 transition-colors z-10 w-max shadow-xl -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="p-2 bg-white/5 border border-white/10 rounded-xl shadow-inner group-hover:scale-110 transition-transform">{node.icon}</div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{node.title}</span>
                </motion.div>
              ))}

              <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem]">
                  <motion.div 
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-[1px] h-full left-1/2 top-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                  />
                  <motion.div 
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="absolute h-[1px] w-full top-1/2 left-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                  />
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-900/50 bg-[#0A1929] text-cyan-500 text-[10px] font-bold uppercase tracking-[0.15em]"
            >
              Founder & Owner
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8"
            >
              Hey, I'm Mayank Vispute.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-300 text-[17px] leading-relaxed font-light mb-12"
            >
              <p>
                I started Devora with a singular vision: to bridge the gap between enterprise-level technology and everyday businesses.
              </p>
              <p>
                From deploying AI integrations to engineering scalable full-stack platforms, my journey is driven by an obsession with modern web technologies. We don't just write code; we build intelligent systems designed to give your business an unfair advantage.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-10 border-t border-white/5 pt-8">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Line</p>
                  <p className="text-white text-sm">+91 95112 29694</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                  <p className="text-white text-sm">visputemayank007@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}