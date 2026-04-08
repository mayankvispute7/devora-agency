"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, TrendingUp, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: "local",
    title: "Local Business Website",
    shortDesc: "Dominate local SEO and convert visitors.",
    image: "/assets/images/local-business.jfif",
    howItWorks: ["We design a custom UI for your brand", "Optimize for local Google search ranking", "Integrate lead-capture contact forms"],
    benefits: ["Build instant trust with clients", "Look more professional than competitors", "Automate customer inquiries"],
    profitImpact: "Increases inbound leads by converting passing traffic into high-paying clients 24/7.",
    cta: "Start Your Website"
  },
  {
    id: "clothing",
    title: "Clothing Brand E-Commerce",
    shortDesc: "High-end fashion storefronts.",
    image: "/assets/images/clothing-brand.jfif",
    howItWorks: ["Build a premium, Apple-like storefront", "Integrate secure payment gateways", "Setup automated inventory tracking"],
    benefits: ["Flawless mobile shopping experience", "Zero-friction checkout process", "High-end brand perception"],
    profitImpact: "Boosts conversion rates and average order value through premium, high-trust UI design.",
    cta: "Build Your Store"
  },
  {
    id: "grocery",
    title: "Grocery Ordering System",
    shortDesc: "Modern e-grocery platforms like Blinkit.",
    image: "/assets/images/grocery-app.jfif",
    howItWorks: ["User browses digital inventory app", "Adds to cart & pays securely online", "Live delivery tracking activates"],
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
    howItWorks: ["Deep dive strategy session", "Custom UI/UX & Architecture design", "Full-stack development & launch"],
    benefits: ["100% tailored to your business", "Scalable cloud infrastructure", "Complete ownership of the system"],
    profitImpact: "Automates entire business wings, saving thousands of hours in manual labor costs.",
    cta: "Discuss Your Idea"
  }
];

export default function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="py-32 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Whatever You Need. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">We Build It.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Side: Interactive List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isActive 
                      ? "bg-[#0A0A10] border-cyan-500/50 shadow-[0_0_30px_rgba(56,189,248,0.15)]" 
                      : "bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div>
                    <span className={`block font-bold text-lg mb-1 transition-colors ${isActive ? "text-cyan-400" : "text-gray-300 group-hover:text-white"}`}>
                      {feature.title}
                    </span>
                    <span className="text-xs text-gray-500 line-clamp-1">{feature.shortDesc}</span>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`transition-all duration-300 ${isActive ? "text-cyan-400 translate-x-1" : "text-gray-600 opacity-0 group-hover:opacity-100"}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: High-Converting Dynamic Detail Panel */}
          <div className="lg:col-span-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-[2rem] blur-[80px] -z-10 animate-pulse"></div>
            
            <div className="bg-[#0A0A10] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  {/* Hero Image Banner */}
                  <div className="h-48 md:h-64 w-full relative overflow-hidden bg-gray-900 shrink-0">
                    <img 
                      src={activeFeature.image} 
                      alt={activeFeature.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] to-transparent"></div>
                    <div className="absolute bottom-6 left-8">
                      <h3 className="text-3xl font-black text-white">{activeFeature.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 flex-grow flex flex-col gap-8">
                    
                    {/* Two Column Layout for Specs */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* How It Works */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="text-purple-400" size={20} />
                          <h4 className="text-lg font-bold text-white">How It Works</h4>
                        </div>
                        <ul className="space-y-3">
                          {activeFeature.howItWorks.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="text-purple-500 font-bold mt-0.5">{i + 1}.</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Business Benefits */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="text-cyan-400" size={20} />
                          <h4 className="text-lg font-bold text-white">Business Benefits</h4>
                        </div>
                        <ul className="space-y-3">
                          {activeFeature.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Profit Impact Box */}
                    <div className="mt-auto bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-5 rounded-xl flex items-start md:items-center gap-4">
                      <div className="p-3 bg-emerald-500/20 rounded-lg shrink-0">
                        <TrendingUp className="text-emerald-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-1">Profit Impact</h4>
                        <p className="text-gray-300 text-sm font-medium">{activeFeature.profitImpact}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-white font-bold transition-all shadow-lg hover:scale-[1.02]">
                      {activeFeature.cta} <ArrowRight size={18} />
                    </Link>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}