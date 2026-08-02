import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/ui/Loader";
import { GlobalContactModal } from "@/components/ui/GlobalContactModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForbTech | Elite Engineering & Digital Solutions",
  description: "Partner with ForbTech's elite engineering team to build custom software, websites, AI solutions, and scalable digital products that accelerate business growth.",
  keywords: ["Software Development Agency", "Custom Web Apps", "AI Solutions", "Tech Agency", "Web Design"],
  openGraph: {
    title: "ForbTech | Elite Engineering & Digital Solutions",
    description: "Partner with our elite engineering team to build scalable digital products, websites, and AI solutions.",
    url: "https://forb-tech-solutions.vercel.app",
    siteName: "ForbTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ForbTech Preview Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForbTech | Elite Engineering & Digital Solutions",
    description: "Partner with our elite engineering team to build scalable digital products, websites, and AI solutions.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data to strictly link the website to a Google Business Profile
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", 
  "name": "ForbTech",
  "image": "https://forb-tech-solutions.vercel.app/og-image.png",
  "@id": "https://forb-tech-solutions.vercel.app",
  "url": "https://forb-tech-solutions.vercel.app",
  "telephone": "",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Gandhinagar, Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.2156,
    "longitude": 72.6369
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <div className="relative flex min-h-screen flex-col overflow-clip bg-muted/20">
            {/* Global Creative Background (Lowest Layer) */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#06b6d4]/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>
            
            <Loader />
            <GlobalContactModal />
            <Navbar />
            <main className="flex-1">{children}</main>
            <div className="px-4 md:px-8 pb-4 md:pb-8 mt-8">
              <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-hidden border border-border/50 relative z-10" style={{ transform: "translateZ(0)" }}>
                <Footer />
              </div>
            </div>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
