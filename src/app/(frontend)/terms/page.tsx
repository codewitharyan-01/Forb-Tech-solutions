import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Transparent Client Agreement",
  description:
    "ForbTech terms of service. Transparent milestone payments, 100% code and domain ownership guarantee, and project delivery terms.",
};

export default function TermsPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Terms of Service" }]} className="mb-8" />

        <div className="mb-12 pb-8 border-b border-[var(--line)]">
          <Badge variant="neutral" size="sm" className="mb-4" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            Transparent Engagement
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[var(--muted-text)]">
            Last Updated: October 2024 • Governing Jurisdiction: Gujarat, India.
          </p>
        </div>

        <div className="prose-readable space-y-8 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">1. Agreement &amp; Scope</h2>
            <p className="text-[var(--muted-text)]">
              These Terms of Service govern all website development, Google Business Profile optimization, and IT consulting services provided by <strong>ForbTech</strong> to our clients. Prior to initiating any build, we supply a written scope blueprint outlining deliverables, milestones, and fixed pricing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">2. Milestone Payment Terms</h2>
            <p className="text-[var(--muted-text)] mb-3">
              Unless explicitly agreed otherwise in a custom enterprise contract:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[var(--muted-text)]">
              <li><strong>50% Advance Deposit:</strong> Due upon written approval of the project scope blueprint before development commences.</li>
              <li><strong>50% Final Balance:</strong> Due only after the website has been staged, tested on mobile devices, and approved by the client for live domain launch.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">3. 100% Client Ownership Guarantee</h2>
            <p className="text-[var(--muted-text)] mb-3">
              We operate on an absolute ownership model:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--muted-text)]">
              <li><strong>Domain Names:</strong> Registered directly under your name and contact details.</li>
              <li><strong>Source Code:</strong> Full source code is transferred to your GitHub or designated repository upon final milestone settlement.</li>
              <li><strong>Hosting &amp; Accounts:</strong> Created in your cloud accounts with full admin rights. We hold zero proprietary software hostage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">4. Client Responsibilities</h2>
            <p className="text-[var(--muted-text)]">
              To ensure on-time delivery within our 7 to 10 day window, the client agrees to provide necessary text details, photos of products/locations, and timely feedback on preview staging links within 48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">5. Post-Launch Warranty &amp; Support</h2>
            <p className="text-[var(--muted-text)]">
              All website builds include 30 to 60 days of complimentary bug-fixing and minor text adjustments. Requests for new major features or additional pages beyond the agreed scope blueprint will be quoted as separate milestone enhancements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">6. Governing Law &amp; Jurisdiction</h2>
            <p className="text-[var(--muted-text)]">
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad / Gandhinagar, Gujarat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
