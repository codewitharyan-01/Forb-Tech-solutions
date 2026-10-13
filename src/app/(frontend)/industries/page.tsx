import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/content/industries";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ArrowRight, Stethoscope, Utensils, Dumbbell, ShoppingBag, Building2, GraduationCap, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions | Built for Gujarat Local Businesses",
  description:
    "Tailored digital solutions for Gujarat doctors, clinics, restaurants, gyms, retail stores, real estate developers, and industrial manufacturers.",
};

const industryIcons: Record<string, React.ReactNode> = {
  clinics: <Stethoscope className="w-5 h-5 text-[var(--foreground)]" />,
  restaurants: <Utensils className="w-5 h-5 text-[var(--foreground)]" />,
  gyms: <Dumbbell className="w-5 h-5 text-[var(--foreground)]" />,
  ecommerce: <ShoppingBag className="w-5 h-5 text-[var(--foreground)]" />,
  "real-estate": <Building2 className="w-5 h-5 text-[var(--foreground)]" />,
  education: <GraduationCap className="w-5 h-5 text-[var(--foreground)]" />,
  manufacturing: <Factory className="w-5 h-5 text-[var(--foreground)]" />,
};

export default function IndustriesHubPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Industries" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Sector Specialisation
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Solutions tailored to how your customers decide.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            A medical clinic needs appointment scheduling; a manufacturer needs technical inquiries. We build specialized digital funnels designed for specific local customer behavior.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center mb-6">
                  {industryIcons[ind.slug] || <Building2 className="w-5 h-5 text-[var(--foreground)]" />}
                </div>

                <h2 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-3">
                  {ind.title}
                </h2>

                <p className="text-sm text-[var(--muted-text)] leading-relaxed mb-6">
                  {ind.headline}
                </p>

                <div className="p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] text-xs text-[var(--muted-text)] mb-6">
                  <span className="font-semibold text-[var(--foreground)] block mb-1">Target Outcome:</span>
                  <span>{ind.keyMetric}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-xs text-[var(--muted-text)]">
                  Proof: {ind.exampleProjectName}
                </span>

                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
