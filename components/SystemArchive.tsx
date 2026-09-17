"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// --- EXISTING PROJECT DATA ---
const PROJECTS = [
  { id: "01", title: "AIONYX", category: "AI & Autonomous Systems", type: "Data Analytics AI", desc: "A multi-agent AI platform engineered to automate complex workflows and process enterprise datasets instantly.", image: "/assets/images/aionyx.jpg", link: "/projects/aionyx", color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20" },
  { id: "02", title: "NETVISIONX", category: "AI & Autonomous Systems", type: "Network Intelligence", desc: "AI-powered network monitoring, diagnostics and automated security response protocols.", image: "/assets/images/vaniconnect.jpg", link: "/projects/netvisionx", color: "from-blue-400 to-indigo-500", shadow: "shadow-blue-500/20" },
  { id: "03", title: "SENTINELX", category: "AI & Autonomous Systems", type: "Security AI", desc: "Predictive threat detection and autonomous enterprise security response.", image: "/assets/images/placeholder1.jpg", link: "/projects/sentinelx", color: "from-indigo-400 to-purple-500", shadow: "shadow-indigo-500/20" },
  { id: "04", title: "ARTHA", category: "Fintech Platforms", type: "Financial AI", desc: "Algorithmic forecasting and real-time market data synthesis for hedge funds.", image: "/assets/images/placeholder2.jpg", link: "/projects/artha", color: "from-purple-400 to-pink-500", shadow: "shadow-purple-500/20" },
  { id: "05", title: "VIAAN REALTY", category: "Full-Stack Web Platforms", type: "Property CRM", desc: "Lightning-fast real estate listing architecture and broker administration dashboard.", image: "/assets/images/internmeets.jpg", link: "/projects/viaan", color: "from-pink-400 to-rose-500", shadow: "shadow-pink-500/20" },
  { id: "06", title: "SMARTSERVE", category: "Full-Stack Web Platforms", type: "B2B Platform", desc: "High-performance enterprise resource planning and workflow automation.", image: "/assets/images/comeback.jpg", link: "/projects/smartserve", color: "from-rose-400 to-orange-500", shadow: "shadow-rose-500/20" },
  { id: "07", title: "MENUD", category: "Full-Stack Web Platforms", type: "Hospitality Tech", desc: "QR-based digital menu deployment and real-time restaurant POS synchronization.", image: "/assets/images/placeholder4.jpg", link: "/projects/menud", color: "from-orange-400 to-amber-500", shadow: "shadow-orange-500/20" },
  { id: "08", title: "THE COMEBACK", category: "Full-Stack Web Platforms", type: "Performance Tracker", desc: "Real-time state synchronization platform with a dark, immersive UI/UX.", image: "/assets/images/comeback.jpg", link: "/projects/comeback", color: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20" },
];

export default function SystemArchive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActiveIndex((prev) => Math.min(prev + 1, PROJECTS.length - 1));
      if (e.key === "ArrowLeft") setActiveIndex((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX / rect.width - 0.5);
    mouseY.set(e.clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-12 py-24 flex flex-col items-center">
      
      {/* Small intro above box */}
      <div className="w-full mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-white text-xs md:text-sm font-bold tracking-[0.2em] mb-2 uppercase">Selected Work</h2>
          <p className="text-cyan-400 text-[10px] uppercase tracking-widest font-mono">20+ Systems Built</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-mono">Archive Navigation</p>
          <p className="text-gray-400 text-xs mt-1">Use ← Arrows → to browse</p>
        </div>
      </div>

      {/* --- THE PHYSICAL ACRYLIC BOX --- */}
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200, rotateX, rotateY }}
        className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center rounded-2xl border border-white/10 bg-[#05050A]/40 backdrop-blur-xl shadow-[inset_0_0_50px_rgba(255,255,255,0.02),0_40px_100px_rgba(0,0,0,0.8)] overflow-visible z-10"
      >
        {/* Subtle glass reflections */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.05] via-transparent to-white/[0.02] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        
        {/* --- THE CD STACK (3D Depth Layout) --- */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {PROJECTS.map((project, index) => {
            const offset = index - activeIndex;
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= (isMobile ? 2 : 4); // Hide faraway projects for performance

            if (!isVisible) return null;

            // 3D Math for the Semicircular Depth Orbit
            const xPos = isMobile ? offset * 60 : offset * 140;
            const zPos = isActive ? 150 : -Math.abs(offset) * 100;
            const yPos = isActive ? -60 : Math.abs(offset) * 10;
            const rotationY = isActive ? 0 : (offset > 0 ? -25 : 25);
            const scale = isActive ? 1.05 : 0.9 - Math.abs(offset) * 0.05;
            const zIndex = 50 - Math.abs(offset);

            return (
              <motion.div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: xPos,
                  y: yPos,
                  z: zPos,
                  rotateY: rotationY,
                  scale: scale,
                  opacity: isActive ? 1 : Math.max(1 - Math.abs(offset) * 0.25, 0),
                  filter: isActive ? "blur(0px) brightness(1.1)" : `blur(${Math.abs(offset) * 1.5}px) brightness(${0.7 - Math.abs(offset)*0.1})`
                }}
                whileHover={!isActive ? { y: yPos - 15, scale: scale * 1.02, filter: `blur(${Math.abs(offset) * 1}px) brightness(0.9)` } : {}}
                transition={{ type: "spring", damping: 20, stiffness: 120 }}
                style={{ zIndex, transformStyle: "preserve-3d" }}
                className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] cursor-pointer"
              >
                {/* --- THE PHYSICAL CD JEWEL CASE --- */}
                <div className={`relative w-full h-full bg-[#050508] border border-white/10 rounded-md shadow-2xl flex overflow-hidden ${isActive ? project.shadow : ''}`}>
                  
                  {/* CD Spine (Left edge) */}
                  <div className="w-[30px] md:w-[40px] h-full bg-[#0A0A0E] border-r border-white/10 flex flex-col items-center justify-end pb-4 md:pb-6 relative z-20">
                    <span className="text-[8px] md:text-[10px] font-mono text-gray-600 absolute top-4">{project.id}</span>
                    <div className="whitespace-nowrap -rotate-90 origin-bottom flex items-center">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-gray-400">{project.title}</span>
                    </div>
                  </div>

                  {/* CD Cover / Visual */}
                  <div className="flex-1 relative z-10">
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1 text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>{project.type}</p>
                      <h3 className="text-sm md:text-lg font-bold text-white tracking-tight uppercase truncate">{project.title}</h3>
                    </div>
                  </div>

                  {/* Plastic Case Reflections (Overlays) */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-md z-30" />
                  <div className="absolute left-[30px] md:left-[40px] top-0 bottom-0 w-1 bg-gradient-to-r from-white/20 to-transparent pointer-events-none z-30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- ACTIVE PROJECT DETAILS (Appears below the pulled-out CD) --- */}
        <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-6 flex justify-center pointer-events-none z-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full max-w-lg text-center flex flex-col items-center pointer-events-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase mb-2">{PROJECTS[activeIndex].title}</h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                {PROJECTS[activeIndex].desc}
              </p>
              <Link 
                href={PROJECTS[activeIndex].link} 
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
              >
                Explore Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
}