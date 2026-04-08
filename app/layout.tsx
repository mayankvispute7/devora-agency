import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 🟢 BRAND UPDATED TO DEVORA
export const metadata: Metadata = {
  title: "Devora | Engineering The Future",
  description: "We build advanced digital systems, AI integrations, and premium web architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#05050A] text-white selection:bg-cyan-500/30 selection:text-white`}>
        
        {/* Cinematic Noise Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {children}
      </body>
    </html>
  );
}