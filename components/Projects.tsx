"use client";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";

// 🟢 FIXED: Updated to match your exact file names (.jpg and .webp)
const projects = [
  {
    title: "SmartServe Digital Menu",
    category: "Restaurant System",
    description: "QR-based digital menu, table ordering, and full admin dashboard for modern restaurants.",
    image: "/assets/images/restaurant-demo.jpg", 
    tag: "Core Product"
  },
  {
    title: "Blinkit-Style Grocery App",
    category: "Custom Web App",
    description: "Complete inventory, cart, and hyper-local delivery platform for grocery stores.",
    image: "/assets/images/ecommerce-demo.webp", 
    tag: "Trending"
  },
  {
    title: "Premium Business Sites",
    category: "Web Development",
    description: "High-converting, ultra-fast websites designed specifically for premium brands.",
    image: "/assets/images/ai-bg.jpg", 
    tag: "High ROI"
  }
];

export default function Projects() {
  return (
    <section id="demo" className="py-32 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest">
              Live Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Systems We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Build</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            View All Demos <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white">
                  {project.tag}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent z-10"></div>
              </div>

              <div className="p-8 relative z-20 -mt-6">
                <p className="text-cyan-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors text-sm">
                  <Smartphone size={16} /> Explore System
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}