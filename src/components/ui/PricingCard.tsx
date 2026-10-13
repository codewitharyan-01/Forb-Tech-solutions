import React from "react";
import { PricingPackage } from "@/content/pricing";
import { Check, X } from "lucide-react";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { Button } from "./Button";

interface PricingCardProps {
  pkg: PricingPackage;
}

export function PricingCard({ pkg }: PricingCardProps) {
  const isHighlight = pkg.highlight;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-8 md:p-10 transition-all duration-300 ${
        isHighlight
          ? "bg-[var(--surface)] border-2 border-[#0071e3] shadow-[0_12px_40px_rgba(0,113,227,0.12)]"
          : "bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
      }`}
    >
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="text-[11px] font-semibold tracking-tight px-3 py-1 rounded-full bg-[#0071e3] text-white shadow-xs">
            Most Popular
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">
            {pkg.name}
          </h3>
          <p className="text-xs text-[var(--muted-text)] mt-1 font-normal leading-relaxed">
            {pkg.tagline}
          </p>
        </div>

        {/* Price & Turnaround */}
        <div className="mb-2">
          <span className="text-xs text-[var(--muted-text)] font-normal block">Starts at</span>
          <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] mt-1">
            {pkg.startingPrice}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-sunken)] text-xs font-normal text-[var(--muted-text)] mb-8 border border-[var(--line)]">
          <span>Delivery:</span>
          <span className="text-[var(--foreground)] font-medium">{pkg.deliveryTime}</span>
        </div>

        {/* Fit */}
        <div className="p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] mb-8 text-xs text-[var(--muted-text)]">
          <span className="font-semibold text-[var(--foreground)] block mb-0.5">Recommended for:</span>
          {pkg.recommendedFor}
        </div>

        {/* Included Features */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-[var(--foreground)] block mb-3.5">
            Key Inclusions:
          </span>
          <ul className="space-y-3 text-xs text-[var(--foreground)]">
            {pkg.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                <span className="font-normal">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        {pkg.whatIsNotIncluded.length > 0 && (
          <div className="mb-8 pt-6 border-t border-[var(--line)]">
            <span className="text-xs font-medium text-[var(--muted-text)] block mb-3">
              Not included in this tier:
            </span>
            <ul className="space-y-2 text-xs text-[var(--muted-text)]">
              {pkg.whatIsNotIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <X className="w-3 h-3 text-[var(--muted-text)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Conversion Actions */}
      <div className="pt-6 border-t border-[var(--line)] flex flex-col gap-2.5">
        <WhatsAppCTA
          message={`Hi Aryan, I'm interested in the ${pkg.name} (${pkg.startingPrice}) for my business.`}
          label={`Get ${pkg.name}`}
          size="md"
          className={isHighlight ? "bg-[#0071e3] hover:bg-[#0077ed]" : ""}
        />
        <Button
          href={`/contact?package=${pkg.id}`}
          variant="secondary"
          size="sm"
          className="w-full text-xs"
        >
          Request Written Quote
        </Button>
      </div>
    </div>
  );
}
