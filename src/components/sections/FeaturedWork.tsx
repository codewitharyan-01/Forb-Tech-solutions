"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

const projects = [
  { name: "Fitness Platform", category: "Web App", url: "https://hardcore-nikol.vercel.app/", domain: "hardcore-nikol.vercel.app" },
  { name: "Culinary Hub", category: "Restaurant", url: "https://dev-munjani.github.io/Dev-s-Kitchen/", domain: "dev-s-kitchen.com" },
  { name: "Bhavnagari Food", category: "Food Delivery", url: "https://buntykakabhavnagari.github.io/Banti-Kaka-Bhavnagari-Bateta-Bhungla/", domain: "bhavnagarifood.com" },
  { name: "Empire 799", category: "E-Commerce", url: "https://empire799.com/", domain: "empire799.com" },
  { name: "Sanitary Wear", category: "Portfolio", url: "https://siddheswary-sanitary.vercel.app/", domain: "siddheswary-sanitary.vercel.app" },
  { name: "Anaya Dental", category: "Healthcare", url: "https://anaya-dental-care.vercel.app/", domain: "anaya-dental-care.vercel.app" },
  { name: "Rajvi Khaman", category: "Branding", url: "https://codewitharyan-01.github.io/Rajvi_Khaman/", domain: "rajvi-khaman.com" },
  { name: "Easyy Tools", category: "SaaS", url: "https://codewitharyan-01.github.io/easyytools.com/", domain: "easyytools.com" }
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stepsCount = Math.ceil(projects.length / 2);

  return (
    // Reduced to 150vh to make scrolling through the section much faster on mobile
    <section id="work" ref={containerRef} className="relative bg-background z-10" style={{ height: "150vh" }}>

      {/* Make sticky container hug the content instead of taking the full screen */}
      <div className="sticky top-[5vh] md:top-[10vh] w-full flex flex-col overflow-hidden pb-12 md:pb-24">

        {/* Header - Flow normally on mobile, fixed absolute on desktop */}
        <div className="w-full flex justify-center z-0 px-4 mb-6 md:absolute md:top-12 md:left-0 md:mb-0">
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-1 md:mb-2 text-foreground">
              <TextReveal>Selected Works.</TextReveal>
            </h2>
          </div>
        </div>

        {/* Stacking Card Deck Container */}
        <div className="relative w-full h-[450px] md:h-[350px] max-w-5xl mx-auto md:mt-32">
          {Array.from({ length: stepsCount }).map((_, i) => (
            <CardPair
              key={i}
              index={i}
              stepsCount={stepsCount}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// Subcomponent that handles the math and rendering for a single overlapping layer
function CardPair({
  index,
  stepsCount,
  scrollYProgress
}: {
  index: number;
  stepsCount: number;
  scrollYProgress: MotionValue<number>;
}) {
  const leftProject = projects[index * 2];
  const rightProject = projects[index * 2 + 1];

  // Calculate entry and exit intervals based on scroll progress
  const interval = 1 / (stepsCount - 1); // 0.333 for 4 steps

  const startEntry = (index - 1) * interval;
  const endEntry = index * interval;

  const startExit = endEntry;
  const endExit = (index + 1) * interval;

  // Animate from bottom up, then stick. Index 0 is already stuck at 0.
  // Using 150% ensures it comes from just below the card container
  const y = useTransform(
    scrollYProgress,
    [startEntry, endEntry],
    ["150%", "0%"]
  );

  return (
    <motion.div
      style={{
        y: index === 0 ? "0vh" : y,
        zIndex: index * 10
      }}
      className="absolute inset-0 w-full h-full flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-8 origin-top"
    >
      {/* Left Panel */}
      {leftProject && (
        <a
          href={leftProject.url}
          target="_blank"
          rel="noreferrer"
          className="w-full md:w-1/2 h-1/2 md:h-full bg-background border border-foreground/20 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:bg-foreground hover:text-background transition-colors duration-500 shadow-2xl relative overflow-hidden"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 border border-current rounded-full opacity-60 group-hover:opacity-100">
              {leftProject.category}
            </span>
            <span className="text-lg md:text-xl font-black opacity-20">0{index * 2 + 1}</span>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none mb-4 group-hover:-translate-y-2 transition-transform duration-500">
              {leftProject.name}
            </h3>

            <div className="w-full h-[1px] bg-current/20 my-6 relative overflow-hidden hidden md:block">
              <div className="absolute top-0 left-0 h-full w-full bg-current -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </div>

            <div className="flex justify-between items-end mt-4 md:mt-0">
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100">
                {leftProject.domain}
              </p>
              <ArrowRight className="w-6 h-6 group-hover:-rotate-45 group-hover:scale-125 transition-transform duration-500" />
            </div>
          </div>
        </a>
      )}

      {/* Right Panel */}
      {rightProject && (
        <a
          href={rightProject.url}
          target="_blank"
          rel="noreferrer"
          className="w-full md:w-1/2 h-1/2 md:h-full bg-background border border-foreground/20 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:bg-foreground hover:text-background transition-colors duration-500 shadow-2xl relative overflow-hidden"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 border border-current rounded-full opacity-60 group-hover:opacity-100">
              {rightProject.category}
            </span>
            <span className="text-lg md:text-xl font-black opacity-20">0{index * 2 + 2}</span>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none mb-4 group-hover:-translate-y-2 transition-transform duration-500">
              {rightProject.name}
            </h3>

            <div className="w-full h-[1px] bg-current/20 my-6 relative overflow-hidden hidden md:block">
              <div className="absolute top-0 left-0 h-full w-full bg-current -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            </div>

            <div className="flex justify-between items-end mt-4 md:mt-0">
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100">
                {rightProject.domain}
              </p>
              <ArrowRight className="w-6 h-6 group-hover:-rotate-45 group-hover:scale-125 transition-transform duration-500" />
            </div>
          </div>
        </a>
      )}
    </motion.div>
  )
}
