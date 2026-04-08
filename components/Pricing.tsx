"use client";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const plans = [
  { 
    name: "Static & Animated", 
    price: "₹4,999", // Or use $99 if targeting global
    subtext: "+ Domain cost (~₹800/yr)",
    desc: "A beautiful, lightning-fast static website with premium Gen-Z animations to showcase your brand.", 
    features: ["Framer Motion Animations", "Mobile Responsive UI", "SEO Optimization", "Contact Form Integration"], 
    popular: false 
  },
  { 
    name: "Dynamic System", 
    price: "₹14,999", 
    subtext: "Complete Backend System",
    desc: "For restaurants, booking systems, or businesses that need databases and live updates.", 
    features: ["Everything in Static", "Database & User Login", "Admin Dashboard", "Digital Menu / E-commerce"], 
    popular: true 
  },
  { 
    name: "AI & Custom App", 
    price: "Custom", 
    subtext: "Enterprise Architecture",
    desc: "Advanced Blinkit-style web apps, custom SaaS platforms, and intelligent AI integrations.", 
    features: ["Full-Stack Architecture", "AI Chatbot Integration", "Payment Gateways", "Scalable Cloud Hosting"], 
    popular: false 
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 relative z-10 bg-[#0A0A10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold uppercase tracking-widest">
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            High-End Tech. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Low-Barrier Cost.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Info size={18} className="text-purple-400" />
            We don't overcharge. You pay a simple setup fee, and domains cost as little as ₹800/year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl bg-[#05050A] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-none shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-20' : 'border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-b from-purple-500 to-cyan-500 -z-10 animate-pulse opacity-70"></div>
              )}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-lg">
                  Most Requested
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-cyan-400 text-sm font-semibold mb-4">{plan.subtext}</p>
              <p className="text-gray-400 text-sm mb-6 h-12 leading-relaxed">{plan.desc}</p>
              
              <div className="text-4xl font-black text-white mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={18} className="text-cyan-400 shrink-0 mt-0.5" /> 
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:scale-105 shadow-lg' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Start Building
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}