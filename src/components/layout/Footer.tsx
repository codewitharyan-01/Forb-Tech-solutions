import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-sunken)] text-[var(--muted-text)] text-[11px] pt-14 pb-24 md:pb-16 border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Footnote disclaimer */}
        <div className="pb-8 border-b border-[var(--line)] leading-relaxed font-normal">
          <p>
            * Turnaround times are calculated from client approval of the scope blueprint and delivery of essential assets. Load speed benchmarks are based on standard Indian 4G mobile testing conditions with performance-first static generation. ForbTech transfers 100% full ownership of source code, domain name registrations, and cloud hosting accounts to the client upon final milestone completion.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-[var(--line)]">
          {/* Services */}
          <div>
            <h4 className="text-[var(--foreground)] font-medium mb-3 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/website-development" className="hover:text-[var(--foreground)] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/google-business-profile" className="hover:text-[var(--foreground)] transition-colors">
                  Google Maps &amp; Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-[var(--foreground)] transition-colors">
                  WhatsApp Store &amp; Catalog
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="hover:text-[var(--foreground)] transition-colors">
                  App &amp; Web Portals
                </Link>
              </li>
              <li>
                <Link href="/services/it-support" className="hover:text-[var(--foreground)] transition-colors">
                  IT Support &amp; Email
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-[var(--foreground)] transition-colors">
                  UI / UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Cities */}
          <div>
            <h4 className="text-[var(--foreground)] font-medium mb-3 tracking-tight">
              Cities in Gujarat
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/website-development-ahmedabad" className="hover:text-[var(--foreground)] transition-colors">
                  Ahmedabad
                </Link>
              </li>
              <li>
                <Link href="/website-development-gandhinagar" className="hover:text-[var(--foreground)] transition-colors">
                  Gandhinagar
                </Link>
              </li>
              <li>
                <Link href="/website-development-surat" className="hover:text-[var(--foreground)] transition-colors">
                  Surat
                </Link>
              </li>
              <li>
                <Link href="/website-development-vadodara" className="hover:text-[var(--foreground)] transition-colors">
                  Vadodara
                </Link>
              </li>
              <li>
                <Link href="/website-development-rajkot" className="hover:text-[var(--foreground)] transition-colors">
                  Rajkot
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[var(--foreground)] transition-colors">
                  Industries We Build For &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[var(--foreground)] font-medium mb-3 tracking-tight">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="hover:text-[var(--foreground)] transition-colors">
                  6 Live Projects
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[var(--foreground)] transition-colors">
                  Fixed Pricing
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[var(--foreground)] transition-colors">
                  4-Step Process
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[var(--foreground)] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">
                  Local Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[var(--foreground)] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h4 className="text-[var(--foreground)] font-medium mb-3 tracking-tight">
              ForbTech
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">
                  About Founder Aryan
                </Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--foreground)] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--foreground)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block mt-1">
                  Base: {siteConfig.addressLocality}, Gujarat, India
                </span>
              </li>
              <li>
                <span className="block">
                  Hours: {siteConfig.openingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright and Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868b]">
          <p>
            Copyright &copy; {currentYear} ForbTech. Handcrafted in Gujarat, India.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
              Privacy Policy (DPDP Act)
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <Link href="/refund-policy" className="hover:text-[var(--foreground)] transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
