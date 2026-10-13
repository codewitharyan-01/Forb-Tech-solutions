import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Free Quote Request",
  description:
    "Contact founder Aryan at ForbTech for a fixed-price website or Google Business Profile quote. Direct WhatsApp chat, phone, and Gujarat service area.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: "Contact" }]} className="mb-10" />

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-3">
            Direct Founder Contact
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            Start a project or request a quote.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            Communicate directly with founder Aryan. No sales representatives, automated loops, or corporate delays. We reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
              <h2 className="text-lg font-semibold text-[var(--foreground)] tracking-tight border-b border-[var(--line)] pb-4">
                Direct Contact
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[var(--surface-sunken)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                    <Phone className="w-4 h-4 text-[var(--foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-xs">WhatsApp &amp; Phone</h3>
                    <p className="text-xs text-[var(--muted-text)] mt-0.5">
                      Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM IST
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline block mt-1"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[var(--surface-sunken)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                    <Mail className="w-4 h-4 text-[var(--foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-xs">Email</h3>
                    <p className="text-xs text-[var(--muted-text)] mt-0.5">
                      For formal RFQs and requirement documents
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline block mt-1"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[var(--surface-sunken)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                    <MapPin className="w-4 h-4 text-[var(--foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-xs">Base &amp; Service Area</h3>
                    <p className="text-xs text-[var(--muted-text)] mt-0.5">
                      {siteConfig.addressLocality}, Gujarat, India
                    </p>
                    <span className="text-[11px] text-[var(--muted-text)] block mt-0.5">
                      Serving Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot &amp; worldwide.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[var(--surface-sunken)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                    <Clock className="w-4 h-4 text-[var(--foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-xs">Business Hours</h3>
                    <p className="text-xs text-[var(--muted-text)] mt-0.5">
                      {siteConfig.openingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <WhatsAppCTA size="md" label="Message on WhatsApp" className="w-full" />
              </div>
            </div>

            {/* Checklist */}
            <div className="p-6 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] space-y-3 text-xs text-[var(--muted-text)]">
              <span className="font-semibold text-[var(--foreground)] block">
                What to expect:
              </span>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#34c759]" />
                <span>We review your requirements and target audience.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#34c759]" />
                <span>You receive a scope blueprint and fixed price within 24h.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#34c759]" />
                <span>Zero sales pressure. 100% decision is yours.</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
