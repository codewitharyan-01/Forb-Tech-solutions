"use client";

import { CheckCircle2 } from "lucide-react"

const steps = [
  { 
    id: "01", 
    title: "Discovery & Consultation", 
    desc: "We begin by deeply understanding your core business objectives. We analyze your market, competitors, and technical constraints to ensure our engineering efforts align perfectly with your revenue goals.", 
    deliverables: ["Requirements Document", "Feasibility Study", "Project Roadmap"] 
  },
  { 
    id: "02", 
    title: "System Architecture", 
    desc: "Before writing a single line of code, our lead engineers architect the technical foundation. We select the optimal database schema, cloud infrastructure, and API patterns for maximum scalability.", 
    deliverables: ["Architecture Diagrams", "Tech Stack Selection", "Security Protocols"] 
  },
  { 
    id: "03", 
    title: "UI/UX Engineering", 
    desc: "Our design team creates pixel-perfect, highly interactive prototypes. We focus on frictionless user journeys and premium aesthetics that elevate your brand's digital presence.", 
    deliverables: ["Figma Prototypes", "Design System", "User Flow Maps"] 
  },
  { 
    id: "04", 
    title: "Agile Development", 
    desc: "We execute the build in rigorous two-week sprints. You get continuous visibility into our progress through staging environments, ensuring the product evolves exactly as intended.", 
    deliverables: ["Clean Codebase", "API Documentation", "Bi-weekly Demos"] 
  },
  { 
    id: "05", 
    title: "Quality Assurance", 
    desc: "We don't rely on hope. Our QA engineers deploy extensive automated testing suites alongside rigorous manual testing to ensure a completely bug-free release.", 
    deliverables: ["Test Coverage Reports", "Load Testing Results", "Bug-Free Build"] 
  },
  { 
    id: "06", 
    title: "Deployment", 
    desc: "We utilize advanced CI/CD pipelines for a zero-downtime deployment. Our DevOps team ensures the infrastructure is fully provisioned and ready to handle immediate production traffic.", 
    deliverables: ["Live Application", "CI/CD Pipeline Setup", "Monitoring Dashboards"] 
  },
  { 
    id: "07", 
    title: "Post-Launch Support", 
    desc: "Our relationship doesn't end at launch. We provide 24/7 SLA-backed monitoring, iterative feature updates, and continuous performance optimization to keep you ahead of the curve.", 
    deliverables: ["SLA Agreement", "24/7 Monitoring", "Iterative Roadmaps"] 
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto w-full">
        
        <div className="mb-20 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] block mb-2">
            Engineered Workflow
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[var(--foreground)] mb-3">
            How we bring your project to life.
          </h2>
          <p className="text-lg text-[var(--muted-text)] font-normal max-w-xl mx-auto">
            A transparent, milestone-driven process with continuous client communication.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col md:flex-row gap-6 md:gap-10 relative">
              {/* Timeline Connector Line */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 bottom-[-48px] left-[19px] w-px bg-[var(--line)] z-0" />
              )}
              
              <div className="flex items-start md:shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--foreground)] text-xs font-semibold flex items-center justify-center">
                  {step.id}
                </div>
              </div>

              <div className="flex-1 pb-4">
                <h3 className="text-2xl font-semibold mb-2 text-[var(--foreground)] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-base text-[var(--muted-text)] font-normal leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="bg-[var(--surface-sunken)] p-6 rounded-2xl border border-[var(--line)]">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[var(--muted-text)] mb-3">Key Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--foreground)]">
                        <CheckCircle2 strokeWidth={2} className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
