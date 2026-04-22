"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Bot, BrainCircuit, Workflow, LayoutDashboard, Sparkles, Webhook, X, TrendingUp, Zap, Activity, ChevronRight } from "lucide-react";

const features = [
  {
    id: "chatbots",
    title: "AI Chatbots & Agents",
    desc: "Intelligent AI assistants that handle 24/7 customer support and automate lead qualification.",
    icon: <Bot size={28} className="text-cyan-400" />,
    video: "/assets/videos/chatbot.mp4",
    details: "We deploy custom-trained AI agents that understand your specific business context. They don't just answer FAQs; they actively capture leads, book appointments, and route complex queries to your human team.",
    impact: "Reduces customer service costs by 60% while capturing leads at 2 AM."
  },
  {
    id: "integration",
    title: "AI Integration",
    desc: "Embed large language models (LLMs) and computer vision directly into your business workflows.",
    icon: <BrainCircuit size={28} className="text-purple-400" />,
    video: "/assets/videos/ai-integration.mp4",
    details: "From automated document parsing to predictive analytics, we connect OpenAI, Anthropic, or custom models directly into your company's daily operations.",
    impact: "Turns hours of manual data processing into seconds of automated work."
  },
  {
    id: "automation",
    title: "Business Automation",
    desc: "Zapier-level custom workflows. We connect your apps so your business runs on autopilot.",
    icon: <Workflow size={28} className="text-blue-400" />,
    video: "/assets/videos/automation.mp4",
    details: "We map out your repetitive tasks and build invisible digital bridges between your CRM, email, accounting, and communication tools.",
    impact: "Eliminates human error and frees up your staff to focus on growth."
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    desc: "Beautiful, real-time analytics panels to track revenue, users, and daily operations.",
    icon: <LayoutDashboard size={28} className="text-pink-400" />,
    video: "/assets/videos/dashboard.mp4",
    details: "Stop guessing. We build centralized, highly secure glassmorphic dashboards that pull data from all your fragmented systems into one beautiful screen.",
    impact: "Gives founders 100% clarity and control over business metrics in real-time."
  },
  {
    id: "uiux",
    title: "Premium UI/UX",
    desc: "Apple-level design systems with glassmorphism, smooth animations, and flawless responsiveness.",
    icon: <Sparkles size={28} className="text-emerald-400" />,
    video: "/assets/videos/premium-ui.mp4",
    details: "We don't use cheap templates. Every pixel is custom-engineered using modern React/Next.js frameworks to ensure your brand feels expensive and trustworthy.",
    impact: "Drastically increases conversion rates by building instant subconscious trust."
  },
  {
    id: "api",
    title: "API & Integrations",
    desc: "Seamlessly connect payment gateways, CRM systems, and third-party tools to your platform.",
    icon: <Webhook size={28} className="text-indigo-400" />,
    video: "/assets/videos/api.mp4",
    details: "Stripe for payments, Twilio for SMS, SendGrid for emails. We handle the complex backend architecture to make your platform hyper-connected.",
    impact: "Allows your custom software to communicate with the rest of the world securely."
  }
];

// 🟢 3D Scroll Reveal Variants for the Cards
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring", bounce: 0.4 }
  }
};

const SpotlightCard = ({ feature, index, onClick }: { feature: any; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={cardReveal}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      // 🟢 True Liquid Glass Styling
      className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-white/20 min-h-[340px] flex flex-col justify-end transform-gpu"
    >
      {/* Magnetic Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-20"
        style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)` }}
      />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] bg-black/60">
        <video 
          src={feature.video} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110 pointer-events-none mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/60 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 p-8">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A10]/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:border-white/30">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300 tracking-tight">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
        
        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          Explore Feature <Zap size={14} className="text-cyan-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default function PremiumFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null);

  useEffect(() => {
    if (selectedFeature) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedFeature]);

  // 🟢 Modal Animation (Smooth pop up)
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)", transition: { duration: 0.2 } }
  };

  return (
    // bg-transparent for the dots
    <section id="features" className="py-24 md:py-32 px-4 sm:px-6 relative z-10 overflow-hidden bg-transparent perspective-[2000px]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ELITE HEADER --- */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-[#0A0A10]/80 text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            Elite Arsenal
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight text-white max-w-4xl"
          >
            Engineering <br className="hidden md:block" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 pr-2">
              The Future
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg lg:text-xl font-light max-w-2xl leading-relaxed"
          >
            We deploy advanced frameworks, artificial intelligence, and stunning UI design to build systems that completely dominate your market.
          </motion.p>
        </div>

        {/* --- GRID CONTAINER --- */}
        <div className="relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.15 }} // 🟢 Domino reveal sequence
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
          >
            {features.map((feature, index) => (
              <SpotlightCard key={index} feature={feature} index={index} onClick={() => setSelectedFeature(feature)} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- ELITE GLASS MODAL --- */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            {/* Deep blur backdrop */}
            <motion.div 
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(24px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-[#05050A]/60 cursor-pointer"
              onClick={() => setSelectedFeature(null)}
            />

            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // 🟢 Premium Glass Modal Styling
              className="relative w-full max-w-5xl bg-[#0A0A10]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-white/10 hover:rotate-90 hover:scale-110 transition-all duration-300 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-black overflow-hidden group">
                <video 
                  key={selectedFeature.id}
                  src={selectedFeature.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none mix-blend-screen" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/20 to-transparent md:bg-gradient-to-r pointer-events-none" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                    {selectedFeature.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-10 font-light">
                  {selectedFeature.details}
                </p>
                
                <div className="relative bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex items-start gap-5 mb-10 backdrop-blur-md">
                  <div className="relative p-3 bg-white/5 rounded-xl shrink-0 mt-1 border border-white/5">
                    <TrendingUp className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      <Activity size={14} className="text-emerald-400"/> Bottom Line Impact
                    </h4>
                    <p className="text-white text-base font-light leading-relaxed">{selectedFeature.impact}</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedFeature(null);
                    // 🟢 FIXED: Points to #contact now, since #meeting is gone!
                    setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 300);
                  }}
                  className="w-full py-5 rounded-2xl bg-white text-black hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide text-lg flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Discuss Implementation <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}