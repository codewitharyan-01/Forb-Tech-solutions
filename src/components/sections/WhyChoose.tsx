"use client";

import { Sparkles } from "lucide-react"

const reasons = [
  "Tailor-Made Solutions",
  "Experienced Team",
  "Modern Tech & AI",
  "Fast & Agile",
  "Secure & Scalable",
  "Transparent Comms",
  "Affordable Pricing",
  "On-Time Delivery",
  "Dedicated Support"
]

export function WhyChoose() {
  // Duplicate array multiple times to ensure the marquee never runs out of content on ultra-wide screens
  const duplicatedReasons = [...reasons, ...reasons, ...reasons, ...reasons]

  return (
    <section className="py-12 relative z-10 overflow-hidden bg-foreground text-background">
      
      {/* Decorative top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-background/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-background/20" />

      {/* Infinite Marquee Container */}
      <div className="flex overflow-hidden w-full relative group">
        
        {/* Left / Right Fade Gradients for smooth blending */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className="flex items-center gap-12 px-6" 
          style={{ animation: "marquee 60s linear infinite", width: "max-content" }}
        >
          {duplicatedReasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase whitespace-nowrap opacity-90 hover:opacity-100 hover:text-primary transition-colors cursor-default">
                {reason}
              </h3>
              <Sparkles strokeWidth={1.2} className="w-8 h-8 text-primary shrink-0 opacity-50" />
            </div>
          ))}
        </div>
        
      </div>

    </section>
  )
}
