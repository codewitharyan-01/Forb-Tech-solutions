import { notFound } from "next/navigation";
import { Metadata } from "next";

import seoDataJson from "@/data/seo-pages.json";
const seoData = seoDataJson as any[];
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Integrations } from "@/components/sections/Integrations";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

// Generate metadata for the SEO page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = seoData.find(
    (p: any) => p.active && `${p.service}-in-${p.location}`.toLowerCase().replaceAll(' ', '-') === params.slug
  );

  if (!page) {
    return { title: "Not Found" };
  }

  return {
    title: `${page.service} in ${page.location} | ForbTech`,
    description: `Leading ${page.service} experts in ${page.location}. We build scalable, high-performance solutions engineered for growth.`,
  };
}

export default function SeoLandingPage({ params }: { params: { slug: string } }) {
  const page = seoData.find(
    (p: any) => p.active && `${p.service}-in-${p.location}`.toLowerCase().replaceAll(' ', '-') === params.slug
  );

  if (!page) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero seoService={page.service} seoLocation={page.location} />
      <Process />
      <Services />
      <FeaturedWork />
      <Integrations />
      <Contact />
      <Footer />
    </main>
  );
}
