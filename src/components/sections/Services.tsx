"use client";

import { Code2, Cpu, Globe2, LayoutTemplate, Network, PenTool } from "lucide-react"

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "End-to-end web applications built with modern frameworks. Engineered from architecture to deployment for absolute scale, security, and speed.",
    icon: Code2,
    tags: ["React.js", "PHP", "MySQL", "Next.js"],
  },
  {
    title: "AI Solutions",
    desc: "Integration of intelligent LLMs, custom prompt engineering, and hardware-software AI prototypes to automate complex workflows.",
    icon: Cpu,
    tags: ["Prompt Engineering", "Custom LLMs", "Hardware AI"],
  },
  {
    title: "Business Portals",
    desc: "Robust civic and B2B platforms featuring complex role-based access controls, interactive data dashboards, and secure internal tools.",
    icon: Globe2,
    tags: ["Role-Based Access", "Data Dashboards"],
  },
  {
    title: "CMS & E-Commerce",
    desc: "High-conversion digital storefronts, fully integrated e-commerce solutions, and SEO-optimized content management systems.",
    icon: LayoutTemplate,
    tags: ["WordPress", "E-Commerce", "SEO"],
  },
  {
    title: "IT Infrastructure",
    desc: "Professional system administration, automated disaster recovery backups, and robust network engineering for zero-downtime operations.",
    icon: Network,
    tags: ["Troubleshooting", "Backups", "Security"],
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centric interfaces. We design intuitive, accessible experiences that align with modern enterprise standards.",
    icon: PenTool,
    tags: ["Responsive Design", "Wireframing"],
  }
];

export function Services() {
  return (
    <section id="services" className="pt-24 pb-24 px-5 md:px-8 max-w-7xl mx-auto w-full relative z-10 border-b border-border/50">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
          Core Services.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          We provide comprehensive technical solutions designed to scale your business and outpace the competition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((svc, i) => {
          return (
            <div key={i} className="flex flex-col p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                <svc.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-md bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}
