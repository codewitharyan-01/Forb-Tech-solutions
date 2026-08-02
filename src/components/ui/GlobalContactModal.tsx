"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Floating Glass Card with Continuous Levitation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" } // The continuous floating effect
            }}
            className="relative w-full max-w-5xl bg-background/60 backdrop-blur-2xl border border-primary/20 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,198,255,0.15)] flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 bg-foreground/5 hover:bg-foreground/10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary transition-colors z-50"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Left Side: Creative Copy & Quote */}
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-border/30 bg-gradient-to-br from-primary/5 to-transparent">
              {/* Internal Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1] mb-6">
                  Let's invent<br/>the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00C6FF] italic">future.</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10 font-medium">
                  We don't just write code. We engineer scalable digital ecosystems that accelerate your business and dominate your market.
                </p>
              </div>

              <div className="relative z-10 border-l-2 border-primary/50 pl-6 py-2">
                <p className="text-xs md:text-sm italic text-foreground/80 font-medium leading-relaxed">
                  "Innovation is the intersection of logic and art. Good engineering makes it work. Great design makes it matter."
                </p>
              </div>
            </div>

            {/* Right Side: Ultra Minimal Form */}
            <div className="w-full md:w-1/2 p-8 md:p-14 relative z-10 flex flex-col justify-center bg-background/40">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <h4 className="text-3xl font-black tracking-tighter mb-4 text-primary">Signal Received.</h4>
                  <p className="text-muted-foreground text-sm max-w-[250px]">Our engineering architects will review your project and reach out shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="relative">
                    <input 
                      type="text" name="name" required
                      className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/40 rounded-none"
                      placeholder="What is your name?"
                    />
                  </div>

                  <div className="relative">
                    <input 
                      type="email" name="email" required
                      className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/40 rounded-none"
                      placeholder="Your email address?"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="tel" name="phone" required
                        className="w-full bg-transparent border-b border-border/50 py-3 text-base md:text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/40 rounded-none"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="relative">
                      <select 
                        name="project_type" required
                        className="w-full bg-transparent border-b border-border/50 py-3 text-base md:text-lg outline-none focus:border-primary transition-colors text-muted-foreground focus:text-foreground font-medium appearance-none cursor-pointer rounded-none"
                      >
                        <option value="" disabled selected hidden>Service Type</option>
                        <option value="Web Application" className="bg-background text-foreground">Web Application</option>
                        <option value="Website Design" className="bg-background text-foreground">Website Design</option>
                        <option value="AI Solutions" className="bg-background text-foreground">AI Solutions</option>
                        <option value="Other" className="bg-background text-foreground">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea 
                      name="message" required rows={2}
                      className="w-full bg-transparent border-b border-border/50 py-3 text-lg outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/40 resize-none rounded-none"
                      placeholder="Tell us your vision..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-between border border-border/50 bg-foreground/5 rounded-2xl p-6 mt-4 hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50"
                  >
                    <span className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      {isSubmitting ? "Sending..." : "Submit Proposal"}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight className="w-5 h-5 text-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" strokeWidth={2} />
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
