import React from "react";
import type { Metadata } from "next";
import { faqsData } from "@/content/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Pricing, Timelines & Ownership",
  description:
    "Honest answers to common questions about website pricing, Google Business Profile ranking, code ownership, and timelines in Gujarat.",
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "FAQ" }]} className="mb-8" />

        <div className="mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Transparent Policies • Plain Language
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Everything you need to know about pricing, code ownership, 4G mobile performance, and launch timelines before we start.
          </p>
        </div>

        {/* Full FAQ Accordion */}
        <div className="mb-20">
          <Accordion
            items={faqsData.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
            allowMultiple={true}
          />
        </div>

        {/* Still Have Questions Box */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-8 md:p-12 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
            Direct Founder Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-3">
            Have a question not listed here?
          </h2>
          <p className="text-base text-[var(--muted-text)] max-w-lg mx-auto mb-8 leading-relaxed">
            Message founder Aryan directly on WhatsApp. We provide honest answers tailored to your specific business requirements with zero sales pressure.
          </p>
          <WhatsAppCTA
            size="lg"
            label="Ask Aryan on WhatsApp"
            message="Hi Aryan, I have a specific question about building a website for my business."
          />
        </div>
      </div>
    </div>
  );
}
