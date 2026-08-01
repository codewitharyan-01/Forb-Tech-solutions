"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"
import { MapPin, ArrowUpRight, Globe, Smartphone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      };
      setTime(now.toLocaleTimeString('en-US', options) + " IST");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return <p className="text-sm font-mono text-muted-foreground mt-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {time || "Loading time..."}</p>;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [activeSection, setActiveSection] = useState("Home")
  
  useEffect(() => {
    if (!isHome) return;

    const sections = ["hero", "services", "process", "ecosystem", "work"];
    
    const handleScroll = () => {
      let current = "Home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1);
            if (section === "work") current = "Our Work";
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const displayTitle = isHome ? activeSection : (
    pathname.includes("about") ? "About Us" :
    pathname.includes("careers") ? "Careers" :
    pathname.includes("privacy") ? "Privacy Policy" :
    pathname.includes("terms") ? "Terms of Service" : "Page"
  );
  
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
        <div className="pointer-events-auto flex items-center gap-2 z-[101]">
          {/* Logo Capsule */}
          <div className={`transition-all duration-500 rounded-full border px-5 py-2.5 ${isScrolled && !menuOpen ? 'bg-background/80 backdrop-blur-xl border-border/50 shadow-lg' : 'bg-background/40 backdrop-blur-md border-border/20 shadow-sm'}`}>
            <Link href="/" className="block">
              <Logo className={`h-6 md:h-7 transition-colors duration-300 ${menuOpen ? 'text-foreground' : ''}`} />
            </Link>
          </div>
        </div>

        {/* Right: Active Section & Mobile Menu */}
        <div className="pointer-events-auto flex items-center gap-4 relative z-[101]">
          {/* Active Section Capsule (Desktop) */}
          <div className={`hidden md:flex transition-all duration-500 rounded-full border px-6 py-2.5 items-center justify-center overflow-hidden min-w-[140px] shadow-sm ${isScrolled && !menuOpen ? 'bg-foreground text-background border-foreground/10 shadow-lg' : 'bg-background/80 backdrop-blur-xl border-border/50'}`}>
            <AnimatePresence mode="wait">
              <motion.span
                key={displayTitle}
                initial={{ rotateX: 90, opacity: 0, y: 10 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                exit={{ rotateX: -90, opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[10px] font-bold tracking-widest uppercase block origin-center text-center w-full"
              >
                {displayTitle}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Morphing Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-500 rounded-full border ${isScrolled && !menuOpen ? 'bg-background/80 backdrop-blur-xl border-border/50 shadow-lg' : 'bg-background/40 backdrop-blur-md border-border/20 shadow-sm'}`}
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
            className="fixed inset-0 z-[90] bg-background flex flex-col"
          >
            {/* Bento Dashboard Menu Links */}
            <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 px-4 md:px-8 pt-28 pb-8 h-full max-w-7xl mx-auto w-full overflow-y-auto">
              
              {/* Box 1: Navigation Links */}
              <motion.div 
                custom={0} variants={linkVariants} initial="closed" animate="open" exit="closed"
                className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-background/50 border border-border/50 p-8 md:p-12 flex flex-col justify-center gap-6 md:gap-8 shadow-sm backdrop-blur-md"
              >
                <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
                  Navigation
                </div>
                {isHome ? (
                  [
                    { label: 'Services', href: '/#services' },
                    { label: 'Process', href: '/#process' },
                    { label: 'Our Work', href: '/#work' },
                    { label: 'Client Success', href: '/testimonials' }
                  ].map((item, i) => (
                    <Link 
                      key={i}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl md:text-6xl font-black tracking-tighter hover:text-primary hover:translate-x-4 transition-all duration-300 block w-max"
                    >
                      {item.label}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link 
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl md:text-6xl font-black tracking-tighter hover:text-primary hover:translate-x-4 transition-all duration-300 block w-max mb-2"
                    >
                      Home
                    </Link>
                    {pathname !== "/testimonials" && (
                      <Link 
                        href="/testimonials"
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl md:text-6xl font-black tracking-tighter hover:text-primary hover:translate-x-4 transition-all duration-300 block w-max"
                      >
                        Client Success
                      </Link>
                    )}
                  </>
                )}
              </motion.div>

              {/* Box 2: Location & Time */}
              <motion.div 
                custom={1} variants={linkVariants} initial="closed" animate="open" exit="closed"
                className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-background/50 border border-border/50 p-8 flex flex-col relative overflow-hidden group backdrop-blur-md shadow-sm"
              >
                <div className="flex items-center gap-2 text-muted-foreground mb-auto relative z-10">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Base of Operations</span>
                </div>
                <div className="mt-12 relative z-10">
                  <h4 className="text-2xl font-black tracking-tight">Ahmedabad, India</h4>
                  <LiveTime />
                </div>
                <Globe className="absolute -bottom-10 -right-10 w-48 h-48 text-foreground/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none" />
              </motion.div>

              {/* Box 3: Socials & CTA */}
              <motion.div 
                custom={2} variants={linkVariants} initial="closed" animate="open" exit="closed"
                className="md:col-span-1 md:row-span-1 flex flex-col gap-4 md:gap-6 min-h-[200px]"
              >
                {/* Socials Sub-grid */}
                <div className="flex gap-4 md:gap-6 h-1/2">
                  <a href="tel:+919023668571" className="flex-1 rounded-[2rem] bg-background/50 border border-border/50 flex items-center justify-center hover:bg-foreground/5 hover:text-primary transition-colors shadow-sm backdrop-blur-md group">
                    <Smartphone strokeWidth={1.2} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://wa.me/919023668571" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-[2rem] bg-background/50 border border-border/50 flex items-center justify-center hover:bg-foreground/5 hover:text-primary transition-colors shadow-sm backdrop-blur-md group">
                    <MessageCircle strokeWidth={1.2} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                {/* CTA */}
                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="flex-1 rounded-[2rem] bg-primary text-primary-foreground text-xl md:text-2xl font-bold hover:bg-primary/90 flex items-center justify-center gap-3 w-full h-1/2 shadow-lg group"
                >
                  Start Project <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
