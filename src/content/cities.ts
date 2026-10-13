export interface CityItem {
  slug: string;
  cityName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subhead: string;
  localContext: string;
  keyAreas: string[];
  popularIndustries: string[];
  localFaqs: { q: string; a: string }[];
}

export const citiesData: CityItem[] = [
  {
    slug: "website-development-ahmedabad",
    cityName: "Ahmedabad",
    title: "Website Development in Ahmedabad",
    metaTitle: "Website Development in Ahmedabad | Fast, Affordable Local Websites",
    metaDescription:
      "Get a high-speed, budget-friendly business website in Ahmedabad. 100% mobile-ready, Google Maps SEO, and WhatsApp lead buttons. Delivered in 7 days.",
    headline: "Fast, High-Converting Website Development in Ahmedabad",
    subhead:
      "Help local customers find your business on Google Search and Maps across Ahmedabad. Transparent fixed pricing, no hidden maintenance charges.",
    localContext:
      "Ahmedabad is Gujarat's commercial powerhouse. From retail stores in C.G. Road and Prahlad Nagar to manufacturing units in Odhav and clinics in Nikol and Maninagar, your customers search Google on their phone before visiting. We build lightweight websites that load in under 2 seconds on Indian mobile networks.",
    keyAreas: [
      "SG Highway & Prahlad Nagar",
      "Nikol, Bapunagar & Naroda",
      "Maninagar & Kankaria",
      "C.G. Road, Navrangpura & Ashram Road",
      "Bodakdev, Thaltej & Satellite",
      "Sanand & Changodar Industrial Area",
    ],
    popularIndustries: ["Healthcare & Dental Clinics", "Restaurants & Cafes", "Gyms & Fitness Centers", "Textile & Retail Shops"],
    localFaqs: [
      {
        q: "Can we meet in person in Ahmedabad to discuss my website?",
        a: "Yes! Aryan is based in Gujarat. We can discuss your project requirements in person in Ahmedabad/Gandhinagar or over a quick 15-minute WhatsApp video call.",
      },
      {
        q: "How long does a website take to launch for an Ahmedabad shop or clinic?",
        a: "Most starter business websites are fully designed, tested, and live within 7 days once you share your basic service details and photos.",
      },
      {
        q: "Will my website show up on Google Maps for Ahmedabad searches?",
        a: "Yes. Every website package includes on-page local SEO schema and Google Maps integration to improve your visibility for 'near me' searches in your Ahmedabad locality.",
      },
    ],
  },
  {
    slug: "website-development-gandhinagar",
    cityName: "Gandhinagar",
    title: "Website Development in Gandhinagar",
    metaTitle: "Website Development in Gandhinagar | Local Business Web Design",
    metaDescription:
      "Professional, affordable website development in Gandhinagar. Designed for clinics, government consultants, IT companies, and local retail stores.",
    headline: "Modern Business Websites & Google Rankings in Gandhinagar",
    subhead:
      "Clean, credible websites for Gandhinagar enterprises, startups, and service professionals. Direct WhatsApp leads, fast 4G loading, and full ownership.",
    localContext:
      "As Gujarat's state capital and a rapidly expanding hub around GIFT City, Gandhinagar businesses need digital trust and modern aesthetics to win institutional and local clients. We provide custom-coded websites without sluggish templates.",
    keyAreas: [
      "GIFT City & PDPU Road",
      "Sector 1 to Sector 30",
      "Kudasan & Raysan",
      "Infocity & Electronic Estate",
      "Sargasan & Vavol",
    ],
    popularIndustries: ["Professional IT Services", "Medical Centers & Pharmacies", "Education & Coaching Academies", "Commercial Consultants"],
    localFaqs: [
      {
        q: "How much does a professional website cost for a Gandhinagar firm?",
        a: "Our starter packages start from ₹7,999 with fixed deliverables and 100% client ownership. No recurring software lock-ins.",
      },
      {
        q: "Can you assist with setting up our Google Business Profile in Gandhinagar?",
        a: "Yes. We verify and optimize your official Google listing with accurate sector coordinates, business hours, and photo geotagging.",
      },
    ],
  },
  {
    slug: "website-development-surat",
    cityName: "Surat",
    title: "Website Development in Surat",
    metaTitle: "Website Development in Surat | Fast E-Commerce & Business Websites",
    metaDescription:
      "Custom business websites and direct WhatsApp ordering catalogs for Surat businesses. Diamond traders, textile manufacturers, and local eateries.",
    headline: "High-Speed Website Development for Surat Businesses",
    subhead:
      "Turn customer inquiries into immediate sales. We build fast mobile storefronts, B2B wholesale catalogs, and Google Maps listings across Surat.",
    localContext:
      "Surat moves at breakneck entrepreneurial speed. Whether you run a textile house in Ring Road, a jewelry brand in Varachha, or a restaurant in Vesu or Adajan, you need a website that closes deals on WhatsApp without waiting for cumbersome email exchanges.",
    keyAreas: [
      "Ring Road Textile Market & Millennium",
      "Varachha, Katargam & Mini Bazar",
      "Vesu, VIP Road & Althan",
      "Adajan, Pal & Rander",
      "Sachin & Pandesara GIDC",
    ],
    popularIndustries: ["Textile Wholesalers & Boutiques", "Diamond & Jewelry Traders", "Food & Street Delicacies", "Real Estate Developers"],
    localFaqs: [
      {
        q: "Can my Surat textile or retail business sell products directly on WhatsApp?",
        a: "Yes! We specialize in lightweight digital catalogs where customers browse your products and click 'Order on WhatsApp' with itemized details.",
      },
      {
        q: "Do you build multi-lingual websites with Gujarati support?",
        a: "Yes, we can provide clean dual-language English & Gujarati copy so your local buyers feel right at home.",
      },
    ],
  },
  {
    slug: "website-development-vadodara",
    cityName: "Vadodara",
    title: "Website Development in Vadodara",
    metaTitle: "Website Development in Vadodara | Local SEO & Web Solutions",
    metaDescription:
      "Fast, elegant website design in Vadodara (Baroda). Trusted by local doctors, manufacturing units in Makarpura, academies, and food businesses.",
    headline: "Professional Website Development & SEO in Vadodara",
    subhead:
      "Build credibility for your Vadodara business with a high-performing website. Fast 4G loading, mobile-first design, and zero jargon.",
    localContext:
      "Vadodara blends cultural heritage with major industrial and educational hubs. From Makarpura GIDC engineering firms to clinics in Alkapuri and coaching institutes in Fatehgunj, a crisp, fast-loading website sets you apart from competitors with neglected old sites.",
    keyAreas: [
      "Alkapuri, RC Dutt Road & Race Course",
      "Makarpura & Waghodia GIDC",
      "Fatehgunj & Sayajigunj",
      "Manjalpur & Gotri",
      "Vasna-Bhayli Road",
    ],
    popularIndustries: ["Industrial Engineering & Fabrication", "Doctors & Multi-specialty Clinics", "Educational Classes & Coaching", "Restaurants & Sweet Shops"],
    localFaqs: [
      {
        q: "Do I get ownership of the domain and hosting accounts?",
        a: "Always. All hosting accounts, domain registrations, and source code files are 100% in your name.",
      },
    ],
  },
  {
    slug: "website-development-rajkot",
    cityName: "Rajkot",
    title: "Website Development in Rajkot",
    metaTitle: "Website Development in Rajkot | Engineering & Local Business Sites",
    metaDescription:
      "Affordable website development in Rajkot. Built for Saurashtra engineering units, diesel engine manufacturers, jewelry shops, and local restaurants.",
    headline: "Sturdy, Fast Business Websites for Rajkot Enterprises",
    subhead:
      "Showcase your machinery, products, and services to national and international buyers with a modern, fast website built in Gujarat.",
    localContext:
      "Rajkot is Saurashtra's engineering and commercial capital. Overseas and national buyers need to verify your workshop capabilities, certifications, and product catalogs. We build fast, mobile-friendly B2B and retail websites that build instant trust.",
    keyAreas: [
      "Aji & Metoda GIDC",
      "Yagnik Road & Kalawad Road",
      "Dhebar Road & Bhaktinagar",
      "150 Feet Ring Road & University Road",
      "Soni Bazar (Jewelry hub)",
    ],
    popularIndustries: ["Engineering & Casting Workshops", "Auto Components & Pump Manufacturers", "Jewelry & Silver Crafts", "Traditional Food & Farsan"],
    localFaqs: [
      {
        q: "Can we showcase technical CAD drawings or product PDF catalogs?",
        a: "Yes. We build fast downloadable PDF catalog buttons and RFQ (Request for Quote) forms directly linked to WhatsApp and email.",
      },
    ],
  },
];
