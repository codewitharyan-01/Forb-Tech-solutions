"use client";

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Magnetic } from "@/components/ui/Magnetic"
import { useEffect, useState } from "react"

const rotatingWords = ["Websites", "Mobile Apps", "AI Solutions", "E-Commerce", "SaaS Products"];

export function Hero() {
  const whatsappUrl = "https://wa.me/919023668571?text=Hello%20ForbTech!%20I'm%20interested%20in%20starting%20a%20new%20project.%20Can%20we%20discuss%20my%20requirements%3F";
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-16 z-10 bg-background/50">

      {/* Ambient Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-foreground/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-5 md:px-8">

        {/* Top Row: Tag + Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-foreground/10 rounded-full px-3 py-1.5 bg-background/60 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Available for projectsth</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-xl md:text-2xl font-black tracking-tight">50+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Projects</span>
            </div>
            <div className="w-px h-8 bg-foreground/10" />
            <div className="text-right">
              <span className="block text-xl md:text-2xl font-black tracking-tight">8+</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Industries</span>
            </div>
          </div>
        </motion.div>

        {/* The Creative Headline Block */}
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Line 1: "We Build" in small caps + rotating word */}
            <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6 mb-1">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground pt-2">We Build</span>
              <div className="relative h-[3rem] md:h-[5.5rem] overflow-hidden">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[2.8rem] md:text-[5.5rem] font-black tracking-tighter leading-none text-primary"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </div>
            </div>

            {/* Line 2: "That Drive" in massive hollow stroke + "Growth" solid */}
            <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-5">
              <span
                className="text-[2.8rem] md:text-[5.5rem] font-black tracking-tighter leading-none select-none"
                style={{
                  WebkitTextStroke: '1.5px currentColor',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                That Drive
              </span>
              <span className="text-[2.8rem] md:text-[5.5rem] font-black tracking-tighter leading-none text-foreground">
                Growth.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Description + CTA + Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16"
        >
          {/* Left: Paragraph */}
          <p className="text-sm md:text-base font-medium text-muted-foreground max-w-sm leading-relaxed">
            We help businesses transform ideas into powerful digital products — from concept to launch, end-to-end.
          </p>

          {/* Center: Buttons */}
          <div className="flex flex-row gap-3 shrink-0">
            <Magnetic>
              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="h-12 md:h-14 px-6 md:px-10 rounded-full text-xs md:text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] transition-all"
              >
                Start a Project <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                variant="glass"
                className="h-12 md:h-14 px-6 md:px-10 rounded-full text-xs md:text-sm font-bold border border-foreground/15 group"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Work
              </Button>
            </Magnetic>
          </div>

          {/* Right: Value Props */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 lg:ml-auto">
            {["Free Consultation", "Custom Quote", "End-to-End Dev"].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[11px] font-bold tracking-tight text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Full-width Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 md:mt-16 border-t border-b border-foreground/5 py-3 overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...Array(2)].map((_, idx) => (
            <span key={idx} className="flex items-center gap-8 mr-8">
              {["CUSTOM SOFTWARE", "WEB APPS", "MOBILE APPS", "AI / ML", "E-COMMERCE", "UI/UX DESIGN", "CLOUD & DEVOPS", "IT CONSULTING"].map((s, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-foreground/15">{s}</span>
                  <span className="text-foreground/10">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
