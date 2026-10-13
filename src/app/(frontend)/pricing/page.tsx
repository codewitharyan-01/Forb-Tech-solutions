import React from "react";
import type { Metadata } from "next";
import { pricingPackages, pricingAddons, paymentTerms } from "@/content/pricing";
import { faqsData } from "@/content/faqs";
import { PricingCard } from "@/components/ui/PricingCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Accordion } from "@/components/ui/Accordion";
import { CostEstimator } from "@/components/ui/CostEstimator";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Predictable, Fixed Pricing for Gujarat Businesses",
  description:
    "Transparent pricing for websites, Google Maps SEO, and digital shops in Gujarat. Starter from ₹7,999. No recurring monthly lock-ins, 100% code ownership.",
};

export default function PricingPage() {
  const pricingFaqs = faqsData.filter((f) => f.category === "pricing" || f.category === "ownership");

  return (
    <div className="py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <Breadcrumb items={[{ label: "Pricing" }]} className="mb-10" />

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-3">
            Predictable Investment &bull; 100% Ownership
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            Fixed pricing for growing businesses.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            No monthly maintenance retainers, no surprise invoices, and no holding your domain name hostage. Every deliverable is defined and fixed upfront.
          </p>
        </div>

        {/* 3 Core Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24 items-stretch">
          {pricingPackages.map((pkg) => (
            <div key={pkg.id} id={pkg.id}>
              <PricingCard pkg={pkg} />
            </div>
          ))}
        </div>

        {/* Interactive Cost Estimator Widget */}
        <div className="mb-24">
          <SectionHeader
            eyebrow="Interactive"
            title="Configure your estimate."
            subhead="Select your requirements and calculate an immediate ballpark range."
          />
          <CostEstimator />
        </div>

        {/* Transparent Add-ons Menu */}
        <div className="mb-24">
          <SectionHeader
            eyebrow="Optional Upgrades"
            title="Infrastructure and service add-ons."
            subhead="Select only what your business requires. Zero bundling pressure."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingAddons.map((addon, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] tracking-tight mb-1">
                    {addon.title}
                  </h3>
                  <p className="text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-3 mt-2">
                    {addon.price}
                  </p>
                  <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[var(--line)]">
                  <WhatsAppCTA
                    size="sm"
                    label={`Inquire ${addon.title}`}
                    message={`Hi Aryan, I want to add ${addon.title} (${addon.price}) to my website package.`}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms & Transparency Guarantee */}
        <div className="mb-24 p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <SectionHeader
            eyebrow="Integrity"
            title="Our payment and ownership standards."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentTerms.map((term, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]"
              >
                <span className="text-xs font-semibold text-[var(--muted-text)] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  {term.title}
                </h3>
                <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <SectionHeader
            eyebrow="Questions"
            title="Pricing and billing inquiries."
          />

          <Accordion
            items={pricingFaqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center p-10 md:p-12 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-tight mb-3">
            Still deciding which tier matches your business?
          </h2>
          <p className="text-sm text-[var(--muted-text)] max-w-lg mx-auto mb-8 font-normal leading-relaxed">
            Message founder Aryan directly on WhatsApp. We will recommend the exact scope needed with zero pressure.
          </p>
          <WhatsAppCTA
            size="lg"
            label="Chat with Aryan on WhatsApp"
            message="Hi Aryan, I reviewed the pricing packages and want your advice on what fits my business."
          />
        </div>
      </div>
    </div>
  );
}
