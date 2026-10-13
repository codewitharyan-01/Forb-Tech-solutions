export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  founderName: string;
  founderRole: string;
  founderBio: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappPrefill: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  serviceArea: string;
  openingHours: string;
  siteUrl: string;
  stats: {
    projectsCompleted: number;
    projectText: string;
    turnaroundDays: string;
    codeOwnership: string;
  };
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "ForbTech",
  tagline: "High-Quality, Budget-Friendly Digital Solutions for Gujarat Businesses",
  description:
    "We build fast business websites, Google Business Profile rankings, and WhatsApp-ready digital shops for local clinics, restaurants, gyms, and stores in Gujarat. No jargon, transparent pricing, 100% code ownership.",
  founderName: "Aryan",
  founderRole: "Founder & Lead Engineer",
  founderBio:
    "Full-stack engineer based in Gujarat helping local business owners escape high marketplace commissions and get discovered on Google Maps and search.",
  email: "forbteck@gmail.com",
  phone: "+919023668571",
  phoneDisplay: "+91 90236 68571",
  whatsapp: "919023668571",
  whatsappDisplay: "+91 90236 68571",
  whatsappPrefill: "Hi Aryan, I found ForbTech and would like to discuss a project for my business.",
  addressLocality: "Ahmedabad & Gandhinagar",
  addressRegion: "Gujarat",
  addressCountry: "India",
  serviceArea: "Gujarat (Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot) & Global Clients",
  openingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  siteUrl: "https://forb-tech-solutions.vercel.app", // Custom domain placeholder [DOMAIN]
  stats: {
    projectsCompleted: 6, // Verified live client projects
    projectText: "6 Live Verified Projects",
    turnaroundDays: "7 Days Average",
    codeOwnership: "100% Full Ownership",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/aryan-forbtech", // Placeholder
    github: "https://github.com/codewitharyan-01",
  },
};
