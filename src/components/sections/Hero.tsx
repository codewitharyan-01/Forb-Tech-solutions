"use client";

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

const rotatingWords = ["Websites", "Mobile Apps", "AI Solutions", "E-Commerce", "SaaS Products"];
const rotatingTaglines = [
  "From Idea to Innovation",
  "Engineering the Future",
  "Scalable Digital Solutions",
  "Next-Gen Tech Consulting"
];

const WireframeCube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" className={className}>
    <polygon points="50,5 95,28 95,72 50,95 5,72 5,28" />
    <line x1="50" y1="50" x2="50" y2="95" />
    <line x1="50" y1="50" x2="95" y2="28" />
    <line x1="50" y1="50" x2="5" y2="28" />
    <line x1="50" y1="5" x2="50" y2="50" strokeDasharray="1 3" opacity="0.5" />
    <line x1="5" y1="72" x2="50" y2="50" strokeDasharray="1 3" opacity="0.5" />
    <line x1="95" y1="72" x2="50" y2="50" strokeDasharray="1 3" opacity="0.5" />
  </svg>
);

const WireframePyramid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" className={className}>
    <polygon points="50,15 85,75 15,75" />
    <line x1="50" y1="15" x2="50" y2="85" />
    <line x1="85" y1="75" x2="50" y2="85" />
    <line x1="15" y1="75" x2="50" y2="85" />
    <line x1="50" y1="15" x2="50" y2="65" strokeDasharray="1 3" opacity="0.5" />
    <line x1="15" y1="75" x2="85" y2="75" strokeDasharray="1 3" opacity="0.5" />
  </svg>
);

const WireframeRocket = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round" className={className}>
    {/* Main Body */}
    <path d="M50,10 C50,10 35,30 35,70 L65,70 C65,30 50,10 50,10 Z" />
    {/* Center Line for CAD 3D effect */}
    <line x1="50" y1="10" x2="50" y2="70" strokeDasharray="1 2" />
    {/* Horizontal body rings */}
    <path d="M40,30 Q50,35 60,30" opacity="0.6"/>
    <path d="M37,50 Q50,55 63,50" opacity="0.6"/>
    
    {/* Aerodynamic Fins */}
    <polygon points="35,55 20,85 35,70" />
    <polygon points="65,55 80,85 65,70" />
    <polygon points="45,70 50,85 55,70" />
    
    {/* Hyper Speed Exhaust Trails */}
    <line x1="50" y1="85" x2="50" y2="120" strokeDasharray="2 4" />
    <line x1="42" y1="75" x2="42" y2="110" strokeDasharray="1 4" opacity="0.5" />
    <line x1="58" y1="75" x2="58" y2="110" strokeDasharray="1 4" opacity="0.5" />
    
    {/* Additional technical details */}
    <circle cx="50" cy="40" r="3" opacity="0.8" />
  </svg>
);

const WireframeCylinder = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" className={className}>
    <ellipse cx="50" cy="20" rx="30" ry="10" />
    <ellipse cx="50" cy="80" rx="30" ry="10" strokeDasharray="1 3" opacity="0.5" />
    <line x1="20" y1="20" x2="20" y2="80" />
    <line x1="80" y1="20" x2="80" y2="80" />
  </svg>
);

const WireframeOctahedron = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" className={className}>
    <polygon points="50,5 95,50 50,95 5,50" />
    <line x1="50" y1="5" x2="50" y2="95" />
    <line x1="5" y1="50" x2="95" y2="50" />
    <polygon points="50,5 75,50 50,95 25,50" />
  </svg>
);

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    
    const taglineInterval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 15000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 md:pt-32 md:pb-16 z-10 bg-background/50">

      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Rotating 3D Wireframes Constellation */}
      <motion.div
        animate={{ rotate: 360, rotateX: 20, rotateY: 45 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[10%] w-32 h-32 md:w-56 md:h-56 text-foreground/10 pointer-events-none hidden md:block"
      >
        <WireframeOctahedron />
      </motion.div>

      <motion.div
        animate={{ rotate: -360, rotateX: -10, rotateY: 20 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[5%] left-[2%] w-48 h-48 md:w-72 md:h-72 text-foreground/10 pointer-events-none hidden md:block"
      >
        <WireframeCube />
      </motion.div>

      <motion.div
        animate={{ rotate: 360, rotateX: 20, rotateY: -15 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[15%] w-32 h-32 md:w-48 md:h-48 text-primary/10 pointer-events-none hidden md:block"
      >
        <WireframePyramid />
      </motion.div>

      <div className="absolute bottom-[-10%] right-[30%] w-24 h-24 md:w-36 md:h-36 pointer-events-none hidden md:block rotate-45 z-0">
        <motion.div
          animate={{
            y: [300, 300, 298, 302, 298, 300, 200, 0, -2000],
            x: [0, 0, -2, 2, -1, 0, 0, 0, 0],
            scale: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.85, 0.9, 0.4],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0]
          }}
          transition={{
            duration: 40,
            times: [0, 0.05, 0.07, 0.09, 0.11, 0.15, 0.4, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut"
          }}
          className="w-full h-full text-primary/50 drop-shadow-[0_0_20px_rgba(var(--primary),0.4)]"
        >
          <WireframeRocket />
        </motion.div>
      </div>

      <motion.div
        animate={{ rotate: 180, rotateX: 60, rotateY: -20 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[3%] w-24 h-24 md:w-40 md:h-40 text-primary/5 pointer-events-none hidden md:block"
      >
        <WireframeCylinder />
      </motion.div>

      <motion.div
        animate={{ rotate: -180, rotateX: -40, rotateY: 50 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[40%] w-20 h-20 md:w-32 md:h-32 text-foreground/5 pointer-events-none hidden md:block"
      >
        <WireframeCube />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-5 md:px-8">

        <div className="flex flex-col gap-10 md:gap-24">
          
          {/* Top Row: Badge & Stats */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
          >
            <div className="inline-flex items-center gap-3 border border-foreground/10 rounded-full px-5 py-2.5 bg-background/60 backdrop-blur-md shadow-sm overflow-hidden relative min-w-[240px] md:min-w-[280px]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <div className="relative h-[1.2em] w-full flex items-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={taglineIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap text-foreground/80"
                  >
                    {rotatingTaglines[taglineIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex flex-col sm:text-right">
                <span className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-1">15+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Projects</span>
              </div>
              <div className="w-px h-12 bg-foreground/10 hidden sm:block" />
              <div className="flex flex-col text-left">
                <span className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-1 text-primary">#1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Univ Rank</span>
              </div>
            </div>
          </motion.div>

          {/* Headline Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2 md:gap-4"
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-muted-foreground ml-1 md:ml-2">
              I Build
            </span>
            <div className="relative h-[3.5rem] md:h-[7.5rem] overflow-hidden -ml-1 md:-ml-2">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute text-[3.5rem] md:text-[8rem] lg:text-[9rem] font-black tracking-tighter leading-none text-primary"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 -ml-1 md:-ml-2 mt-2 md:mt-4">
              <span
                className="text-[3.5rem] md:text-[8rem] lg:text-[9rem] font-black tracking-tighter leading-none select-none opacity-80"
                style={{
                  WebkitTextStroke: '2px currentColor',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                That Drive
              </span>
              <span className="text-[3.5rem] md:text-[8rem] lg:text-[9rem] font-black tracking-tighter leading-none text-foreground">
                Growth.
              </span>
            </div>
          </motion.div>

          {/* Bottom Row: Description, Value Props, Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-t border-foreground/10 pt-10"
          >
            <div className="lg:col-span-4">
              <p className="text-base md:text-lg font-medium text-muted-foreground leading-relaxed max-w-sm">
                I help businesses transform ideas into powerful digital products — from concept to launch, end-to-end.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">What you get</span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {["Free Consultation", "Custom Quote", "End-to-End Dev"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 strokeWidth={1.2} className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs md:text-sm font-bold tracking-tight text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  )
}
