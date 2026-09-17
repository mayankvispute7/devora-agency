"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#03010A] min-h-screen text-white font-sans antialiased overflow-x-hidden relative flex flex-col">
      
      {/* 🟢 Gemini Deep Blue Background (No Dots) */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundColor: '#03010A',
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 35, 75, 0.6) 0%, rgba(3, 1, 10, 1) 70%)`
      }} />

      {/* Navbar Locked to Top */}
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>

      {/* --- 1. HERO SECTION (Dead Center, No Overlap) --- */}
      {/* min-h-screen + pt-24 forces the flex centering to happen BELOW the navbar */}
      <section className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-24 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            The Agency
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]">
            WE DON'T JUST <br className="hidden md:block" />
            WRITE CODE. <br />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              WE ENGINEER ADVANTAGES.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* --- 2. ABOUT DEVORA (The Devora Protocol - Appears on Scroll) --- */}
      <section className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-400/50"></span> The Devora Protocol
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light mb-8">
              Devora is an elite digital engineering studio built on a single premise: <strong className="text-white font-medium">businesses are drowning in manual bottlenecks and outdated software.</strong>
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              We developed this agency to bridge the gap between enterprise-level technology and ambitious businesses. We solve the problem of scaling by engineering <span className="text-white hover:text-cyan-400 transition-colors cursor-default font-medium">autonomous AI systems</span>, high-performance web platforms, and immersive <span className="text-white hover:text-purple-400 transition-colors font-medium italic font-playfair cursor-default">Cyber-Noir</span> digital experiences that command absolute attention in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-[#0A0A0E] border border-white/5">
              <h3 className="font-bold mb-3 text-cyan-400 text-lg">01. The Problem</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Companies lose thousands of hours to repetitive tasks, clunky legacy databases, and unoptimized digital storefronts.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-[#0A0A0E] border border-white/5">
              <h3 className="font-bold mb-3 text-purple-400 text-lg">02. The Solution</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We replace manual labor with AI workflows and rebuild digital infrastructure to be lightning-fast and globally scalable.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-[#0A0A0E] border border-white/5 sm:col-span-2">
              <h3 className="font-bold mb-3 text-pink-400 text-lg">03. The Aesthetic Edge</h3>
              <p className="text-gray-500 text-sm leading-relaxed">A premium digital presence is the ultimate form of leverage. We don't just make systems work; we make them look dangerous, sleek, and undeniable.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- 3. ABOUT ME: MAYANK VISPUTE --- */}
      <section className="relative z-10 py-32 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            Founder & Chief Architect
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Hey, I'm <br />
            <span className="font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pr-2">
              Mayank Vispute.
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-6">
            As a <strong className="text-white font-medium">Computer Engineering student, AI Engineer, and UI/UX Designer</strong>, my entire approach is driven by a genuine obsession with cutting-edge technology and high-end design. 
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-12">
            I built Devora because I wanted to create a space where engineering meets art. Whether it's training autonomous data pipelines or designing cinematic web interfaces, my goal is to build intelligent systems that give your business an absolute, unfair advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <div className="bg-[#0A0A0E] border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-cyan-400/50 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-400">📞</div>
              <div className="text-left">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Direct Line</p>
                <p className="text-sm text-white font-mono mt-0.5">+91 9511229694</p>
              </div>
            </div>
            <div className="bg-[#0A0A0E] border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-purple-400/50 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400">✉️</div>
              <div className="text-left">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <p className="text-sm text-white font-mono mt-0.5">visputemayank007@gmail.com</p>
              </div>
            </div>
          </div>
          
        </motion.div>
      </section>

    </main>
  );
}