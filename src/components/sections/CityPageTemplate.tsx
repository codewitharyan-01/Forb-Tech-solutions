import React from "react";
import Link from "next/link";
import { CityItem } from "@/content/cities";
import { siteConfig } from "@/content/siteConfig";
import { projectsData } from "@/content/projects";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Accordion } from "@/components/ui/Accordion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, ChevronRight } from "lucide-react";

interface CityPageTemplateProps {
  city: CityItem;
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const localProjects = projectsData.slice(0, 3);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.brandName} - ${city.cityName}`,
    description: city.metaDescription,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.cityName,
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: city.cityName,
    },
    url: `${siteConfig.siteUrl}/${city.slug}`,
  };

  return (
    <div className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb items={[{ label: city.title }]} className="mb-10" />

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--apple-blue)] block mb-3">
            Service Area &bull; {city.cityName}, Gujarat
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            {city.headline}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            {city.subhead}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <WhatsAppCTA
              size="lg"
              label={`Chat About ${city.cityName} Website`}
              message={`Hi Aryan, I run a business in ${city.cityName} and want to discuss building a website.`}
            />
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--apple-blue)] hover:underline px-4 py-2"
            >
              <span>Get a free quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Local Business Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-4">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">
              Why Local Businesses in {city.cityName} Need Speed
            </h2>
            <p className="text-sm text-[var(--muted-text)] leading-relaxed font-normal">
              {city.localContext}
            </p>
            <div className="pt-6 border-t border-[var(--line)] space-y-2.5 text-xs text-[var(--foreground)]">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#34c759]" />
                <span className="font-normal">On-page Local SEO schema targeted specifically to {city.cityName}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#34c759]" />
                <span className="font-normal">1-Tap WhatsApp and call buttons for mobile customers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#34c759]" />
                <span className="font-normal">Google Maps #1 ranking optimization &amp; review QR funnels</span>
              </div>
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 tracking-tight">
              Key Areas Served:
            </h3>
            <ul className="space-y-2 text-xs text-[var(--muted-text)] mb-6">
              {city.keyAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted-text)]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 tracking-tight">
              Local Industries:
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {city.popularIndustries.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted-text)]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live Work Proof */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Proof"
            title="Recent projects built in Gujarat."
            subhead="Tested on Indian mobile networks with sub-2s load speeds."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>

        {/* Local FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <SectionHeader
            eyebrow="Local Inquiries"
            title={`Website development in ${city.cityName}.`}
          />

          <Accordion
            items={city.localFaqs.map((f, i) => ({
              id: `faq-city-${i}`,
              question: f.q,
              answer: f.a,
            }))}
          />
        </div>

        {/* Lead Quote Form */}
        <div id="quote-form" className="max-w-3xl mx-auto pt-8 border-t border-[var(--line)]">
          <QuoteForm initialService="website-development" />
        </div>
      </div>
    </div>
  );
}
