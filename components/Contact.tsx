"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useState } from "react";

const formStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", business: "", email: "", phone: "", details: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Initializing protocol...");

    try {
      // 🟢 FIXED: Switched to Formspree AJAX endpoint using your specific ID
      const response = await fetch("https://formspree.io/f/mgongbpj", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email, 
          phone: formData.phone,
          message: formData.details,
          subject: `New Priority Lead: ${formData.name} from ${formData.business || 'Unknown'}`
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Transmission successful. Mayank will review shortly.");
        setFormData({ name: "", business: "", email: "", phone: "", details: "" }); 
      } else {
        setStatus("error");
        setStatusMessage("Transmission failed. Please check your connection and try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
    
    // Clear the status message after 6 seconds
    setTimeout(() => { setStatus("idle"); }, 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 relative bg-transparent overflow-hidden font-sans perspective-[2000px]">
      
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-cyan-500/30 bg-[#0A0A10]/80 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_4px_24px_rgba(34,211,238,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Priority Channel
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter mb-4 leading-[1.05]"
          >
            Let's Build <br className="md:hidden" /><span className="font-playfair italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400 pr-2">The Future</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="w-full bg-[#0A0A10]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-[2.5rem] p-6 md:p-14 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            <AnimatePresence mode="wait">
                {status !== "idle" && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        className={`p-5 rounded-2xl flex items-center gap-4 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                            status === "sending" ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]" :
                            status === "success" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]" :
                            "bg-red-500/10 border border-red-500/30 text-red-300 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]"
                        }`}
                    >
                        {status === "sending" && <Loader2 className="animate-spin shrink-0" size={20}/>}
                        {status === "success" && <CheckCircle className="shrink-0" size={20}/>}
                        {status === "error" && <AlertTriangle className="shrink-0" size={20}/>}
                        <span>{statusMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div variants={formStagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { label: "Your Name", name: "name", placeholder: "Mayank Vispute", type: "text" },
                { label: "Business Name", name: "business", placeholder: "Devora Digital", type: "text" },
                { label: "Email Address", name: "email", placeholder: "visputemayank007@gmail.com", type: "email" },
                { label: "Phone Number", name: "phone", placeholder: "+91 95112 29694", type: "tel" }
              ].map((input, i) => (
                <motion.div variants={inputVariants} key={i} className="space-y-2.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">{input.label}</label>
                  <input 
                    name={input.name}
                    value={formData[input.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    type={input.type}
                    required={input.name !== "phone"}
                    placeholder={input.placeholder}
                    className="w-full bg-[#111118]/60 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-[#0A0A10] focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 font-light"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Project Details</label>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={5}
                required
                placeholder="Describe your current bottlenecks and what you want to build..." 
                className="w-full bg-[#111118]/60 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-[#0A0A10] focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 resize-none font-light leading-relaxed"
              ></textarea>
            </motion.div>

            <motion.div variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-4">
              <button 
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3 overflow-hidden shadow-[0_10px_40px_rgba(139,92,246,0.3)]"
              >
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-3">
                  {status === "sending" ? <>Initiating <Loader2 className="animate-spin" size={20}/></> : <>Submit Requirements <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </span>
              </button>
            </motion.div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}