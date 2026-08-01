"use client";

import { motion } from "framer-motion"

const techStacks = [
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind", "Framer Motion"] },
  { category: "Backend", skills: ["Node.js", "Python", "Go", "GraphQL"] },
  { category: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { category: "AI & Data", skills: ["OpenAI", "LangChain", "Vector DBs", "TensorFlow"] }
]

export function Technologies() {
  return (
    <section className="py-32 bg-foreground text-background relative z-10 overflow-hidden">
      
      {/* Decorative massive blurred background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-background/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">The Stack.</h2>
          <p className="text-xl opacity-70 font-medium max-w-2xl mx-auto">
            We operate exclusively on modern, high-performance tech stacks. Legacy code has no place here.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {techStacks.map((stack, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              <h3 className="text-2xl md:text-4xl font-bold w-48 text-right opacity-50">{stack.category}</h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 flex-1">
                {stack.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="px-6 py-4 rounded-[1.5rem] bg-background/10 backdrop-blur-md border border-background/20 font-black text-lg md:text-2xl tracking-tight hover:bg-background hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
