"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronRight, CheckCircle2, TrendingUp, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: "local",
    title: "Local Business Website",
    shortDesc: "Dominate local SEO and convert visitors.",
    image: "/assets/images/local-business.jfif",
    howItWorks: ["We design a custom UI for your brand", "Optimize for local Google search ranking", "Integrate lead-capture forms"],
    benefits: ["Build instant trust with clients", "Look more professional than competitors", "Automate customer inquiries"],
    profitImpact: "Increases inbound leads by converting passing traffic into high-paying clients 24/7.",
    cta: "Start Your Website"
  },
  {
    id: "clothing",
    title: "Clothing Brand E-Commerce",
    shortDesc: "High-end fashion storefronts.",
    image: "/assets/images/clothing-brand.jfif",
    howItWorks: ["Build a premium, Apple-like storefront", "Integrate secure payment gateways", "Setup automated inventory"],
    benefits: ["Flawless mobile shopping experience", "Zero-friction checkout process", "High-end brand perception"],
    profitImpact: "Boosts conversion rates and average order value through premium, high-trust UI design.",
    cta: "Build Your Store"
  },
  {
    id: "grocery",
    title: "Grocery Ordering System",
    shortDesc: "Modern e-grocery platforms like Blinkit.",
    image: "/assets/images/grocery-app.jfif",
    howItWorks: ["User browses digital inventory app", "Adds to cart & pays securely online", "Live delivery tracking"],
    benefits: ["Complete mobile-first ordering", "Real-time inventory synchronization", "Hyper-local market dominance"],
    profitImpact: "Captures the massive mobile ordering market, increasing daily order volume drastically.",
    cta: "Get This System"
  },
  {
    id: "restaurant",
    title: "Restaurant System & Menu",
    shortDesc: "Online reservations and digital menus.",
    image: "/assets/images/restaurant.jfif",
    howItWorks: ["Scan QR code at the table", "Browse beautiful digital menu", "Order and pay directly from phone"],
    benefits: ["No physical menus needed", "Instant price and item updates", "Faster table turnover rates"],
    profitImpact: "Reduces waitstaff overhead and increases average ticket size with high-quality food photos.",
    cta: "Upgrade Your Restaurant"
  },
  {
    id: "custom",
    title: "Custom SaaS / App",
    shortDesc: "We build anything you can imagine.",
    image: "/assets/images/custom.jfif",
    howItWorks: ["Deep dive strategy session", "Custom UI/UX & Architecture design", "Full-stack development"],
    benefits: ["100% tailored to your business", "Scalable cloud infrastructure", "Complete ownership of the system"],
    profitImpact: "Automates entire business wings, saving thousands of hours in manual labor costs.",
    cta: "Discuss Your Idea"
  }
];

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// 🟢 FIXED: Explicitly typed as Variants to solve the TypeScript string error
const contentStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

// 🟢 FIXED: Explicitly typed as Variants so TS knows 'easeOut' is a valid easing command
const itemReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="capabilities" className="min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 relative z-10 bg-transparent overflow-hidden">
      <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-300 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(34,211,238,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            End-To-End Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-[1.05]">
            Whatever You Need. <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 pr-2">We Build It.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-2.5 relative z-20">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 relative flex items-center justify-between group overflow-hidden ${
                    isActive ? "bg-gradient-to-r from-cyan-900/30 to-[#0A0A10]/90 border border-cyan-500/40 shadow-[inset_0_0_20px_rgba(34,211,238,0.1),_0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-3xl" 
                             : "bg-[#0A0A10]/60 border border-white/5 hover:bg-[#111118]/80 hover:border-white/20 backdrop-blur-xl"
                  }`}
                >
                  {isActive && <motion.div layoutId="activeIndicator" className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />}
                  <div className="relative z-10 pl-2">
                    <span className={`block font-semibold text-base mb-0.5 transition-colors duration-300 tracking-tight ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>{feature.title}</span>
                    <span className={`text-xs font-light transition-colors duration-300 line-clamp-1 ${isActive ? "text-cyan-200" : "text-gray-500"}`}>{feature.shortDesc}</span>
                  </div>
                  <ChevronRight size={18} className={`relative z-10 transition-all duration-500 ${isActive ? "text-cyan-400 translate-x-0" : "text-gray-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent rounded-[3rem] blur-[80px] -z-10"></div>
            
            <div className="bg-[#08080C]/80 backdrop-blur-3xl border-t border-white/10 border-x border-x-white/5 border-b border-b-transparent rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div key={activeFeature.id} variants={contentStagger} initial="hidden" animate="visible" exit="exit" className="flex flex-col h-full">
                  
                  <div className="h-40 md:h-52 w-full relative overflow-hidden shrink-0 group bg-black">
                    <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 0.8, ease: "easeOut" }} src={activeFeature.image} alt={activeFeature.title} className="w-full h-full object-cover opacity-90" />
                    <motion.div initial={{ x: "-100%" }} animate={{ x: "200%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/60 to-transparent z-10"></div>
                    <motion.div variants={itemReveal} className="absolute bottom-4 left-6 right-6 z-20">
                      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-lg">{activeFeature.title}</h3>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-grow flex flex-col gap-6 relative z-10 bg-[#08080C]">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemReveal}>
                        <div className="flex items-center gap-2 mb-3">
                          <Settings className="text-purple-400" size={16} />
                          <h4 className="text-base font-semibold text-white tracking-tight">How It Works</h4>
                        </div>
                        <ul className="space-y-2.5">
                          {activeFeature.howItWorks.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-300 font-light">
                              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 text-[9px] font-bold shrink-0 mt-0.5 border border-purple-500/30">{i + 1}</span> 
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div variants={itemReveal}>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="text-cyan-400" size={16} />
                          <h4 className="text-base font-semibold text-white tracking-tight">Business Benefits</h4>
                        </div>
                        <ul className="space-y-2.5">
                          {activeFeature.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-300 font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    <motion.div variants={itemReveal} className="mt-auto bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/20 p-4 rounded-xl flex items-center gap-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0 border border-emerald-500/20 shadow-[inset_0_0_15px_rgba(16,185,129,0.1)]">
                        <TrendingUp className="text-emerald-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">Profit Impact</h4>
                        <p className="text-white text-xs font-light leading-relaxed">{activeFeature.profitImpact}</p>
                      </div>
                    </motion.div>

                    <motion.div variants={itemReveal}>
                      <Link href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-base transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-[1.02]">
                        <span className="relative z-10">{activeFeature.cta}</span> 
                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}