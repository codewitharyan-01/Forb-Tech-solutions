export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  liveUrl: string;
  summary: string;
  problem: string;
  solution: string;
  measurableResult: string;
  techUsed: string[];
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "anaya-dental",
    slug: "anaya-dental",
    title: "Anaya Dental Care",
    client: "Dr. Anaya & Team",
    category: "Healthcare & Clinic",
    industry: "clinics",
    liveUrl: "https://anaya-dental-care.vercel.app/",
    summary:
      "A fast, modern clinic website with direct appointment booking and local Google Maps optimization for a dental clinic.",
    problem:
      "Patients looking for dental treatments in the local area couldn't find clinic timings, doctor credentials, or an easy way to book consultations without calling during busy OPD hours.",
    solution:
      "Built a lightweight, calming clinic landing page with emergency toothache callouts, 1-tap WhatsApp consultation request, doctor credentials, and treatment fee transparency.",
    measurableResult:
      "Achieved sub-1.5s load times on 4G mobile, enabling patients to easily schedule morning and evening appointments directly via WhatsApp.",
    techUsed: ["Next.js", "React", "Tailwind CSS", "Local SEO Schema"],
    deliverables: [
      "Treatment Showcase & Pricing Guide",
      "Direct WhatsApp Consultation Booking",
      "Interactive Google Maps Location Pin",
      "Doctor Profile & Hygiene Guarantee Section",
    ],
    testimonial: {
      quote:
        "Patients often tell us they chose our clinic because the website gave clear pricing and made booking on WhatsApp completely effortless.",
      author: "Clinic Management",
      designation: "Anaya Dental Care",
    },
  },
  {
    id: "life-fitness",
    slug: "life-fitness",
    title: "Life Fitness Gym",
    client: "Life Fitness Nikol",
    category: "Fitness & Gym",
    industry: "gyms",
    liveUrl: "https://hardcore-nikol.vercel.app/",
    summary:
      "A high-energy gym web app showcasing trainer profiles, workout schedules, membership tiers, and lead capture for walk-in trials.",
    problem:
      "The gym relied solely on offline flyers and Instagram DMs, resulting in missed leads and inquiries that weren't followed up promptly.",
    solution:
      "Developed a mobile-optimized gym portal highlighting modern equipment, membership packages, and a 1-day free trial request button directly connected to the owner's WhatsApp.",
    measurableResult:
      "Streamlined trial pass signups with immediate WhatsApp alert to the front desk, driving higher footfall during evening peak hours.",
    techUsed: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    deliverables: [
      "Membership Tier & Equipment Breakdown",
      "Free 1-Day Pass Lead Funnel",
      "Trainer Credentials & Schedule Table",
      "Google Maps Location Directions",
    ],
    testimonial: {
      quote:
        "New members walk in having already seen our plans and equipment on the website. Saves our trainers 20 minutes of explaining every time.",
      author: "Gym Manager",
      designation: "Life Fitness",
    },
  },
  {
    id: "bhavnagari",
    slug: "bhavnagari",
    title: "Bhavnagari Bateta Bhungla",
    client: "Banti Kaka Bhavnagari",
    category: "Food Delivery & Street Food",
    industry: "restaurants",
    liveUrl: "https://buntykakabhavnagari.github.io/Banti-Kaka-Bhavnagari-Bateta-Bhungla/",
    summary:
      "A mouth-watering digital catalog for a famous Gujarat street food brand, allowing direct customer orders without food aggregator commissions.",
    problem:
      "Customers frequently called asking for menu items, spice levels, and parcel packing details during peak rush hours, slowing down food preparation.",
    solution:
      "Created an appetite-inducing visual menu with clear pricing, parcel sizes, hygiene standards, and a direct WhatsApp order button that generates an itemized message.",
    measurableResult:
      "Zero aggregator commissions: enables customers to view the full menu on their phone and place bulk and parcel orders directly.",
    techUsed: ["HTML5", "CSS3", "JavaScript", "WhatsApp API Integration"],
    deliverables: [
      "Visual Street Food Menu with Gujarati descriptions",
      "1-Tap WhatsApp Parcel Ordering",
      "Store Hours & Google Map directions",
      "Hygiene & Freshness Commitment",
    ],
  },
  {
    id: "empire-799",
    slug: "empire-799",
    title: "Empire 799",
    client: "Empire 799 Retail",
    category: "E-Commerce",
    industry: "ecommerce",
    liveUrl: "https://empire799.com/",
    summary:
      "A high-conversion e-commerce storefront designed for fast product discovery, checkout, and inventory cataloging.",
    problem:
      "Needed an independent online store capable of displaying collections clearly, handling surge traffic, and processing customer orders seamlessly.",
    solution:
      "Built a sleek e-commerce shopping experience with fast search filtering, responsive mobile cart drawer, and optimized checkout flow.",
    measurableResult:
      "Sub-2s page load speed across product category pages, improving cart-to-checkout progression on mobile devices.",
    techUsed: ["Next.js", "React", "Tailwind CSS", "Payment Gateway"],
    deliverables: [
      "Product Catalog with Filtering & Sorting",
      "Mobile-First Slide-over Cart",
      "Secure Online Payment & COD selection",
      "Order Tracking & Confirmation System",
    ],
  },
  {
    id: "culinary-hub",
    slug: "culinary-hub",
    title: "Culinary Hub",
    client: "Dev's Kitchen",
    category: "Restaurant & Cafe",
    industry: "restaurants",
    liveUrl: "https://dev-munjani.github.io/Dev-s-Kitchen/",
    summary:
      "An inviting restaurant and cafe showcase featuring categorized menus, table reservations, and appetizing food photography.",
    problem:
      "Diners looking for table availability and specialty dishes on weekends had no way to inspect the cafe ambiance or menu beforehand.",
    solution:
      "Crafted an elegant digital menu with dietary tags (Pure Veg / Jain options), ambiance gallery, and 1-tap table booking via WhatsApp.",
    measurableResult:
      "Boosted weekend table reservation requests and eliminated printing costs for updated seasonal specials.",
    techUsed: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    deliverables: [
      "Categorized Menu with Jain & Special Dietary Filters",
      "Table Reservation Form via WhatsApp",
      "Cafe Ambiance Photo Showcase",
      "Location Map & Parking Information",
    ],
  },
  {
    id: "rajvi-khaman",
    slug: "rajvi-khaman",
    title: "Rajvi Khaman",
    client: "Rajvi Foods",
    category: "Branding & Food Retail",
    industry: "manufacturing",
    liveUrl: "https://codewitharyan-01.github.io/Rajvi_Khaman/",
    summary:
      "Digital brand presence for a beloved traditional Gujarat snacks and farsan business, celebrating authentic taste and heritage.",
    problem:
      "A traditional family-run food brand needed a clean online identity to cater to catering orders, bulk event parcels, and new generation foodies.",
    solution:
      "Designed a warm, heritage-inspired web presence featuring signature items (Nylon Khaman, Sev Khamani, Patra), party order requirements, and founder story.",
    measurableResult:
      "Increased bulk party orders for weddings and family gatherings with direct call and WhatsApp inquiries.",
    techUsed: ["HTML5", "Modern CSS", "JavaScript", "Local Brand Identity"],
    deliverables: [
      "Heritage Story & Traditional Recipe Highlights",
      "Bulk Catering Order Inquiry Funnel",
      "Store Branches & Contact Details",
      "Product Shelf-life & Parcel Packaging Guide",
    ],
  },
];
