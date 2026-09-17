"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Star, Shield } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "VALIDATION MVP",
    desc: "For startups needing to test an idea fast and secure funding.",
    price: "Custom",
    icon: <Zap size={24} className="text-cyan-400" />,
    color: "from-cyan-400 to-cyan-600",
    features: ["Core Feature Development", "Responsive UI/UX Design", "Basic Auth & Database", "2-3 Week Delivery"],
    recommended: false,
  },
  {
    name: "DIGITAL ARCHITECTURE",
    desc: "For businesses ready to automate workflows and scale operations.",
    price: "Premium",
    icon: <Star size={24} className="text-purple-400" />,
    color: "from-purple-400 to-purple-600",
    features: ["Custom Web & App Platform", "AI/LLM Integration", "Advanced Admin Dashboard", "Payment & CRM Integrations", "Dedicated Project Manager"],
    recommended: true,
  },
  {
    name: "ENTERPRISE SCALE",
    desc: "For massive systems requiring high security and complex data pipelines.",
    price: "Bespoke",
    icon: <Shield size={24} className="text-pink-400" />,
    color: "from-pink-400 to-pink-600",
    features: ["Microservices Architecture", "Custom AI Model Fine-Tuning", "Enterprise Security & DevOps", "Unlimited Revisions", "24/7 SLA Support"],
    recommended: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            Investment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
          >
            PARTNERSHIP <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TIERS.</span>
          </motion.h2>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative group rounded-[2rem] bg-[#0A0A0E] border p-8 flex flex-col transition-all duration-500 hover:-translate-y-2
                ${plan.recommended ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-white/30'}
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#05050A] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide uppercase">{plan.name}</h3>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/5">
                <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={18} className={plan.recommended ? "text-purple-400" : "text-gray-500"} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide text-center transition-all ${
                  plan.recommended 
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]' 
                    : 'bg-[#05050A] border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                Inquire Now
              </Link>

              {/* Glowing bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r ${plan.color} rounded-t-full shadow-[0_0_10px_currentColor]`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}