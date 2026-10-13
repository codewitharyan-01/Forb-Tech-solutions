"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, User, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

export function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10"
      >
        <div className="flex-1 relative z-10">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[var(--foreground)] leading-tight mb-3">
            Ready to grow your business online?
          </h2>
          <p className="text-base text-[var(--muted-text)] font-normal leading-relaxed mb-8">
            Tell us about your project. We deliver fixed scopes, transparent pricing, and 7-day turnaround with zero technical fluff.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {["Free Consultation & Technical Blueprint", "Fixed Pricing with Zero Hidden Costs", "100% Client Ownership from Day One"].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-[var(--foreground)]">
                <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Request a Free Quote
          </Button>
        </div>

        <div className="flex-1 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 border-b border-[var(--line)] pb-5 mb-5">
              <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                <User className="w-5 h-5 text-[var(--foreground)]" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-[var(--foreground)]">{siteConfig.founderName}</h4>
                <p className="text-xs text-[var(--muted-text)] uppercase tracking-wider mt-0.5">Founder &amp; Lead Engineer</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-[var(--foreground)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                <Phone className="w-4 h-4 text-[var(--muted-text)] shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-[var(--foreground)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                <Mail className="w-4 h-4 text-[var(--muted-text)] shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--foreground)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                <MessageCircle className="w-4 h-4 text-[var(--muted-text)] shrink-0" />
                <span>WhatsApp ({siteConfig.phoneDisplay})</span>
              </a>
              <div className="flex items-center gap-3 text-[var(--muted-text)] pt-1">
                <MapPin className="w-4 h-4 text-[var(--muted-text)] shrink-0" />
                <span>{siteConfig.addressRegion}, {siteConfig.addressCountry}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[var(--line)] text-xs text-[var(--muted-text)]">
            <span>Operating hours: 9:00 AM – 8:00 PM IST (Mon–Sat)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
