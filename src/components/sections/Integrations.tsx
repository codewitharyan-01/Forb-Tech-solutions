"use client";

import { motion } from "framer-motion"
import { Monitor, Server, Smartphone, Database, Cloud, Bot } from "lucide-react"
import { TextReveal } from "@/components/ui/TextReveal"
import { TiltCard } from "@/components/ui/TiltCard"

const stackCategories = [
  { id: "frontend", name: "Frontend", span: "md:col-span-2", icon: <Monitor className="w-8 h-8" />, techs: ["React", "Next.js", "Angular", "TailwindCSS", "TypeScript", "Framer Motion"] },
  { id: "database", name: "Database", span: "md:col-span-1", icon: <Database className="w-8 h-8" />, techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { id: "backend", name: "Backend", span: "md:col-span-2", icon: <Server className="w-8 h-8" />, techs: ["Node.js", "Express", "Python", "Java", "Go", "GraphQL"] },
  { id: "cloud", name: "Cloud", span: "md:col-span-1", icon: <Cloud className="w-8 h-8" />, techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { id: "mobile", name: "Mobile", span: "md:col-span-1", icon: <Smartphone className="w-8 h-8" />, techs: ["Flutter", "React Native", "Swift"] },
  { id: "ai", name: "AI & ML", span: "md:col-span-2", icon: <Bot className="w-8 h-8" />, techs: ["OpenAI", "Anthropic", "LangChain", "TensorFlow", "PyTorch"] },
]

export function Integrations() {
  return (
    <section id="ecosystem" className="py-12 relative z-10 overflow-hidden bg-background">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-foreground">
            <TextReveal>The Ecosystem.</TextReveal>
          </h2>
          <p className="text-sm font-medium text-muted-foreground max-w-xl mx-auto">
            A panoramic view of our enterprise-grade engineering stack.
          </p>
        </div>

        {/* The Periodic Table (Bento Grid) - COMPACT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {stackCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cat.span}
            >
              <TiltCard className={`glass border border-border/50 rounded-2xl p-5 md:p-6 flex flex-col justify-between group hover:border-primary/50 transition-colors shadow-lg relative overflow-hidden h-full`}>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <div className="scale-[0.6]">{cat.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-none">{cat.name}</h3>
                  </div>
                </div>

                {/* Technologies Cluster */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {cat.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-foreground/5 border border-border/50 text-foreground text-xs font-bold shadow-sm group-hover:bg-background group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
