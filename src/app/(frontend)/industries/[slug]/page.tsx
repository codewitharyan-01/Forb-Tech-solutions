import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industriesData } from "@/content/industries";
import { projectsData } from "@/content/projects";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.title} Website & Digital Solutions | Gujarat`,
    description: industry.headline,
    openGraph: {
      title: `${industry.title} Solutions | ForbTech`,
      description: industry.headline,
      url: `${siteConfig.siteUrl}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find linked live project
  const exampleProject = projectsData.find((p) => p.slug === industry.exampleProjectSlug);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
          className="mb-8"
        />

        {/* Industry Hero */}
        <div className="max-w-4xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Industry Blueprint • {industry.title}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            {industry.headline}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Stop losing local customers to competitors with higher Google visibility. We build dedicated conversion pathways tailored specifically for {industry.title.toLowerCase()} businesses in Gujarat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <WhatsAppCTA
              size="lg"
              label={`Discuss ${industry.title} Project`}
              message={`Hi Aryan, I run a ${industry.title} business and want to discuss digital setup.`}
            />
            <Button href="#quote-form" variant="secondary" size="lg">
              Get Fixed Scope Quote
            </Button>
          </div>
        </div>

        {/* Pain Points vs What We Build */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 md:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)]">
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-3">
              Common Bottlenecks
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-6">
              Challenges your business faces today:
            </h2>
            <ul className="space-y-4 text-sm text-[var(--muted-text)]">
              {industry.painPoints.map((pain, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[var(--muted-text)] font-medium shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-3">
              The Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-6">
              What we build to resolve them:
            </h2>
            <ul className="space-y-4 text-sm text-[var(--foreground)]">
              {industry.whatWeBuild.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example Live Project Showcase */}
        {exampleProject && (
          <div className="mb-20">
            <SectionHeader
              eyebrow="Proven Results"
              title={`Live Case Study: ${exampleProject.title}`}
              subhead="Inspect the real live site we built for a client in this exact sector."
            />

            <div className="max-w-2xl mx-auto">
              <ProjectCard project={exampleProject} />
            </div>
          </div>
        )}

        {/* Lead Capture Form */}
        <div id="quote-form" className="max-w-4xl mx-auto pt-12 border-t border-[var(--line)]">
          <QuoteForm initialService="website-development" />
        </div>
      </div>
    </div>
  );
}
