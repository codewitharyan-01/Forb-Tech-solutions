import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/content/projects";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ExternalLink, Check, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} Case Study | ${project.category}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} Case Study | ForbTech`,
      description: project.summary,
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          items={[{ label: "Our Work", href: "/work" }, { label: project.title }]}
          className="mb-10"
        />

        {/* Case Study Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
              {project.category}
            </span>
            <span className="text-xs text-[var(--muted-text)]">&bull;</span>
            <span className="text-xs text-[var(--muted-text)]">Client: {project.client}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            {project.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 text-xs font-medium transition-colors shadow-xs"
            >
              <span>Visit live site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <WhatsAppCTA
              size="sm"
              label="Discuss a similar build"
              message={`Hi Aryan, I reviewed your case study for ${project.title} and want something similar.`}
            />
          </div>
        </div>

        {/* Challenge, Solution, Outcome Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <span className="text-xs font-semibold text-[var(--muted-text)] block mb-2">
              The Challenge
            </span>
            <p className="text-sm text-[var(--foreground)] leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <span className="text-xs font-semibold text-[var(--muted-text)] block mb-2">
              Engineered Solution
            </span>
            <p className="text-sm text-[var(--foreground)] leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
            <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] block mb-2">
              Measurable Outcome
            </span>
            <p className="text-sm text-[var(--foreground)] leading-relaxed font-medium">
              {project.measurableResult}
            </p>
          </div>
        </div>

        {/* Deliverables & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h2 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-6">
              Deliverables Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {project.deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
                  <Check className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                  <span className="font-normal text-[var(--foreground)]">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h2 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-4">
              Tech Stack
            </h2>
            <p className="text-xs text-[var(--muted-text)] mb-4 font-normal">
              Modern tooling ensuring sub-2s mobile load times:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techUsed.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Client Quote */}
        {project.testimonial && (
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)] block mb-3">
              Client Feedback
            </span>
            <p className="text-lg sm:text-xl font-normal text-[var(--foreground)] leading-relaxed mb-4">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <p className="text-xs text-[var(--muted-text)] font-normal">
              &mdash; {project.testimonial.author}, {project.testimonial.designation}
            </p>
          </div>
        )}

        {/* Next Project & Bottom Conversion */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            <span>Next project: {nextProject.title}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <WhatsAppCTA
            size="md"
            label="Discuss Your Project"
            message={`Hi Aryan, I was reading the ${project.title} case study and want to get a quote for my business.`}
          />
        </div>
      </div>
    </div>
  );
}
