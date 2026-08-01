import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Industries } from "@/components/sections/Industries";
import { Integrations } from "@/components/sections/Integrations";
import { Process } from "@/components/sections/Process";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-clip border border-border/50 relative z-10 group" style={{ transform: "translateZ(0)" }}>
      {/* Subtle Creative Blueprint Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-8 px-4 md:px-8 pt-32">
      <SectionWrapper><Hero /></SectionWrapper>
      <SectionWrapper><Services /></SectionWrapper>
      <SectionWrapper><WhyChoose /></SectionWrapper>
      <SectionWrapper><Industries /></SectionWrapper>
      <SectionWrapper><Integrations /></SectionWrapper>
      <SectionWrapper><Process /></SectionWrapper>
      <SectionWrapper><FeaturedWork /></SectionWrapper>
    </div>
  );
}
