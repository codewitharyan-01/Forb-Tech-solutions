"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/content/testimonials";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
          Verified Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          Client Feedback.
        </h2>
        <p className="text-base text-[var(--muted-text)] font-normal mt-2">
          Real business owners across Gujarat with verified live projects.
        </p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-4 sm:pl-6 md:pl-8 lg:pl-12 pb-8 gap-6 relative z-10">
        {testimonialsData.map((test, i) => (
          <motion.div 
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="snap-center shrink-0 w-[85vw] md:w-[420px] rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center gap-1 mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-[var(--foreground)] font-normal leading-relaxed mb-8">
                &ldquo;{test.quote}&rdquo;
              </p>
            </div>
            
            <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[var(--foreground)]">{test.name}</h4>
                <p className="text-xs text-[var(--muted-text)] mt-0.5">{test.business} • {test.location}</p>
              </div>
              <span className="text-[11px] font-medium text-[var(--muted-text)] uppercase tracking-wider">
                {test.role}
              </span>
            </div>
          </motion.div>
        ))}
        {/* Spacer for right edge */}
        <div className="w-4 md:w-12 shrink-0" />
      </div>
    </section>
  );
}
