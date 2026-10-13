"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/content/projects";
import { ExternalLink, Star, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Work" },
  { id: "clinics", label: "Healthcare & Clinics" },
  { id: "gyms", label: "Fitness & Gyms" },
  { id: "ecommerce", label: "Food & Commerce" },
];

export function AppleWorkShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.industry === selectedCategory);

  return (
    <section className="py-24 md:py-36 bg-[var(--surface-sunken)] border-t border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase block mb-3">
              Verified Production Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.1]">
              Live client websites. Tested on real devices.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--muted-text)] font-normal leading-relaxed">
              Every project below is a real, live business in Gujarat. Tap any card to test mobile load speed and WhatsApp lead capture for yourself.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[var(--foreground)] text-[var(--background)] shadow-sm"
                    : "bg-[var(--surface)] text-[var(--muted-text)] hover:text-[var(--foreground)] border border-[var(--line)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-medium text-[var(--muted-text)]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#34c759] bg-[#34c759]/10 px-2.5 py-0.5 rounded-full">
                    <Zap className="w-3 h-3" />
                    <span>Sub-1.5s 4G</span>
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors mb-2">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-[var(--muted-text)] font-normal leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Outcome Pill */}
                <div className="p-3.5 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] text-xs text-[var(--foreground)] mb-6">
                  <span className="text-[10px] uppercase font-semibold text-[var(--muted-text)] block mb-1">
                    Key Result
                  </span>
                  <span className="font-medium">{project.measurableResult}</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-semibold text-[var(--foreground)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
                >
                  Case Study &rarr;
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
                >
                  <span>Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Want to see an interactive demo tailored to your exact industry?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--muted-text)]">
              We can walk you through live client performance numbers and WhatsApp order funnels in a quick 10-minute chat.
            </p>
          </div>

          <Link
            href="/work"
            className="shrink-0 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Explore All 6 Live Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
