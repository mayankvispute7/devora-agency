"use client";
import { motion, Variants } from "framer-motion"; // 🟢 Added Variants import
import { Calendar, Video, Clock, ArrowRight, Activity, Sparkles } from "lucide-react";
import { cloneElement, ReactElement } from "react";

// Variants for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// 🟢 FIXED: Explicitly typed as Variants to satisfy TypeScript/Vercel
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function Meeting() {
  return (
    <section id="meeting" className="py-32 px-6 relative bg-[#05050A] flex flex-col items-center">
      {/* Dynamic Background Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.1)]"
        >
          DIRECT FOUNDER ACCESS
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
        >
          Schedule A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Strategy Call</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Lock in a direct session with the founder to map out your digital evolution.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto bg-[#0A0A10]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(0,0,0,0.6)] relative z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"></div>

        {/* LEFT: STRATEGY VALUE PITCH */}
        <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-20 border-b md:border-b-0 md:border-r border-white/5 relative">
          <motion.h3 variants={itemVariants} className="text-3xl lg:text-4xl font-black text-white mb-2 leading-snug">
            Discovery &amp; <span className="text-cyan-400">Architecture</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-400 mb-12 text-base font-medium">
            30 Minute Elite Strategy Session
          </motion.p>
          
          <motion.div variants={containerVariants} className="space-y-7">
            {[
              { icon: <Video/>, title: "Secure Google Meet Video", text: "flawless screen-share for technical breakdown." },
              { icon: <Clock/>, title: "30 Minutes Dedicated", text: "Focused exclusively on your business bottlenecks." },
              { icon: <Activity/>, title: "Architecture Mapping", text: "We analyze your idea and map out the exact digital stack needed to scale." }
            ].map((spec, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 text-gray-300 group">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 shadow-inner shrink-0 mt-1">
                  {cloneElement(spec.icon as ReactElement, { className: "text-cyan-400 group-hover:text-cyan-300 transition-colors", size: 20 })}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{spec.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{spec.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Founder Badge */}
          <motion.div variants={itemVariants} className="mt-14 flex items-center gap-4 pt-8 border-t border-white/5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              MV
            </div>
            <div>
              <p className="text-white font-bold text-base">Mayank Vispute</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Founder &amp; Chief Architect, Devora</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: THE LIVE SCHEDULING ACTION */}
        <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none z-0"></div>
          
          <motion.div variants={itemVariants} className="relative z-10 w-24 h-24 rounded-full bg-[#05050A]/80 border-2 border-cyan-500/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
            <Calendar className="text-cyan-400" size={36} />
          </motion.div>
          
          <motion.h4 variants={itemVariants} className="text-3xl font-black text-white mb-4 relative z-10">Select Your <span className="text-cyan-400">Time Slot</span></motion.h4>
          <motion.p variants={itemVariants} className="text-gray-300 text-base mb-12 max-w-sm leading-relaxed relative z-10 font-light">
            My live availability is listed. Choose a 30-min strategy session that fits your schedule.
          </motion.p>
          
          <motion.a 
            href="https://calendly.com/your-link" // 👈 ADD YOUR LINK HERE
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="relative w-full max-w-md py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2 group/btn shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden"
          >
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12"
            />
            View Calendar &amp; Book Call <Sparkles size={18} className="text-purple-600 animate-pulse" /> <ArrowRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}