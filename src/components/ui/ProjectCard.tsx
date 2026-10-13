import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/content/projects";
import { ExternalLink, ChevronRight, Check } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--surface-sunken)] text-[var(--muted-text)]">
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[var(--muted-text)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
          >
            <span>Live site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[var(--muted-text)] mb-6 font-normal">
          Client: {project.client}
        </p>

        {/* Problem & Solution Clean Text */}
        <div className="space-y-4 mb-6 text-xs text-[var(--muted-text)] leading-relaxed">
          <div>
            <span className="font-semibold text-[var(--foreground)] block mb-1">Challenge:</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="font-semibold text-[var(--foreground)] block mb-1">Solution:</span>
            <p>{project.solution}</p>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] mb-6 text-xs">
          <span className="font-semibold text-[var(--foreground)] block mb-1">
            Measurable Outcome:
          </span>
          <p className="text-[var(--muted-text)] leading-relaxed font-normal">
            {project.measurableResult}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techUsed.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--surface-sunken)] text-[var(--muted-text)] border border-[var(--line)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-[var(--line)] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
        >
          <span>Case study</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium px-4 py-1.5 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-all shadow-xs"
        >
          View live &rarr;
        </a>
      </div>
    </div>
  );
}
