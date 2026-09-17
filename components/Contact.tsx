"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, ChevronDown, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

const PROJECT_OPTIONS = [
  "AI & Autonomous Systems",
  "Full-Stack Web Platform",
  "UI/UX Architecture",
  "Other / Consultation"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [projectType, setProjectType] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!projectType) {
      setStatus("error");
      setStatusMessage("Please select a Project Type.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("sending");
    setStatusMessage("Initializing protocol...");

    // Format the project type for the email
    const finalProjectType = projectType === "Other / Consultation" 
      ? `Other: ${otherDetails}` 
      : projectType;

    try {
      // Your Formspree Endpoint
      const response = await fetch("https://formspree.io/f/mgongbpj", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: finalProjectType,
          message: formData.details,
          subject: `New Lead: ${formData.name} - ${projectType}`
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Transmission successful. We will contact you shortly.");
        // Reset form
        setFormData({ name: "", email: "", details: "" }); 
        setProjectType("");
        setOtherDetails("");
      } else {
        setStatus("error");
        setStatusMessage("Transmission failed. Please check your connection.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
    
    setTimeout(() => { setStatus("idle"); }, 6000);
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Typography & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest w-fit mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Initiate Protocol
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 text-white">
            LET'S <br />
            <span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pr-4">
              BUILD.
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-12 max-w-md">
            Ready to upgrade your digital architecture? Drop us a transmission below, and our engineering team will get back to you within 24 hours to schedule a discovery audit.
          </p>

          <div className="flex flex-col gap-6">
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0E] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-white font-mono text-sm group-hover:text-cyan-400 transition-colors">visputemayank007@gmail.com</p>
              </div>
            </div>
            
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0E] border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-white font-mono text-sm group-hover:text-purple-400 transition-colors">+91 95112 29694</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-[#0A0A0E] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-visible group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            
            {/* Status Notifications */}
            <AnimatePresence mode="wait">
                {status !== "idle" && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        className={`p-4 rounded-xl flex items-center gap-3 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                            status === "sending" ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-300" :
                            status === "success" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300" :
                            "bg-red-500/10 border border-red-500/30 text-red-300"
                        }`}
                    >
                        {status === "sending" && <Loader2 className="animate-spin shrink-0" size={18}/>}
                        {status === "success" && <CheckCircle className="shrink-0" size={18}/>}
                        {status === "error" && <AlertTriangle className="shrink-0" size={18}/>}
                        <span>{statusMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name" 
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com" 
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/50 transition-all"
                />
              </div>
            </div>

            {/* CUSTOM DROPDOWN */}
            <div className="flex flex-col gap-2 relative z-50">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Type</label>
              <div 
                className={`w-full bg-[#050508] border ${isDropdownOpen ? 'border-cyan-400/50 ring-1 ring-cyan-400/50' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm flex justify-between items-center cursor-pointer transition-all`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={projectType ? "text-white" : "text-gray-600"}>
                  {projectType || "Select an option..."}
                </span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-[72px] left-0 w-full bg-[#0A0A0E] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {PROJECT_OPTIONS.map((option) => (
                      <div 
                        key={option}
                        className="px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors border-b border-white/5 last:border-none"
                        onClick={() => {
                          setProjectType(option);
                          setIsDropdownOpen(false);
                          if (option !== "Other / Consultation") setOtherDetails("");
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONDITIONAL 'OTHER' INPUT */}
            <AnimatePresence>
              {projectType === "Other / Consultation" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col gap-2 overflow-hidden"
                >
                  <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mt-2">Specify Requirements</label>
                  <input 
                    type="text" 
                    value={otherDetails}
                    onChange={(e) => setOtherDetails(e.target.value)}
                    required
                    placeholder="Briefly describe what you need..." 
                    className="w-full bg-[#050508] border border-cyan-400/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Details</label>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us about what you want to build..." 
                className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/50 transition-all resize-none relative z-10"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className="group/btn mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/20 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] overflow-hidden relative z-10 disabled:opacity-70 disabled:pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
              <span className="relative z-10">{status === "sending" ? "Transmitting..." : "Send Transmission"}</span>
              {status !== "sending" && <Send size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}