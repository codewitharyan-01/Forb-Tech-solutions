"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  { q: "Timelines?", a: "MVP in 4-8 weeks. Enterprise builds in 3-6 months via agile sprints." },
  { q: "Security?", a: "SOC2, GDPR, HIPAA compliance. End-to-end encryption by default." },
  { q: "Maintenance?", a: "24/7 SLA-backed support and continuous integration monitoring." },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 max-w-2xl mx-auto relative z-10">
      
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black tracking-tight mb-2">Knowledge Base</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass border border-foreground/10 overflow-hidden transition-all duration-500 ${
                isOpen ? 'rounded-[2rem]' : 'rounded-full'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-sm text-left">{faq.q}</span>
                <motion.div 
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0"
                >
                  <Plus className="w-4 h-4 text-foreground" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
