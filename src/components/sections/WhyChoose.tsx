"use client";

import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Custom Software Tailored to Your Business Goals",
  "Award-Winning Engineering & UI/UX Design",
  "Enterprise-Grade Security & Scalability Built-In",
  "Seamless Cloud Integrations (AWS & Azure)",
  "Lightning Fast Web Apps Powered by Next.js",
  "Dedicated 24/7 Technical Support & Maintenance",
  "100% Transparent Communication & Agile Workflows",
  "AI-Powered Automations to Save 40+ Hours a Week"
]

export function WhyChoose() {
  // Duplicate array multiple times to ensure the marquee never runs out of content on ultra-wide screens
  const duplicatedReasons = [...reasons, ...reasons, ...reasons, ...reasons]

  return (
    <section className="py-10 md:py-16 relative z-10 overflow-hidden bg-background/50 backdrop-blur-2xl border-y border-border/50">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      {/* Infinite Marquee Container */}
      <div className="flex overflow-hidden w-full relative group">
        
        {/* Left / Right Fade Gradients for smooth blending */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - Slower and smoother */}
        <div 
          className="flex items-center gap-10 md:gap-16 px-6" 
          style={{ animation: "marquee 160s linear infinite", width: "max-content" }}
        >
          {duplicatedReasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 shrink-0 group-hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-xl md:text-3xl font-black tracking-tight text-foreground opacity-90 transition-colors cursor-default whitespace-nowrap">
                {reason}
              </h3>
            </div>
          ))}
        </div>
        
      </div>

    </section>
  )
}
