"use client";

import { motion } from "framer-motion"

const stats = [
  { val: "99.9%", label: "Uptime SLA", trend: "+0.1%" },
  { val: "500+", label: "Projects", trend: "+20 this quarter" },
  { val: "$50M", label: "Revenue", trend: "Verified" }
]

export function Stats() {
  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden min-h-[60vh] flex flex-col justify-center">
      
      <div className="max-w-5xl mx-auto w-full relative">
        <div className="mb-12 text-center md:text-left">
           <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Insights.</h2>
           <p className="text-sm font-medium text-muted-foreground">Live telemetry and business metrics.</p>
        </div>

        {/* Intersecting Panels */}
        <div className="flex flex-col md:flex-row items-center justify-center -space-y-6 md:space-y-0 md:-space-x-8">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-full md:rounded-[3rem] w-full max-w-[280px] aspect-square flex flex-col justify-center items-center text-center shadow-2xl border border-foreground/10 relative z-${30 - i * 10} ${
                i === 1 ? 'bg-foreground text-background scale-110 z-40' : 'bg-background/80'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 ${i === 1 ? 'bg-background/20' : 'bg-foreground/5'}`}>
                {s.trend}
              </span>
              <span className="text-4xl md:text-5xl font-black tracking-tighter mb-1">{s.val}</span>
              <span className={`text-xs font-bold uppercase tracking-widest ${i === 1 ? 'text-background/70' : 'text-muted-foreground'}`}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
