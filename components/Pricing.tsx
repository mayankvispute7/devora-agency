"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Growth Engine",
    description: "Perfect for scaling businesses that need a high-converting digital presence and automated lead capture.",
    features: [
      "Custom Premium Website",
      "Basic AI Chatbot Integration",
      "Mobile Responsive Design",
      "SEO Optimization",
      "Standard Analytics Dashboard"
    ]
  },
  {
    name: "Enterprise System",
    description: "Full-scale digital transformation. Custom software, complex integrations, and advanced AI workflows.",
    features: [
      "Complex Web App Development",
      "Advanced AI Agent Workflows",
      "Custom CRM & Internal Tools",
      "API Development & Integration",
      "Dedicated 24/7 Support Channel"
    ],
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative z-10 bg-transparent px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block px-5 py-2 mb-6 rounded-full border border-purple-500/30 bg-[#0A0A10]/80 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] shadow-[0_4px_24px_rgba(139,92,246,0.3)] backdrop-blur-xl"
          >
            Investment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 tracking-tighter text-white"
          >
            Custom Solutions For <br className="hidden md:block" />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 pr-2">
              Serious Growth
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg lg:text-xl max-w-2xl font-light"
          >
            We don't do cookie-cutter pricing. We build exact architectures to solve your specific business bottlenecks. Let's discuss your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
              className={`relative flex flex-col p-8 md:p-12 overflow-hidden rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border ${tier.popular ? 'border-cyan-500/40 shadow-[0_20px_60px_rgba(34,211,238,0.15)]' : 'border-white/10'} shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/[0.04]`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              )}
              
              <h3 className="text-3xl font-semibold tracking-tight text-white mb-4">{tier.name}</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">{tier.description}</p>
              
              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* 🟢 FIXED: The button now explicitly links to #contact, and has smooth scroll behavior */}
              <Link 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-semibold text-lg tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.popular 
                  ? 'bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:scale-[1.02]'
                }`}
              >
                Let's Talk <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}