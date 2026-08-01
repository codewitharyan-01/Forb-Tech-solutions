"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code2, Cpu, Globe2, LayoutTemplate, Network, PenTool } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "End-to-end web applications built with modern frameworks. Engineered from architecture to deployment for absolute scale, security, and speed.",
    icon: Code2,
    tags: ["React.js", "PHP", "MySQL", "Next.js"],
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "AI Solutions",
    desc: "Integration of intelligent LLMs, custom prompt engineering, and hardware-software AI prototypes to automate complex workflows.",
    icon: Cpu,
    tags: ["Prompt Engineering", "Custom LLMs"],
    gridClass: "md:col-span-1 md:row-span-2 flex-col justify-between",
  },
  {
    title: "Business Portals",
    desc: "Robust civic and B2B platforms featuring complex role-based access controls and secure internal tools.",
    icon: Globe2,
    tags: ["Role-Based Access"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CMS & E-Commerce",
    desc: "High-conversion digital storefronts and SEO-optimized content management systems.",
    icon: LayoutTemplate,
    tags: ["WordPress", "E-Commerce"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "IT Infrastructure",
    desc: "Professional system administration, automated backups, and robust network engineering.",
    icon: Network,
    tags: ["Security", "Backups"],
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centric interfaces. We design intuitive, accessible experiences.",
    icon: PenTool,
    tags: ["Responsive", "Wireframing"],
    gridClass: "md:col-span-1 md:row-span-1",
  }
];

export function Services() {
  return (
    <section id="services" className="pt-[15vh] pb-[20vh] px-4 max-w-7xl mx-auto relative z-10" style={{ perspective: "1000px" }}>
      
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Core <span className="text-primary">Services.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Engineered for scale. Designed for humans. Explore my technical capabilities below.
        </p>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6 relative">
        {services.map((svc, i) => (
          <ServiceBentoCard key={i} svc={svc} index={i} />
        ))}
      </div>
      
    </section>
  )
}

function ServiceBentoCard({ svc, index }: { svc: typeof services[0], index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics-based spring for 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Map mouse position to rotation angle (max 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Update spring values for 3D tilt (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
    
    // Update raw pixel coordinates for radial spotlight gradient
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as React.CSSProperties}
      className={`group relative overflow-hidden rounded-[2rem] border border-border/40 bg-background/40 backdrop-blur-md transition-all duration-300 flex flex-col p-6 md:p-8 cursor-crosshair ${svc.gridClass}`}
    >
      {/* 1. Dynamic Radial Spotlight (Follows Mouse inside the card) */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary), 0.08), transparent 40%)`
        }}
      />
      
      {/* 2. Dynamic Border Glow Tracking */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
        style={{
          border: '1px solid transparent',
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary), 0.5), transparent 40%) border-box`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />

      {/* Top Header Section */}
      <div className="flex items-start justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center bg-foreground/5 text-primary border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-500 shadow-sm">
          <svc.icon strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-auto relative z-10 pt-8" style={{ transform: "translateZ(40px)" }}>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {svc.title}
        </h3>
        
        {/* Description (Always visible on mobile, hover-revealed on desktop) */}
        <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2 md:mt-0">
              {svc.desc}
            </p>
            <div className="flex flex-wrap gap-2 pb-2">
              {svc.tags.map((tag: string, j: number) => (
                <span key={j} className="px-3 py-1.5 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-[150ms]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Watermark */}
      <div 
        className="absolute -bottom-10 -right-10 text-primary/5 pointer-events-none transform scale-[3] md:scale-[5] transition-transform duration-700 ease-out group-hover:scale-[3.5] md:group-hover:scale-[5.5] group-hover:text-primary/10 group-hover:-rotate-12 z-0"
        style={{ transform: "translateZ(10px)" }}
      >
         <svc.icon strokeWidth={1.2} className="w-32 h-32" />
      </div>
    </motion.div>
  )
}
