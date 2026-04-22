"use client";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Zap, Sparkles, BrainCircuit, TrendingUp, Settings2, Headset } from "lucide-react";

const reasons = [
  {
    title: "Velocity & Speed",
    desc: "We deploy modern architectures rapidly without ever sacrificing premium code quality.",
    icon: <Zap size={24} className="text-yellow-400" />,
    glowClass: "hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]",
    iconBox: "bg-yellow-500/10 border-yellow-500/20 shadow-[inset_0_0_20px_rgba(250,204,21,0.2)]",
  },
  {
    title: "Elite UI/UX Design",
    desc: "Apple-level, hyper-aesthetic interfaces designed to build instant subconscious trust.",
    icon: <Sparkles size={24} className="text-cyan-400" />,
    glowClass: "hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    iconBox: "bg-cyan-500/10 border-cyan-500/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.2)]",
  },
  {
    title: "AI-Powered Core",
    desc: "Future-proof your business with autonomous agents and smart automation built right in.",
    icon: <BrainCircuit size={24} className="text-purple-400" />,
    glowClass: "hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
    iconBox: "bg-purple-500/10 border-purple-500/20 shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]",
  },
  {
    title: "Revenue Engineering",
    desc: "We don't just write code; we design conversion funnels engineered to maximize your profit.",
    icon: <TrendingUp size={24} className="text-emerald-400" />,
    glowClass: "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
    iconBox: "bg-emerald-500/10 border-emerald-500/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]",
  },
  {
    title: "Bespoke Architecture",
    desc: "No cheap templates. Everything is custom-built specifically for your unique operational workflow.",
    icon: <Settings2 size={24} className="text-blue-400" />,
    glowClass: "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
    iconBox: "bg-blue-500/10 border-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]",
  },
  {
    title: "White-Glove Support",
    desc: "We handle servers, maintenance, and security. You focus on running your business.",
    icon: <Headset size={24} className="text-pink-400" />,
    glowClass: "hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]",
    iconBox: "bg-pink-500/10 border-pink-500/20 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]",
  }
];

export default function WhyChooseUs() {
  
  // 🟢 FIXED: Explicitly typed as Variants so TypeScript knows this is Framer Motion
  const shuffleVariants: Variants = {
    hidden: (i: number) => {
      const wildStarts = [
        { x: 500, y: 300, rotate: 45 },    
        { x: -500, y: -300, rotate: -45 }, 
        { x: 0, y: 600, rotate: 90 },      
        { x: -600, y: 200, rotate: -70 },  
        { x: 600, y: -200, rotate: 70 },   
        { x: 0, y: -600, rotate: -90 },    
      ];
      return {
        opacity: 0,
        x: wildStarts[i % 6].x,
        y: wildStarts[i % 6].y,
        rotate: wildStarts[i % 6].rotate,
        scale: 0.3
      };
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
        bounce: 0.5,
        delay: 0.2, 
        duration: 1.5
      }
    })
  };

  // 🟢 FIXED: Explicitly typed as TargetAndTransition
  const settledHover: TargetAndTransition = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, type: "spring", bounce: 0.5 }
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 relative bg-transparent overflow-hidden perspective-[2000px]">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- PREMIUM HEADER --- */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-blue-500/30 bg-[#0A0A10]/80 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(59,130,246,0.3)] backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            The Devora Advantage
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.05] mb-6"
          >
            Why Industry Leaders <br className="hidden md:block" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-2">
              Choose Us
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg lg:text-xl font-light max-w-2xl leading-relaxed"
          >
            We don't just build websites. We engineer high-performance digital assets designed to scale your operations and dominate your competitors.
          </motion.p>
        </div>

        {/* --- THE SHUFFLE GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index} 
              variants={shuffleVariants}
              whileHover={settledHover}
              className={`group relative p-8 lg:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-3xl border border-white/10 transition-all duration-300 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.4)] ${reason.glowClass}`}
            >
              
              {/* Inner glass gradient and shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 border backdrop-blur-md bg-black/40 ${reason.iconBox}`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light mt-auto group-hover:text-gray-200 transition-colors">
                  {reason.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}