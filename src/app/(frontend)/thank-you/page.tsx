import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, MessageSquare, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quote Request Received | Thank You",
  description: "We have received your project details and will send your quote within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-tight mb-4">
          Quote request received.
        </h1>

        <p className="text-lg text-[var(--muted-text)] font-normal leading-relaxed mb-10">
          Thank you for reaching out to ForbTech. Founder Aryan will evaluate your business requirements and send an itemized scope blueprint within 24 hours.
        </p>

        {/* What Happens Next Card */}
        <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] text-left mb-8 space-y-6">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block">
            What Happens Next
          </span>

          <div className="flex items-start gap-4 text-sm text-[var(--muted-text)]">
            <Clock className="w-4 h-4 text-[var(--foreground)] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--foreground)] block mb-0.5">1. Requirements Review</span>
              <span className="leading-relaxed">We audit your location, target customer search volume, and competitor websites.</span>
            </div>
          </div>

          <div className="flex items-start gap-4 text-sm text-[var(--muted-text)]">
            <MessageSquare className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--foreground)] block mb-0.5">2. Direct Founder Response</span>
              <span className="leading-relaxed">We message you directly on WhatsApp with a fixed proposal and estimated launch date.</span>
            </div>
          </div>
        </div>

        {/* Skip the line CTA */}
        <div className="p-8 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] text-center mb-10">
          <p className="text-sm font-semibold text-[var(--foreground)] mb-4">
            Prefer an immediate response without waiting?
          </p>
          <WhatsAppCTA
            size="lg"
            label="Chat with Aryan on WhatsApp"
            message="Hi Aryan, I just submitted the quote form on ForbTech and wanted to connect right away."
          />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
