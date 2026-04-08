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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative overflow-hidden rounded-[2rem] bg-[#0A0A10] border border-white/5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:border-purple-500/30 min-h-[320px] flex flex-col justify-end transform-gpu"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.15), transparent 40%)` }}
      />
      
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] bg-black">
        <video 
          src={feature.video} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110 mix-blend-lighten pointer-events-none transform-gpu" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/70 to-transparent z-10" />
      </div>

      <div className="relative z-20 p-8">
        <div className="w-14 h-14 rounded-2xl bg-[#05050A]/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed font-light">{feature.desc}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          Explore Feature <Zap size={14} />
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

  // 🟢 FIXED: Explicitly typed as Variants
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)", transition: { duration: 0.2 } }
  };

  // 🟢 FIXED: Explicitly typed as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="features" className="py-24 md:py-32 px-6 md:px-12 lg:px-8 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-block px-5 py-2 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            Elite Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">The Future</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            We deploy advanced frameworks, artificial intelligence, and stunning UI design to build systems that dominate your market.
          </p>
        </div>

        <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#0A0A10] border border-purple-500/20 shadow-[0_0_80px_rgba(139,92,246,0.07)]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 rounded-[3rem] pointer-events-none"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, index) => (
              <SpotlightCard key={index} feature={feature} index={index} onClick={() => setSelectedFeature(feature)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(24px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-[#05050A]/80 cursor-pointer"
              onClick={() => setSelectedFeature(null)}
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            </motion.div>

            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-5xl bg-[#0A0A10]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.2)] z-10 flex flex-col md:flex-row transform-gpu"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300 backdrop-blur-md"
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
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten pointer-events-none transform-gpu" 
                  style={{ WebkitTransform: 'translateZ(0)' }}
                />

                <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,1)] z-10 opacity-50 pointer-events-none"
                />

                <div className="absolute top-6 left-6 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center gap-2 z-20 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-widest">System Active</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A10] via-[#0A0A10]/10 to-transparent md:bg-gradient-to-r pointer-events-none" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
                
                <motion.div variants={itemVariants} className="flex items-center gap-5 mb-6">
                  <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:border-cyan-500/50 transition-colors">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full blur-[4px]"></div>
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {selectedFeature.title}
                  </h3>
                </motion.div>
                
                <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                  {selectedFeature.details}
                </motion.p>
                
                <motion.div variants={itemVariants} className="relative bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl flex items-start gap-5 mb-10 overflow-hidden group hover:bg-emerald-500/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  <div className="relative p-3 bg-emerald-500/20 rounded-xl shrink-0 mt-1 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <TrendingUp className="text-emerald-400" size={24} />
                  </div>
                  <div className="relative">
                    <h4 className="flex items-center gap-2 text-sm font-black text-emerald-400 uppercase tracking-widest mb-2">
                      <Activity size={16} className="animate-pulse" /> Bottom Line Impact
                    </h4>
                    <p className="text-gray-200 text-base font-medium leading-relaxed">{selectedFeature.impact}</p>
                  </div>
                </motion.div>

                <motion.button 
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedFeature(null);
                    setTimeout(() => {
                        document.getElementById('meeting')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-[1.02] transition-all duration-300 text-white font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden flex items-center justify-center gap-2"
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  Discuss Implementation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}