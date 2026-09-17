"use client";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareQuote } from "lucide-react";

const REVIEWS = [
  {
    name: "Alex Mercer",
    role: "Founder, TechNova",
    initials: "AM",
    content: "Devora engineered a complete digital ecosystem. Our lead qualification is now fully automated via AI, saving us 40 hours a week.",
    color: "from-cyan-400 to-blue-500",
    tilt: -2,
    yOffset: 0
  },
  {
    name: "Sarah Jenkins",
    role: "Director, Apex Estate",
    initials: "SJ",
    content: "The UI/UX design is unmatched. They took our clunky legacy database and turned it into a lightning-fast, sleek platform.",
    color: "from-purple-400 to-pink-500",
    tilt: 2,
    yOffset: 40 // Pushes this card down to create a scattered look
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Elevate Fit",
    initials: "MT",
    content: "The custom booking system and member dashboard they built completely transformed our retention rates.",
    color: "from-emerald-400 to-teal-500",
    tilt: -1,
    yOffset: -20 // Pulls this card up
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 relative z-10 font-sans border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Social Proof
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter"
          >
            CLIENT <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TRANSMISSIONS.</span>
          </motion.h2>
        </div>

        {/* SCATTERED FLOATING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-12">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: review.yOffset }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              // Floating animation + permanent slight tilt
              animate={{ y: [review.yOffset, review.yOffset - 10, review.yOffset] }}
              style={{ rotate: review.tilt }}
              className="group relative bg-[#0A0A0E] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors duration-500 flex flex-col shadow-2xl h-fit"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white bg-gradient-to-br ${review.color} shadow-lg`}>
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">{review.name}</h3>
                    <p className={`text-[9px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${review.color}`}>
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono uppercase tracking-widest text-gray-400">
                  <CheckCircle2 size={10} className="text-emerald-400" /> Verified
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10 font-light">
                "{review.content}"
              </p>

              <MessageSquareQuote size={80} className="absolute bottom-2 right-2 text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none -rotate-12" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}