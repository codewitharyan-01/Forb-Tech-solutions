import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Services for Local Businesses in Gujarat",
  description:
    "Fast website development, Google Maps SEO ranking, WhatsApp catalogs, and custom apps. Transparent fixed pricing, 7-day turnaround, and 100% code ownership.",
};

export default function ServicesHubPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Services" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Direct Engineering • Fixed Scope
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Digital solutions engineered for real local impact.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Fast mobile performance on 4G, verified Google local search placement, and direct WhatsApp customer conversion. Built with zero lock-in contracts.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Apple-style Guarantee Banner */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)]">
                Our Guarantee
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em]">
                100% Client Ownership &amp; Zero Lock-In.
              </h2>
              <p className="text-base text-[var(--muted-text)] leading-relaxed">
                Unlike agencies that charge monthly fees to hold your website hostage, every domain, repository, and cloud deployment we build belongs entirely to you from day one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[var(--foreground)]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0" />
                  <span>Domain and hosting accounts registered in your name</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0" />
                  <span>Full source code transferred to your GitHub</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <WhatsAppCTA
                size="lg"
                label="Discuss Your Requirements"
                message="Hi Aryan, I'm reviewing your services and would like advice on what fits my business."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
