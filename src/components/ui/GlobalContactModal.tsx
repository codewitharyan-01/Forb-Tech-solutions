"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Terminal, Cpu, Zap, Activity } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function GlobalContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasClosed = localStorage.getItem("forbtech_contact_closed");
    const hasSubmitted = localStorage.getItem("forbtech_contact_submitted");

    if (hasClosed || hasSubmitted) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("forbtech_contact_closed", "true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0c894215-2a87-4b5f-ac92-962b88e0b35c");
    formData.append("subject", "New Project Lead from ForbTech Website!");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        localStorage.setItem("forbtech_contact_submitted", "true");
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        alert("System error. Please try emailing us directly.");
      }
    } catch (error) {
      alert("Network failure. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-auto overflow-hidden">
          {/* Cybernetic Grid Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[2px]"
            />
          </motion.div>

          <TiltCard className="w-full max-w-4xl z-10 perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full bg-[#050505]/90 backdrop-blur-3xl border border-primary/30 rounded-3xl shadow-[0_0_50px_rgba(0,198,255,0.15)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Animated HUD Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />

              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-background hover:scale-110 transition-all z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Advanced UI Panel */}
              <div className="w-full md:w-5/12 p-8 md:p-10 flex flex-col relative border-b md:border-b-0 md:border-r border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/20 rounded-lg animate-pulse">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">System Uplink Ready</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-foreground leading-[1.1]">
                  Initialize<br/>Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00C6FF]">Vision.</span>
                </h2>
                
                <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-8">
                  &gt; Upload your project parameters.<br/>
                  &gt; Our engineering core will process the data.<br/>
                  &gt; Connection established within 24 standard hours.
                </p>

                <div className="mt-auto p-4 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  <p className="text-xs italic text-primary/80 font-medium">
                    "Digital transformation isn't a feature. It is the absolute foundation of modern dominance."
                  </p>
                </div>
              </div>

              {/* Right Side: The HUD Form */}
              <div className="w-full md:w-7/12 p-8 md:p-10 relative">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                      <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-black tracking-widest uppercase text-foreground mb-2">Data Transmitted</h4>
                    <p className="text-xs font-mono text-primary">Connection logged. Awaiting engineering response.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                          <Terminal className="w-3 h-3" /> Client_Name
                        </label>
                        <input 
                          type="text" name="name" required
                          className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-3 text-sm text-primary outline-none focus:border-primary focus:bg-primary/10 transition-all font-mono placeholder:text-primary/30"
                          placeholder="Enter identifier..."
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                          <Terminal className="w-3 h-3" /> Comm_Channel
                        </label>
                        <input 
                          type="email" name="email" required
                          className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-3 text-sm text-primary outline-none focus:border-primary focus:bg-primary/10 transition-all font-mono placeholder:text-primary/30"
                          placeholder="Enter email..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                          <Terminal className="w-3 h-3" /> Direct_Line
                        </label>
                        <input 
                          type="tel" name="phone" required
                          className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-3 text-sm text-primary outline-none focus:border-primary focus:bg-primary/10 transition-all font-mono placeholder:text-primary/30"
                          placeholder="Enter phone..."
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                          <Cpu className="w-3 h-3" /> Module_Type
                        </label>
                        <select 
                          name="project_type" required
                          className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-3 text-sm text-primary outline-none focus:border-primary focus:bg-primary/10 transition-all font-mono appearance-none cursor-pointer"
                        >
                          <option value="" disabled selected hidden>Select Module</option>
                          <option value="Web Application" className="bg-black text-primary">Web Application</option>
                          <option value="Website Design" className="bg-black text-primary">Website Design</option>
                          <option value="AI Solutions" className="bg-black text-primary">AI Solutions</option>
                          <option value="Other" className="bg-black text-primary">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 flex items-center gap-2">
                        <Terminal className="w-3 h-3" /> Project_Parameters
                      </label>
                      <textarea 
                        name="message" required rows={3}
                        className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-3 text-sm text-primary outline-none focus:border-primary focus:bg-primary/10 transition-all font-mono resize-none placeholder:text-primary/30"
                        placeholder="Define objectives and specifications..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full bg-primary/10 border border-primary hover:bg-primary text-primary hover:text-background font-mono font-bold text-xs uppercase tracking-[0.3em] rounded-lg px-6 py-4 mt-4 transition-all overflow-hidden flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                      <span className="relative z-10">{isSubmitting ? "Executing..." : "Execute Program"}</span>
                      {!isSubmitting && <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </TiltCard>
        </div>
      )}
    </AnimatePresence>
  );
}
