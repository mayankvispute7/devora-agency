"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

// 🟢 USING THE EXACT FILES FROM YOUR SCREENSHOT
const TOP_PROJECTS = [
  { id: "aionyx", title: "AIONYX", type: "AI Data Analytics", url: "aionyx-6w92uebfpwqrpjruhmxeeu.streamlit.app", image: "/assets/project/aionyx.png" },
  { id: "netvision", title: "NetVision X", type: "AI Network Diagnostics", url: "net-vision-x.vercel.app", image: "/assets/project/netvisionX.png" },
  { id: "viaan", title: "Viaan Realty", type: "Real Estate Platform", url: "viaan-realty.vercel.app", image: "/assets/project/ViaanRealty.png" },
  { id: "ganpati", title: "Ganpati Yeshil Ka", type: "Interactive Web Exp", url: "yeshilka.vercel.app", image: "/assets/project/yeshilka.png" },
  { id: "invitation", title: "Farewell 2026", type: "Digital Invitation", url: "farewell-invitation-2026.vercel.app", image: "/assets/project/Farwell.png" }
];

const IMPACT_PHRASES = [
  "autonomous data analytics",
  "conversational intelligence",
  "high-performance platforms",
  "business automation systems"
];

function AnimatedCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = to / (duration / 16); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
}

const CARD_DESTINATIONS = [
  { x: "120%", y: "-65%", rotate: 12 },   
  { x: "-120%", y: "-65%", rotate: -12 }, 
  { x: "120%", y: "65%", rotate: 8 },     
  { x: "-120%", y: "65%", rotate: -8 },   
  { x: "0%", y: "0%", rotate: 0 }         
];

function PlayingCard({ project, index, progress }: { project: any, index: number, progress: any }) {
  const start = index * 0.15;
  const end = start + 0.15;
  const dest = CARD_DESTINATIONS[index];

  const x = useTransform(progress, [0, start, end, 1], ["0%", "0%", dest.x, dest.x]);
  const y = useTransform(progress, [0, start, end, 1], ["0%", "0%", dest.y, dest.y]);
  const rotate = useTransform(progress, [0, start, end, 1], [0, 0, dest.rotate, dest.rotate]);
  const scale = index === 4 ? useTransform(progress, [0.6, 0.8], [1, 1.05]) : 1;
  const zIndex = 50 - index; 

  return (
    <motion.a
      href={`https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute w-[90%] max-w-[380px] cursor-pointer pointer-events-auto"
      style={{ x, y, rotate, scale, zIndex }}
      title={`Visit ${project.title}`}
    >
      <div className="w-full rounded-xl bg-[#09090C] border border-white/10 shadow-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
        
        <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-[#FF5F56] transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-[#FFBD2E] transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-[#27C93F] transition-colors" />
          </div>
          <div className="text-[10px] text-gray-400 font-mono flex items-center gap-1 group-hover:text-cyan-400 transition-colors z-50">
            <ExternalLink size={10} /> {project.url}
          </div>
        </div>

        <div className="w-full h-48 bg-[#050508] relative border-b border-white/5">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        <div className="p-5 bg-[#09090C] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">{project.title}</h3>
            <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-1 font-bold">{project.type}</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
             <ArrowRight size={14} className="-rotate-45" />
          </div>
        </div>

      </div>
    </motion.a>
  );
}

export default function ImpactShowcase() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const buttonOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const buttonY = useTransform(smoothProgress, [0.85, 0.95], [20, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % IMPACT_PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-transparent z-20 font-sans">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-10 md:top-16 w-full z-50 flex flex-col items-center px-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Proof of Execution
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 flex items-center justify-center gap-2 md:gap-3 drop-shadow-xl">
            <AnimatedCounter to={20} /><span className="text-cyan-400">+</span>
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400">
              SYSTEMS DEPLOYED.
            </span>
          </h2>
          
          <div className="text-gray-400 text-xs md:text-sm font-light flex flex-col sm:flex-row items-center gap-1.5 h-6">
            <span>Powering ambitious businesses with</span>
            <AnimatePresence mode="wait">
              <motion.span 
                key={phraseIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white font-medium"
              >
                {IMPACT_PHRASES[phraseIndex]}.
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center mt-24 md:mt-32 pointer-events-none">
          {TOP_PROJECTS.map((project, i) => (
            <PlayingCard key={project.id} project={project} index={i} progress={smoothProgress} />
          ))}
        </div>

        <motion.div 
          className="absolute bottom-12 md:bottom-16 z-[100] pointer-events-auto"
          style={{ opacity: buttonOpacity, y: buttonY }}
        >
          <Link 
            href="/work" 
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Explore All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}