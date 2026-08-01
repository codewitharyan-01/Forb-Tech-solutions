"use client";

import { motion, AnimatePresence } from "framer-motion"
import { Code, Layout, Smartphone, Bot, PenTool, Cloud, LineChart, Plus, Minus } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Custom Software",
    icon: <Code className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Bespoke systems engineered for scale. We build robust, high-performance architecture from the ground up to solve your most complex operational challenges.",
    stats: ["99.9% Uptime", "Zero Legacy Code"]
  },
  {
    title: "Web Apps",
    icon: <Layout className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "High-performance web ecosystems. From dynamic SPAs to massive enterprise portals, we engineer for speed, SEO, and flawless user experience.",
    stats: ["Next.js React", "Sub-second Loads"]
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Fluid native iOS & Android experiences. We deploy cross-platform ecosystems that feel indistinguishable from pure native code.",
    stats: ["iOS & Android", "60fps Animations"]
  },
  {
    title: "AI Solutions",
    icon: <Bot className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Smart workflows and LLM integration. Injecting bleeding-edge machine learning into your infrastructure to automate the impossible.",
    stats: ["Custom LLMs", "Predictive Models"]
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Uncompromising, conversion-focused design. We don't just make it look pretty; we engineer user flows that drive massive revenue.",
    stats: ["Framer Pro", "A/B Tested"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Resilient infrastructure and CI/CD. Zero-downtime deployments and horizontally scalable databases managed by our cloud architects.",
    stats: ["AWS & Azure", "Automated CI/CD"]
  },
  {
    title: "IT Consulting",
    icon: <LineChart className="w-8 h-8 md:w-12 md:h-12" />,
    desc: "Strategic digital transformation. Stop guessing and start scaling with our elite fractional CTOs and enterprise architects.",
    stats: ["Tech Audits", "Scalability Roadmaps"]
  }
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="services" className="py-12 px-4 max-w-6xl mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        
        {/* Left Column (Sticky Title) */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 shrink-0">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Core <span className="text-primary">Services.</span></h2>
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Uncompromising engineering capabilities compressed into an ultra-efficient workflow.
          </p>
        </div>

        {/* Right Column (Compact Accordion) */}
        <div className="flex-1 w-full flex flex-col border-t border-border/50">
          {services.map((svc, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div key={i} className="border-b border-border/50">
                {/* Accordion Header (Clickable) */}
                <button 
                  onClick={() => toggle(i)}
                  className="w-full py-5 flex items-center justify-between text-left group hover:pl-4 transition-all duration-300"
                >
                  <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isOpen ? "text-primary" : "group-hover:text-primary/70"}`}>
                    {svc.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "border-primary text-primary bg-primary/10" : "border-border/50 group-hover:border-primary group-hover:text-primary"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pt-2 flex flex-col md:flex-row gap-6 pl-2 md:pl-4">
                      
                      {/* Icon */}
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-foreground/5 text-primary flex items-center justify-center border border-border/50 shadow-sm">
                        {svc.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-4 max-w-lg">
                          {svc.desc}
                        </p>
                        
                        {/* Stats Tags */}
                        <div className="flex flex-wrap gap-2">
                          {svc.stats.map((stat, j) => (
                            <span key={j} className="px-3 py-1 rounded-full border border-border/50 bg-background text-[10px] font-bold uppercase tracking-widest text-foreground shadow-sm">
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      </div>
    </section>
  )
}
