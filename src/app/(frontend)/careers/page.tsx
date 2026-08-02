"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Paintbrush } from "lucide-react";

const jobs = [
  {
    title: "Freelance UI/UX Designer",
    type: "Project Basis",
    location: "Remote",
    salary: "Competitive INR",
    icon: Paintbrush,
  },
  {
    title: "Frontend Developer",
    type: "Internship",
    location: "Remote / India",
    salary: "Paid Stipend",
    icon: Code,
  },
  {
    title: "React Native Dev",
    type: "Contract",
    location: "Remote",
    salary: "Project Basis",
    icon: Terminal,
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-4 px-2 md:px-4 pt-24">
      <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-clip border border-border/50 relative z-10 group min-h-[80vh]" style={{ transform: "translateZ(0)" }}>
        
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 via-transparent to-[#06b6d4]/5 opacity-50 pointer-events-none" />
        
        <div className="relative z-10 px-4 md:px-12 py-16 md:py-32 max-w-[1200px] mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16 md:mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest border border-primary/20 rounded-full bg-primary/10 text-primary"
            >
              Collaborate With Me
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.1]"
            >
              Let&apos;s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#06b6d4]">
                Together.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl font-bold opacity-70 max-w-2xl mx-auto leading-relaxed px-2"
            >
              As a solo freelancer, I occasionally team up with other talented designers and developers to tackle larger projects. Check out the current open collaboration roles below!
            </motion.p>
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-4">
            {jobs.map((job, index) => (
              <motion.a
                key={index}
                href="mailto:forbteck@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative bg-foreground/5 border border-foreground/10 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 hover:border-primary/50 hover:bg-foreground/10 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex items-center gap-4 sm:gap-6 w-full md:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-background border border-foreground/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                    <job.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-3xl font-black uppercase tracking-tight mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">
                      <span>{job.location}</span>
                      <span className="opacity-50">•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between w-full md:w-auto pt-2 md:pt-0 border-t md:border-none border-foreground/10 md:gap-6">
                  <span className="text-xs sm:text-sm md:text-lg font-bold opacity-90 text-primary md:text-foreground">
                    {job.salary}
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 ml-auto">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 -rotate-45" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Fallback CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 md:mt-20 text-center"
          >
            <p className="text-sm md:text-lg font-bold opacity-60 mb-3 md:mb-4">Don&apos;t see a perfect fit?</p>
            <a href="mailto:forbteck@gmail.com" className="inline-block text-lg sm:text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-primary text-primary hover:text-foreground hover:border-foreground transition-colors pb-1">
              Send me your portfolio anyway
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
