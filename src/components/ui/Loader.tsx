"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const [shouldRun, setShouldRun] = useState(false)

  useEffect(() => {
    // Only run once per session to avoid annoying returning users
    const hasRun = sessionStorage.getItem('loaderHasRun')
    if (hasRun) {
      setLoading(false)
      return
    }
    
    setShouldRun(true)
    sessionStorage.setItem('loaderHasRun', 'true')

    // Stop scrolling while loading
    document.body.style.overflow = "hidden"
    
    // Automatically close the loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = "auto"
    }, 2500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!shouldRun && !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Central Logo Container */}
          <motion.div 
            className="relative flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* The SVG Logo */}
            <svg width="120" height="120" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 drop-shadow-[0_0_30px_rgba(0,198,255,0.4)]">
              <defs>
                <linearGradient id="loader-grad1" x1="171" y1="116" x2="441" y2="196" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00C6FF"/>
                  <stop offset="1" stopColor="#0072FF"/>
                </linearGradient>
                <linearGradient id="loader-grad2" x1="71" y1="216" x2="361" y2="396" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0072FF"/>
                  <stop offset="1" stopColor="#001F8F"/>
                </linearGradient>
              </defs>
              
              {/* Top Bar of 'F' */}
              <motion.path 
                d="M211 116 H441 L401 196 H171 Z" 
                stroke="url(#loader-grad1)"
                strokeWidth="4"
                initial={{ pathLength: 0, fill: "rgba(0,198,255,0)" }}
                animate={{ pathLength: 1, fill: "url(#loader-grad1)" }}
                transition={{ 
                  pathLength: { duration: 1, ease: "easeInOut" },
                  fill: { delay: 0.5, duration: 0.8, ease: "easeIn" }
                }}
              />
              
              {/* Bottom Stem of 'F' */}
              <motion.path 
                d="M161 216 H361 L331 276 H191 L131 396 H71 Z" 
                stroke="url(#loader-grad2)"
                strokeWidth="4"
                initial={{ pathLength: 0, fill: "rgba(0,114,255,0)" }}
                animate={{ pathLength: 1, fill: "url(#loader-grad2)" }}
                transition={{ 
                  pathLength: { duration: 1, ease: "easeInOut", delay: 0.2 },
                  fill: { delay: 0.7, duration: 0.8, ease: "easeIn" }
                }}
              />
            </svg>

            {/* Text Reveal */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="text-2xl md:text-3xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"
              >
                ForbTech
              </motion.h1>
            </div>
            
            {/* Loading Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 mt-6 overflow-hidden rounded-full relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Background Ambient Glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#00C6FF]/10 rounded-full blur-[100px] pointer-events-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  )
}
