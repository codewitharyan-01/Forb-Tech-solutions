"use client";

import { motion, AnimatePresence, useInView } from "framer-motion"
import { Code2, Cpu, Globe2, LayoutTemplate, Network, PenTool } from "lucide-react"
import { useState, useRef, useEffect } from "react"

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
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="services" className="pt-[15vh] pb-[25vh] px-4 max-w-4xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          Core <span className="text-primary">Services.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Scroll down to explore my engineering capabilities.
        </p>
      </div>

      {/* Vertical Stack of Expanding Boxes */}
      <div className="flex flex-col gap-4 md:gap-6 relative">
        {services.map((svc, i) => (
          <ServiceCard 
            key={i} 
            svc={svc} 
            index={i} 
            activeIdx={activeIdx} 
            setActiveIdx={setActiveIdx} 
          />
        ))}
      </div>
      
    </section>
  )
}

function ServiceCard({ svc, index, activeIdx, setActiveIdx }: { svc: { title: string, desc: string, icon: React.ElementType, tags: string[] }, index: number, activeIdx: number, setActiveIdx: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // The magic: Trigger when the element crosses the middle 20% of the viewport height.
  // We use -40% margin on top and bottom, meaning the "in-view" zone is just the middle 20%.
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" })
  
  // Update the global active index whenever this card hits the center of the screen
  useEffect(() => {
    if (isInView) {
      setActiveIdx(index)
    }
  }, [isInView, index, setActiveIdx])
  
  const isActive = activeIdx === index;

  return (
    <motion.div
      ref={ref}
      layout
      onClick={() => setActiveIdx(index)}
      className={`relative overflow-hidden rounded-[2rem] border transition-colors duration-500 cursor-pointer shadow-lg ${isActive ? 'bg-background/90 border-primary/50 shadow-primary/10 backdrop-blur-xl' : 'bg-background/40 border-border/40 hover:bg-foreground/5 backdrop-blur-md'}`}
    >
      {/* Box Header (Always Visible) */}
      <motion.div layout className="p-6 md:p-8 flex items-center gap-6 relative z-10">
        <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-500 shadow-sm ${isActive ? 'bg-primary text-primary-foreground border-primary' : 'bg-foreground/5 text-primary border border-border/50'}`}>
          <svc.icon strokeWidth={1.2} className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h3 className={`text-2xl md:text-4xl font-black tracking-tight transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
          {svc.title}
        </h3>
      </motion.div>
      
      {/* Expandable Content Body */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 md:px-8 pb-6 md:pb-8 pt-0 relative z-10"
          >
            <p className="text-base md:text-xl font-medium text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {svc.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag: string, j: number) => (
                <span key={j} className="px-4 py-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Massive Background Watermark (Only visible when active) */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="absolute -bottom-10 -right-10 text-primary/5 pointer-events-none transform scale-[4] md:scale-[6]"
          >
             <svc.icon strokeWidth={1.2} className="w-48 h-48" />
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}
