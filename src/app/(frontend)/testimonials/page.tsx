import React from "react";
import type { Metadata } from "next";
import { testimonialsData } from "@/content/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews & Verified Testimonials",
  description:
    "Read real reviews from Gujarat business owners who partnered with ForbTech. Verified clinic, gym, restaurant, and e-commerce projects.",
};

export default function TestimonialsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Testimonials" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Verified Client Outcomes
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Real feedback from local business founders.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Zero fabricated testimonials. Every review below is from a real business project with a live website or Google profile you can verify.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
            Direct References
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-3">
            Want to see industry-specific case studies?
          </h2>
          <p className="text-base text-[var(--muted-text)] mb-8 leading-relaxed max-w-lg mx-auto">
            Connect directly with founder Aryan. We can share real performance numbers and references tailored to your specific sector.
          </p>
          <WhatsAppCTA
            size="lg"
            label="Chat with Aryan on WhatsApp"
            message="Hi Aryan, I read your client testimonials and want to see how you can help my business."
          />
        </div>
      </div>
    </div>
  );
}
