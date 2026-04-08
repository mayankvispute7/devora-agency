"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const cases = [
  { business: "Restaurants & Cafes", solution: "Smart QR Menu, Table Ordering, Kitchen Dashboard." },
  { business: "Grocery & Retail", solution: "Online Ordering App, Inventory Sync, Local Delivery Platform." },
  { business: "Salons & Clinics", solution: "Automated Booking Website, Calendar Sync, Staff Management." },
  { business: "Startups & Tech", solution: "Custom SaaS Platforms, AI Chatbots, Full-Stack Development." }
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-sm relative overflow-hidden">
        
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              You Have A Business.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">We Build The System.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don't just build websites; we engineer complete digital workflows tailored to your exact industry needs.
            </p>
            <button className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
              Discuss Your Idea
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {cases.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{item.business}</h4>
                  <p className="text-gray-400 text-sm">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}