"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Paintbrush } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const jobs = [
  {
    title: "Freelance UI/UX Designer",
    type: "Project Basis",
    location: "Remote (Gujarat / India)",
    salary: "Competitive INR",
    icon: Paintbrush,
  },
  {
    title: "Frontend Developer (Next.js / React)",
    type: "Contract",
    location: "Remote (Gujarat / India)",
    salary: "Paid Stipend / Project",
    icon: Code,
  },
  {
    title: "Mobile App Developer (React Native / Flutter)",
    type: "Contract",
    location: "Remote",
    salary: "Project Basis",
    icon: Terminal,
  }
];

export default function CareersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Careers" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Collaboration &amp; Network
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Build with us on ambitious client projects.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            We partner with independent designers, engineers, and mobile specialists to build high-performance products for growing local businesses.
          </p>
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-4 mb-20">
          {jobs.map((job, index) => (
            <motion.a
              key={index}
              href="mailto:forbteck@gmail.com?subject=Collaboration Inquiry: "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center shrink-0">
                  <job.icon className="w-5 h-5 text-[var(--foreground)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors tracking-[-0.01em]">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-text)] mt-1">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-[var(--line)] gap-6">
                <span className="text-sm font-medium text-[var(--muted-text)]">
                  {job.salary}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] dark:text-[#2997ff]">
                  <span>Apply</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Spontaneous Application */}
        <div className="rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)] p-8 md:p-12 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
            General Inquiries
          </span>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-3">
            Don&apos;t see an exact fit?
          </h2>
          <p className="text-base text-[var(--muted-text)] max-w-md mx-auto mb-6 leading-relaxed">
            We are always eager to meet skilled developers and designers based in Gujarat or working remotely across India.
          </p>
          <a
            href="mailto:forbteck@gmail.com?subject=Portfolio Submission - ForbTech Network"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Email Portfolio to Aryan
          </a>
        </div>
      </div>
    </div>
  );
}
