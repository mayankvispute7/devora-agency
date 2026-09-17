"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  { id: "01", title: "AIONYX", category: "AI & Autonomous Systems", type: "Data Analytics AI", desc: "A multi-agent AI platform engineered to automate complex workflows and process enterprise datasets instantly.", image: "/assets/project/aionyx.png", link: "#", aura: "rgba(34, 211, 238, 0.15)" },
  { id: "02", title: "NETVISIONX", category: "AI & Autonomous Systems", type: "Network Intelligence", desc: "AI-powered network monitoring, diagnostics and automated security response protocols.", image: "/assets/project/netvisionX.png", link: "#", aura: "rgba(168, 85, 247, 0.15)" },
  { id: "03", title: "VIAAN REALTY", category: "Full-Stack Web Platforms", type: "Property CRM", desc: "Lightning-fast real estate listing architecture and broker administration dashboard.", image: "/assets/project/ViaanRealty.png", link: "#", aura: "rgba(59, 130, 246, 0.15)" },
  { id: "04", title: "GANPATI YESHIL KA", category: "Immersive Web Experience", type: "Interactive Web", desc: "A culturally immersive digital experience with rich 3D interactions.", image: "/assets/project/yeshilka.png", link: "#", aura: "rgba(236, 72, 153, 0.15)" },
  { id: "05", title: "FAREWELL 2026", category: "Web Application", type: "Digital Invitation", desc: "Interactive digital invitation platform engineered for college events.", image: "/assets/project/Farwell.png", link: "#", aura: "rgba(244, 63, 94, 0.15)" }
];

const heroText = "SYSTEMS WE DESIGN.";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
};
const letterVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6 } }
};

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef); // Tracks if the hero section is currently visible on screen
  const [currentFrame, setCurrentFrame] = useState(1);

  // Auto-play frame sequence ONLY when the hero section is visible
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isInView) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev >= 50 ? 1 : prev + 1));
      }, 40); // 40ms = 25 frames per second for smooth playback
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView]);

  // Preload frames once on mount for smooth playback without flickering
  useEffect(() => {
    for (let i = 1; i <= 50; i++) {
      const img = new Image();
      img.src = `/assets/Frames/works/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
    }
  }, []);

  return (
    <main className="bg-[#03010A] min-h-screen text-white font-sans antialiased overflow-x-hidden relative flex flex-col">
      
      {/* 🟢 Gemini Deep Blue Background (No Dots) */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundColor: '#03010A',
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 35, 75, 0.6) 0%, rgba(3, 1, 10, 1) 70%)`
      }} />
      
      {/* Navbar Locked to Top */}
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>

      {/* --- 1. HERO SECTION (Auto-playing background sequence) --- */}
      <section ref={heroRef} className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* The Auto-playing Background Frame */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={`/assets/Frames/works/ezgif-frame-${String(currentFrame).padStart(3, '0')}.jpg`} 
            alt="Hero Background Animation" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          {/* Gradients to fade edges into the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03010A] via-[#03010A]/20 to-[#03010A] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03010A] via-transparent to-[#03010A] opacity-80" />
        </div>

        {/* Center Text */}
        <motion.div className="relative z-10 text-center px-6 pt-24">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] mb-6 flex flex-wrap justify-center"
          >
            {heroText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className={char === " " ? "w-3 md:w-6" : "inline-block"}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mx-auto"
          >
            Explore a precise collection of digital systems engineered for production and ultimate leverage.
          </motion.p>
        </motion.div>

      </section>

      {/* --- 2. THE GRID --- */}
      <section className="relative z-10 px-4 md:px-12 py-32 max-w-7xl mx-auto w-full bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", boxShadow: `0px 20px 40px ${project.aura}` }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.15, ease: "easeOut" }} 
              className="group flex flex-col bg-[#0A0A0E] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
              style={{ ['--hover-aura' as any]: `0px 30px 60px ${project.aura.replace('0.15', '0.4')}` }}
            >
              <div className="w-full h-56 relative bg-[#050508] overflow-hidden border-b border-white/5">
                <div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70 z-10 rounded shadow-lg">
                  SYS: {project.id}
                </div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-[#0A0A0E]">
                <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                
                <Link href={project.link} className="mt-auto group/btn flex items-center justify-between w-full pt-4 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
                  Explore System
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
              <style jsx>{`div:hover { box-shadow: var(--hover-aura) !important; }`}</style>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. FOOTER CTA --- */}
      <section className="relative z-10 py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/5 bg-[#05050A]">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          READY TO <span className="font-playfair italic text-cyan-400">DEPLOY?</span>
        </h2>
        <Link href="/#contact" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          Initialize Project
        </Link>
      </section>

    </main>
  );
}