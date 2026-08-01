"use client";

import { motion, AnimatePresence, animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Logo } from "@/components/ui/Logo"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const counterRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Stop scrolling while loading
    document.body.style.overflow = "hidden"
    
    // Animate the counter from 0 to 100
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: [0.33, 1, 0.68, 1], // easeOutCubic
      onUpdate(value) {
        if (counterRef.current) {
          // Format as 000, 001 ... 100
          counterRef.current.textContent = Math.round(value).toString().padStart(3, '0');
        }
      },
      onComplete() {
        setTimeout(() => {
          setLoading(false)
          document.body.style.overflow = "auto"
        }, 300);
      }
    })

    return () => {
      controls.stop()
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-foreground text-background flex flex-col justify-between p-8 md:p-12 overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Top Header */}
          <div className="flex justify-between items-center w-full relative z-10 overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-bold tracking-tighter text-xl">ForbTech</span>
            </motion.div>
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-widest opacity-50">Engineering System</span>
            </motion.div>
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            {/* The giant counter */}
            <div className="overflow-hidden flex items-baseline">
              <motion.h1 
                ref={counterRef}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[8rem] md:text-[15rem] font-black tracking-tighter leading-none"
              >
                000
              </motion.h1>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-4xl md:text-8xl font-black text-primary ml-2"
              >
                %
              </motion.span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 text-sm md:text-base font-medium opacity-70 tracking-widest uppercase flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Initializing Core Infrastructure
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <div className="flex justify-between items-end w-full relative z-10 overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-widest opacity-50">v0.1.0-alpha</span>
            </motion.div>
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-widest opacity-50">Loading Sequence</span>
            </motion.div>
          </div>

          {/* Background Grid Pattern (Subtle) */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
