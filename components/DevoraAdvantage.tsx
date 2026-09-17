"use client";
import { motion, Variants } from "framer-motion";

const advantages = [
  { title: "AI-NATIVE", desc: "Built with intelligent automation at the core, not as an afterthought." },
  { title: "CONVERSION-FIRST", desc: "Every pixel is engineered to guide users to a profitable action." },
  { title: "BUILT TO SCALE", desc: "Enterprise-grade architecture that handles 10 or 10,000 daily users." },
  { title: "REAL-TIME", desc: "Instant data sync, web-sockets, and live dashboards for instant insights." },
  { title: "PERFORMANCE", desc: "Lightning-fast load times that dominate SEO and retain user attention." },
  { title: "BESPOKE", desc: "Custom-coded for your exact workflow. No generic templates." }
];

export default function DevoraAdvantage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-gray-400 mb-4">
            The Devora Advantage
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            Premium <span className="font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">Engineering.</span>
          </motion.h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
              <h3 className="text-xl font-bold tracking-widest text-white mb-4 group-hover:text-cyan-300 transition-colors">{adv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{adv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}