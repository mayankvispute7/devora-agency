"use client";
import { motion } from "framer-motion";
import { Globe, Layers, Cpu, UtensilsCrossed } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Premium business sites, landing pages, and E-commerce platforms designed to convert.",
    icon: <Globe size={28} className="text-cyan-400" />,
    glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:border-cyan-500/30",
  },
  {
    title: "Custom Systems & Apps",
    description: "Grocery ordering (Blinkit-style), booking platforms, and custom admin dashboards.",
    icon: <Layers size={28} className="text-indigo-400" />,
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30",
  },
  {
    title: "AI Integration",
    description: "Smart chatbots, customer support automation, and intelligent feature integrations.",
    icon: <Cpu size={28} className="text-purple-400" />,
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
  },
  {
    title: "Digital Restaurant System",
    description: "Our flagship SmartServe platform: QR menus, table ordering, and analytics dashboards.",
    icon: <UtensilsCrossed size={28} className="text-pink-400" />,
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:border-pink-500/30",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-widest">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Everything You Need To <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Dominate Digital</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 group ${service.glow}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}