"use client";

import { useState, useEffect } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import siteConfig from "@/data/config.json";
import socialsData from "@/data/socials.json";

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "LinkedIn": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
    case "Twitter": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
    case "YouTube": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.377.503a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.503 9.377.503 9.377.503s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
    case "Instagram": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
    case "Facebook": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case "GitHub": 
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
    default: 
      return <Globe strokeWidth={1.2} className="w-5 h-5" />;
  }
};

const WORDS = ["amazing", "extraordinary", "revolutionary", "visionary", "next-gen"];

export function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 10000); // changes every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contactWhatsApp}?text=Hello%20ForbTech!%20I'm%20interested%20in%20starting%20a%20new%20project.%20Can%20we%20discuss%20my%20requirements%3F`;

  return (
    <footer className="w-full bg-foreground text-background overflow-hidden relative">
      <NetworkBackground />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-6 flex flex-col relative z-10">
        
        {/* Top Section: Giant Centered CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight flex flex-col items-center">
            <span>Ready to build something</span>
            <span className="relative h-[1.2em] w-full flex justify-center overflow-visible mt-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 40, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -40, rotateX: -90 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className="absolute bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent italic pr-2"
                >
                  {WORDS[wordIndex]}?
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="group relative flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)]"
          >
            <Phone strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6 animate-[ring_10s_ease-in-out_infinite]" />
            Let&apos;s Talk
            <div className="absolute inset-0 rounded-full border border-primary/50 scale-110 opacity-0 group-hover:animate-ping" />
          </button>
        </motion.div>

        {/* Middle Section: Links & Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start border-t border-background/10 pt-8 pb-10 gap-8 md:gap-0"
        >
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-background/30">Company</span>
            <div className="flex gap-4 md:gap-6 flex-wrap justify-center md:justify-start">
              <Link href="/about" className="relative text-sm font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">About Us</Link>
              <Link href="/careers" className="relative text-sm font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">Careers</Link>
              <Link href="/testimonials" className="relative text-sm font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">Client Success</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-background/30">Connect</span>
            <div className="flex gap-5 text-background/80">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="WhatsApp">
                <Phone strokeWidth={1.2} className="w-5 h-5" />
              </a>
              {socialsData.map((soc) => (
                <a key={soc.id} href={soc.url} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title={soc.platform}>
                  {getSocialIcon(soc.platform)}
                </a>
              ))}
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="Email Us">
                <Mail strokeWidth={1.2} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-background/50 pt-6 border-t border-background/10"
        >
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="hover:text-background transition-colors">© 2026 FORBTECH</span>
            <a href="https://portfolio-by-aryan.netlify.app/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-300">
              Founder - Aryan
            </a>
          </div>
          
          <div className="w-auto flex justify-end gap-2 md:gap-6 whitespace-nowrap mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms</Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes ring {
          0%, 90% { transform: rotate(0deg); }
          92% { transform: rotate(15deg); }
          94% { transform: rotate(-10deg); }
          96% { transform: rotate(15deg); }
          98% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </footer>
  );
}
