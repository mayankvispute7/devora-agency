"use client";
import { motion } from "framer-motion";
import { ExternalLink, QrCode } from "lucide-react";

export default function DigitalMenuPromo() {
  return (
    <section className="py-20 px-6 relative z-10 bg-[#05050A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0A10] border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.1)] group"
        >
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="grid lg:grid-cols-2 items-center relative z-10 p-8 md:p-16 gap-12">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/30 mb-8">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm md:text-base transition-all hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                Check Our Menu Platform <ExternalLink size={18} />
              </a>
            </div>

            {/* Right side floating UI representation */}
            <div className="relative w-full h-[400px] hidden lg:flex items-center justify-center">
              <div className="absolute w-72 h-[500px] bg-[#05050A] border border-white/10 rounded-[2rem] shadow-2xl rotate-6 transform transition-transform group-hover:rotate-12 duration-700 flex flex-col overflow-hidden">
                <div className="h-48 bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] to-transparent z-10"></div>
                </div>
                <div className="p-6 flex-grow bg-[#05050A]">
                    <div className="w-3/4 h-6 bg-white/10 rounded mb-4"></div>
                    <div className="w-1/2 h-4 bg-white/5 rounded mb-8"></div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-12 h-12 bg-white/5 rounded-lg"></div>
                        <div className="w-32 h-4 bg-white/10 rounded"></div>
                    </div>
                     <div className="flex justify-between items-center">
                        <div className="w-12 h-12 bg-white/5 rounded-lg"></div>
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