"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Zap } from "lucide-react";

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-auto">
          {/* Intense Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
          >
            {/* Animated Background Orbs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#00C6FF]/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" 
            />
          </motion.div>

          {/* Ultra-Premium Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="relative w-full max-w-lg bg-foreground/[0.03] backdrop-blur-3xl border border-primary/30 rounded-[2rem] shadow-[0_0_60px_rgba(var(--primary),0.2)] overflow-hidden flex flex-col"
          >
            {/* Glossy Top Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative z-10 p-6 md:p-10 flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[#00C6FF] p-[1px] shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                    <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary fill-primary/20" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-foreground leading-none">Initiate Project</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] mt-1">ForbTech Engineering</p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-transparent hover:border-border/50 flex items-center justify-center transition-all hover:rotate-90 shrink-0"
                >
                  <X className="w-5 h-5 text-foreground/70" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary rounded-full blur-[20px] opacity-40 animate-pulse" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[#00C6FF] flex items-center justify-center shadow-xl">
                      <CheckCircle2 className="w-10 h-10 text-background" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-black mb-2 tracking-tight text-foreground">Transmission Sent</h4>
                  <p className="text-sm text-muted-foreground max-w-[250px]">Our engineers are reviewing your request. We'll connect shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                  
                  {/* Floating Label Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input 
                        type="text" name="name" required id="name_field"
                        className="peer w-full bg-foreground/[0.02] border-b-2 border-border/50 px-2 py-4 text-sm md:text-base outline-none focus:border-primary transition-colors text-foreground font-medium placeholder-transparent"
                        placeholder="Name"
                      />
                      <label htmlFor="name_field" className="absolute left-2 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary font-bold uppercase tracking-widest cursor-text">
                        Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" name="email" required id="email_field"
                        className="peer w-full bg-foreground/[0.02] border-b-2 border-border/50 px-2 py-4 text-sm md:text-base outline-none focus:border-primary transition-colors text-foreground font-medium placeholder-transparent"
                        placeholder="Email"
                      />
                      <label htmlFor="email_field" className="absolute left-2 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary font-bold uppercase tracking-widest cursor-text">
                        Email
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="relative group">
                      <input 
                        type="tel" name="phone" required id="phone_field"
                        className="peer w-full bg-foreground/[0.02] border-b-2 border-border/50 px-2 py-4 text-sm md:text-base outline-none focus:border-primary transition-colors text-foreground font-medium placeholder-transparent"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone_field" className="absolute left-2 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary font-bold uppercase tracking-widest cursor-text">
                        Phone
                      </label>
                    </div>

                    <div className="relative group">
                      <select 
                        name="project_type" required id="type_field"
                        className="peer w-full bg-foreground/[0.02] border-b-2 border-border/50 px-2 py-4 text-sm md:text-base outline-none focus:border-primary transition-colors text-foreground font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled selected hidden>Service Type</option>
                        <option value="Web Application" className="bg-background">Web Application</option>
                        <option value="Website Design" className="bg-background">Website Design</option>
                        <option value="AI / Machine Learning" className="bg-background">AI / Machine Learning</option>
                        <option value="E-Commerce" className="bg-background">E-Commerce</option>
                        <option value="Mobile App" className="bg-background">Mobile App</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative group mt-2">
                    <textarea 
                      name="message" required id="msg_field" rows={3}
                      className="peer w-full bg-foreground/[0.02] border-b-2 border-border/50 px-2 py-4 text-sm md:text-base outline-none focus:border-primary transition-colors text-foreground font-medium placeholder-transparent resize-none"
                      placeholder="Project Details"
                    />
                    <label htmlFor="msg_field" className="absolute left-2 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary font-bold uppercase tracking-widest cursor-text">
                      Project Details
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-primary to-[#00C6FF] text-background font-black text-sm uppercase tracking-[0.2em] rounded-2xl px-6 py-5 mt-4 overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-md">
                      {isSubmitting ? "Deploying..." : "Launch Request"}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
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
