export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  iconName: string;
  startingPrice: string;
  deliveryTime: string;
  whoItIsFor: string[];
  whoItIsNotFor: string[];
  deliverables: string[];
  process: { step: number; title: string; desc: string; days: string }[];
  relevantProjects: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Ultra-fast, mobile-first business websites built for local shops, clinics, and firms.",
    heroHeadline: "Fast, Mobile-Friendly Websites Built for Gujarat Businesses",
    heroSubhead:
      "Turn local visitors into paying customers with a lightweight website that loads in under 2 seconds on 4G Android phones.",
    iconName: "Globe",
    startingPrice: "₹7,999",
    deliveryTime: "7 - 10 Days",
    whoItIsFor: [
      "Local clinics, doctors, dentists needing patient appointment bookings and trust",
      "Restaurants, cafes, sweet shops wanting digital menus and direct WhatsApp orders",
      "Gyms, fitness clubs, coaching centers needing lead capture and membership details",
      "Gujarat retail shops and manufacturers wanting a professional digital presence",
    ],
    whoItIsNotFor: [
      "Companies wanting slow WordPress themes with 40 plugins that crash regularly",
      "Projects needing 6 months of corporate bureaucracy before anything goes live",
    ],
    deliverables: [
      "Mobile-first responsive design tested on budget Android devices",
      "Page load speed under 2 seconds on Indian 4G mobile connections",
      "Direct Click-to-Call & 1-tap WhatsApp lead buttons",
      "Google Maps integration & On-Page Local SEO optimization",
      "Custom domain connection & SSL security certificate",
      "100% full ownership of source code, hosting, and assets",
      "30 days of complimentary post-launch support & minor text updates",
    ],
    process: [
      { step: 1, title: "15-Min Discovery & Blueprint", desc: "We review your business goals, target area, and outline fixed scope on WhatsApp.", days: "Day 1-2" },
      { step: 2, title: "Design & Copy Crafting", desc: "We create clean, jargon-free layouts with your photos, phone numbers, and services.", days: "Day 3-5" },
      { step: 3, title: "Review & Mobile Testing", desc: "You preview the live site on your phone; we fine-tune layout and WhatsApp buttons.", days: "Day 6" },
      { step: 4, title: "Live Launch & Handover", desc: "Domain connected, Google search submitted, and full ownership handed over to you.", days: "Day 7" },
    ],
    relevantProjects: ["life-fitness", "anaya-dental", "rajvi-khaman"],
    faqs: [
      {
        q: "Will I have to pay any monthly maintenance fees?",
        a: "No mandatory monthly fees. Once built, the website belongs to you. Standard cloud hosting on modern platforms is often zero cost or minimal annual renewal. We offer optional annual care if you want us to handle updates.",
      },
      {
        q: "Can I update phone numbers, photos, or prices myself?",
        a: "Yes. We set up simple content controls or provide 1-tap updates. For any quick text or price changes, you can also send Aryan a quick WhatsApp message during your 30-day support window.",
      },
      {
        q: "What do I need to provide before you start?",
        a: "Only your business name, contact phone/WhatsApp, photos of your shop/clinic, and a list of your services or products. We can assist with writing the copy if you don't have text prepared.",
      },
    ],
  },
  {
    id: "google-business-profile",
    slug: "google-business-profile",
    title: "Google Business Profile Setup & SEO",
    shortDescription: "Rank #1 on Google Maps and local search so walk-in customers find and call you first.",
    heroHeadline: "Show Up #1 on Google Maps When Local Customers Search Nearby",
    heroSubhead:
      "When people in your city search 'dentist near me', 'gym in [city]', or 'best restaurant', your profile should appear at the very top with 5-star trust.",
    iconName: "MapPin",
    startingPrice: "₹4,999",
    deliveryTime: "5 - 7 Days",
    whoItIsFor: [
      "Any local Gujarat shop, clinic, salon, restaurant, or service business with a physical location",
      "Businesses with an unverified or suspended Google listing",
      "Owners who receive zero phone calls from Google Maps while their rivals dominate",
    ],
    whoItIsNotFor: [
      "Purely online digital businesses with no physical location or designated service area",
    ],
    deliverables: [
      "Official Google Business Profile creation or complete ownership reclamation",
      "Category optimization and local primary/secondary keyword targeting",
      "High-resolution geotagged photo uploads (storefront, interior, products)",
      "Automated WhatsApp review generation template & QR code for walk-in customers",
      "Local service area configuration across your city and surrounding pin codes",
      "Direct Google Maps link integration with your website",
    ],
    process: [
      { step: 1, title: "Profile Audit & Verification Check", desc: "Verify ownership, pin coordinates, and current ranking weaknesses.", days: "Day 1" },
      { step: 2, title: "Category & Keyword Architecture", desc: "Select high-volume local search categories and service keywords.", days: "Day 2-3" },
      { step: 3, title: "Visual Assets & Hours Setup", desc: "Upload optimized photos, business hours, menu/service catalog, and attributes.", days: "Day 4-5" },
      { step: 4, title: "Review Funnel Setup", desc: "Deliver your custom review QR code and WhatsApp message template to collect real 5-star ratings.", days: "Day 6-7" },
    ],
    relevantProjects: ["anaya-dental", "culinary-hub"],
    faqs: [
      {
        q: "How long does it take to start seeing calls from Google Maps?",
        a: "Most fully optimized profiles see an uptick in direct calls and direction requests within 10 to 21 days as Google recrawls verified citations and reviews.",
      },
      {
        q: "Can you fix a suspended or unverified Google listing?",
        a: "Yes. We guide you through the official Google verification steps (video verification or business utility bill documents) to get your pin live.",
      },
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    title: "Mobile App & Portal Development",
    shortDescription: "Custom Android, iOS, and Web apps for customer bookings, internal portals, and orders.",
    heroHeadline: "Custom Mobile & Web Applications Built for Real Business Workflows",
    heroSubhead:
      "Move away from messy spreadsheets and paper registers. Get an intuitive app built for your staff and customers.",
    iconName: "Smartphone",
    startingPrice: "₹24,999",
    deliveryTime: "2 - 4 Weeks",
    whoItIsFor: [
      "Gyms wanting member workout tracking & subscription expiry alerts",
      "Distributors & manufacturers needing field order capture apps",
      "Clinics needing patient records and appointment queue tokens",
      "Startups wanting a fast, scalable MVP to pitch to investors or pilot with users",
    ],
    whoItIsNotFor: [
      "Simple local shops that only need a brochure website and WhatsApp button",
    ],
    deliverables: [
      "Cross-platform responsive web application or native Android/iOS APK",
      "Admin dashboard with user management, orders, and exportable reports",
      "Authentication via Mobile OTP / Email / Google Sign-In",
      "Database schema & secure REST / GraphQL API",
      "Full source code repository transfer to your GitHub account",
    ],
    process: [
      { step: 1, title: "Workflow Scoping", desc: "Map exact screens, user roles (Admin vs Customer), and data requirements.", days: "Week 1" },
      { step: 2, title: "Interactive UI Prototype", desc: "Test clickable screen flows on your phone before coding.", days: "Week 2" },
      { step: 3, title: "Full-Stack Development", desc: "Build backend, database, notifications, and clean client interface.", days: "Week 3" },
      { step: 4, title: "Testing & Deployment", desc: "Deploy to cloud server, configure backups, and train your team.", days: "Week 4" },
    ],
    relevantProjects: ["life-fitness", "empire-799"],
    faqs: [
      {
        q: "Does my business really need an app, or will a website do?",
        a: "If you just want customers to find your address, call you, or see your menu, a fast mobile website is 10x cheaper and faster. You only need an app if you have recurring user logins, offline data capture, or heavy daily operations.",
      },
    ],
  },
  {
    id: "it-support",
    slug: "it-support",
    title: "IT Services & Business Infrastructure",
    shortDescription: "Professional domain setup, Google Workspace email, cloud hosting, and continuous care.",
    heroHeadline: "Reliable IT, Hosting & Professional Business Email for Peace of Mind",
    heroSubhead:
      "Stop using @gmail.com for your business. We set up professional email, secure DNS, fast cloud hosting, and keep your site running smoothly.",
    iconName: "ShieldCheck",
    startingPrice: "₹3,999",
    deliveryTime: "2 - 3 Days",
    whoItIsFor: [
      "Businesses wanting official emails like contact@yourbrand.com",
      "Owners stuck with slow shared hosting providers that take 10 seconds to load",
      "Firms needing regular security updates, automated backups, and uptime monitoring",
    ],
    whoItIsNotFor: [
      "Large corporations needing dedicated on-premise hardware engineers",
    ],
    deliverables: [
      "Custom domain registration & DNS configuration (Cloudflare / GoDaddy / Namecheap)",
      "Business email setup (Google Workspace, Zoho Mail, or Microsoft 365)",
      "Migration from slow legacy servers to high-speed global cloud CDN",
      "Automated weekly database backups and SSL renewal",
      "Direct WhatsApp emergency IT support line",
    ],
    process: [
      { step: 1, title: "DNS & Account Audit", desc: "Secure domain registrar credentials and verify DNS records.", days: "Day 1" },
      { step: 2, title: "Email & MX Configuration", desc: "Configure DKIM, SPF, and DMARC so emails never land in spam.", days: "Day 2" },
      { step: 3, title: "Migration & Verification", desc: "Verify cloud CDN, SSL certificate, and test email sending on mobile.", days: "Day 3" },
    ],
    relevantProjects: ["empire-799", "anaya-dental"],
    faqs: [
      {
        q: "Will my current emails or website go down during migration?",
        a: "No. We configure DNS with zero downtime migration strategies so your customer communications remain uninterrupted.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI / UX Design",
    shortDescription: "Clean, conversion-focused mobile and web interface design with zero visual clutter.",
    heroHeadline: "Interface Design Focused on Trust, Clarity, and Conversions",
    heroSubhead:
      "We design digital experiences that ordinary people understand immediately. No confusing animations, no visual noise — just clear pathways to purchase.",
    iconName: "Palette",
    startingPrice: "₹6,999",
    deliveryTime: "5 - 7 Days",
    whoItIsFor: [
      "Startups wanting high-fidelity Figma mockups before investing in development",
      "Existing websites with high bounce rates and low lead conversion",
      "Businesses looking to modernize an outdated, cluttered interface",
    ],
    whoItIsNotFor: [
      "People wanting artistic experimental layouts that confuse mobile shoppers",
    ],
    deliverables: [
      "Figma design system with typography, color tokens, and components",
      "Mobile-first responsive screen designs (360px Android to 1440px Desktop)",
      "Interactive clickable prototype for customer testing",
      "Developer-ready assets and exportable SVG icons",
    ],
    process: [
      { step: 1, title: "Wireframing & Content Flow", desc: "Map key conversion actions and hierarchy on low-fi wireframes.", days: "Day 1-2" },
      { step: 2, title: "Visual Design System", desc: "Craft accessible colors, crisp typography, and touch-friendly controls.", days: "Day 3-4" },
      { step: 3, title: "Interactive Prototype & Handover", desc: "Walk through clickable screens and provide Figma file with full rights.", days: "Day 5-7" },
    ],
    relevantProjects: ["rajvi-khaman", "culinary-hub"],
    faqs: [
      {
        q: "Do I get full ownership of the Figma source files?",
        a: "Yes. 100% of design files, vector assets, and typography specs belong to you with zero restrictions.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-Commerce & Digital Catalogs",
    shortDescription: "Online stores and WhatsApp ordering catalogs that bypass 30% aggregator commissions.",
    heroHeadline: "Sell Directly to Your Customers Without Paying 30% Commissions",
    heroSubhead:
      "Keep 100% of your profits. Give your customers an easy digital catalog where they can browse products, add to cart, and order via WhatsApp or UPI.",
    iconName: "ShoppingBag",
    startingPrice: "₹14,999",
    deliveryTime: "10 - 14 Days",
    whoItIsFor: [
      "Local food & sweet shops tired of Swiggy / Zomato taking 25-35% cut",
      "Retailers selling clothes, jewelry, home goods, or FMCG directly",
      "Wholesalers and manufacturers offering B2B wholesale catalogs",
    ],
    whoItIsNotFor: [
      "Sellers expecting a generic marketplace like Amazon with millions of random vendors",
    ],
    deliverables: [
      "Complete mobile-friendly product catalog with categories & search",
      "1-tap WhatsApp checkout sending itemized order directly to your phone",
      "Optional UPI / Razorpay payment gateway integration",
      "Simple admin sheet to manage prices, inventory, and out-of-stock items",
      "Automatic order confirmation message for customers",
    ],
    process: [
      { step: 1, title: "Product Catalog Structuring", desc: "Organize categories, product variants (sizes/weights), and pricing.", days: "Day 1-3" },
      { step: 2, title: "Storefront Development", desc: "Build ultra-fast mobile catalog with instant search and cart.", days: "Day 4-8" },
      { step: 3, title: "Payment & WhatsApp Integration", desc: "Configure UPI QR / gateway and test automated order messages.", days: "Day 9-11" },
      { step: 4, title: "Training & Launch", desc: "Teach you how to add new products in 2 minutes from your phone.", days: "Day 12-14" },
    ],
    relevantProjects: ["bhavnagari", "empire-799", "rajvi-khaman"],
    faqs: [
      {
        q: "How does WhatsApp ordering work?",
        a: "When a customer adds items to cart and taps 'Order on WhatsApp', your WhatsApp opens automatically with an itemized bill, total amount, customer address, and phone number ready to confirm.",
      },
      {
        q: "Can I collect online payments before delivering?",
        a: "Yes. We can integrate instant UPI payment links or Razorpay/PhonePe payment gateways so customers pay securely upfront.",
      },
    ],
  },
];
