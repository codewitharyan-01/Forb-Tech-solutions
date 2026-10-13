import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/siteConfig";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: "Aryan",
      jobTitle: "Founder at ForbTech",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
    datePublished: "2024-10-01",
  };

  return (
    <article className="py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
          className="mb-8"
        />

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-[var(--line)]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="neutral" size="sm">
              {post.category}
            </Badge>
            <span className="text-xs text-[var(--muted-text)] flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.03em] leading-[1.1] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--muted-text)] font-normal">
            <span className="flex items-center gap-1.5 text-[var(--foreground)]">
              <User className="w-4 h-4 text-[var(--muted-text)]" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.publishedDate}</span>
            </span>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose-readable text-[var(--foreground)] text-base sm:text-lg leading-relaxed space-y-6">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[var(--foreground)] mt-10 mb-4">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("#### ")) {
              return (
                <h4 key={idx} className="text-xl font-semibold text-[var(--foreground)] mt-8 mb-3">
                  {trimmed.replace("#### ", "")}
                </h4>
              );
            }

            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={idx} className="space-y-2.5 pl-4 list-disc text-base text-[var(--muted-text)] my-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }

            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split("\n").filter((line) => /^\d+\.\s/.test(line));
              return (
                <ol key={idx} className="space-y-2.5 pl-4 list-decimal text-base text-[var(--muted-text)] my-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s/, "")}</li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={idx} className="text-[var(--muted-text)] leading-relaxed text-base sm:text-lg">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Post-Article Conversion Box */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[var(--surface-sunken)] border border-[var(--line)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-1">
                Direct Consultation
              </span>
              <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-2">
                Have questions about your business?
              </h3>
              <p className="text-sm text-[var(--muted-text)] max-w-md leading-relaxed">
                Chat directly with founder Aryan. We can evaluate your current website or Google Maps listing at no charge.
              </p>
            </div>

            <WhatsAppCTA
              size="lg"
              label="Discuss on WhatsApp"
              message={`Hi Aryan, I read your article "${post.title}" and want some advice for my business.`}
              className="shrink-0"
            />
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-[var(--line)]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
