"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: "By accessing and using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services. We reserve the right to update or modify these terms at any time without prior notice."
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: "ForbTech provides web development, design, and software engineering services. We reserve the right to modify, suspend, or discontinue any part of the service at any time. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service."
  },
  {
    id: "obligations",
    title: "3. User Obligations",
    content: "You agree to use our services only for lawful purposes. You must not use our services in any way that causes, or may cause, damage to the services or impairment of the availability or accessibility of the services. You are responsible for ensuring that all persons who access our services through your internet connection are aware of these Terms."
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: "All content included on our website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of ForbTech or its suppliers and protected by copyright and other laws."
  }
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-4 px-2 md:px-4 pt-24">
      <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-clip border border-border/50 relative z-10 group" style={{ transform: "translateZ(0)" }}>
        
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 px-4 md:px-12 py-20 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-32">
              <div className="w-12 h-12 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center mb-8">
                <FileText className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                Terms of <br/> Service
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-8 font-mono">
                Last Updated: Aug 2026
              </p>
              
              <nav className="flex flex-col gap-4 hidden md:flex">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className="text-sm font-bold opacity-60 hover:opacity-100 hover:text-[#06b6d4] transition-colors uppercase tracking-widest"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Reading Column */}
          <div className="w-full md:w-2/3 lg:w-3/4 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="bg-foreground/5 border border-foreground/10 p-6 md:p-8 rounded-2xl mb-12 font-mono text-sm opacity-80">
                Please read these Terms and Conditions carefully before using our services. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
              </div>

              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-[#06b6d4]">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg opacity-70 leading-relaxed font-medium">
                    {section.content}
                  </p>
                  
                  {index !== sections.length - 1 && (
                    <div className="w-full h-px bg-foreground/10 mt-16" />
                  )}
                </section>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
