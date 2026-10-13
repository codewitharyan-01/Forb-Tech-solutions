"use client";

import { CheckCircle2 } from "lucide-react"

export function Hero({ seoService, seoLocation }: { seoService?: string, seoLocation?: string }) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-white px-5 md:px-8 border-b border-border/50">
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-20 pb-20">
        <div className="flex flex-col gap-8 md:gap-12">
          
          <div className="flex items-center gap-6 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide text-muted-foreground border-b border-border/50 pb-6 w-max">
            <div className="flex flex-col shrink-0">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1 text-primary">15+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Projects</span>
            </div>
            <div className="w-px h-6 md:h-8 bg-border shrink-0" />
            <div className="flex flex-col shrink-0">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1 text-primary">5/5</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Client Rating</span>
            </div>
            <div className="w-px h-6 md:h-8 bg-border shrink-0" />
            <div className="flex flex-col shrink-0">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1 text-primary">99.9%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Uptime</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            {seoService ? (
              <>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Top Rated In {seoLocation}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-foreground max-w-4xl">
                  {seoService}
                </h1>
                <p className="text-3xl md:text-5xl font-black tracking-tighter text-muted-foreground">
                  Engineered For Scale.
                </p>
              </>
            ) : (
              <>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Enterprise Software Agency
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-foreground max-w-5xl">
                  We Build Products That Drive Growth.
                </h1>
              </>
            )}
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 mt-8 pt-8 border-t border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We help businesses transform ideas into powerful digital products — from concept to launch, end-to-end. We architect systems built for performance, scale, and absolute security.
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Included with every project</span>
              <div className="flex flex-wrap items-center gap-6">
                {["Free Consultation", "Custom Quote", "End-to-End Dev"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 strokeWidth={2} className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-bold tracking-tight text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
