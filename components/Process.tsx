"use client";
import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Code2, Rocket } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery", desc: "We map out your idea and business requirements.", icon: <MessageSquare className="text-purple-400" size={24} /> },
  { num: "02", title: "Architecture", desc: "We design the Gen-Z UI and backend system flow.", icon: <FileSearch className="text-cyan-400" size={24} /> },
  { num: "03", title: "Development", desc: "We code everything using Next.js and AI APIs.", icon: <Code2 className="text-blue-400" size={24} /> },
  { num: "04", title: "Launch", desc: "We deploy to the web and hand you the keys.", icon: <Rocket className="text-pink-400" size={24} /> }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest">
            Execution
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Build It</span></h2>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/5 z-0 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-2xl bg-[#0A0A10] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2 right-2 text-[10px] font-black text-white/20">{step.num}</span>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}