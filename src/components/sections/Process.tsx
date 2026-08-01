"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const steps = [
  { 
    id: "01", 
    title: "Discovery & Consultation", 
    desc: "We begin by deeply understanding your core business objectives. We analyze your market, competitors, and technical constraints to ensure our engineering efforts align perfectly with your revenue goals.", 
    deliverables: ["Requirements Document", "Feasibility Study", "Project Roadmap"] 
  },
  { 
    id: "02", 
    title: "System Architecture", 
    desc: "Before writing a single line of code, our lead engineers architect the technical foundation. We select the optimal database schema, cloud infrastructure, and API patterns for maximum scalability.", 
    deliverables: ["Architecture Diagrams", "Tech Stack Selection", "Security Protocols"] 
  },
  { 
    id: "03", 
    title: "UI/UX Engineering", 
    desc: "Our design team creates pixel-perfect, highly interactive prototypes. We focus on frictionless user journeys and premium aesthetics that elevate your brand's digital presence.", 
    deliverables: ["Figma Prototypes", "Design System", "User Flow Maps"] 
  },
  { 
    id: "04", 
    title: "Agile Development", 
    desc: "We execute the build in rigorous two-week sprints. You get continuous visibility into our progress through staging environments, ensuring the product evolves exactly as intended.", 
    deliverables: ["Clean Codebase", "API Documentation", "Bi-weekly Demos"] 
  },
  { 
    id: "05", 
    title: "Quality Assurance", 
    desc: "We don't rely on hope. Our QA engineers deploy extensive automated testing suites alongside rigorous manual testing to ensure a completely bug-free release.", 
    deliverables: ["Test Coverage Reports", "Load Testing Results", "Bug-Free Build"] 
  },
  { 
    id: "06", 
    title: "Deployment", 
    desc: "We utilize advanced CI/CD pipelines for a zero-downtime deployment. Our DevOps team ensures the infrastructure is fully provisioned and ready to handle immediate production traffic.", 
    deliverables: ["Live Application", "CI/CD Pipeline Setup", "Monitoring Dashboards"] 
  },
  { 
    id: "07", 
    title: "Post-Launch Support", 
    desc: "Our relationship doesn't end at launch. We provide 24/7 SLA-backed monitoring, iterative feature updates, and continuous performance optimization to keep you ahead of the curve.", 
    deliverables: ["SLA Agreement", "24/7 Monitoring", "Iterative Roadmaps"] 
  }
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the massive container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Map the scroll progress (0 to 1) to the active step index (0 to 6)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.round(latest * (steps.length - 1));
    
    // Clamp values to prevent out of bounds
    if (index < 0) index = 0;
    if (index >= steps.length) index = steps.length - 1;
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    // The massive scroll track (400vh gives plenty of scrolling room)
    <section id="process" ref={containerRef} className="relative bg-background z-10" style={{ height: "400vh" }}>
      
      {/* The Sticky Viewport that locks to the screen while you scroll down */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
          
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">Delivery <span className="text-primary">Methodology.</span></h2>
            <p className="text-sm md:text-base font-medium text-muted-foreground max-w-xl mx-auto">
              Scroll down to journey through our battle-tested engineering process.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Horizontal Progress Bar */}
            <div className="relative w-full max-w-3xl mx-auto flex items-center justify-between">
              {/* Background Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border/50 rounded-full z-0" />
              
              {/* Active Progress Line */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-300 ease-out"
                style={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
              />

              {/* Nodes */}
              {steps.map((step, i) => {
                const isActive = activeIndex === i;
                const isPast = i <= activeIndex;
                
                return (
                  <div
                    key={step.id}
                    className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-300 ${
                      isActive 
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] scale-125" 
                      : isPast 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background border-2 border-border/50 text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                )
              })}
            </div>

            {/* Single Display Card */}
            <div className="glass rounded-[2rem] border border-border/50 p-8 md:p-12 relative overflow-hidden min-h-[350px] shadow-2xl flex items-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full"
                >
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-black text-sm md:text-base tracking-widest bg-primary/10 px-4 py-1 rounded-full uppercase">Step {steps[activeIndex].id}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-foreground">
                    {steps[activeIndex].title}
                  </h3>
                  
                  <p className="text-base md:text-lg font-medium text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    {steps[activeIndex].desc}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4 opacity-70">Key Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {steps[activeIndex].deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
