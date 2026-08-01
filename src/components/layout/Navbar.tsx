"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"

const menuVariants: Variants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }
};

const linkVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1] as const
    }
  })
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const whatsappUrl = "https://wa.me/919023668571?text=Hello%20ForbTech!%20I'm%20interested%20in%20starting%20a%20new%20project.%20Can%20we%20discuss%20my%20requirements%3F";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  return (
    <>
      {/* Disjointed Floating Dock Header */}
      <motion.header 
        className="fixed top-6 left-4 right-4 md:left-8 md:right-8 z-[100] pointer-events-none flex items-center justify-between"
      >
        {/* Left: Floating Brand */}
        <div className={`pointer-events-auto flex-shrink-0 relative z-[101] transition-all duration-500 rounded-full border px-5 py-2.5 ${isScrolled && !menuOpen ? 'bg-background/80 backdrop-blur-xl border-border/50 shadow-lg' : 'bg-background/40 backdrop-blur-md border-border/20 shadow-sm'}`}>
          <a href="#" className="block">
            <Logo className={`h-6 md:h-7 transition-colors duration-300 ${menuOpen ? 'text-foreground' : ''}`} />
          </a>
        </div>

        {/* Center: The Dock (Desktop Only) */}
        <div className={`hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 transition-all duration-500 rounded-full border px-8 py-3.5 items-center gap-10 shadow-xl ${isScrolled ? 'bg-foreground text-background border-foreground/10' : 'bg-background/80 backdrop-blur-xl border-border/50'}`}>
          <a href="#services" className={`text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-primary'}`}>Services</a>
          <a href="#process" className={`text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-primary'}`}>Process</a>
          <a href="#ecosystem" className={`text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-primary'}`}>Ecosystem</a>
          <a href="#work" className={`text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'hover:text-primary' : 'hover:text-primary'}`}>Our Work</a>
        </div>

        {/* Right: Floating CTA & Mobile Menu */}
        <div className="pointer-events-auto flex items-center gap-4 relative z-[101]">
          {/* CTA (Desktop) */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className={`rounded-full px-6 h-11 text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all ${isScrolled ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
            >
              Start Project
            </Button>
          </div>

          {/* Morphing Hamburger (Mobile) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-500 rounded-full border ${isScrolled && !menuOpen ? 'bg-background/80 backdrop-blur-xl border-border/50 shadow-lg' : 'bg-background/40 backdrop-blur-md border-border/20 shadow-sm'}`}
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-foreground block rounded-full"
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-foreground block rounded-full"
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-foreground block rounded-full"
            />
          </button>
        </div>
      </motion.header>

      {/* Circle Expansion Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-background flex flex-col md:hidden"
          >
            {/* Mobile Menu Links */}
            <div className="flex flex-col px-8 pt-32 pb-8 gap-8 h-full">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'Ecosystem', href: '#ecosystem' },
                { label: 'Our Work', href: '#work' }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-black tracking-tighter hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.div 
                custom={4}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-auto mb-8"
              >
                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full h-16 rounded-full text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
