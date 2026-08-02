"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Logo } from "@/components/ui/Logo"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const [shouldRun, setShouldRun] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only run once per session
    const hasRun = sessionStorage.getItem('forbtech_loader_run')
    if (hasRun) {
      setLoading(false)
      return
    }
    
    setShouldRun(true)
    sessionStorage.setItem('forbtech_loader_run', 'true')
    document.body.style.overflow = "hidden"
    
    // Rapid progress counter
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 100)

    // Close after 2.5s
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = "auto"
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!shouldRun && !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[#020617] text-white flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh", 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#00C6FF]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50" />

          {/* Central Logo Container */}
          <motion.div 
            className="relative flex flex-col items-center z-10 w-full px-6"
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="mb-8 transform md:scale-150 transition-transform">
              <Logo iconOnly={false} className="drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]" />
            </div>

            {/* Futuristic Progress Bar */}
            <div className="w-full max-w-[200px] md:max-w-[300px] flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                  System Boot
                </span>
                <span className="text-sm md:text-base font-black tracking-widest font-mono">
                  {Math.min(progress, 100)}%
                </span>
              </div>
              
              <div className="w-full h-[2px] md:h-1 bg-white/10 overflow-hidden rounded-full relative">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#00C6FF] to-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
