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
  title: "ForbTech",
  description: "We help startups, businesses, and enterprises build custom software, websites, AI solutions, and scalable digital products that accelerate growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
