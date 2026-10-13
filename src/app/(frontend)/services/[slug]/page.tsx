import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Accordion } from "@/components/ui/Accordion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, X, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} for Small Businesses`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ForbTech`,
      description: service.shortDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) =>
    service.relevantProjects.includes(p.id)
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      "@type": "State",
      name: "Gujarat",
    },
    offers: {
      "@type": "Offer",
      price: service.startingPrice.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
    },
  };

  return (
    <div className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          items={[{ label: "Services", href: "/services" }, { label: service.title }]}
          className="mb-10"
        />

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--apple-blue)]">
              {service.deliveryTime} Turnaround
            </span>
            <span className="text-xs text-[var(--muted-text)]">&bull;</span>
            <span className="text-xs text-[var(--muted-text)]">Starts from {service.startingPrice}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            {service.heroHeadline}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            {service.heroSubhead}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <WhatsAppCTA
              size="lg"
              message={`Hi Aryan, I want to discuss ${service.title} (${service.startingPrice}) for my business.`}
              label={`Discuss ${service.title}`}
            />
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--apple-blue)] hover:underline px-4 py-2"
            >
              <span>Get fixed scope quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Who This Is For vs Who This Is NOT For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h2 className="text-lg font-semibold text-[var(--foreground)] tracking-tight mb-4">
              Best suited for:
            </h2>
            <ul className="space-y-3 text-sm text-[var(--foreground)]">
              {service.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
            <h2 className="text-lg font-semibold text-[var(--foreground)] tracking-tight mb-4">
              Not suitable for:
            </h2>
            <ul className="space-y-3 text-sm text-[var(--muted-text)]">
              {service.whoItIsNotFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[var(--muted-text)] shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <SectionHeader
            eyebrow="Deliverables"
            title="Included with every build."
            subhead="Everything required for a verified, fast, and secure launch."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]"
              >
                <Check className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                <span className="font-normal text-[var(--foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process & Timeline */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Milestones"
            title={`${service.deliveryTime} delivery roadmap.`}
            subhead="Step-by-step progress tracking on WhatsApp."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-[var(--muted-text)]">
                    Stage 0{step.step}
                  </span>
                  <span className="text-xs font-medium text-[var(--apple-blue)]">
                    {step.days}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--muted-text)] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Live Projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-20">
            <SectionHeader
              eyebrow="Proof"
              title="Verified projects in this category."
              subhead="Inspect the live code and real mobile load speed."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="mb-20 max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Service inquiries."
          />

          <Accordion
            items={service.faqs.map((f, i) => ({
              id: `faq-${i}`,
              question: f.q,
              answer: f.a,
            }))}
          />
        </div>

        {/* Lead Quote Form */}
        <div id="quote-form" className="max-w-3xl mx-auto pt-8 border-t border-[var(--line)]">
          <QuoteForm initialService={service.slug} />
        </div>
      </div>
    </div>
  );
}
