"use client";
import { motion, Variants } from "framer-motion";
import { SearchCode, PenTool, Rocket, Cpu } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We analyze bottlenecks, tech stacks, and market positioning to identify exact areas for AI automation.",
    icon: <SearchCode size={28} className="text-cyan-400" />,
    delay: 0.5 // Triggers when track hits 25%
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "We engineer a custom blueprint mapping out your new interfaces, databases, and AI workflows.",
    icon: <PenTool size={28} className="text-purple-400" />,
    delay: 1.0 // Triggers when track hits 50%
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Our engineers build your systems using Next.js and custom LLM integrations with rapid feedback loops.",
    icon: <Cpu size={28} className="text-pink-400" />,
    delay: 1.5 // Triggers when track hits 75%
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "We launch to the cloud, monitor real-time analytics, and train your team to dominate the market.",
    icon: <Rocket size={28} className="text-emerald-400" />,
    delay: 2.0 // Triggers when track hits 100%
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            How We Execute
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter"
          >
            The Deployment <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Protocol</span>
          </motion.h2>
        </div>

        <div className="relative">
          
          {/* 🟢 THE TRAIN TRACK (Draws across screen over 2.5 seconds) */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-white/5 rounded-full hidden md:block"></div>
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-full hidden md:block shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />

          <div className="grid md:grid-cols-4 gap-8 pt-4 md:pt-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                // 🟢 The Card "pops up" exactly as the track reaches it
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: step.delay }}
                className="relative group rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-6 hover:-translate-y-2 transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mt-8 md:mt-0"
              >
                {/* 🟢 The Connection Node (Lights up when card appears) */}
                <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A10] border-2 border-white/20 hidden md:flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: step.delay + 0.3 }} 
                    className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
                  />
                </div>

                {/* Connecting Line from Node to Card */}
                <div className="absolute -top-[24px] left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white/30 to-transparent hidden md:block"></div>

                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.02] group-hover:text-white/[0.06] transition-colors pointer-events-none">
                  {step.num}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#0A0A10] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold tracking-tight text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}