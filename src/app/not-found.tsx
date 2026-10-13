import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 text-center px-4">
      <div className="max-w-xl mx-auto">
        <span className="text-7xl sm:text-8xl font-semibold text-[var(--foreground)] tracking-[-0.04em] block mb-4">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em] mb-3">
          Page not found.
        </h1>

        <p className="text-base text-[var(--muted-text)] font-normal leading-relaxed mb-10 max-w-md mx-auto">
          The page you requested could not be located. Explore our core services or get in touch directly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-xs sm:text-sm font-medium">
          <Link
            href="/"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Homepage
          </Link>
          <Link
            href="/services"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Portfolio
          </Link>
          <Link
            href="/pricing"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--line-heavy)] hover:bg-[var(--surface-sunken)] transition-all"
          >
            Guides
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <WhatsAppCTA size="md" label="Ask Aryan on WhatsApp" />
        </div>
      </div>
    </div>
  );
}
