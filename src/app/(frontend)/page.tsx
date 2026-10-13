import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { industriesData } from "@/content/industries";
import { pricingPackages } from "@/content/pricing";
import { testimonialsData } from "@/content/testimonials";
import { faqsData } from "@/content/faqs";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Accordion } from "@/components/ui/Accordion";
import { CostEstimator } from "@/components/ui/CostEstimator";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppleGlow } from "@/components/ui/AppleGlow";
import { AppleDeviceFrame } from "@/components/ui/AppleDeviceFrame";
import { AppleBentoGrid } from "@/components/sections/AppleBentoGrid";
import { AppleWorkShowcase } from "@/components/sections/AppleWorkShowcase";
import {
  ChevronRight,
  Check,
  Stethoscope,
  Utensils,
  Dumbbell,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  clinics: <Stethoscope className="w-5 h-5 text-[var(--foreground)]" />,
  restaurants: <Utensils className="w-5 h-5 text-[var(--foreground)]" />,
  gyms: <Dumbbell className="w-5 h-5 text-[var(--foreground)]" />,
  ecommerce: <ShoppingBag className="w-5 h-5 text-[var(--foreground)]" />,
  "real-estate": <Building2 className="w-5 h-5 text-[var(--foreground)]" />,
  education: <GraduationCap className="w-5 h-5 text-[var(--foreground)]" />,
  manufacturing: <Factory className="w-5 h-5 text-[var(--foreground)]" />,
};

export default function HomePage() {
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <div className="flex flex-col relative">
      {/* 1. CINEMATIC APPLE HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-36">
        <AppleGlow />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Micro Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-2xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0071e3] dark:bg-[#2997ff] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--muted-text)]">
              Digital Engineering &bull; Gujarat, India
            </span>
          </div>

          {/* Cinematic Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold text-[var(--foreground)] tracking-[-0.04em] leading-[1.04] max-w-5xl mx-auto">
            Websites engineered for business. Down to the millisecond.
          </h1>

          {/* Large Subtext */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[var(--muted-text)] leading-relaxed max-w-3xl mx-auto font-normal">
            Fast-loading business websites, Google Maps local dominance, and direct WhatsApp stores for clinics, restaurants, and shops across Gujarat.
          </p>

          {/* Apple Pill Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA
              size="lg"
              label="Chat with Founder on WhatsApp"
              message="Hi Aryan, I'd like to discuss a website for my business."
            />
            <Link
              href="#interactive-showcase"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-[var(--foreground)] bg-[var(--surface)] border border-[var(--line)] hover:bg-[var(--surface-sunken)] transition-colors shadow-2xs"
            >
              <span>Explore Live Showcase</span>
              <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
            </Link>
          </div>

          {/* Understated Value Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[var(--muted-text)] font-normal">
            <span>&bull; Fixed price guarantee</span>
            <span>&bull; 7-day average turnaround</span>
            <span>&bull; 100% code &amp; domain ownership</span>
          </div>

          {/* Floating Photorealistic Device Frame */}
          <div id="interactive-showcase" className="mt-16 md:mt-24">
            <AppleDeviceFrame />
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP: Pure Minimal Typography */}
      <section className="py-14 border-t border-b border-[var(--line)] bg-[var(--surface-sunken)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] font-mono">
                6
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1.5 font-normal">
                Live client projects
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] font-mono">
                7 Days
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1.5 font-normal">
                Average launch time
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#0071e3] dark:text-[#2997ff] font-mono">
                &lt; 2.0s
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1.5 font-normal">
                4G mobile load speed
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] font-mono">
                100%
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1.5 font-normal">
                Code &amp; domain ownership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE APPLE BENTO GRID (4G Speed, Maps, WhatsApp, Code Handover) */}
      <AppleBentoGrid />

      {/* 4. INTERACTIVE PRODUCTION WORK SHOWCASE */}
      <AppleWorkShowcase />

      {/* 5. INTERACTIVE COST ESTIMATOR */}
      <section className="py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeader
            eyebrow="Pricing Calculator"
            title="Transparent investment. Before we even speak."
            subhead="Configure your scope and receive an honest ballpark estimate."
          />
          <CostEstimator />
        </div>
      </section>

      {/* 6. WHO WE HELP (INDUSTRIES) */}
      <section className="py-24 md:py-36 bg-[var(--surface-sunken)] border-t border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sector Blueprint"
            title="Tailored for Gujarat&apos;s local economy."
            subhead="Specialized digital architecture built for doctors, restaurateurs, gym owners, and retailers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industriesData.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col justify-between p-7 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center mb-5">
                    {industryIcons[ind.slug] || <Building2 className="w-5 h-5 text-[var(--foreground)]" />}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] tracking-tight mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed font-normal">
                    {ind.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold text-[#0071e3] dark:text-[#2997ff]">
                  <span>Explore Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 4-STAGE METHODOLOGY */}
      <section className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Methodology"
            title="From concept to live domain in 7 days."
            subhead="A disciplined four-stage roadmap with continuous WhatsApp visibility."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[var(--muted-text)] uppercase tracking-wider block mb-2 font-medium">Stage 01</span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  Discovery
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed font-normal">
                  A 15-minute chat on WhatsApp to understand your customer base and target locality.
                </p>
              </div>
              <span className="text-xs text-[#0071e3] dark:text-[#2997ff] font-semibold block mt-6 pt-4 border-t border-[var(--line)]">
                Day 1
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[var(--muted-text)] uppercase tracking-wider block mb-2 font-medium">Stage 02</span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed font-normal">
                  A fixed-price scope document outlining exact deliverables. Advance due upon approval.
                </p>
              </div>
              <span className="text-xs text-[#0071e3] dark:text-[#2997ff] font-semibold block mt-6 pt-4 border-t border-[var(--line)]">
                Day 2
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[var(--muted-text)] uppercase tracking-wider block mb-2 font-medium">Stage 03</span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  Build &amp; Test
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed font-normal">
                  Handcrafted Next.js code tested for 4G mobile speeds. Private preview link on your phone.
                </p>
              </div>
              <span className="text-xs text-[#0071e3] dark:text-[#2997ff] font-semibold block mt-6 pt-4 border-t border-[var(--line)]">
                Day 3&ndash;6
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[var(--muted-text)] uppercase tracking-wider block mb-2 font-medium">Stage 04</span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  Live Launch
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed font-normal">
                  Domain connected, Google search index submitted, and 100% source code transferred.
                </p>
              </div>
              <span className="text-xs text-[#0071e3] dark:text-[#2997ff] font-semibold block mt-6 pt-4 border-t border-[var(--line)]">
                Day 7 Live
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRANSPARENT PRICING PACKAGES */}
      <section className="py-24 md:py-36 bg-[var(--surface-sunken)] border-t border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Predictable investment. Zero ongoing retainers."
            subhead="Compare fixed-price packages designed for growing local businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border flex flex-col justify-between ${
                  pkg.highlight
                    ? "border-2 border-[#0071e3] dark:border-[#2997ff] shadow-xl"
                    : "border-[var(--line)] shadow-sm"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted-text)] mt-1.5 mb-8 font-normal">
                    {pkg.tagline}
                  </p>

                  <span className="text-xs text-[var(--muted-text)] block font-medium uppercase tracking-wider">Starts at</span>
                  <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] mt-1 mb-8">
                    {pkg.startingPrice}
                  </p>

                  <div className="pt-6 border-t border-[var(--line)] space-y-3 text-sm text-[var(--foreground)]">
                    {pkg.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                        <span className="font-normal">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--line)]">
                  <Link
                    href={`/pricing#${pkg.id}`}
                    className="block text-center py-3 px-6 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 text-xs font-semibold transition-opacity"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Feedback"
            title="Trusted by Gujarat business owners."
            subhead="Authentic feedback from verified client projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 md:py-36 bg-[var(--surface-sunken)] border-t border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Questions"
            title="Common inquiries. Answered clearly."
            subhead="Honest details on code ownership, domain transfers, and timelines."
          />

          <Accordion
            items={homeFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))}
          />

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="text-xs sm:text-sm font-semibold text-[#0071e3] dark:text-[#2997ff] hover:underline"
            >
              View complete FAQ page &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FINAL LEAD CAPTURE SECTION */}
      <section id="quote-section" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff] block mb-2">
                  Direct Founder Contact
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--foreground)] tracking-tight leading-[1.1]">
                  Ready to build something fast and lasting?
                </h2>
                <p className="mt-4 text-base text-[var(--muted-text)] leading-relaxed font-normal">
                  Skip the agency middleman and speak directly with Aryan. We respond with a fixed-scope blueprint within 24 hours.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)] space-y-4 text-sm text-[var(--muted-text)]">
                <div>
                  <span className="font-semibold text-[var(--foreground)] block mb-1">
                    WhatsApp (Fastest Response)
                  </span>
                  <p className="text-xs">Send project notes, photos, or questions directly to founder Aryan.</p>
                  <div className="mt-3">
                    <WhatsAppCTA size="sm" label="Chat with Aryan on WhatsApp" />
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <span className="font-semibold text-[var(--foreground)] block mb-0.5">
                    Fixed Quote Guarantee
                  </span>
                  <p className="text-xs">The agreed blueprint is the exact price you pay. Never surprise fees.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
