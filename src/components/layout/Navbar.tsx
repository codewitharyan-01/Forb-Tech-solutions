"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/siteConfig";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      children: [
        { label: "All Services", href: "/services" },
        { label: "Website Development", href: "/services/website-development" },
        { label: "Google Maps & SEO", href: "/services/google-business-profile" },
        { label: "WhatsApp & E-Commerce", href: "/services/ecommerce" },
        { label: "App & Web Portals", href: "/services/app-development" },
        { label: "IT Support & Email", href: "/services/it-support" },
        { label: "UI / UX Design", href: "/services/ui-ux-design" },
      ],
    },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Apple-style Micro Announcement Ribbon */}
      <div className="bg-[var(--surface-sunken)] text-[var(--foreground)] text-[11px] py-1.5 px-4 text-center border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="text-[var(--muted-text)]">Fixed quotes. 100% code ownership. Handcrafted in Gujarat.</span>
          <Link href="/pricing" className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium ml-1">
            Explore pricing &rarr;
          </Link>
        </div>
      </div>

      {/* Main Frosted Glass Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[var(--background)]/85 border-b border-[var(--line)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 sm:h-13 flex items-center justify-between">
          {/* Logo with 3s hold secret HQ gateway */}
          <Logo />

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-xs tracking-tight transition-colors py-1 ${
                        isActive
                          ? "text-[var(--foreground)] font-medium"
                          : "text-[var(--muted-text)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-56 pt-2 shadow-xl animate-in fade-in duration-100">
                        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl p-1.5 shadow-lg">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="block px-3 py-2 text-xs rounded-xl text-[var(--foreground)] hover:bg-[var(--surface-sunken)] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-tight transition-colors py-1 ${
                    isActive
                      ? "text-[var(--foreground)] font-medium"
                      : "text-[var(--muted-text)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3.5 py-1 text-xs font-medium rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors shadow-xs"
            >
              Get a Quote
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[var(--foreground)] hover:bg-[var(--surface-sunken)] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl px-6 py-6 shadow-xl animate-in slide-in-from-top-1 duration-150">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-base font-medium text-[var(--foreground)] hover:opacity-75"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-3 space-y-1.5 mt-1 border-l border-[var(--line)]">
                      {link.children.slice(1).map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-[var(--muted-text)] hover:text-[var(--foreground)]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-[var(--line)] flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0071e3] text-white font-medium text-xs shadow-xs"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
