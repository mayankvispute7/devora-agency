"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Radar } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  // Left Side
  { id: "startup", name: "Startups", x: "-38vw", y: "-10vh", systems: ["Idea Validation", "SaaS Architecture"], dur: 6, yMove: -8, xMove: 5 },
  { id: "healthcare", name: "Healthcare", x: "-28vw", y: "0vh", systems: ["Patient Portals", "HIPAA DBs"], dur: 7.5, yMove: -5, xMove: 8 },
  { id: "saas", name: "B2B SaaS", x: "-44vw", y: "8vh", systems: ["Multi-tenant DBs", "API Infrastructure"], dur: 8, yMove: -6, xMove: -5 },
  { id: "beauty", name: "Beauty & Spa", x: "-32vw", y: "18vh", systems: ["Salon Scheduling", "AR Try-on"], dur: 5.8, yMove: 8, xMove: 6 },
  { id: "creator", name: "Creators", x: "-42vw", y: "28vh", systems: ["Membership Sites", "Analytics"], dur: 9, yMove: -7, xMove: 8 },
  { id: "automotive", name: "Automotive", x: "-26vw", y: "35vh", systems: ["Inventory Systems", "Dealer CRMs"], dur: 6.8, yMove: -5, xMove: -4 },
  
  // Right Side
  { id: "hospitality", name: "Hospitality", x: "38vw", y: "-10vh", systems: ["Booking Engines", "Property Mgmt"], dur: 7.2, yMove: 8, xMove: -5 },
  { id: "restaurant", name: "Restaurants", x: "28vw", y: "0vh", systems: ["Digital Menus", "QR Ordering"], dur: 7, yMove: -8, xMove: -6 },
  { id: "fitness", name: "Fitness", x: "44vw", y: "8vh", systems: ["Booking Systems", "Member Apps"], dur: 8.5, yMove: 6, xMove: -7 },
  { id: "fintech", name: "Fintech", x: "32vw", y: "18vh", systems: ["Payment Gateways", "Fraud Detection"], dur: 6.5, yMove: 7, xMove: -5 },
  { id: "legal", name: "Legal", x: "42vw", y: "28vh", systems: ["Case Management", "Secure Vaults"], dur: 7.8, yMove: 5, xMove: -8 },
  { id: "logistics", name: "Logistics", x: "26vw", y: "35vh", systems: ["Fleet Tracking", "Route AI"], dur: 6.2, yMove: -6, xMove: -5 },
  
  // Bottom Center
  { id: "realestate", name: "Real Estate", x: "-35vw", y: "45vh", systems: ["Property Platforms", "Virtual Tours"], dur: 8, yMove: 8, xMove: 5 },
  { id: "education", name: "Education", x: "-15vw", y: "45vh", systems: ["LMS Platforms", "AI Tutors"], dur: 6, yMove: -5, xMove: -4 },
  { id: "agency", name: "Agencies", x: "15vw", y: "45vh", systems: ["Client Portals", "Workflow CRM"], dur: 7, yMove: 6, xMove: 5 },
  { id: "ecommerce", name: "E-Commerce", x: "35vw", y: "45vh", systems: ["Storefronts", "AI Recommendations"], dur: 5.5, yMove: -6, xMove: -5 },
];

export default function IndustryExplorer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeIndustry = INDUSTRIES.find(ind => ind.id === hoveredId);

  return (
    <section className="relative h-[120vh] bg-transparent z-20 font-sans overflow-hidden">
      
      <div className="absolute top-20 md:top-32 w-full text-center px-4 z-40 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Tailored Architecture
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
          WHAT KIND OF BUSINESS <br />
          <span className="font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400">
            ARE YOU BUILDING?
          </span>
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        {INDUSTRIES.map((industry, i) => (
          <motion.div
            key={industry.id}
            onMouseEnter={() => setHoveredId(industry.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="absolute cursor-pointer z-30"
            initial={{ x: "0vw", y: "0vh", scale: 0, opacity: 0 }}
            whileInView={{ x: industry.x, y: industry.y, scale: 1, opacity: hoveredId === null || hoveredId === industry.id ? 1 : 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 14, stiffness: 45, delay: i * 0.05 }}
          >
            <motion.div
              animate={{ 
                y: [0, industry.yMove, 0], 
                x: [0, industry.xMove, 0],
                rotate: [0, industry.xMove > 0 ? 3 : -3, 0] 
              }}
              transition={{ duration: industry.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
              className="relative group p-4 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <h3 
                className={`font-playfair italic font-light text-xl md:text-2xl lg:text-3xl tracking-wide transition-all duration-500 drop-shadow-md ${
                  hoveredId === industry.id 
                    ? "text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,1)] scale-110" 
                    : "text-gray-200 hover:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                }`}
              >
                {industry.name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none mt-10">
        <AnimatePresence mode="wait">
          
          {/* 🟢 CLEAN 2D RADAR LOOP (No 3D Model) */}
          {hoveredId === null && (
            <motion.div
              key="radar-core"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center pointer-events-none"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border border-dashed border-cyan-400/30 flex items-center justify-center mb-6 relative"
              >
                <Radar size={32} className="text-cyan-400/50 absolute" />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-cyan-400/20"
                />
              </motion.div>
              
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], textShadow: ["0px 0px 10px rgba(34,211,238,0)", "0px 0px 20px rgba(34,211,238,0.5)", "0px 0px 10px rgba(34,211,238,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400 mb-2">System Ready</span>
                <span className="text-xl md:text-2xl font-playfair italic text-white tracking-wider">Select Your Industry</span>
              </motion.div>
            </motion.div>
          )}

          {/* THE HOVERED GLASS CARD */}
          {activeIndustry && (
            <motion.div
              key="active-card"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[90vw] md:w-[400px] rounded-3xl bg-[#05050A]/90 backdrop-blur-3xl border border-white/10 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.9)] pointer-events-auto"
            >
              <div className="absolute -top-[1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              
              <div className="flex flex-col items-center text-center">
                <Terminal size={28} className="text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
                  Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">{activeIndustry.name}</span>
                </h4>
                
                <ul className="flex flex-col gap-3 mb-8 w-full">
                  {activeIndustry.systems.map((system, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-center gap-3 text-sm text-gray-300 font-medium bg-white/5 py-3 px-4 rounded-xl border border-white/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] shrink-0" />
                      {system}
                    </motion.li>
                  ))}
                </ul>

                <Link 
                  href="#contact" 
                  className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-xs font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase tracking-widest mt-auto"
                >
                  Build This System <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}