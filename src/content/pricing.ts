export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  startingPrice: string;
  priceNumeric: number;
  deliveryTime: string;
  recommendedFor: string;
  highlight?: boolean;
  features: string[];
  whatIsNotIncluded: string[];
  ctaText: string;
}

export interface PricingAddon {
  title: string;
  price: string;
  description: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Shopfront",
    tagline: "Essential online presence for local shops, clinics, and service providers.",
    startingPrice: "₹7,999",
    priceNumeric: 7999,
    deliveryTime: "5 - 7 Days",
    recommendedFor: "Single-location clinics, local restaurants, salons, and repair shops needing to be found on Google.",
    highlight: false,
    features: [
      "1 High-Speed Landing Page with all key business details",
      "Mobile-First Responsive Layout tested on budget Android devices",
      "Direct Click-to-Call & 1-tap WhatsApp lead buttons",
      "Google Maps Location embed & opening hours display",
      "Domain connection & free SSL security certificate",
      "On-page local SEO keywords & Schema markup",
      "100% full ownership of source code & hosting credentials",
      "30 days complimentary post-launch support",
    ],
    whatIsNotIncluded: [
      "Custom CMS login for multiple staff members",
      "Online credit card payment processing (WhatsApp UPI provided)",
      "Multi-city location landing pages",
    ],
    ctaText: "Start Starter Package",
  },
  {
    id: "growth",
    name: "Growth Business",
    tagline: "Complete multi-page website with Google Business Profile ranking boost.",
    startingPrice: "₹17,999",
    priceNumeric: 17999,
    deliveryTime: "10 - 14 Days",
    recommendedFor: "Growing gyms, multi-specialty clinics, restaurants, and firms needing separate service pages.",
    highlight: true,
    features: [
      "Up to 5 Custom Pages (Home, Services, About, Gallery, Contact)",
      "Google Business Profile setup, category tuning & optimization",
      "Automated Google Review collection QR code & template",
      "Interactive Quote / Inquiry form with email & WhatsApp alert",
      "Customer reviews and portfolio project showcases",
      "Sub-2s page load speed guarantee on Indian 4G mobile networks",
      "Professional business email setup (e.g. info@yourbusiness.com)",
      "60 days of priority post-launch support & minor edits",
    ],
    whatIsNotIncluded: [
      "Full custom mobile app (available in custom package)",
      "Complex custom backend databases",
    ],
    ctaText: "Choose Growth Package",
  },
  {
    id: "custom",
    name: "Custom Application",
    tagline: "Tailored web applications, e-commerce stores, and booking portals.",
    startingPrice: "₹34,999",
    priceNumeric: 34999,
    deliveryTime: "3 - 5 Weeks",
    recommendedFor: "E-commerce stores, custom gym member portals, B2B wholesale catalogs, and startups needing an MVP.",
    highlight: false,
    features: [
      "Custom Full-Stack Next.js / React Web Application",
      "Product Catalog with WhatsApp & UPI payment gateway checkout",
      "Admin Dashboard for products, orders, or appointment tokens",
      "User authentication via Mobile OTP or Google Sign-In",
      "Custom database (Supabase / PostgreSQL) architecture",
      "Full source code repository transfer to your private GitHub",
      "Automated weekly database backups & security monitoring",
      "90 days of dedicated maintenance and feature fine-tuning",
    ],
    whatIsNotIncluded: [
      "Paid third-party API usage fees (e.g., SMS OTP gateway recharges)",
    ],
    ctaText: "Discuss Custom Project",
  },
];

export const pricingAddons: PricingAddon[] = [
  {
    title: "Google Business Profile Full Setup",
    price: "₹4,999",
    description: "Verification assistance, category selection, geotagged photo uploads, and review QR funnels.",
  },
  {
    title: "Business Email & Domain Setup",
    price: "₹2,499",
    description: "Professional Google Workspace or Zoho Mail configuration with DKIM, SPF, and DMARC security.",
  },
  {
    title: "Annual Hosting & Maintenance Care",
    price: "₹5,999 / year",
    description: "Fast cloud hosting, automated weekly backups, SSL certificates, and up to 4 text/photo updates per month.",
  },
];

export const paymentTerms = [
  {
    title: "50% Upfront, 50% on Final Launch",
    description: "You only pay the remaining balance once the site is completely built, tested on your phone, and approved by you.",
  },
  {
    title: "100% Client Ownership Guarantee",
    description: "Your domain, your cloud hosting, and your code belong to you. No hidden proprietary locks or hostage fees.",
  },
  {
    title: "Fixed Price Quotes — No Surprise Invoices",
    description: "The scope we agree upon is the exact price you pay. No unexpected hourly bills or surprise add-on charges.",
  },
];
