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

  // Lock body scroll when modal is open
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 pointer-events-auto">
          {/* Apple Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Apple Sheet Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-lg bg-[var(--surface)] border border-[var(--line)] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-8 md:p-10 flex flex-col relative z-10">
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--surface-sunken)] hover:bg-[var(--line)] flex items-center justify-center text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-14 h-14 bg-[var(--surface-sunken)] border border-[var(--line)] rounded-full flex items-center justify-center mb-5 text-[#0071e3] dark:text-[#2997ff]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-semibold tracking-[-0.02em] mb-2 text-[var(--foreground)]">Message Received</h4>
                  <p className="text-[var(--muted-text)] text-sm max-w-[280px] font-normal leading-relaxed">
                    Thank you for reaching out. Founder Aryan will evaluate your project and reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8 px-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-1">
                      Direct Consultation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] mb-2">
                      Ready to build your digital presence?
                    </h2>
                    <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                      Share your goals. We provide a complimentary technical blueprint and fixed price proposal within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input 
                          type="text" name="name" required
                          className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0071e3] dark:focus:border-[#2997ff] transition-all text-[var(--foreground)] placeholder:text-[var(--muted-text)]"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" name="email" required
                          className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0071e3] dark:focus:border-[#2997ff] transition-all text-[var(--foreground)] placeholder:text-[var(--muted-text)]"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input 
                          type="tel" name="phone" required
                          className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0071e3] dark:focus:border-[#2997ff] transition-all text-[var(--foreground)] placeholder:text-[var(--muted-text)]"
                          placeholder="Phone / WhatsApp"
                        />
                      </div>
                      <div className="relative">
                        <select 
                          name="project_type" required defaultValue=""
                          className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0071e3] dark:focus:border-[#2997ff] transition-all text-[var(--foreground)] appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>What do you need?</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Google Business SEO">Google Business SEO</option>
                          <option value="Custom Web / Mobile App">Custom Web / Mobile App</option>
                          <option value="WhatsApp Store / E-commerce">WhatsApp Store / E-commerce</option>
                        </select>
                        <div className="absolute right-4 top-[14px] pointer-events-none">
                          <svg className="w-4 h-4 text-[var(--muted-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <textarea 
                        name="message" required rows={3}
                        className="w-full bg-[var(--surface-sunken)] border border-[var(--line)] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0071e3] dark:focus:border-[#2997ff] transition-all text-[var(--foreground)] resize-none placeholder:text-[var(--muted-text)]"
                        placeholder="Tell us a little about your business and goals..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:scale-[0.99] py-3.5 mt-2 transition-all disabled:opacity-50 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Request Free Consultation"}
                    </button>
                  </form>
                  
                  <p className="text-center text-[11px] text-[var(--muted-text)] mt-4">
                    Your details remain strictly confidential and will never be shared.
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
