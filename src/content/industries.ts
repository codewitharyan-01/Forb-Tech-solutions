export interface IndustryItem {
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  headline: string;
  painPoints: string[];
  whatWeBuild: string[];
  exampleProjectSlug: string;
  exampleProjectName: string;
  keyMetric: string;
}

export const industriesData: IndustryItem[] = [
  {
    slug: "clinics",
    title: "Clinics & Doctors",
    shortDesc: "Dentists, physicians, pediatricians, and specialized healthcare clinics.",
    iconName: "Stethoscope",
    headline: "Websites & Google Maps Rankings for Gujarat Doctors & Clinics",
    painPoints: [
      "Patients struggle to find your OPD timings, doctor qualifications, and fees online",
      "Rival clinics show up higher on Google Maps when patients search 'dentist near me'",
      "Reception staff spend all day repeating the same clinic address and fee answers",
    ],
    whatWeBuild: [
      "Lightweight clinic website with OPD timings, treatments, and doctor profile",
      "Google Business Profile optimization to rank #1 locally for healthcare searches",
      "1-tap WhatsApp consultation request button with prefilled patient details",
      "Emergency callout bar with Google Map directions for walk-in patients",
    ],
    exampleProjectSlug: "anaya-dental",
    exampleProjectName: "Anaya Dental Care",
    keyMetric: "Direct patient appointment requests directly on WhatsApp",
  },
  {
    slug: "restaurants",
    title: "Restaurants & Cafes",
    shortDesc: "Cafes, dine-in restaurants, sweet shops, and local food brands.",
    iconName: "Utensils",
    headline: "Direct Digital Menus & WhatsApp Orders Without 30% Food Aggregator Fees",
    painPoints: [
      "Losing 25% to 35% commission on every single Swiggy and Zomato delivery order",
      "Paper menus getting dirty, torn, or requiring expensive reprints when prices change",
      "No customer database to notify regulars about weekend specials or catering offers",
    ],
    whatWeBuild: [
      "Fast mobile digital menu with food photography, Jain options, and live pricing",
      "WhatsApp ordering flow that sends itemized orders and address directly to the kitchen",
      "Table reservation request system for weekend peak dinners",
      "QR codes for dining tables allowing customers to view the menu on their phone",
    ],
    exampleProjectSlug: "bhavnagari",
    exampleProjectName: "Bhavnagari Bateta Bhungla",
    keyMetric: "0% aggregator fees on direct repeat customer orders",
  },
  {
    slug: "gyms",
    title: "Gyms & Fitness Studios",
    shortDesc: "Gyms, CrossFit boxes, yoga studios, and personal training facilities.",
    iconName: "Dumbbell",
    headline: "High-Energy Web Portals That Turn Walk-in Inquiries into Memberships",
    painPoints: [
      "Relying on paper flyers and word of mouth with no online presence for new residents",
      "Explaining monthly/annual membership prices and equipment over and over again",
      "High dropout rates because prospective members never get a trial pass reminder",
    ],
    whatWeBuild: [
      "Dynamic gym showcase with virtual tour photos of equipment and weight sections",
      "1-Day Free Trial Pass lead capture form sent instantly to gym owner's WhatsApp",
      "Transparent membership tier table (1 Month, 3 Month, Annual) with benefits",
      "Trainer credentials, certified specialization badges, and batch timings",
    ],
    exampleProjectSlug: "life-fitness",
    exampleProjectName: "Life Fitness Nikol",
    keyMetric: "Instant trial pass notifications delivered directly to front desk",
  },
  {
    slug: "ecommerce",
    title: "Retail & E-Commerce",
    shortDesc: "Clothing boutiques, jewelry, handicrafts, and local Gujarat retail shops.",
    iconName: "ShoppingBag",
    headline: "Simple Online Stores with WhatsApp Checkout & Secure Payments",
    painPoints: [
      "Selling only to foot-traffic customers when out-of-town buyers want your products",
      "Spending hours sending photos manually back and forth on WhatsApp to curious buyers",
      "Complex e-commerce platforms with expensive monthly Shopify plugin subscriptions",
    ],
    whatWeBuild: [
      "Clean product catalog with high-resolution image galleries and size charts",
      "Instant 1-tap WhatsApp checkout sending selected products and delivery address",
      "Secure UPI and online payment integration with zero monthly software subscription fees",
      "Simple admin dashboard to update stock and prices in 60 seconds",
    ],
    exampleProjectSlug: "empire-799",
    exampleProjectName: "Empire 799 Store",
    keyMetric: "Zero monthly SaaS subscription fees with 100% code ownership",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Builders",
    shortDesc: "Brokers, property developers, commercial showroom builders, and consultants.",
    iconName: "Building2",
    headline: "Property Showcase Sites Built to Capture High-Intent Buyer Inquiries",
    painPoints: [
      "Losing serious property buyers because project floor plans aren't easily downloadable",
      "Paying high recurring listing fees on real estate aggregator portals",
      "Inability to showcase project video walkthroughs and amenities clearly",
    ],
    whatWeBuild: [
      "Dedicated project landing page with brochure PDF download gated by phone number",
      "High-res floor plans, master layout, and unit specification breakdowns",
      "Direct 'Book Site Visit' button linked to the sales manager's WhatsApp",
      "RERA number display, legal compliance info, and location connectivity map",
    ],
    exampleProjectSlug: "empire-799",
    exampleProjectName: "Empire 799",
    keyMetric: "Verified phone numbers captured for site visit scheduling",
  },
  {
    slug: "education",
    title: "Education & Coaching",
    shortDesc: "Coaching institutes, computer classes, competitive exam academies, and schools.",
    iconName: "GraduationCap",
    headline: "Student Admission Portals & Course Detail Pages That Build Parent Trust",
    painPoints: [
      "Parents cannot easily find batch schedules, fee structure, and faculty qualifications",
      "Missed admission inquiries during peak academic admission seasons",
      "Competitors running Google Ads capturing student enrollments in your locality",
    ],
    whatWeBuild: [
      "Course catalog with syllabus outlines, batch timings, and past student results",
      "Online admission inquiry form with automated confirmation to institute admin",
      "Google Business Profile optimization to capture 'best coaching near me' searches",
      "Student testimonials, topper photos, and downloadable prospectus PDF",
    ],
    exampleProjectSlug: "anaya-dental",
    exampleProjectName: "Anaya Educational",
    keyMetric: "High-intent parent inquiries delivered straight to admissions desk",
  },
  {
    slug: "manufacturing",
    title: "Gujarat Manufacturing & B2B",
    shortDesc: "Engineering workshops, plastics, packaging, chemical, and textile manufacturers.",
    iconName: "Factory",
    headline: "B2B Product Catalogs & RFQ Inquiries for Gujarat Industrial Firms",
    painPoints: [
      "Foreign and interstate buyers questioning company credibility due to outdated website",
      "Technical specifications, machine capacities, and ISO certifications buried or missing",
      "Relying solely on trade fairs and IndiaMART leads where 10 competitors bid on the same lead",
    ],
    whatWeBuild: [
      "Professional corporate export website with comprehensive technical product specs",
      "Request For Quote (RFQ) inquiry form with drawings/PDF attachment capability",
      "Factory tour photo gallery showcasing machinery, quality control, and testing lab",
      "Direct founder email & WhatsApp for overseas procurement officers",
    ],
    exampleProjectSlug: "rajvi-khaman",
    exampleProjectName: "Rajvi Manufacturing",
    keyMetric: "Direct RFQ inquiries received without marketplace middleman commissions",
  },
];
