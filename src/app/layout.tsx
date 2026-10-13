import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ForbTech | Web Development & Google Business SEO in Gujarat",
    template: "%s | ForbTech",
  },
  description:
    "Fast, budget-friendly website development, Google Business Profile ranking, and WhatsApp stores for small businesses in Gujarat. Delivered in 7 days.",
  keywords: [
    "Website Development Ahmedabad",
    "Website Development Gujarat",
    "Google Business Profile Setup Gujarat",
    "Local SEO Gujarat",
    "Web Design Gandhinagar",
    "Small Business Website India",
    "WhatsApp Ordering Website",
  ],
  authors: [{ name: "Aryan", url: siteConfig.siteUrl }],
  creator: "Aryan",
  publisher: "ForbTech",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "ForbTech | High-Speed Digital Solutions for Gujarat Businesses",
    description:
      "Turn local visitors into paying customers. Fast business websites, Google Maps #1 rankings, and WhatsApp-ready stores with 100% code ownership.",
    url: siteConfig.siteUrl,
    siteName: "ForbTech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForbTech | Web Development in Gujarat",
    description: "Budget-friendly websites and Google Maps ranking for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Accessible Viewport with Zoom Enabled (Never user-scalable=false)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7FB" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0E24" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ForbTech",
  url: `${siteConfig.siteUrl}/`,
  logo: `${siteConfig.siteUrl}/logo.png`,
  email: "forbteck@gmail.com",
  telephone: "+919023668571",
  description:
    "Website development, app development, Google Business Profile setup and IT services for businesses in Gujarat.",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.addressLocality,
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "State",
    name: "Gujarat",
  },
  founder: {
    "@type": "Person",
    name: "Aryan",
  },
  sameAs: [
    "https://www.linkedin.com/in/aryan-forbtech",
    "https://instagram.com/forbtech",
    "https://maps.google.com/?cid=forbtech",
    "https://youtube.com/@forbtech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[#0071e3]/20 selection:text-current">
        {/* Skip to Main Content Link for WCAG Keyboard Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--deep-indigo)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <StickyMobileBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
