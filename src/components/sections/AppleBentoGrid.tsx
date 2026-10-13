"use client";

import React from "react";
import { Zap, MapPin, MessageSquare, Key, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AppleBentoGrid() {
  return (
    <section className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline in Apple Typography */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase block mb-3">
            Core Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] tracking-[-0.035em] leading-[1.08]">
            Engineered to outperform. In every dimension.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[var(--muted-text)] font-normal leading-relaxed">
            Every website and digital funnel is purpose-built to solve the specific bottlenecks small businesses face across Gujarat.
          </p>
        </div>

        {/* The Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* BENTO CARD 1: 4G SPEED ENGINE (8 Columns) */}
          <div className="md:col-span-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Subtle corner sheen */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#0071e3]/10 to-transparent blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                  Speed Architecture
                </span>
                <span className="px-3 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] text-xs font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Sub-2.0s on Indian 4G</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em] leading-snug mb-3">
                Lighthouse 99/100 performance. Even on budget Android hardware.
              </h3>
              <p className="text-base text-[var(--muted-text)] font-normal leading-relaxed max-w-xl mb-8">
                Over 78% of your local customers browse on mobile data. We strip away heavy JavaScript frameworks and bloated plugins so your site renders immediately.
              </p>
            </div>

            {/* Visual Performance Gauge Meter */}
            <div className="p-6 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-2 border-r border-[var(--line)] last:border-none">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#34c759] font-mono">0.6s</div>
                  <div className="text-[11px] text-[var(--muted-text)] uppercase tracking-wider mt-1 font-medium">First Contentful Paint</div>
                </div>
                <div className="p-2 border-r border-[var(--line)] last:border-none">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#34c759] font-mono">1.1s</div>
                  <div className="text-[11px] text-[var(--muted-text)] uppercase tracking-wider mt-1 font-medium">Largest Contentful Paint</div>
                </div>
                <div className="p-2">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#34c759] font-mono">0.00</div>
                  <div className="text-[11px] text-[var(--muted-text)] uppercase tracking-wider mt-1 font-medium">Cumulative Layout Shift</div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: GOOGLE MAPS DOMINANCE (4 Columns) */}
          <div className="md:col-span-4 rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-[#0071e3] dark:text-[#2997ff]" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)] block mb-2">
                Local Discovery
              </span>
              <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] leading-snug mb-3">
                Google Maps #1 Search Placement.
              </h3>
              <p className="text-sm text-[var(--muted-text)] font-normal leading-relaxed mb-6">
                Rank in the top 3-pack for localized buyer searches like &ldquo;near me&rdquo; without paying daily Google Ads fees.
              </p>
            </div>

            {/* Radar Search Preview Card */}
            <div className="p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--foreground)]">Ahmedabad &bull; Nikol Pin</span>
                <span className="text-[#34c759] font-medium font-mono">Rank #1</span>
              </div>
              <div className="text-[11px] text-[var(--muted-text)] truncate">
                &ldquo;Dentist Nikol&rdquo; &bull; &ldquo;Gym vastrapur&rdquo;
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: WHATSAPP 1-TAP COMMERCE (4 Columns) */}
          <div className="md:col-span-4 rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-[#34c759]" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)] block mb-2">
                Conversion Funnel
              </span>
              <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-[-0.02em] leading-snug mb-3">
                1-Tap WhatsApp Conversion.
              </h3>
              <p className="text-sm text-[var(--muted-text)] font-normal leading-relaxed mb-6">
                Customers don&apos;t fill out 10-field contact forms. One tap opens WhatsApp with pre-filled inquiries directly to your phone.
              </p>
            </div>

            {/* Simulated WhatsApp Chat Bubble */}
            <div className="p-4 rounded-2xl bg-[#34c759]/10 border border-[#34c759]/20 text-xs">
              <span className="text-[10px] uppercase font-semibold text-[#34c759] block mb-1">Incoming Lead</span>
              <p className="text-[var(--foreground)] font-medium">
                &ldquo;Hi, I found you on Google. Can I schedule a consultation for today?&rdquo;
              </p>
            </div>
          </div>

          {/* BENTO CARD 4: 100% CODE OWNERSHIP & ZERO LOCK-IN (8 Columns) */}
          <div className="md:col-span-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center">
                  <Key className="w-5 h-5 text-[var(--foreground)]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                  Absolute Independence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-[-0.02em] leading-snug mb-3">
                100% client code ownership. Zero monthly hostage fees.
              </h3>
              <p className="text-base text-[var(--muted-text)] font-normal leading-relaxed max-w-xl mb-8">
                Agencies often hold your domain and files hostage with monthly retainers. With ForbTech, every repository, DNS record, and cloud account is registered directly under your name upon launch.
              </p>
            </div>

            {/* Terminal Git Transfer Pill */}
            <div className="p-4 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[var(--foreground)]">
                <span className="text-[#34c759]">$</span>
                <span>git remote transfer client-organization/production</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#34c759] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Transferred to GitHub</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Bento Link to Process */}
        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            <span>Learn how we take your project from blueprint to launch in 7 days</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
