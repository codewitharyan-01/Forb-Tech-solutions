"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";

// We keep a local reference to the imported data
const projects = projectsData;

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="work" 
      ref={containerRef}
      className="relative bg-background z-10"
      style={{ height: `${(projects.length + 1) * 75}vh` }} // Massively increased scroll space
    >
      <div className="sticky top-[7.5vh] h-[85vh] w-full flex flex-col justify-center overflow-hidden py-8 md:py-12">
        
        {/* The Card Stack */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] px-4 md:px-12 perspective-1000">
          {[ { isIntro: true, name: "Our Work" }, ...projects ].map((item, index, array) => {
            return (
              <StackCard 
                key={index} 
                item={item} 
                index={index} 
                totalCards={array.length} 
                scrollYProgress={scrollYProgress} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StackCard({ 
  item, 
  index, 
  totalCards, 
  scrollYProgress 
}: { 
  item: {
    isIntro?: boolean;
    name?: string;
    category?: string;
    url?: string;
    domain?: string;
  }; 
  index: number; 
  totalCards: number; 
  scrollYProgress: MotionValue<number>; 
}) {
  // Calculate the scroll window for this specific card
  const step = 1 / totalCards;
  const startAnim = index * step;
  const endAnim = (index + 1) * step;
  
  const isLast = index === totalCards - 1;

  // Card Y Position: Moves from resting staggered position to 0 (top of stack), then flies up
  const yProgress = [0, Math.max(0.001, startAnim), endAnim];
  const yValues = [index * 20, 0, isLast ? 0 : -1000];
  const y = useTransform(scrollYProgress, yProgress, yValues);

  // Card Scale: Starts small, grows to 1 as it becomes the top card, stays 1 as it flies away
  const scaleProgress = [0, Math.max(0.001, startAnim), endAnim];
  const scaleValues = [1 - index * 0.05, 1, 1];
  const scale = useTransform(scrollYProgress, scaleProgress, scaleValues);

  // Card Opacity: Fades in as it approaches top, stays solid as it flies away to prevent text bleeding
  const opacityProgress = [0, Math.max(0.001, startAnim), endAnim];
  const opacityValues = [1 - index * 0.1, 1, 1];
  const opacity = useTransform(scrollYProgress, opacityProgress, opacityValues);

  if (item.isIntro) {
    return (
      <motion.div
        style={{ y, scale, opacity, zIndex: totalCards - index }}
        className="absolute top-0 left-4 right-4 md:left-12 md:right-12 h-full flex justify-center"
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-8 bg-foreground text-background border border-foreground/10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent opacity-50" />
          <h2 className="relative z-10 text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-center">
            Our Work
          </h2>
          <p className="relative z-10 mt-6 text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 text-center animate-pulse">
            Scroll to explore
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ 
        y, 
        scale, 
        opacity,
        zIndex: totalCards - index 
      }}
      className="absolute top-0 left-4 right-4 md:left-12 md:right-12 h-full flex justify-center"
    >
      <a 
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-background border border-foreground/10 rounded-[1.5rem] md:rounded-[2.5rem] hover:border-foreground/30 transition-all duration-300 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex justify-between items-start w-full">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 border border-foreground/20 rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-300 bg-background/50 backdrop-blur-md">
            {item.category}
          </span>
          <span className="text-2xl md:text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            0{index}
          </span>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 pointer-events-none text-center">
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-4 group-hover:scale-105 transition-transform duration-500">
            {item.name}
          </h3>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
            View Live Site
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* Bottom Arrow */}
        <div className="relative z-10 flex justify-end w-full">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <ArrowRight strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6 -rotate-45" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
