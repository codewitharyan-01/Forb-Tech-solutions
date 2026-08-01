"use client";

"use client";

import { motion, AnimatePresence } from "framer-motion"
import { Code2, Cpu, Globe2, LayoutTemplate, Network, PenTool } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "End-to-end web applications built with modern frameworks. Engineered from architecture to deployment for absolute scale, security, and speed.",
    icon: Code2,
    tags: ["React.js", "PHP", "MySQL", "Next.js"],
  },
  {
    title: "AI Solutions",
    desc: "Integration of intelligent LLMs, custom prompt engineering, and hardware-software AI prototypes to automate complex workflows.",
    icon: Cpu,
    tags: ["Prompt Engineering", "Custom LLMs", "Hardware AI"],
  },
  {
    title: "Business Portals",
    desc: "Robust civic and B2B platforms featuring complex role-based access controls, interactive data dashboards, and secure internal tools.",
    icon: Globe2,
    tags: ["Role-Based Access", "Data Dashboards"],
  },
  {
    title: "CMS & E-Commerce",
    desc: "High-conversion digital storefronts, fully integrated e-commerce solutions, and SEO-optimized content management systems.",
    icon: LayoutTemplate,
    tags: ["WordPress", "E-Commerce", "SEO"],
  },
  {
    title: "IT Infrastructure",
    desc: "Professional system administration, automated disaster recovery backups, and robust network engineering for zero-downtime operations.",
    icon: Network,
    tags: ["Troubleshooting", "Backups", "Security"],
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centric interfaces. We design intuitive, accessible experiences that align with modern enterprise standards.",
    icon: PenTool,
    tags: ["Responsive Design", "Wireframing"],
  }
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="pt-[15vh] pb-[20vh] px-4 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Core <span className="text-primary">Services.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Engineered for scale. Designed for humans.
        </p>
      </div>

      {/* Interactive Stage Layout (Zero Scroll) */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 min-h-[500px]">
        
        {/* Left Side: The Menu (Grid on mobile, column on desktop) */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-3 relative z-20">
          {services.map((svc, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative px-4 py-3 md:px-6 md:py-5 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 md:gap-4 text-center lg:text-left rounded-xl md:rounded-2xl transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {/* Active Highlight Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-menu-indicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 shrink-0">
                  <svc.icon strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="relative z-10 font-bold text-[11px] md:text-sm lg:text-lg leading-tight md:leading-normal">
                  {svc.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: The Stage */}
        <div className="w-full lg:w-2/3 relative rounded-[2rem] md:rounded-[3rem] border border-border/40 bg-background/40 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col h-full p-8 md:p-12 lg:p-16 relative z-10"
            >
              {/* Dynamic Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[1.5rem] flex items-center justify-center bg-primary text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] mb-8">
                {(() => {
                  const Icon = services[activeIdx].icon;
                  return <Icon strokeWidth={1.2} className="w-8 h-8 md:w-10 md:h-10" />;
                })()}
              </div>

              {/* Dynamic Content */}
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-6 leading-tight">
                {services[activeIdx].title}
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-medium">
                {services[activeIdx].desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {services[activeIdx].tags.map((tag, j) => (
                  <span key={j} className="px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Rotating Massive Background Watermark */}
          <div className="absolute -bottom-16 -right-16 text-primary/5 pointer-events-none z-0">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {(() => {
                    const Icon = services[activeIdx].icon;
                    return <Icon strokeWidth={1} className="w-64 h-64 md:w-96 md:h-96" />;
                  })()}
                </motion.div>
             </AnimatePresence>
          </div>
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

        </div>

      </div>
    </section>
  )
}
