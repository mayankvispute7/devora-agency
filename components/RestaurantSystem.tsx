"use client";
import { motion } from "framer-motion";
import { QrCode, ClipboardList, LineChart } from "lucide-react";

export default function RestaurantSystem() {
  return (
    <section className="py-32 px-6 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold uppercase tracking-widest">
              🔥 Flagship Product
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
              The Ultimate <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Restaurant System</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Upgrade your restaurant with SmartServe. Eliminate physical menus, streamline kitchen orders, and track your daily revenue from a beautiful admin dashboard.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <QrCode className="text-pink-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Instant QR Menu</h4>
                  <p className="text-sm text-gray-400">Customers scan to view beautiful digital menus on their phones.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <ClipboardList className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Live Table Ordering</h4>
                  <p className="text-sm text-gray-400">Orders go straight from the customer's phone to your kitchen screen.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <LineChart className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Analytics Dashboard</h4>
                  <p className="text-sm text-gray-400">Track best-sellers, daily revenue, and staff performance in real-time.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Video Container using your exact video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[2.5rem] blur opacity-30 animate-pulse"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A10] shadow-2xl">
              {/* Fake Mac Header */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* 🟢 Using your exact restaurant video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full aspect-[4/3] object-cover"
              >
                <source src="/assets/videos/restaurant-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}