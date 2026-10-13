import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | ForbTech",
  description:
    "Milestone-based refund and cancellation terms for website development and digital services with ForbTech.",
};

export default function RefundPolicyPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Refund Policy" }]} className="mb-8" />

        <div className="mb-12 pb-8 border-b border-[var(--line)]">
          <Badge variant="neutral" size="sm" className="mb-4" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            Fair &amp; Transparent
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[var(--muted-text)]">
            Last Updated: October 2024 • Clear milestone-based guidelines.
          </p>
        </div>

        <div className="prose-readable space-y-8 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">1. Philosophy</h2>
            <p className="text-[var(--muted-text)]">
              At ForbTech, we strive for complete transparency. Because our services involve custom design, software engineering, and third-party infrastructure provisioning, we uphold a fair, milestone-based cancellation policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">2. Cancellation Prior to Design Commencement</h2>
            <p className="text-[var(--muted-text)]">
              If a client requests project cancellation within 24 hours of paying an advance deposit and before wireframing or custom development has commenced, we issue a <strong>100% full refund</strong> of the deposit, minus any third-party fees already incurred (such as domain registration fees paid directly to registrars like GoDaddy or Namecheap, which are non-refundable by registrars).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">3. Cancellation During Development</h2>
            <p className="text-[var(--muted-text)]">
              If a project is halted after custom coding has begun but prior to final live deployment, the 50% advance deposit covers design and coding labor already completed. The client is not obligated to pay the final 50% balance, and any draft design files or components created up to that date will be handed over to the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">4. Post-Launch &amp; Completed Deliverables</h2>
            <p className="text-[var(--muted-text)]">
              Once the client reviews the staging preview, approves live domain deployment, and receives full source code and credentials, services are considered fully delivered and accepted. No refunds are granted once live code handover is executed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">5. Processing of Refunds</h2>
            <p className="text-[var(--muted-text)]">
              Approved refunds are processed via the original payment method (Bank NEFT / UPI) within 5 to 7 business days. For inquiries, email us at <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[var(--deep-indigo)] underline">{siteConfig.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
