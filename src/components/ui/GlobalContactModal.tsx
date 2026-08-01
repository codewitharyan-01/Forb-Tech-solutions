"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Phone, Mail, User, Briefcase, MessageSquare } from "lucide-react";

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
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          {/* Backdrop with strong blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Premium Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 40, scale: 0.95, rotateX: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative w-full max-w-4xl bg-background/60 backdrop-blur-3xl border border-primary/20 rounded-[2.5rem] shadow-[0_0_80px_rgba(var(--primary),0.2)] overflow-hidden flex flex-col md:flex-row perspective-1000"
          >
            {/* Left Side: Branding & Pitch */}
            <div className="relative w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-primary/10 to-transparent border-b md:border-b-0 md:border-r border-primary/10 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00C6FF]/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </motion.div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
                  Accelerate<br/>Your <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00C6FF]">Growth.</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed mb-8">
                  Partner with an elite engineering team to build scalable, secure, and beautiful digital products. Tell us what you need.
                </p>
              </div>

              <div className="relative z-10 hidden md:block">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 opacity-70">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest">Custom Quotes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="relative w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all hover:rotate-90 shrink-0 z-20"
              >
                <X className="w-5 h-5 text-foreground/70" />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(var(--primary),0.4)]">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-3xl font-black mb-3 tracking-tight">Request Received</h4>
                  <p className="text-base text-muted-foreground max-w-sm">Our engineering team will review your details and contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                        <User className="w-4 h-4" />
                      </div>
                      <input 
                        type="text" name="name" required placeholder="Your Name"
                        className="w-full bg-foreground/5 border border-border/50 rounded-2xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all placeholder:text-muted-foreground/50 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input 
                        type="email" name="email" required placeholder="Email Address"
                        className="w-full bg-foreground/5 border border-border/50 rounded-2xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all placeholder:text-muted-foreground/50 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input 
                        type="tel" name="phone" required placeholder="Phone Number"
                        className="w-full bg-foreground/5 border border-border/50 rounded-2xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all placeholder:text-muted-foreground/50 font-medium"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <select 
                        name="project_type" required
                        className="w-full bg-foreground/5 border border-border/50 rounded-2xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all appearance-none cursor-pointer font-medium text-foreground"
                      >
                        <option value="" disabled selected hidden>Select Service</option>
                        <option value="Web Application" className="bg-background">Web Application</option>
                        <option value="Website Design" className="bg-background">Website Design</option>
                        <option value="AI / Machine Learning" className="bg-background">AI / Machine Learning</option>
                        <option value="E-Commerce" className="bg-background">E-Commerce</option>
                        <option value="Mobile App" className="bg-background">Mobile App</option>
                        <option value="Other" className="bg-background">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group mt-2">
                    <div className="absolute top-4 left-4 flex items-start pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea 
                      name="message" required rows={4} placeholder="Tell us about your goals, timeline, or budget..."
                      className="w-full bg-foreground/5 border border-border/50 rounded-2xl pl-11 pr-4 py-4 text-sm outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all resize-none placeholder:text-muted-foreground/50 font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full bg-foreground text-background font-black text-sm uppercase tracking-widest rounded-2xl px-6 py-4 mt-2 overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#00C6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? "Initiating Uplink..." : "Send Request"}
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
