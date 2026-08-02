"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Wispa AI Team",
    role: "Founders, Wispa AI",
    review: "ForbTech took our SSIP Phase 1 concept and turned it into a stunning startup prototype. Their execution was flawless, delivering a high-quality product that perfectly matched our vision and requirements.",
    rating: 5,
    highlight: "Rapid Prototyping"
  },
  {
    name: "CivicWorks Admin",
    role: "Director, Smart City Portal",
    review: "The award-winning Smart City civic portal built by ForbTech is incredibly robust. They handled complex integrations and delivered a secure, highly scalable platform that serves our community flawlessly.",
    rating: 5,
    highlight: "Award Winning Portal"
  },
  {
    name: "Life Fitness Gym",
    role: "Management, Life Fitness",
    review: "Our custom gym management web app has completely streamlined our daily operations. From member tracking to billing, ForbTech built an incredibly intuitive system that saves us hours every single day.",
    rating: 5,
    highlight: "Operational Efficiency"
  },
  {
    name: "Empire 799",
    role: "E-Commerce Operations",
    review: "ForbTech delivered a beautiful, high-converting digital storefront for Empire 799. The site is lightning fast, highly secure, and provides a seamless shopping experience for our customers.",
    rating: 5,
    highlight: "E-Commerce Growth"
  },
  {
    name: "Anaya Dental Care",
    role: "Clinic Management",
    review: "Our new healthcare website is professional, fast, and exactly what we needed to build trust with our patients. ForbTech's attention to detail and clean design principles are unmatched.",
    rating: 5,
    highlight: "Professional Branding"
  },
  {
    name: "Rajvi Khaman",
    role: "Owner, Rajvi Khaman",
    review: "We needed a strong digital presence to elevate our food brand. ForbTech delivered exceptional branding and a modern website that perfectly captures the essence of our business.",
    rating: 5,
    highlight: "Exceptional Branding"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-[20vh] pb-[15vh] px-4 relative z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            Client <span className="text-primary">Success.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here is what engineering leaders, founders, and executives have to say about working with ForbTech.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border/40 bg-background/40 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-background/80 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(var(--primary),0.1)] flex flex-col h-full"
            >
              {/* Massive Quote Watermark */}
              <div className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                <Quote className="w-24 h-24 rotate-12" />
              </div>

              {/* Highlight Badge */}
              <div className="mb-6 relative z-10">
                <span className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary shadow-sm inline-block">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                "{testimonial.review}"
              </p>

              {/* Client Info & Rating */}
              <div className="mt-auto relative z-10 border-t border-border/50 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                
                {/* 5 Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
