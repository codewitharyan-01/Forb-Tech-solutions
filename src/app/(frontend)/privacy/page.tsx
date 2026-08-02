"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sections = [
  {
    id: "collection",
    title: "1. Information Collection",
    content: "We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide."
  },
  {
    id: "use",
    title: "2. Use of Information",
    content: "We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages."
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: "We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: with third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us; with the general public if you submit content in a public forum."
  },
  {
    id: "security",
    title: "4. Data Security",
    content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. All data is encrypted at rest and in transit using industry-standard protocols."
  }
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-4 px-2 md:px-4 pt-24">
      <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-clip border border-border/50 relative z-10 group" style={{ transform: "translateZ(0)" }}>
        
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 px-4 md:px-12 py-20 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-32">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                Privacy <br/> Policy
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-8 font-mono">
                Last Updated: Aug 2026
              </p>
              
              <nav className="flex flex-col gap-4 hidden md:flex">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className="text-sm font-bold opacity-60 hover:opacity-100 hover:text-primary transition-colors uppercase tracking-widest"
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
                This Privacy Policy describes how ForbTech (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your personal information when you visit or use our services.
              </div>

              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-primary">
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
