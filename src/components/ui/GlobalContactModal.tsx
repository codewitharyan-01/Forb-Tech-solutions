"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

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
          {/* Solid Dark Overlay (No Blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70"
          />

          {/* Solid Matte iOS Modal Sheet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-xl bg-[#1C1C1E] border border-[#2C2C2E] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-8 md:p-10 flex flex-col relative z-10">
              
              {/* iOS Close Button (top right) */}
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 bg-[#2C2C2E] hover:bg-[#3A3A3C] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#007AFF] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#007AFF]/20">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight mb-2 text-white">Message Sent</h4>
                  <p className="text-[#8E8E93] text-sm max-w-[250px] font-medium">Thank you for reaching out. Our team will review your project and get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  {/* Apple-style Centered Copy */}
                  <div className="text-center mb-8 px-4 mt-2">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
                      Start a Project
                    </h2>
                    <p className="text-sm text-[#8E8E93] leading-relaxed font-medium">
                      We'd love to help bring your ideas to life. Share a few details below, and let's build something beautiful together.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    {/* Solid iOS Dark Mode inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="text" name="name" required
                          className="w-full bg-[#2C2C2E] focus:bg-[#3A3A3C] border-none rounded-[14px] px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#007AFF]/80 transition-all text-white placeholder:text-[#8E8E93] font-medium"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" name="email" required
                          className="w-full bg-[#2C2C2E] focus:bg-[#3A3A3C] border-none rounded-[14px] px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#007AFF]/80 transition-all text-white placeholder:text-[#8E8E93] font-medium"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="tel" name="phone" required
                          className="w-full bg-[#2C2C2E] focus:bg-[#3A3A3C] border-none rounded-[14px] px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#007AFF]/80 transition-all text-white placeholder:text-[#8E8E93] font-medium"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="relative">
                        <select 
                          name="project_type" required
                          className="w-full bg-[#2C2C2E] focus:bg-[#3A3A3C] border-none rounded-[14px] px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#007AFF]/80 transition-all text-white appearance-none cursor-pointer font-medium"
                        >
                          <option value="" disabled selected hidden className="text-[#8E8E93]">What do you need?</option>
                          <option value="Web Application">Web Application</option>
                          <option value="Website Design">Website Design</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-[14px] pointer-events-none">
                          <svg className="w-4 h-4 text-[#8E8E93]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <textarea 
                        name="message" required rows={3}
                        className="w-full bg-[#2C2C2E] focus:bg-[#3A3A3C] border-none rounded-[14px] px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#007AFF]/80 transition-all text-white resize-none placeholder:text-[#8E8E93] font-medium"
                        placeholder="Tell us a little bit about your vision..."
                      />
                    </div>

                    {/* iOS Primary Action Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#007AFF] hover:bg-[#005ecb] active:scale-[0.98] rounded-[14px] py-4 mt-2 transition-all disabled:opacity-50 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </button>
                  </form>
                  
                  <p className="text-center text-[11px] text-[#8E8E93] mt-5 font-medium">
                    Your information is secure and will never be shared.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
