"use client";
import { motion } from "framer-motion";
import { Zap, Sparkles, BrainCircuit, TrendingUp, Settings2, Headset } from "lucide-react";

const reasons = [
  {
    title: "Velocity & Speed",
    desc: "We deploy modern architectures rapidly without ever sacrificing premium code quality.",
    icon: <Zap size={24} className="text-yellow-400" />,
    // Dynamic color variables for this specific card
    glowClass: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
    bgHover: "group-hover:bg-yellow-500/[0.03]",
    iconBox: "bg-yellow-500/10 border-yellow-500/20 shadow-[0_0_20px_rgba(250,204,21,0.2)]",
  },
  {
    title: "Elite UI/UX Design",
    desc: "Apple-level, hyper-aesthetic interfaces designed to build instant subconscious trust.",
    icon: <Sparkles size={24} className="text-cyan-400" />,
    glowClass: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    bgHover: "group-hover:bg-cyan-500/[0.03]",
    iconBox: "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
  },
  {
    title: "AI-Powered Core",
    desc: "Future-proof your business with autonomous agents and smart automation built right in.",
    icon: <BrainCircuit size={24} className="text-purple-400" />,
    glowClass: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    bgHover: "group-hover:bg-purple-500/[0.03]",
    iconBox: "bg-purple-500/10 border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  },
  {
    title: "Revenue Engineering",
    desc: "We don't just write code; we design conversion funnels engineered to maximize your profit.",
    icon: <TrendingUp size={24} className="text-emerald-400" />,
    glowClass: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    bgHover: "group-hover:bg-emerald-500/[0.03]",
    iconBox: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  },
  {
    title: "Bespoke Architecture",
    desc: "No cheap templates. Everything is custom-built specifically for your unique operational workflow.",
    icon: <Settings2 size={24} className="text-blue-400" />,
    glowClass: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    bgHover: "group-hover:bg-blue-500/[0.03]",
    iconBox: "bg-blue-500/10 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  },
  {
    title: "White-Glove Support",
    desc: "We handle servers, maintenance, and security. You focus on running your business.",
    icon: <Headset size={24} className="text-pink-400" />,
    glowClass: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",
    bgHover: "group-hover:bg-pink-500/[0.03]",
    iconBox: "bg-pink-500/10 border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.2)]",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 relative bg-[#05050A] border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Elite Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            The Devora Advantage
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
          >
            Why Industry Leaders <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Choose Us</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            We don't just build websites. We engineer high-performance digital assets designed to scale your operations and dominate your competitors.
          </motion.p>
        </div>

        {/* The Wow-Factor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-[2rem] bg-[#0A0A10] border border-white/5 transition-all duration-500 overflow-hidden cursor-default ${reason.glowClass} ${reason.bgHover}`}
            >
              {/* Card Inner Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
              
              {/* The Hover Sweep Animation (Shine Effect) */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Glowing Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 border backdrop-blur-md ${reason.iconBox}`}>
                  {reason.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light mt-auto">
                  {reason.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}