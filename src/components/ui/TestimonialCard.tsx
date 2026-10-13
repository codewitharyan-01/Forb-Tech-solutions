import React from "react";
import Link from "next/link";
import { TestimonialItem } from "@/content/testimonials";
import { Star, ChevronRight } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-300">
      <div>
        {/* Rating and Verified Badge */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center text-[#ff9500]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--muted-text)]">
            Verified Client
          </span>
        </div>

        {/* Full Quote */}
        <p className="text-base text-[var(--foreground)] leading-relaxed mb-8 font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author and Project Link */}
      <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)] tracking-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-[var(--muted-text)] font-normal">
            {testimonial.business} &bull; {testimonial.location}
          </p>
        </div>

        {testimonial.projectSlug && (
          <Link
            href={`/work/${testimonial.projectSlug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
            title="View live project case study"
          >
            <span>Case study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
