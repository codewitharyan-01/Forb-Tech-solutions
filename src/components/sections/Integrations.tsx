"use client";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Server, Smartphone, Database, Cloud, Bot, X } from "lucide-react"
import { TextReveal } from "@/components/ui/TextReveal"

const stackCategories = [
  { id: "frontend", name: "Frontend", span: "md:col-span-2", icon: <Monitor className="w-8 h-8" />, techs: ["React", "Next.js", "Angular", "TailwindCSS", "TypeScript", "Framer Motion"], detail: "We engineer blazingly fast, highly interactive client-side applications. Using modern frameworks like Next.js and React, we ensure optimal SEO, sub-second rendering, and flawless state management across complex enterprise user interfaces." },
  { id: "database", name: "Database", span: "md:col-span-1", icon: <Database className="w-8 h-8" />, techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"], detail: "Data is the lifeblood of modern applications. We design normalized relational architectures and ultra-fast NoSQL clusters, backed by distributed caching layers to guarantee instant data retrieval and absolute structural integrity." },
  { id: "backend", name: "Backend", span: "md:col-span-2", icon: <Server className="w-8 h-8" />, techs: ["Node.js", "Express", "Python", "Java", "Go", "GraphQL"], detail: "Our server-side architectures are built for absolute scale. We develop secure, high-throughput REST and GraphQL APIs capable of handling millions of concurrent requests, processing heavy computational loads, and streaming data in real-time." },
  { id: "cloud", name: "Cloud", span: "md:col-span-1", icon: <Cloud className="w-8 h-8" />, techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"], detail: "We deploy containerized, auto-scaling infrastructure on the world's leading cloud platforms. Through Docker and Kubernetes, we ensure zero-downtime deployments, global edge-network distribution, and ironclad cloud security." },
  { id: "mobile", name: "Mobile", span: "md:col-span-1", icon: <Smartphone className="w-8 h-8" />, techs: ["Flutter", "React Native", "Swift"], detail: "Native performance meets cross-platform efficiency. We build fluid, 60fps mobile applications that leverage deep hardware APIs, offline-first synchronization, and intuitive gesture controls for iOS and Android." },
  { id: "ai", name: "AI & ML", span: "md:col-span-2", icon: <Bot className="w-8 h-8" />, techs: ["OpenAI", "Anthropic", "LangChain", "TensorFlow", "PyTorch"], detail: "We integrate frontier intelligence into your product. From fine-tuning custom LLMs for proprietary knowledge retrieval to deploying computer vision models, we automate cognitive workflows that were previously impossible." },
]

export function Integrations() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  return (
    <section id="ecosystem" className="py-12 relative z-10 overflow-hidden bg-background">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-foreground">
            <TextReveal>The Ecosystem.</TextReveal>
          </h2>
        </div>

        {/* The Periodic Table (Expandable Bento Grid) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {stackCategories.map((cat, index) => {
              const isExpanded = expandedId === cat.id;
              const isFaded = expandedId !== null && !isExpanded;

              return (
                <motion.div
                  layout
                  key={cat.id}
                  onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className={`${isExpanded ? "md:col-span-3 row-span-2" : cat.span} ${isFaded ? "opacity-40 grayscale scale-95 cursor-pointer" : "cursor-pointer"}`}
                >
                  <div className={`h-full bg-background border border-border/50 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:border-primary/50 relative ${isExpanded ? 'bg-background/95 backdrop-blur-3xl border-primary shadow-primary/10' : 'glass'}`}>
                    
                    {/* Hover Glow */}
                    {!isExpanded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    )}

                    <motion.div layout="position" className={`flex h-full ${isExpanded ? 'flex-col md:flex-row p-6 md:p-12 gap-6 md:gap-12' : 'flex-col justify-between p-4 md:p-6'}`}>
                      
                      {/* Icon & Title */}
                      <div className={`flex ${isExpanded ? 'flex-col md:w-1/3' : 'items-center gap-2 md:gap-3 mb-4 md:mb-5'}`}>
                        <div className={`text-primary flex items-center justify-center shrink-0 ${isExpanded ? 'w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl md:rounded-2xl mb-4 md:mb-6' : 'w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg md:rounded-xl'}`}>
                          <div className={isExpanded ? "scale-125 md:scale-150" : "scale-[0.5] md:scale-[0.6]"}>{cat.icon}</div>
                        </div>
                        <h3 className={`${isExpanded ? 'text-2xl md:text-5xl font-black' : 'text-lg md:text-2xl font-bold md:font-black'} tracking-tight leading-none`}>
                          {cat.name}
                        </h3>
                      </div>

                      {/* Content Area */}
                      <div className={`flex flex-col ${isExpanded ? 'md:w-2/3 justify-center' : ''}`}>
                        
                        {/* Detail Text (Only visible when expanded) */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm md:text-lg text-muted-foreground font-medium text-justify mb-6 md:mb-8 leading-relaxed"
                            >
                              {cat.detail}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {cat.techs.map((tech, i) => (
                            <span
                              key={i}
                              className={`rounded-lg border text-foreground font-bold transition-colors ${
                                isExpanded 
                                ? "px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm bg-primary/5 border-primary/20 text-primary" 
                                : "px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs bg-foreground/5 border-border/50 hover:bg-background hover:border-primary/30 shadow-sm"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
