"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Check if they already closed it this session
    if (sessionStorage.getItem("leadPopupDismissed")) return;

    // Trigger after 12 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("leadPopupDismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "12_sec_lead" }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 px-4 sm:px-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-border/50 bg-background/90 p-8 shadow-2xl backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            
            <h3 className="mb-2 text-2xl font-black tracking-tight text-foreground">
              Ready to scale?
            </h3>
            <p className="mb-8 text-sm text-muted-foreground">
              You've been exploring for a bit. Let's discuss how ForbTech can build your next big product. Enter your email for a free consultation.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="aryan04102001@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full rounded-xl border border-border/50 bg-foreground/5 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {status === "idle" && (
                  <>
                    Send to ForbTech <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {status === "loading" && "Sending..."}
                {status === "success" && "Sent Successfully!"}
                {status === "error" && "Error. Try again."}
              </button>
            </form>
            
            {/* Ambient background glow inside the modal */}
            <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
