"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useState } from "react";

// 🟢 FIXED: Explicitly typed as Variants to satisfy TypeScript/Vercel build
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function Contact() {
  // Live Form State
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    details: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 🟢 ZERO-BACKEND WEB3FORMS SUBMISSION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending message to Mayank...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 👇 GET YOUR FREE KEY FROM WEB3FORMS.COM AND PASTE IT HERE 👇
          access_key: "YOUR_ACCESS_KEY_HERE", 
          subject: `New Lead from ${formData.name} (Devora Website)`,
          from_name: formData.name,
          email: formData.email, 
          message: `Phone: ${formData.phone}\n\nProject Details:\n${formData.details}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Success! Mayank will reply to your email soon.");
        setFormData({ name: "", business: "", email: "", phone: "", details: "" }); 
      } else {
        setStatus("error");
        setStatusMessage("Failed to send. Please email visputemayank007@gmail.com directly.");
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus("error");
      setStatusMessage("Failed to send. Please email visputemayank007@gmail.com directly.");
    }

    setTimeout(() => {
        if (status !== "idle") setStatus("idle");
    }, 6000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-8 relative bg-[#05050A] border-t border-white/5 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.1)]"
          >
            LIVE SUPPORT
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">The Future</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell me about your business. Mayank will reply directly to your inbox.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto w-full bg-[#0A0A10]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence>
                {status !== "idle" && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium overflow-hidden ${
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

            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-8">
              {[
                { label: "Your Name", name: "name", placeholder: "John Doe", type: "text", color: "focus:border-cyan-500/50 focus:bg-cyan-500/5" },
                { label: "Business Name", name: "business", placeholder: "Acme Corp", type: "text", color: "focus:border-cyan-500/50 focus:bg-cyan-500/5" },
                { label: "Email Address", name: "email", placeholder: "john@example.com", type: "email", color: "focus:border-purple-500/50 focus:bg-purple-500/5" },
                { label: "Phone Number", name: "phone", placeholder: "+91 98765 43210", type: "tel", color: "focus:border-purple-500/50 focus:bg-purple-500/5" }
              ].map((input, i) => (
                <div key={i} className="space-y-2.5">
                  <label className="text-sm font-bold text-gray-400 pl-1 uppercase tracking-widest">{input.label}</label>
                  <input 
                    name={input.name}
                    value={formData[input.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    type={input.type}
                    required={input.name !== "phone"}
                    placeholder={input.placeholder}
                    className={`w-full bg-[#05050A]/80 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-gray-600 focus:outline-none ${input.color} transition-all duration-300`}
                  />
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-2.5">
              <label className="text-sm font-bold text-gray-400 pl-1 uppercase tracking-widest">Project Details</label>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={6}
                required
                placeholder="Briefly describe what bottlenecks we are solving or what system we are building together." 
                className="w-full bg-[#05050A]/80 border border-white/10 rounded-xl px-5 py-4 text-white text-base placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300 resize-none font-light leading-relaxed"
              ></textarea>
            </motion.div>

            <motion.button 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] overflow-hidden flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              
              {status === "sending" ? (
                  <>Sending <Loader2 className="animate-spin" size={20}/></>
              ) : (
                  <>Send Message to Mayank <Send size={18} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}