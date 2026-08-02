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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-auto overflow-hidden">
          {/* Intense Dark Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Upgraded Animated Background Layer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            {/* Spinning massive gradient orb */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-primary/20 via-[#00C6FF]/10 to-purple-500/20 blur-[120px]" 
            />
            {/* High-tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>

          {/* Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-5xl bg-[#050505]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_80px_rgba(var(--primary),0.15)] flex flex-col md:flex-row overflow-hidden"
          >
            {/* Inner Glossy Highlight */}
            <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all hover:rotate-90 z-50 shadow-xl"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            {/* Left Side: Creative Copy */}
            <div className="w-full md:w-5/12 p-8 md:p-14 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 mt-8 md:mt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                  <Sparkles className="w-4 h-4" /> Start a Project
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-white">
                  Build the<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00C6FF]">Extraordinary.</span>
                </h2>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium">
                  Partner with elite engineers and designers to launch scalable, next-generation digital products. 
                </p>
              </div>

              <div className="relative z-10 mt-12 hidden md:block">
                <div className="flex -space-x-3">
                  {/* Fake avatars for trust */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-[#050505] flex items-center justify-center text-xs font-bold">AJ</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-900 border-2 border-[#050505] flex items-center justify-center text-xs font-bold">MK</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-900 border-2 border-[#050505] flex items-center justify-center text-xs font-bold">RS</div>
                </div>
                <p className="text-xs text-white/40 mt-3 font-medium">Join 50+ visionary founders.</p>
              </div>
            </div>

            {/* Right Side: Upgraded Boxed Form */}
            <div className="w-full md:w-7/12 p-8 md:p-14 relative z-10 flex flex-col justify-center">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-3xl font-black tracking-tighter mb-3 text-white">Transmission Sent.</h4>
                  <p className="text-white/60 text-base max-w-[280px]">Our lead architect has received your details and will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-primary transition-colors">Full Name</label>
                      <input 
                        type="text" name="name" required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all text-white font-medium placeholder:text-white/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="group">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-primary transition-colors">Email Address</label>
                      <input 
                        type="email" name="email" required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all text-white font-medium placeholder:text-white/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                      <input 
                        type="tel" name="phone" required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all text-white font-medium placeholder:text-white/20"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="group relative">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-primary transition-colors">Service Type</label>
                      <select 
                        name="project_type" required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all text-white appearance-none cursor-pointer font-medium"
                      >
                        <option value="" disabled selected hidden className="text-black">Select Service</option>
                        <option value="Web Application" className="text-black">Web Application</option>
                        <option value="Website Design" className="text-black">Website Design</option>
                        <option value="AI Solutions" className="text-black">AI Solutions</option>
                        <option value="Other" className="text-black">Other</option>
                      </select>
                      <div className="absolute right-5 top-[42px] pointer-events-none">
                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-primary transition-colors">Project Details</label>
                    <textarea 
                      name="message" required rows={3}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all text-white resize-none font-medium placeholder:text-white/20"
                      placeholder="Briefly describe your goals, budget, or timeline..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-primary to-[#00C6FF] rounded-2xl p-5 mt-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_0_30px_rgba(var(--primary),0.4)] overflow-hidden border border-white/20"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-3">
                      <span className="text-sm font-black uppercase tracking-widest text-white drop-shadow-md">
                        {isSubmitting ? "Deploying..." : "Submit Project"}
                      </span>
                      {!isSubmitting && (
                        <ArrowRight className="w-5 h-5 text-white drop-shadow-md group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      )}
                    </div>
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
