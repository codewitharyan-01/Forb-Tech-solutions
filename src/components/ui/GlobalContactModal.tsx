"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

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
        }, 4000);
      } else {
        alert("Something went wrong. Please try emailing us directly.");
      }
    } catch (error) {
      alert("Network error. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 pointer-events-auto overflow-hidden">
          {/* Advanced Backdrop with Animated Grid & Orbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            onClick={handleClose}
          >
            {/* Perspective Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            
            {/* Massive Rotating Gradient Orbs */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-1/4 w-[60vw] h-[60vw] bg-[#00C6FF]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
            />
          </motion.div>

          {/* Floating Glass Card Wrapper for Gradient Border Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-5xl rounded-[2.5rem] p-[1px] bg-gradient-to-br from-primary/50 via-primary/5 to-transparent shadow-[0_0_80px_rgba(0,198,255,0.2)]"
          >
            {/* Actual Card Container */}
            <div className="relative w-full h-full bg-background/80 backdrop-blur-3xl rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden isolate">
              
              {/* Internal Subtle Noise/Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-foreground/5 hover:bg-foreground/10 border border-border/50 hover:border-primary/50 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary transition-all z-50 hover:rotate-90 hover:scale-110"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              {/* Left Side: Creative Copy & Quote */}
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-border/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Exclusive Access</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 drop-shadow-lg">
                    Build the<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00C6FF]">Impossible.</span>
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-10 font-medium max-w-[85%]">
                    Stop settling for templates. Partner with elite engineers to architect scalable, high-performance digital ecosystems.
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  </div>
                  <p className="text-sm italic text-foreground/80 font-medium leading-relaxed border-l-2 border-primary/50 pl-4">
                    "Innovation is the intersection of logic and art. Good engineering makes it work. Great design makes it matter."
                  </p>
                </div>
              </div>

              {/* Right Side: High-End Form */}
              <div className="w-full md:w-1/2 p-8 md:p-14 relative z-10 flex flex-col justify-center bg-background/50">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-3xl font-black tracking-tighter mb-4 text-foreground">Transmission Secured.</h4>
                    <p className="text-muted-foreground text-sm max-w-[280px]">Our architecture team is reviewing your project details. Stand by for contact.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
                    
                    <div className="relative group">
                      <input 
                        type="text" name="name" required
                        className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none peer"
                        placeholder="What is your name?"
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" name="email" required
                        className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none peer"
                        placeholder="Your email address?"
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative group">
                        <input 
                          type="tel" name="phone" required
                          className="w-full bg-transparent border-b border-border/50 py-3 text-base md:text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none peer"
                          placeholder="Phone No."
                        />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                      </div>
                      <div className="relative group">
                        <select 
                          name="project_type" required
                          className="w-full bg-transparent border-b border-border/50 py-3 text-base md:text-lg outline-none focus:border-primary transition-colors text-muted-foreground focus:text-foreground font-medium appearance-none cursor-pointer rounded-none peer"
                        >
                          <option value="" disabled selected hidden>Service Type</option>
                          <option value="Web Application" className="bg-background text-foreground">Web Application</option>
                          <option value="Website Design" className="bg-background text-foreground">Website Design</option>
                          <option value="AI Solutions" className="bg-background text-foreground">AI Solutions</option>
                          <option value="Other" className="bg-background text-foreground">Other</option>
                        </select>
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea 
                        name="message" required rows={2}
                        className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 resize-none rounded-none peer"
                        placeholder="Tell us your vision..."
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full bg-gradient-to-r from-primary to-[#00C6FF] text-background rounded-2xl p-6 mt-6 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_0_40px_rgba(var(--primary),0.3)]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="relative flex items-center justify-between z-10">
                        <span className="text-sm font-black uppercase tracking-widest">
                          {isSubmitting ? "Transmitting..." : "Initialize Project"}
                        </span>
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all" strokeWidth={2.5} />
                        )}
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
