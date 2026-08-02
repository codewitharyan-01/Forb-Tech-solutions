"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Landmark, Home, Factory, Truck, Utensils, X } from "lucide-react"

const industries = [
  { id: "startups", name: "Startups", icon: <Building2 strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "Agile MVPs & scaling infrastructure built for rapid iteration and Series A readiness.", stats: ["Rapid Prototyping", "Scalable Architecture"] },
  { id: "finance", name: "Finance", icon: <Landmark strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "Secure fintech & banking systems with military-grade compliance and encryption.", stats: ["SOC2 Compliant", "End-to-End Encryption"] },
  { id: "ecommerce", name: "E-Commerce", icon: <ShoppingBag strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "High-conversion storefronts capable of handling massive Black Friday traffic spikes.", stats: ["Sub-second Loads", "Global CDNs"] },
  { id: "healthcare", name: "Healthcare", icon: <Stethoscope strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "HIPAA compliant systems protecting sensitive patient data and telehealth workflows.", stats: ["HIPAA Compliant", "Data Redundancy"] },
  { id: "education", name: "Education", icon: <GraduationCap strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "EdTech & learning platforms serving millions of concurrent active users worldwide.", stats: ["High Concurrency", "Video Streaming"] },
  { id: "realestate", name: "Real Estate", icon: <Home strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "Property tech solutions redefining how we buy, sell, and manage physical assets.", stats: ["Data Pipelines", "Geospatial APIs"] },
  { id: "manufacturing", name: "Manufacturing", icon: <Factory strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "IoT & supply chain dashboards for factory floor analytics and real-time monitoring.", stats: ["IoT Integration", "Real-time Sockets"] },
  { id: "logistics", name: "Logistics", icon: <Truck strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />, desc: "Global tracking & fleet management algorithms optimizing routes instantly.", stats: ["Route Optimization", "Live Tracking"] }
]

export function Industries() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="py-12 relative z-10 overflow-hidden bg-background">
      
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-foreground">Domain <span className="text-primary">Expertise.</span></h2>
        </div>

        {/* Dynamic Island Pills Container */}
        <motion.div 
          layout 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          <AnimatePresence>
            {industries.map((ind) => {
              const isActive = activeId === ind.id;

              return (
                <motion.div
                  key={ind.id}
                  layout
                  onClick={() => !isActive && setActiveId(ind.id)}
                  className={`cursor-pointer overflow-hidden relative shadow-lg ${
                    isActive 
                    ? "w-full md:w-[600px] h-auto rounded-[2rem] bg-primary border-primary text-primary-foreground shadow-primary/20" 
                    : "w-44 md:w-56 h-14 md:h-16 rounded-full glass border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  initial={{ borderRadius: 9999 }}
                  animate={{ 
                    borderRadius: isActive ? 32 : 9999,
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20, restDelta: 2 }}
                >
                  
                  {/* INACTIVE STATE (The Pill) */}
                  {!isActive && (
                    <motion.div 
                      layout="position"
                      className="flex items-center justify-center h-full px-4 gap-2 md:gap-3 w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-primary shrink-0">{ind.icon}</div>
                      <span className="font-bold text-sm md:text-base tracking-tight truncate">{ind.name}</span>
                    </motion.div>
                  )}

                  {/* ACTIVE STATE (The Expanded Card) */}
                  {isActive && (
                    <motion.div
                      layout="position"
                      className="p-8 md:p-10 flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.1 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    >
                      {/* Top Bar inside expanded card */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-background/20 flex items-center justify-center">
                            {ind.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight">{ind.name}</h3>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(null);
                          }}
                          className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
                        >
                          <X strokeWidth={1.2} className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Content */}
                      <p className="text-base md:text-lg font-medium text-primary-foreground/90 leading-relaxed mb-8">
                        {ind.desc}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {ind.stats.map((stat, j) => (
                          <span key={j} className="px-4 py-2 rounded-full border border-background/20 bg-background/10 text-xs font-bold uppercase tracking-widest">
                            {stat}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  )}

                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
