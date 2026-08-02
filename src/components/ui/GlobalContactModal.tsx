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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-auto overflow-hidden">
          {/* Deep Black Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* High-Contrast White Monochrome Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative w-full max-w-5xl bg-[#FAFAFA] text-black shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-none md:rounded-[1rem]"
          >
            {/* Minimalist Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 z-50 shadow-lg"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </button>

            {/* Left Side: Brutalist Typography */}
            <div className="w-full md:w-5/12 p-8 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-300">
              <div className="relative z-10 mt-8 md:mt-0">
                <div className="inline-block border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-[0.2em] mb-10">
                  Exclusive Partnership
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-black">
                  BOLD.<br/>
                  RAW.<br/>
                  SCALE.
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-bold">
                  We strip away the noise and engineer pure, high-performance digital solutions. 
                </p>
              </div>

              <div className="relative z-10 mt-12 hidden md:block border-t-2 border-black pt-6">
                <p className="text-xs uppercase tracking-widest font-black text-black">ForbTech Engineering</p>
              </div>
            </div>

            {/* Right Side: High-Contrast Form */}
            <div className="w-full md:w-7/12 p-8 md:p-14 relative z-10 flex flex-col justify-center bg-white">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-20 h-20 bg-black rounded-none flex items-center justify-center mb-6">
                    <ArrowRight className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-4xl font-black tracking-tighter mb-3 text-black uppercase">Received.</h4>
                  <p className="text-gray-600 font-bold text-lg max-w-[300px]">Our directors will be in contact very shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Full Name</label>
                      <input 
                        type="text" name="name" required
                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-none px-5 py-4 text-lg outline-none transition-all text-black font-bold placeholder:text-gray-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Email Address</label>
                      <input 
                        type="email" name="email" required
                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-none px-5 py-4 text-lg outline-none transition-all text-black font-bold placeholder:text-gray-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Phone Number</label>
                      <input 
                        type="tel" name="phone" required
                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-none px-5 py-4 text-lg outline-none transition-all text-black font-bold placeholder:text-gray-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="flex flex-col relative">
                      <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Service Type</label>
                      <select 
                        name="project_type" required
                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-none px-5 py-4 text-lg outline-none transition-all text-black appearance-none cursor-pointer font-bold"
                      >
                        <option value="" disabled selected hidden className="text-gray-400">Select Service</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Website Design">Website Design</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-5 top-[44px] pointer-events-none">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-black text-black uppercase tracking-widest mb-2 block">Project Details</label>
                    <textarea 
                      name="message" required rows={3}
                      className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-none px-5 py-4 text-lg outline-none transition-all text-black resize-none font-bold placeholder:text-gray-400"
                      placeholder="Briefly describe your goals, budget, or timeline..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full bg-black hover:bg-gray-900 rounded-none p-6 mt-4 transition-colors disabled:opacity-50 border-none"
                  >
                    <div className="relative flex items-center justify-between px-2">
                      <span className="text-lg font-black uppercase tracking-[0.2em] text-white">
                        {isSubmitting ? "Deploying..." : "Submit Project"}
                      </span>
                      {!isSubmitting && (
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-3 transition-transform" strokeWidth={3} />
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
