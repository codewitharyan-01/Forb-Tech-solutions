"use client";

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  { quote: "FORBTECH completely re-architected our legacy monolith into a blazingly fast microservices ecosystem. Unmatched engineering.", author: "Sarah Jenkins", role: "CTO, Fintech Corp" },
  { quote: "Their UI/UX team thinks like product owners. The mobile app they built increased our user retention by 300% in one quarter.", author: "Marcus Thorne", role: "Founder, HealthAI" },
  { quote: "Zero downtime during a migration of 10 million user records. These guys are absolute machines.", author: "Elena Rodriguez", role: "VP Engineering, ScaleUp" }
]

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-black tracking-tight mb-2">Social Proof</h2>
        <p className="text-sm text-muted-foreground font-medium">Validated by engineering leaders.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-4 md:pl-8 lg:pl-12 pb-12 gap-6 relative z-10">
        {testimonials.map((test, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="snap-center shrink-0 w-[85vw] md:w-[400px] glass-light dark:glass-dark rounded-[2.5rem] p-8 md:p-10 border border-foreground/10 flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Quote className="w-16 h-16 text-foreground" />
            </div>

            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10">
              &quot;{test.quote}&quot;
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-foreground/10 border border-foreground/20" />
              <div>
                <h4 className="font-bold text-sm">{test.author}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for right edge */}
        <div className="w-4 md:w-12 shrink-0" />
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
    </section>
  )
}
