import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures"; 
import ImpactShowcase from "@/components/ImpactShowcase"; 
import IndustryExplorer from "@/components/IndustryExplorer"; 
import Process from "@/components/Process"; 
import Pricing from "@/components/Pricing"; 
//import Testimonials from "@/components/Testimonials"; 
import Contact from "@/components/Contact"; 
import StructuredDots from "@/components/StructuredDots"; 

export default function Home() {
  return (
    <main className="bg-[#03010A] min-h-screen text-white font-sans antialiased overflow-x-clip relative">
      
      {/* 1. Base Layer: The Structured Dots */}
      <div className="fixed inset-0 z-0">
        <StructuredDots />
      </div>

      {/* 2. 🟢 The Gemini Blue Glow (Layered ON TOP of dots, fading to transparent) */}
      <div className="fixed inset-0 pointer-events-none z-[1]" style={{
        background: `radial-gradient(circle at 50% 50%, rgba(20, 35, 75, 0.7) 0%, transparent 70%)`
      }} />
      
      {/* 3. Navbar locked to the top */}
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>
      
      {/* 4. Page Content (Sits above the background and glow) */}
      <div className="relative z-10">
        <Hero />
        <ImpactShowcase />
        <CoreFeatures />
        <IndustryExplorer />
        <Process /> 
        <Pricing />
        
        <Contact />
      </div>
      
    </main>
  );
}