"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-4 gap-4 px-2 md:px-4 pt-24">
      <div className="rounded-[3rem] bg-background/90 backdrop-blur-md shadow-xl overflow-clip border border-border/50 relative z-10 group" style={{ transform: "translateZ(0)" }}>
        
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 pointer-events-none" />
        
        <div className="relative z-10 px-4 md:px-12 py-16 md:py-32 max-w-[1400px] mx-auto w-full">
          {/* Header */}
          <div className="mb-16 md:mb-32 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[1] md:leading-[0.9]"
            >
              I Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#06b6d4]">
                Digital Empires.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl font-bold opacity-70 max-w-3xl leading-relaxed mx-auto md:mx-0"
            >
              I am Aryan, a 6th-semester Computer Engineering student and passionate freelance developer based in India. With a University Rank 1 (9.02 CGPA) and real-world experience, I help forward-thinking brands and startups around the globe build scalable, high-performance digital products.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Mission (Large Box) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 bg-foreground/5 border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:border-foreground/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 mb-4 md:mb-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight mb-3 md:mb-4">My Mission</h2>
              <p className="text-sm sm:text-base md:text-xl font-medium opacity-80 leading-relaxed">
                To bridge the gap between brilliant ideas and flawless execution. Working independently allows me to move fast, write incredibly clean code, and deliver a highly personalized experience for every client I work with.
              </p>
            </motion.div>

            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary text-primary-foreground border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between group hover:scale-[1.02] transition-transform text-center md:text-left"
            >
              <h3 className="text-sm sm:text-lg md:text-xl font-bold uppercase tracking-widest opacity-80">University Rank</h3>
              <div className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mt-4">#1</div>
            </motion.div>

            {/* Approach 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-foreground/5 border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 group hover:border-foreground/30 transition-colors"
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 mb-3 md:mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Clean Code</h3>
              <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed">I build scalable architectures using modern tech stacks like Next.js, React, and Node.</p>
            </motion.div>

            {/* Approach 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-foreground/5 border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 group hover:border-foreground/30 transition-colors"
            >
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 mb-3 md:mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Real Experience</h3>
              <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed">Internships as a Google Student Ambassador, Frontend & Network Engineer, and IT Support.</p>
            </motion.div>

            {/* Approach 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-foreground/5 border border-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 group hover:border-foreground/30 transition-colors"
            >
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 mb-3 md:mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Startup Founder</h3>
              <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed">Founder of Wispa AI, actively developing a hardware prototype under the Govt. of India SSIP.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
