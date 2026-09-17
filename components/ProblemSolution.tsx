"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, X } from "lucide-react";
import Link from "next/link";

const diagnostics = [
  {
    id: 1,
    problem: "MY BUSINESS IS INVISIBLE ONLINE.",
    explanation: "People search for us, but our digital presence doesn't make us stand out.",
    solution: "A digital presence designed to make your business discoverable, credible and easy to contact.",
    tags: ["Website", "Digital Experience", "SEO-ready Structure"]
  },
  {
    id: 2,
    problem: "TOO MUCH WORK IS STILL MANUAL.",
    explanation: "Our team spends time doing repetitive work that should already be automated.",
    solution: "We build custom software and automation around the way your business actually works.",
    tags: ["Automation", "Custom Software", "AI"]
  },
  {
    id: 3,
    problem: "MY BUSINESS DATA IS A MESS.",
    explanation: "Information lives across spreadsheets, tools and different systems.",
    solution: "We bring your important data into one clear system so you can actually understand what is happening.",
    tags: ["Dashboards", "Data Systems", "Analytics"]
  },
  {
    id: 4,
    problem: "I NEED SOFTWARE BUILT FOR US.",
    explanation: "Existing tools don't fit the way our business works.",
    solution: "We design and build software around your exact workflow.",
    tags: ["Custom Software", "Web Apps", "Backend Systems"]
  },
  {
    id: 5,
    problem: "I KNOW AI CAN HELP. I JUST DON'T KNOW WHERE.",
    explanation: "AI sounds powerful, but we don't know what to actually use it for.",
    solution: "We identify the repetitive and expensive parts of your workflow and build practical AI around them.",
    tags: ["AI Automation", "AI Agents", "Intelligent Workflows"]
  },
  {
    id: 6,
    problem: "OUR CUSTOMERS AREN'T CONVERTING.",
    explanation: "People visit our website or digital channels but don't take the next step.",
    solution: "We redesign the digital experience around trust, clarity and conversion.",
    tags: ["UX/UI", "Websites", "Digital Experiences"]
  }
];

export default function ProblemSolution() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 px-4 sm:px-6 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6"
          >
            TELL US WHAT&apos;S{" "}
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              BROKEN.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light tracking-wide"
          >
            Every business has friction. <br className="md:hidden" />
            <span className="text-white font-medium">Find yours.</span>
          </motion.p>
        </div>

        {/* --- DIAGNOSTIC INTERFACE --- */}
        <div className="flex flex-col gap-4">
          {diagnostics.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                layout
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`group relative cursor-pointer rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? "bg-[#0A0A10]/90 border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.1)]" 
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                {/* Subtle Light Sweep Background on Active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="p-6 md:p-8 relative z-10">
                  <motion.div layout className="flex items-start justify-between gap-6">
                    <div>
                      {/* The Problem Statement */}
                      <motion.h3 
                        layout="position"
                        className={`font-bold tracking-tight transition-all duration-500 ${
                          isActive ? "text-lg md:text-xl text-gray-500 mb-2" : "text-xl md:text-3xl text-gray-200"
                        }`}
                      >
                        {item.problem}
                      </motion.h3>
                      
                      {/* Subtle Explanation (Only visible when collapsed) */}
                      <AnimatePresence mode="wait">
                        {!isActive && (
                          <motion.p 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}
                            className="text-gray-400 font-light mt-2 text-sm md:text-base"
                          >
                            {item.explanation}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle Icon */}
                    <motion.div layout="position" className="shrink-0 mt-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                        isActive ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : "bg-white/5 border-white/10 text-gray-400 group-hover:text-white"
                      }`}>
                        {isActive ? <X size={18} /> : <Plus size={18} />}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* --- THE TRANSFORMATION (Solution State) --- */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                          The Devora Build
                        </div>
                        
                        <h4 className="text-2xl md:text-3xl font-playfair text-white mb-6 leading-snug">
                          {item.solution}
                        </h4>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300 tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link 
                            href="#contact" 
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300 transition-colors group/btn shrink-0"
                          >
                            LET&apos;S BUILD IT <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- FINAL SECTION END --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            YOUR PROBLEM. <br className="md:hidden" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400">
              OUR BUILD.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Whatever is slowing your business down, we can design and build the digital system behind it.
          </p>
          <Link 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-sm tracking-wide transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden"
          >
            LET&apos;S BUILD IT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}