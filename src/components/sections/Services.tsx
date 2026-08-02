"use client";

"use client";

import { motion, AnimatePresence } from "framer-motion"
import { Code2, Cpu, Globe2, LayoutTemplate, Network, PenTool } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Full Stack Web Apps",
    desc: "End-to-end web applications built with modern frameworks. Engineered from architecture to deployment for absolute scale, security, and speed.",
    icon: Code2,
    tags: ["React.js", "PHP", "MySQL", "Next.js"],
    backHeader: "ARCHITECTURAL MASTERY",
    backDetails: "We design robust monolithic and microservice architectures tailored for high-availability. From optimizing database queries in MySQL to implementing server-side rendering in Next.js, our full-stack solutions guarantee sub-second load times and impenetrable security across the entire technology stack. Your application will not just function; it will dominate the digital space with absolute performance."
  },
  {
    title: "AI Solutions",
    desc: "Integration of intelligent LLMs, custom prompt engineering, and hardware-software AI prototypes to automate complex workflows.",
    icon: Cpu,
    tags: ["Prompt Engineering", "Custom LLMs", "Hardware AI"],
    backHeader: "INTELLIGENT AUTOMATION",
    backDetails: "Leveraging cutting-edge language models and bespoke machine learning pipelines, we transform raw data into predictive intelligence. Our AI systems integrate seamlessly into your existing operations, reducing human error, automating redundant tasks, and unlocking entirely new revenue streams through personalized user experiences and autonomous decision-making algorithms."
  },
  {
    title: "Business Portals",
    desc: "Robust civic and B2B platforms featuring complex role-based access controls, interactive data dashboards, and secure internal tools.",
    icon: Globe2,
    tags: ["Role-Based Access", "Data Dashboards"],
    backHeader: "ENTERPRISE COMMAND CENTERS",
    backDetails: "We engineer highly secure, multi-tenant portal environments designed for enterprise scale. Featuring military-grade role-based access controls, interactive real-time data visualization, and streamlined administrative workflows, our business portals empower your workforce and clients to collaborate securely while maintaining strict data governance and compliance protocols."
  },
  {
    title: "CMS & E-Commerce",
    desc: "High-conversion digital storefronts, fully integrated e-commerce solutions, and SEO-optimized content management systems.",
    icon: LayoutTemplate,
    tags: ["WordPress", "E-Commerce", "SEO"],
    backHeader: "CONVERSION-DRIVEN COMMERCE",
    backDetails: "Our e-commerce architectures are meticulously crafted to minimize friction and maximize checkout conversions. By combining headless content management systems with lightning-fast frontends, we ensure that your storefront ranks exceptionally high on search engines while providing users with an immersive, localized, and ultra-secure shopping experience."
  },
  {
    title: "IT Infrastructure",
    desc: "Professional system administration, automated disaster recovery backups, and robust network engineering for zero-downtime operations.",
    icon: Network,
    tags: ["Troubleshooting", "Backups", "Security"],
    backHeader: "ZERO-DOWNTIME ENGINEERING",
    backDetails: "We deploy heavily fortified network architectures and automated failover systems to guarantee maximum uptime. Our infrastructure services include continuous vulnerability scanning, automated cross-region disaster recovery backups, and 24/7 system monitoring to ensure that your critical business operations remain resilient against any catastrophic failure or cyber threat."
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect, user-centric interfaces. We design intuitive, accessible experiences that align with modern enterprise standards.",
    icon: PenTool,
    tags: ["Responsive Design", "Wireframing"],
    backHeader: "PSYCHOLOGICAL DESIGN",
    backDetails: "Our design philosophy merges aesthetic brilliance with cognitive psychology. We map complex user journeys into frictionless wireframes, culminating in pixel-perfect, accessible interfaces. By eliminating cognitive load and emphasizing visual hierarchy, our UI/UX designs dramatically increase user retention and product satisfaction across all devices and platforms."
  }
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="services" className="pt-[15vh] pb-[20vh] px-4 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          Core <span className="text-primary">Services.</span>
        </h2>
      </div>

      {/* Interactive Stage Layout (Zero Scroll) */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 min-h-[500px]">
        
        {/* Left Side: The Menu (Grid on mobile, column on desktop) */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-3 relative z-20">
          {services.map((svc, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                onMouseEnter={() => { setActiveIdx(i); setIsFlipped(false); }}
                onClick={() => { setActiveIdx(i); setIsFlipped(false); }}
                className={`relative px-4 py-3 md:px-6 md:py-5 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 md:gap-4 text-center lg:text-left rounded-xl md:rounded-2xl transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {/* Active Highlight Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-menu-indicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 shrink-0">
                  <svc.icon strokeWidth={1.2} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="relative z-10 font-bold text-[11px] md:text-sm lg:text-lg leading-tight md:leading-normal">
                  {svc.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: The Stage (3D Perspective Container) */}
        <div className="w-full lg:w-2/3 perspective-1000">
          
          <motion.div 
            onClick={() => setIsFlipped(!isFlipped)}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="relative w-full h-full min-h-[400px] cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* FRONT FACE */}
            <div className="absolute inset-0 w-full h-full rounded-[2rem] md:rounded-[3rem] border border-border/40 bg-background/40 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl backface-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full p-8 md:p-12 lg:p-16 relative z-10"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[1.5rem] flex items-center justify-center bg-primary text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] mb-8">
                    {(() => {
                      const Icon = services[activeIdx].icon;
                      return <Icon strokeWidth={1.2} className="w-8 h-8 md:w-10 md:h-10" />;
                    })()}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-6 leading-tight">
                    {services[activeIdx].title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-medium">
                    {services[activeIdx].desc}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {services[activeIdx].tags.map((tag, j) => (
                      <span key={j} className="px-4 py-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Rotating Watermark */}
              <div className="absolute -bottom-16 -right-16 text-primary/5 pointer-events-none z-0">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {(() => {
                        const Icon = services[activeIdx].icon;
                        return <Icon strokeWidth={1} className="w-64 h-64 md:w-96 md:h-96" />;
                      })()}
                    </motion.div>
                 </AnimatePresence>
              </div>
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
            </div>

            {/* BACK FACE */}
            <div 
              className="absolute inset-0 w-full h-full rounded-[2rem] md:rounded-[3rem] border border-primary bg-primary text-primary-foreground overflow-hidden flex flex-col shadow-2xl backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="flex flex-col h-full p-8 md:p-12 lg:p-16 relative z-10 justify-center">
                <div className="mb-6 flex items-center gap-4">
                  {(() => {
                    const Icon = services[activeIdx].icon;
                    return <Icon strokeWidth={1.2} className="w-6 h-6 opacity-60" />;
                  })()}
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-60">
                    {services[activeIdx].backHeader}
                  </h4>
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                  {services[activeIdx].title}
                </h3>
                <p className="text-sm md:text-lg opacity-90 leading-relaxed font-medium text-justify">
                  {services[activeIdx].backDetails}
                </p>
                <div className="mt-8 text-[10px] font-bold uppercase tracking-widest opacity-50 text-center animate-pulse">
                  Click to return
                </div>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[100px] pointer-events-none z-0" />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
