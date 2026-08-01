"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

export function GlobalContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if the user has already seen and closed the modal this session/ever
    const hasClosed = localStorage.getItem("forbtech_contact_closed");
    const hasSubmitted = localStorage.getItem("forbtech_contact_submitted");

    if (hasClosed || hasSubmitted) return;

    // Wait 20 seconds before popping up
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
    
    // Web3Forms configuration - Replace 'YOUR_ACCESS_KEY_HERE' with your actual key from web3forms.com
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
        
        // Auto close after 3 seconds
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-lg bg-background/90 backdrop-blur-2xl border border-primary/20 rounded-[2rem] shadow-[0_0_50px_rgba(var(--primary),0.15)] overflow-hidden flex flex-col"
          >
            {/* Ambient Glow inside modal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C6FF]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8 flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                    Let's Build <span className="text-primary">Something.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    You've been exploring our work. Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors shrink-0"
                >
                  <X className="w-4 h-4 text-foreground/70" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Received!</h4>
                  <p className="text-sm text-muted-foreground">Our team will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full bg-foreground/5 border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-foreground/10 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full bg-foreground/5 border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-foreground/10 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">What do you need?</label>
                    <select 
                      name="project_type" 
                      required
                      className="w-full bg-foreground/5 border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-foreground/10 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Web Application">Web Application</option>
                      <option value="Website Design">Website Design</option>
                      <option value="AI / Machine Learning">AI / Machine Learning</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Project Details</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={3}
                      className="w-full bg-foreground/5 border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-foreground/10 transition-colors resize-none"
                      placeholder="Tell us about your goals, timeline, or budget..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-bold text-sm rounded-xl px-4 py-4 mt-2 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
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
