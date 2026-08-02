import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalContactModal } from "@/components/ui/GlobalContactModal";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalContactModal />
      <Navbar />
      <main className="flex-1">{children}</main>
      <div className="px-4 md:px-8 pb-4 md:pb-8 mt-8">
        <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-hidden border border-border/50 relative z-10" style={{ transform: "translateZ(0)" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
