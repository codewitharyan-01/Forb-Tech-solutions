import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Founder Aryan & ForbTech | Local Digital Partner in Gujarat",
  description:
    "Learn about Aryan, founder of ForbTech. Why we build fast, budget-friendly websites for small businesses across Gujarat with 100% code ownership.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: "About" }]} className="mb-10" />

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-3">
            Founder Story &bull; Gujarat
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            Crafting software for businesses that build Gujarat.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            ForbTech was founded to solve a straightforward challenge: local businesses were paying agency retainers for slow, bloated websites that failed to turn Google searches into customers.
          </p>
        </div>

        {/* Narrative & Founder Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[var(--foreground)] leading-relaxed font-normal">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              The Purpose
            </h2>
            <p className="text-[var(--muted-text)]">
              In cities like Ahmedabad, Surat, and Gandhinagar, exceptional clinics, farsan shops, gyms, and retail stores have loyal neighborhood foot-traffic. But when new residents or out-of-town buyers search for their services on Google, they are invisible.
            </p>
            <p className="text-[var(--muted-text)]">
              Traditional tech agencies often compound the problem with three common practices:
            </p>
            <ul className="space-y-3 pl-2 text-xs sm:text-sm text-[var(--foreground)]">
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--muted-text)] font-semibold">01</span>
                <span>Unpredictable hourly billing with surprise add-on charges.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--muted-text)] font-semibold">02</span>
                <span>Sluggish WordPress templates that take 8 seconds to open on mobile networks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--muted-text)] font-semibold">03</span>
                <span>Locking clients into proprietary setups and monthly maintenance retainers.</span>
              </li>
            </ul>
            <p className="text-[var(--muted-text)]">
              I established ForbTech on an uncompromising standard: <strong>fast, custom-coded websites and Google Maps listings with 100% full ownership handed directly to the client</strong>. No corporate jargon, no sales pressure, and a direct line to the engineer who actually builds your software.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
            <div className="flex items-center gap-4 border-b border-[var(--line)] pb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center font-semibold text-lg shrink-0">
                A
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight">Aryan</h3>
                <p className="text-xs text-[var(--muted-text)]">Founder &amp; Lead Engineer</p>
                <p className="text-xs text-[var(--muted-text)] mt-0.5">Gujarat, India</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[var(--foreground)]">
              <div className="flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                <span>Direct WhatsApp contact on every active project</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                <span>100% client ownership of code, domain, and accounts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                <span>Fixed price quotes defined and agreed upfront</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)]">
              <WhatsAppCTA
                size="md"
                label="Chat with Aryan"
                message="Hi Aryan, I read your story on ForbTech and would like to discuss a project."
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* 4 Core Standards */}
        <div className="mb-24">
          <SectionHeader
            eyebrow="Standards"
            title="The principles we build by."
            subhead="Every technical and design decision is measured against these four commitments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-2">01</span>
              <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                100% Ownership
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Your domain, hosting accounts, and every line of code belong to you. We never lock you in.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-2">02</span>
              <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                4G Speed First
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Websites engineered to open under 2.0 seconds on standard mobile networks without lag.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-2">03</span>
              <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                Fixed Estimates
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Scope is locked before deposit. The price agreed upon is the exact price you pay.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-2">04</span>
              <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                Clear Communication
              </h3>
              <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                Zero jargon. Straight answers and progress updates directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-10 text-center max-w-2xl mx-auto shadow-sm">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-3">
            Inspect our live track record.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-text)] mb-6 font-normal leading-relaxed">
            Test the 6 live client projects built by ForbTech to verify performance and design quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 text-xs font-medium transition-colors shadow-xs"
            >
              <span>View live projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <WhatsAppCTA size="sm" label="Chat with Aryan" />
          </div>
        </div>
      </div>
    </div>
  );
}
