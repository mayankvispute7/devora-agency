import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05050A] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* 🟢 BRAND UPDATED TO DEVORA */}
          <div className="lg:col-span-2 text-left">
            <div className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Devora.
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Engineering high-performance digital assets, AI integrations, and bespoke software architectures for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#features" className="hover:text-cyan-400 transition-colors">Capabilities</Link></li>
              <li><Link href="#process" className="hover:text-purple-400 transition-colors">The Process</Link></li>
              <li><Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing & Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                  Twitter / X <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium tracking-wide">
          <p>© {currentYear} Mayank Vispute. Project Architecture by Devora.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}