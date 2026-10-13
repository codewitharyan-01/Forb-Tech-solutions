import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Transparent 4-Step Process & Timeline",
  description:
    "See how we take your project from an idea to live on Google in 7 to 10 days. Clear deliverables, client checklist, and communication rules.",
};

const processStages = [
  {
    step: "01",
    title: "Discovery",
    timeline: "Day 1",
    headline: "Understanding your business goals and customer type",
    desc: "A 15-minute conversation on WhatsApp to understand who your customers are, your core services, and your target locality in Gujarat. No pitch decks or sales friction.",
    clientProvides: [
      "Business name and physical/service locality",
      "Phone numbers for customer calls and WhatsApp inquiries",
      "List of primary services or products offered",
    ],
    clientReceives: [
      "Clarity on whether a 1-page site, multi-page site, or e-commerce catalog is right for you",
      "Immediate ballpark pricing estimate",
    ],
  },
  {
    step: "02",
    title: "Blueprint",
    timeline: "Day 2",
    headline: "Locking in exact deliverables and fixed pricing",
    desc: "We define every page, component, and deliverable in plain language. Once you review and approve this blueprint, you transfer the 50% project advance.",
    clientProvides: [
      "Approval of the scope blueprint",
      "High-resolution photos of your clinic/shop/products",
      "50% project advance deposit",
    ],
    clientReceives: [
      "Signed scope agreement with locked launch date",
      "Checklist of all milestone deliverables",
    ],
  },
  {
    step: "03",
    title: "Build & Test",
    timeline: "Day 3 - 6",
    headline: "Handcrafted code tested for Indian 4G speed",
    desc: "We build your website using modern Next.js and Tailwind CSS. We optimize every image, hook up WhatsApp buttons, configure Google Maps schemas, and provide you with a private live staging link.",
    clientProvides: [
      "Feedback on the private preview link tested directly on your phone",
      "Any minor text or pricing adjustments",
    ],
    clientReceives: [
      "Private live preview link to test on your phone",
      "Sub-2s mobile load speed report",
      "Interactive WhatsApp and call button verification",
    ],
  },
  {
    step: "04",
    title: "Launch",
    timeline: "Day 7",
    headline: "Live to the world with full ownership transfer",
    desc: "Once you approve the preview, we connect your custom domain name, configure SSL security, submit the sitemap to Google Search Console, and hand over 100% of credentials.",
    clientProvides: [
      "Final approval of the live website",
      "Remaining 50% project balance",
    ],
    clientReceives: [
      "Live website accessible worldwide on your domain",
      "Google Search Console & Google Maps verification submission",
      "100% source code repository transferred to your private GitHub",
      "30 to 60 days of complimentary post-launch support",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: "Process" }]} className="mb-10" />

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-3">
            Predictable Milestones &bull; 7-Day Turnaround
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            From concept to live on Google.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            No corporate bureaucracy, no months of waiting. Here is exactly what happens from our first conversation to the day your business goes live on Google.
          </p>
        </div>

        {/* 4 Process Stages */}
        <div className="space-y-10 mb-24">
          {processStages.map((stage) => (
            <div
              key={stage.step}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--line)] pb-6 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[var(--muted-text)] block mb-1">
                    Stage {stage.step} &bull; {stage.timeline}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">
                    {stage.title}
                  </h2>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--muted-text)] self-start sm:self-center">
                  {stage.headline}
                </span>
              </div>

              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-8 font-normal">
                {stage.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[var(--line)]">
                <div className="p-5 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
                  <span className="text-xs font-semibold text-[var(--foreground)] block mb-3">
                    What we need from you:
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--muted-text)]">
                    {stage.clientProvides.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--foreground)]">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
                  <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-3">
                    What you receive:
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--foreground)]">
                    {stage.clientReceives.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Rules */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-20">
          <SectionHeader
            eyebrow="Standards"
            title="Our communication standards."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
              <h3 className="font-semibold text-[var(--foreground)] tracking-tight mb-2">
                Direct WhatsApp Channel
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                You communicate directly with Aryan. No account managers or delayed email threads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
              <h3 className="font-semibold text-[var(--foreground)] tracking-tight mb-2">
                Daily Progress Visibility
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Regular staging previews so you can test updates directly on your smartphone.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
              <h3 className="font-semibold text-[var(--foreground)] tracking-tight mb-2">
                24-Hour Resolution
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Text or photo adjustments requested during the support window are addressed within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppCTA
            size="lg"
            label="Start with Stage 01"
            message="Hi Aryan, I'd like to start Discovery for my business."
          />
        </div>
      </div>
    </div>
  );
}
