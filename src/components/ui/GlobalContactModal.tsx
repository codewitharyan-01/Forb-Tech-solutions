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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-auto">
          {/* Intense Dark Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          />

          {/* Minimalist Floating Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative w-full max-w-5xl bg-transparent flex flex-col md:flex-row"
          >
            {/* Close Button (Top Right Absolute) */}
            <button 
              onClick={handleClose}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-50"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>

            {/* Left Side: Creative Copy & Quote */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between relative">
              <div className="absolute top-12 left-12 w-32 h-32 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
                  Let's invent<br/>the <span className="text-primary italic">future.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-sm leading-relaxed mb-12 font-medium">
                  We don't just write code. We engineer scalable digital ecosystems that accelerate your business and dominate your market.
                </p>
              </div>

              <div className="relative z-10 border-l-2 border-primary/50 pl-6 py-2 mt-auto">
                <p className="text-sm md:text-base italic text-foreground/80 font-medium">
                  "Innovation is the intersection of logic and art. Good engineering makes it work. Great design makes it matter."
                </p>
              </div>
            </div>

            {/* Right Side: Ultra Minimal Form */}
            <div className="w-full md:w-1/2 p-6 md:p-12 relative z-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <h4 className="text-4xl font-black tracking-tighter mb-4">Signal Received.</h4>
                  <p className="text-muted-foreground text-lg">Our engineering architects will reach out shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full justify-center">
                  
                  {/* Name */}
                  <div className="relative">
                    <input 
                      type="text" name="name" required
                      className="w-full bg-transparent border-b border-border/50 py-4 text-xl md:text-2xl outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none"
                      placeholder="What is your name?"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email" name="email" required
                      className="w-full bg-transparent border-b border-border/50 py-4 text-xl md:text-2xl outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none"
                      placeholder="Your email address?"
                    />
                  </div>

                  {/* Phone & Service Type (Side by side on minimal UI) */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="tel" name="phone" required
                        className="w-full bg-transparent border-b border-border/50 py-4 text-lg md:text-xl outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 rounded-none"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="relative">
                      <select 
                        name="project_type" required
                        className="w-full bg-transparent border-b border-border/50 py-4 text-lg md:text-xl outline-none focus:border-primary transition-colors text-muted-foreground focus:text-foreground font-medium appearance-none cursor-pointer rounded-none"
                      >
                        <option value="" disabled selected hidden>Service Required</option>
                        <option value="Web Application" className="bg-background text-foreground">Web Application</option>
                        <option value="Website Design" className="bg-background text-foreground">Website Design</option>
                        <option value="AI Solutions" className="bg-background text-foreground">AI Solutions</option>
                        <option value="Other" className="bg-background text-foreground">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea 
                      name="message" required rows={2}
                      className="w-full bg-transparent border-b border-border/50 py-4 text-xl md:text-2xl outline-none focus:border-primary transition-colors text-foreground font-medium placeholder:text-muted-foreground/30 resize-none rounded-none"
                      placeholder="Tell us your vision..."
                    />
                  </div>

                  {/* Minimalist Brutalist Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-between border-b-2 border-foreground py-6 mt-4 hover:border-primary transition-colors disabled:opacity-50"
                  >
                    <span className="text-2xl font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight className="w-8 h-8 text-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" strokeWidth={1.5} />
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
