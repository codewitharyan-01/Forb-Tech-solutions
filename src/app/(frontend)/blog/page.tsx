import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Business Tech & SEO Guides for Gujarat",
  description:
    "Practical guides on website costs, Google Maps ranking, and cutting delivery commissions for small businesses across Gujarat.",
};

export default function BlogHubPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Blog" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <Badge variant="neutral" size="sm" className="mb-4">
            Practical Guides • Plain Language
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.08]">
            Practical guides for local business growth.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Transparent analysis on website development costs in Gujarat, Google Maps local ranking factors, and direct WhatsApp customer funnels.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="neutral" size="sm">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-[var(--muted-text)] font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors mb-3 tracking-[-0.02em] leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-[var(--muted-text)] leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-xs text-[var(--muted-text)]">
                  {post.publishedDate}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
