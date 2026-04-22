import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import PremiumFeatures from "@/components/PremiumFeatures"; 
import InteractiveFeatures from "@/components/InteractiveFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import DigitalMenuPromo from "@/components/DigitalMenuPromo";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredDots from "@/components/StructuredDots"; 

export default function Home() {
  return (
    <main className="bg-[#05050A] min-h-screen selection:bg-purple-500/30 overflow-clip font-sans relative">
      
      {/* 🟢 THIS SITS IN THE BACKGROUND OF EVERY SINGLE SECTION */}
      <StructuredDots />

      {/* 🟢 Relative z-10 ensures your content stays on top of the 3D globe */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <PremiumFeatures /> 
        <InteractiveFeatures />
        <WhyChooseUs /> 
        <DigitalMenuPromo />
        <Process />
        <Pricing />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}