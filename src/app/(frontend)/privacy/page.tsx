import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy (DPDP Act 2023 Compliant)",
  description:
    "ForbTech privacy policy detailing what data is collected, why, retention limits, and data deletion requests under the Indian DPDP Act 2023.",
};

export default function PrivacyPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-8" />

        <div className="mb-12 pb-8 border-b border-[var(--line)]">
          <Badge variant="neutral" size="sm" className="mb-4" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            DPDP Act 2023 Compliant
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[var(--muted-text)]">
            Last Updated: October 2024 • Governed by the laws of Gujarat, India.
          </p>
        </div>

        <div className="prose-readable space-y-8 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">1. Overview &amp; Data Fiduciary</h2>
            <p className="text-[var(--muted-text)]">
              This Privacy Policy explains how <strong>ForbTech</strong> (operated by founder Aryan, based in Gujarat, India) collects, processes, and protects your personal data in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">2. What Data We Collect</h2>
            <p className="text-[var(--muted-text)] mb-3">
              We collect minimal data required to respond to your project inquiries and provide web development services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--muted-text)]">
              <li><strong>Contact Information:</strong> Your name, phone/WhatsApp number, and email address when you submit our quote form or chat on WhatsApp.</li>
              <li><strong>Business Information:</strong> Your business name, category (e.g., clinic, gym, shop), and required services.</li>
              <li><strong>Technical Data:</strong> Basic anonymized network logs (IP address, device type) used solely for rate-limiting and preventing spam bot submissions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">3. Purpose of Data Processing</h2>
            <p className="text-[var(--muted-text)] mb-3">
              We process your personal data strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--muted-text)]">
              <li>Sending you written project quotes, scope blueprints, and technical advice.</li>
              <li>Communicating project milestones during an active website build.</li>
              <li>Preventing malicious bot submissions on our lead forms.</li>
            </ul>
            <p className="text-[var(--muted-text)] mt-2 font-semibold">
              We never sell, rent, or trade your contact information to third-party telemarketers or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">4. Data Retention &amp; Security</h2>
            <p className="text-[var(--muted-text)]">
              Inquiry data is retained only as long as necessary to fulfill project communications or comply with statutory tax records. If you do not proceed with a project, you may request deletion of your information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">5. Your Rights as a Data Principal</h2>
            <p className="text-[var(--muted-text)] mb-2">
              Under the DPDP Act 2023, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--muted-text)]">
              <li>Obtain a summary of personal data held about you.</li>
              <li>Request correction or updating of inaccurate data.</li>
              <li>Request complete erasure of your personal details from our records.</li>
              <li>Nominate another individual in case of incapacity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">6. Grievance Officer &amp; Contact</h2>
            <p className="text-[var(--muted-text)] mb-2">
              For any data privacy concerns, requests for deletion, or inquiries:
            </p>
            <div className="p-4 rounded-lg bg-[var(--surface-hover)] border border-[var(--line)] text-xs sm:text-sm space-y-1">
              <p><strong>Grievance Officer:</strong> Aryan</p>
              <p><strong>Designation:</strong> Founder, ForbTech</p>
              <p><strong>Email:</strong> {siteConfig.email}</p>
              <p><strong>WhatsApp / Phone:</strong> {siteConfig.phoneDisplay}</p>
              <p><strong>Location:</strong> Gujarat, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
