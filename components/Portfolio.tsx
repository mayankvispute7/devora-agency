"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ExternalLink, Lock, Sparkles, Layers, ArrowUpRight, Shield, Bot, Building, Utensils, Activity } from "lucide-react";

type ProjectType = "CLIENT PROJECT" | "DEVORA PRODUCT" | "CONCEPT BUILD" | "PRIVATE PROJECT";

export interface Project {
  id: string;
  title: string;
  category: string; 
  type: ProjectType;
  description: string;
  problem?: string;
  solution?: string;
  image: string;
  techTags: string[];
  link?: string;
  ctaText: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "menud",
    title: "MenuD",
    category: "HOSPITALITY",
    type: "DEVORA PRODUCT",
    description: "An interactive digital menu and smart restaurant platform designed to streamline guest ordering and elevate dining experiences.",
    problem: "Outdated physical menus and slow table turnarounds limit restaurant revenue potential.",
    solution: "A contactless, zero-friction mobile web platform providing real-time menu updates, high-res food previews, and seamless dining management.",
    image: "/assets/images/grocery-app.jfif", 
    techTags: ["Next.js", "Tailwind CSS", "Framer Motion", "Real-time Sync"],
    link: "https://menud.app", 
    ctaText: "View Product",
    featured: true
  },
  {
    id: "viaan-realty",
    title: "Viaan Realty",
    category: "REAL ESTATE",
    type: "CLIENT PROJECT",
    description: "A modern real-estate web experience designed to present luxury properties and brand authority through a high-trust digital interface.",
    problem: "Legacy real estate portals felt static and failed to showcase premium architectural developments effectively.",
    solution: "Engineered a high-performance, cinematic portal with interactive property galleries, instant inquiry capture, and fast load times.",
    image: "/assets/images/local-business.jfif",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://viaan-realty.vercel.app/",
    ctaText: "Visit Live Website",
    featured: true
  },
  {
    id: "farewell-invitation",
    title: "Farewell — Interactive Invitation",
    category: "WEBSITES",
    type: "CLIENT PROJECT",
    description: "Instead of sending static invitation images, we built a shareable interactive web experience accessible through a single link.",
    problem: "Traditional graphic invitations lack engagement, RSVP tracking, and personal brand impact.",
    solution: "Built a customized, animated micro-experience that turned a routine invitation into a memorable interactive event.",
    image: "/assets/images/custom.jfif",
    techTags: ["React", "Framer Motion", "CSS Architecture"],
    link: "https://farewell-invitation-2026.vercel.app/",
    ctaText: "Live Experience",
    featured: true
  },
  {
    id: "netvisionx",
    title: "NetVisionX",
    category: "AI",
    type: "DEVORA PRODUCT",
    description: "AI-driven network automation and intelligent infrastructure monitoring dashboard.",
    problem: "Complex enterprise networks produce massive telemetry data that humans cannot analyze in real-time.",
    solution: "Deployed custom predictive analytics models with glassmorphic telemetry panels to detect anomalies instantly.",
    image: "/assets/videos/api.mp4", 
    techTags: ["AI / LLMs", "Python", "Next.js", "WebSocket"],
    link: "https://net-vision-x.vercel.app/",
    ctaText: "View Case Study",
    featured: true
  },
  {
    id: "aionyx",
    title: "Aionyx",
    category: "AI",
    type: "DEVORA PRODUCT",
    description: "Autonomous data analytics and AI agent intelligence engine built for enterprise workflows.",
    problem: "Fragmented company data silos prevent teams from deriving actionable strategic intelligence.",
    solution: "Unified multi-source data processing into a central AI dashboard capable of automated reporting.",
    image: "/assets/images/custom.jfif",
    techTags: ["AI Agents", "Data Science", "React", "Node.js"],
    ctaText: "Explore Platform",
    featured: true
  },
  {
    id: "sentinelx",
    title: "SentinelX",
    category: "AI",
    type: "DEVORA PRODUCT",
    description: "Real-time AI fraud detection and risk modeling engine for financial systems.",
    problem: "High transaction volumes make manual fraud audits impossible, leading to revenue leakage.",
    solution: "Custom machine learning pipeline that evaluates transaction risk metrics in under 50 milliseconds.",
    image: "/assets/images/custom.jfif",
    techTags: ["Machine Learning", "FinTech", "Next.js"],
    ctaText: "View Architecture",
    featured: true
  },
  {
    id: "concept-hotel",
    title: "Aura Luxe — Hotel Booking Platform",
    category: "HOSPITALITY",
    type: "CONCEPT BUILD",
    description: "A high-end luxury hospitality booking engine featuring interactive room tours and frictionless reservation flow.",
    image: "/assets/images/restaurant.jfif",
    techTags: ["UI/UX Design", "Next.js", "Payment Gateways"],
    ctaText: "Explore Concept"
  },
  {
    id: "concept-ai-support",
    title: "OmniChat — AI Customer Support Agent",
    category: "AI",
    type: "CONCEPT BUILD",
    description: "Custom-trained LLM customer service widget capable of booking appointments and qualifying sales leads.",
    image: "/assets/images/local-business.jfif",
    techTags: ["OpenAI API", "Vector Databases", "Embeddable Widget"],
    ctaText: "Explore Concept"
  }
];

const filterCategories = ["ALL", "WEBSITES", "AI", "SAAS", "HOSPITALITY", "REAL ESTATE", "HEALTHCARE", "CONCEPTS"];

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const featuredProjects = projects.filter(p => p.featured);
  
  const filteredGridProjects = projects.filter(p => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "CONCEPTS") return p.type === "CONCEPT BUILD";
    return p.category === activeFilter;
  });

  const getTypeStyle = (type: ProjectType) => {
    switch (type) {
      case "CLIENT PROJECT":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
      case "DEVORA PRODUCT":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      case "CONCEPT BUILD":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "PRIVATE PROJECT":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 px-4 sm:px-6 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-cyan-500/30 bg-[#0A0A10]/80 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(34,211,238,0.2)]"
          >
            <Sparkles size={14} className="text-cyan-400" />
            Verified Case Studies & Systems
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.05] mb-6 max-w-4xl"
          >
            20+ Digital Projects, <br className="hidden md:block" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 pr-2">
              Products & Concepts
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg lg:text-xl font-light max-w-3xl leading-relaxed"
          >
            Real client deployments, proprietary Devora products, and concept builds demonstrating our technical capabilities across multiple industries.
          </motion.p>
        </div>

        <div className="mb-28 space-y-12">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="text-purple-400" size={24} />
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Featured Showcase</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative rounded-[2.5rem] bg-[#0A0A10]/80 backdrop-blur-3xl border border-white/10 overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/20 transition-all duration-500"
              >
                <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-black shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/30 to-transparent z-10" />
                  
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md shadow-lg ${getTypeStyle(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-grow flex flex-col justify-between relative z-20">
                  <div>
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{project.category}</div>
                    <h4 className="text-3xl font-semibold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">{project.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">{project.description}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techTags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-300 font-light">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-[1.02]"
                      >
                        {project.ctaText} <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-medium text-sm">
                        <Lock size={14} /> {project.ctaText}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-2">Capabilities Archive</h3>
              <p className="text-gray-400 text-sm font-light">Explore specific software patterns, concepts, and system builds.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 border ${
                    activeFilter === cat 
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                      : "bg-[#0A0A10]/60 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGridProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl bg-[#0A0A10]/90 backdrop-blur-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${getTypeStyle(project.type)}`}>
                        {project.type}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{project.category}</span>
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors tracking-tight">{project.title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">{project.description}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techTags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                      >
                        {project.ctaText} <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                        <Shield size={12} /> {project.ctaText}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}