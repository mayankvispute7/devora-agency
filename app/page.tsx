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
import Meeting from "@/components/Meeting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // 🟢 IMPORT FOOTER

export default function Home() {
  return (
    <main className="bg-[#05050A] min-h-screen selection:bg-purple-500/30 overflow-clip font-sans">
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
      <Meeting />
      <Contact />
      <Footer /> {/* 🟢 ADD FOOTER HERE */}
    </main>
  );
}