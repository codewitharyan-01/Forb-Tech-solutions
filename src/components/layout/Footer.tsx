"use client";

import { useState, useEffect } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["amazing", "extraordinary", "revolutionary", "visionary", "next-gen"];

export function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 10000); // changes every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = "https://wa.me/919023668571?text=Hello%20ForbTech!%20I'm%20interested%20in%20starting%20a%20new%20project.%20Can%20we%20discuss%20my%20requirements%3F";

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
            <Phone className="w-5 h-5 md:w-6 md:h-6 animate-[ring_10s_ease-in-out_infinite]" />
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
            <div className="flex gap-6">
              <a href="#" className="relative text-sm font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">About Us</a>
              <a href="mailto:forbteck@gmail.com" className="relative text-sm font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">Careers</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-background/30">Connect</span>
            <div className="flex gap-5 text-background/80">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.393 0 0 5.393 0 12.031c0 2.12.553 4.195 1.6 6.01L.23 23.768l5.885-1.543a12.031 12.031 0 0 0 5.916 1.543h.005c6.636 0 12.031-5.394 12.031-12.031S18.667 0 12.031 0zm0 21.727h-.005a10.021 10.021 0 0 1-5.111-1.393l-.367-.217-3.799.996.996-3.799-.217-.367a10.015 10.015 0 0 1-1.4-5.234c0-5.523 4.496-10.019 10.02-10.019s10.019 4.496 10.019 10.019-4.496 10.02-10.02 10.02zm5.502-7.513c-.302-.15-1.787-.882-2.064-.984-.277-.101-.479-.15-.681.15-.202.302-.781.984-.958 1.186-.176.202-.353.226-.655.076-2.155-1.085-3.565-2.05-4.947-4.43-.127-.222-.014-.343.137-.494.135-.136.302-.353.453-.529.15-.176.201-.302.302-.503.1-.202.05-.378-.025-.529-.076-.15-.681-1.637-.933-2.242-.246-.59-.496-.51-.681-.519-.176-.009-.378-.009-.579-.009-.202 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.52 0 1.487 1.083 2.924 1.234 3.125.151.201 2.13 3.25 5.161 4.558 2.053.886 2.802.946 3.829.794 1.14-.17 3.019-1.233 3.447-2.423.428-1.19.428-2.21.302-2.423-.126-.213-.478-.34-.78-.491z" /></svg>
              </a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.547 12 3.547 12 3.547s-7.505 0-9.377.503a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.503 9.377.503 9.377.503s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="Website">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="Twitter / X">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="mailto:forbteck@gmail.com" className="hover:text-primary hover:-translate-y-1 hover:scale-110 transition-all duration-300" title="Email Us">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-row justify-between items-center gap-2 md:gap-4 text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-background/50 pt-6 border-t border-background/10"
        >
          <span className="w-auto text-left whitespace-nowrap hover:text-background transition-colors">© {new Date().getFullYear()} FORBTECH</span>
          
          <a 
            href="https://portfolio-by-aryan.netlify.app/" 
            target="_blank" 
            rel="noreferrer"
            className="w-auto text-center whitespace-nowrap hover:text-primary transition-colors duration-300"
          >
            Founder - Aryan
          </a>
          
          <div className="w-auto flex justify-end gap-2 md:gap-6 whitespace-nowrap">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
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
