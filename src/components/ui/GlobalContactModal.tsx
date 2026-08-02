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

  // Lock body scroll when full-screen modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white pointer-events-auto flex flex-col overflow-y-auto"
        >
          {/* Close Button Top Right */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-black transition-colors z-50"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="flex-1 flex items-center justify-center min-h-[100dvh] py-16 px-4">
            <div className="w-full max-w-xl mx-auto flex flex-col relative z-10">
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#007AFF] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-[#007AFF]/20">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold tracking-tight mb-3 text-black">Message Sent</h4>
                  <p className="text-gray-500 text-base max-w-[300px] font-medium leading-relaxed">Thank you for reaching out. Our team will review your project and get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  {/* Apple-style Centered Copy */}
                  <div className="text-center mb-10 mt-2">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
                      Start a Project
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium max-w-md mx-auto">
                      We'd love to help bring your ideas to life. Share a few details below, and let's build something beautiful together.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Light Mode iOS inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input 
                          type="text" name="name" required
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-[14px] px-5 py-4 text-base outline-none focus:ring-2 focus:ring-[#007AFF] transition-all text-black placeholder:text-gray-400 font-medium shadow-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" name="email" required
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-[14px] px-5 py-4 text-base outline-none focus:ring-2 focus:ring-[#007AFF] transition-all text-black placeholder:text-gray-400 font-medium shadow-sm"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input 
                          type="tel" name="phone" required
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-[14px] px-5 py-4 text-base outline-none focus:ring-2 focus:ring-[#007AFF] transition-all text-black placeholder:text-gray-400 font-medium shadow-sm"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="relative">
                        <select 
                          name="project_type" required
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-[14px] px-5 py-4 text-base outline-none focus:ring-2 focus:ring-[#007AFF] transition-all text-black appearance-none cursor-pointer font-medium shadow-sm"
                        >
                          <option value="" disabled selected hidden className="text-gray-400">What do you need?</option>
                          <option value="Web Application">Web Application</option>
                          <option value="Website Design">Website Design</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-5 top-[18px] pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <textarea 
                        name="message" required rows={4}
                        className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-[14px] px-5 py-4 text-base outline-none focus:ring-2 focus:ring-[#007AFF] transition-all text-black resize-none placeholder:text-gray-400 font-medium shadow-sm"
                        placeholder="Tell us a little bit about your vision..."
                      />
                    </div>

                    {/* iOS Primary Action Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#007AFF] hover:bg-[#005ecb] active:scale-[0.98] rounded-[14px] py-4 mt-4 transition-all disabled:opacity-50 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#007AFF]/20"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </button>
                  </form>
                  
                  <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                    Your information is secure and will never be shared.
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
