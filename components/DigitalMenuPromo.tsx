"use client";
import { motion } from "framer-motion";
import { ExternalLink, QrCode } from "lucide-react";

export default function DigitalMenuPromo() {
  return (
    <section className="py-20 px-6 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // 🟢 FIXED: Lowered blur to 'md' so the dots stay crisp and keep their shape!
          className="relative rounded-[2.5rem] bg-white/[0.02] backdrop-blur-md border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.1)] group overflow-hidden"
        >
          {/* 🟢 FIXED: Lowered the opacity of the pink tint so it acts like clear glass */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 items-center relative z-10 p-8 md:p-16 gap-12">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/30 mb-8 shadow-inner">
                <QrCode className="text-pink-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                Want a Digital Menu for <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Your Restaurant?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We also provide fully integrated, QR-based digital menu systems for modern restaurants. No physical menus, no hassle. Just scan, view, and order.
              </p>
              
              <a 
                href="https://menud-platform.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white font-bold text-sm md:text-base transition-all hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                Check Our Menu Platform <ExternalLink size={18} />
              </a>
            </div>

            {/* Right side floating UI representation */}
            <div className="relative w-full h-[400px] hidden lg:flex items-center justify-center pointer-events-none">
              {/* 🟢 FIXED: The phone mockup is now highly transparent glass (bg-white/[0.02]) */}
              <div className="absolute w-72 h-[500px] bg-white/[0.02] backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl rotate-6 transform transition-transform group-hover:rotate-12 duration-700 flex flex-col overflow-hidden">
                <div className="h-48 relative overflow-hidden bg-white/5">
                    {/* 🟢 FIXED: Removed the heavy black gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                </div>
                <div className="p-6 flex-grow bg-transparent flex flex-col gap-4 mt-2">
                    <div className="w-3/4 h-6 bg-white/10 rounded"></div>
                    <div className="w-1/2 h-4 bg-white/5 rounded mb-4"></div>
                    <div className="flex justify-between items-center">
                        <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10"></div>
                        <div className="w-32 h-4 bg-white/10 rounded"></div>
                    </div>
                     <div className="flex justify-between items-center">
                        <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10"></div>
                        <div className="w-32 h-4 bg-white/10 rounded"></div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}