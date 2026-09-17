"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Cpu, Layers, Workflow, Link as LinkIcon, Globe } from "lucide-react";

const SERVICES = [
  {
    id: 0,
    title: "AI IN YOUR WEBSITE",
    desc: "Turn your existing website into an intelligent experience with conversational assistants and automated lead qualification.",
    icon: <Cpu size={24} className="currentColor" />,
    image: "/assets/feature/1.jfif",
  },
  {
    id: 1,
    title: "CUSTOM INTERNAL SOFTWARE",
    desc: "Dashboards, client portals, and internal tools engineered exactly the way your business actually operates.",
    icon: <Layers size={24} className="currentColor" />,
    image: "/assets/feature/2.jfif",
  },
  {
    id: 2,
    title: "HIGH-END WEB EXPERIENCES",
    desc: "Immersive, cinematic web architecture designed to command absolute attention and convert visitors into premium clients.",
    icon: <Globe size={24} className="currentColor" />,
    image: "/assets/feature/3.jfif",
  },
  {
    id: 3,
    title: "AUTONOMOUS WORKFLOWS",
    desc: "End-to-end business automation that eliminates manual bottlenecks, connects your APIs, and runs your operations on autopilot.",
    icon: <Workflow size={24} className="currentColor" />,
    image: "/assets/feature/4.jfif",
  },
  {
    id: 4,
    title: "ENTERPRISE SAAS ARCHITECTURE",
    desc: "Scalable, high-performance cloud products built on modern stacks — architected to handle thousands of concurrent users without breaking a sweat.",
    icon: <LinkIcon size={24} className="currentColor" />,
    image: "/assets/feature/5.jfif",
  }
];

function ServiceCard({ service, index, activeIndex }: any) {
  const distance = useTransform(activeIndex, (val: number) => val - index);
  
  const x = useTransform(distance, [-2, -1, 0, 1, 2], ["100%", "65%", "0%", "-65%", "-100%"]);
  const y = useTransform(distance, [-2, -1, 0, 1, 2], [150, 80, 0, 80, 150]); 
  const z = useTransform(distance, [-2, -1, 0, 1, 2], [-400, -150, 0, -150, -400]); 
  const rotateY = useTransform(distance, [-2, -1, 0, 1, 2], [-20, -10, 0, 10, 20]);
  const scale = useTransform(distance, [-2, -1, 0, 1, 2], [0.6, 0.75, 1, 0.75, 0.6]);
  const opacity = useTransform(distance, [-2, -1, 0, 1, 2], [0, 0.4, 1, 0.4, 0]);
  const zIndex = useTransform(distance, [-2, -1, 0, 1, 2], [10, 20, 50, 20, 10]);

  const dynamicBorderColor = useTransform(distance, [-1, 0, 1], ["rgba(255,255,255,0.1)", "rgba(34,211,238,0.5)", "rgba(255,255,255,0.1)"]);

  return (
    <motion.div
      className="absolute w-[90%] max-w-[480px]"
      style={{ x, y, z, rotateY, scale, opacity, zIndex }}
    >
      <motion.div 
        className="group relative w-full bg-[#0A0A0E] rounded-2xl border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500"
        style={{ borderColor: dynamicBorderColor }}
      >
        <div className="w-full h-48 bg-[#050508] relative">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent opacity-90" />
        </div>

        <div className="relative px-8 pb-8 pt-0 flex flex-col">
          <div className="relative z-10 -mt-6 mb-6 w-12 h-12 rounded-xl bg-[#03010A] border border-white/10 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:scale-110 group-hover:text-white transition-all duration-300">
            {service.icon}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CoreFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const activeIndex = useTransform(smoothProgress, [0, 1], [0, SERVICES.length - 1]);

  return (
    <section ref={containerRef} className="h-[500vh] relative bg-transparent z-10 font-sans">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center perspective-[1200px]">
        <div className="absolute top-16 md:top-24 w-full text-center px-4 z-50 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-cyan-400 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            WHAT WE <span className="font-playfair italic text-gray-400">BUILD.</span>
          </h2>
        </div>
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mt-24">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} activeIndex={activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}