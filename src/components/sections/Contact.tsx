"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle2, User, Mail, Phone, MapPin, Globe } from "lucide-react"

export function Contact() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        className="glass group border border-foreground/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(6, 182, 212, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        <div className="flex-1 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Ready to Grow Your Business?</h2>
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Let’s Build Smart Digital Solutions Together.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {["Free Consultation", "Custom Quote", "End-to-End Development"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 opacity-50" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
          
          <Button className="h-14 rounded-full px-8 font-bold shadow-md hover:-translate-y-0.5 transition-transform">
            Let's Build Something Amazing <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex-1 glass-light dark:glass-dark rounded-[2rem] border border-foreground/10 p-6 flex flex-col gap-4 relative z-10 bg-background/50 backdrop-blur-xl">
          <div className="flex items-center gap-4 border-b border-foreground/10 pb-4">
            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <User className="w-6 h-6 opacity-70" />
            </div>
            <div>
              <h4 className="font-bold">Aryan Patel</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">Founder & Owner, FORBTECH</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
             <a href="tel:+919023668571" className="flex items-center gap-3 text-sm font-semibold hover:text-muted-foreground transition-colors"><Phone className="w-4 h-4 opacity-50" /> +91 9023668571</a>
             <a href="mailto:forbteck@gmail.com" className="flex items-center gap-3 text-sm font-semibold hover:text-muted-foreground transition-colors"><Mail className="w-4 h-4 opacity-50" /> forbteck@gmail.com</a>
             <a href="https://forbtech.varcel.app" className="flex items-center gap-3 text-sm font-semibold hover:text-muted-foreground transition-colors"><Globe className="w-4 h-4 opacity-50" /> forbtech.varcel.app</a>
             <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground"><MapPin className="w-4 h-4 opacity-50" /> Ahmedabad, Gujarat, India</div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
