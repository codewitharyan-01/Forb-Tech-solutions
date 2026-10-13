import React from "react";
import type { Metadata } from "next";
import { projectsData } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | 6 Verified Live Projects",
  description:
    "Explore 6 live projects built for Gujarat clinics, gyms, restaurants, and retail stores. Test our speed, inspect the code, and read real client results.",
};

export default function WorkPage() {
  return (
    <div className="py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <Breadcrumb items={[{ label: "Our Work" }]} className="mb-10" />

        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-3">
            Portfolio &bull; Verified Live
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            Software built for Gujarat businesses.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--muted-text)] leading-relaxed prose-readable font-normal">
            No mockups of imaginary brands. Every project below is live on the internet, built for an active business owner, and tested on mobile networks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-2">
              Interested in a similar build for your business?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted-text)] max-w-lg leading-relaxed font-normal">
              Message founder Aryan directly on WhatsApp. We can discuss your business niche and deliver a finished site in 7 to 10 days.
            </p>
          </div>

          <WhatsAppCTA
            size="md"
            label="Chat on WhatsApp"
            message="Hi Aryan, I saw your live projects on ForbTech and want to discuss building something similar for my business."
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
