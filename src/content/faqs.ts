export interface FAQItem {
  id: string;
  category: "pricing" | "timeline" | "ownership" | "technical" | "support";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-cost",
    category: "pricing",
    question: "How much does a website cost for a small business in Gujarat?",
    answer:
      "A complete, mobile-friendly 1-page website with Google Maps integration starts from ₹7,999. A full multi-page business website with Google Business Profile optimization is ₹17,999. There are no hidden setup fees, and we provide a fixed quote before starting work.",
  },
  {
    id: "faq-hidden-charges",
    category: "pricing",
    question: "Are there any hidden monthly or annual charges?",
    answer:
      "None. Many traditional agencies charge mandatory monthly AMC (Annual Maintenance Contracts) just to keep your site online. We deploy on modern cloud infrastructure where hosting is often free or low-cost. You only pay for your standard domain renewal (approx ₹800–₹1,000/year paid directly to the registrar) unless you hire us for ongoing monthly work.",
  },
  {
    id: "faq-ownership",
    category: "ownership",
    question: "Will I own the website, domain, and code completely?",
    answer:
      "100% yes. We register the domain in your name and provide all source code, hosting access, and login credentials. You are never locked in with us. If you ever want another developer to manage it years later, you have full freedom.",
  },
  {
    id: "faq-timeline",
    category: "timeline",
    question: "How long does it take from our first chat to the website going live?",
    answer:
      "For a Starter website, 5 to 7 days. For a multi-page Growth website, 10 to 14 days. Custom web apps and e-commerce stores take 3 to 5 weeks depending on custom feature requirements.",
  },
  {
    id: "faq-client-input",
    category: "timeline",
    question: "What do I need to prepare before we start?",
    answer:
      "Very little. Just send us: 1) Your business name & phone number, 2) Photos of your shop, clinic, or products, and 3) A list of services and prices. If you don't have text written out, we write simple, professional copy for you at no extra charge.",
  },
  {
    id: "faq-mobile-speed",
    category: "technical",
    question: "Will the website load quickly for customers on low mobile data?",
    answer:
      "Yes. Most agency websites are bloated with heavy plugins and slow sliders that take 8 seconds to load on a mid-range phone. We hand-code our websites using Next.js and optimized images so pages load in under 2 seconds even on standard 4G connections.",
  },
  {
    id: "faq-maps-ranking",
    category: "technical",
    question: "Can you help my business show up higher on Google Maps?",
    answer:
      "Yes. We optimize your official Google Business Profile with accurate categories, geotagged photos, local keywords, and provide a 1-tap review collection QR code so your happy walk-in customers leave 5-star Google ratings easily.",
  },
  {
    id: "faq-updates",
    category: "support",
    question: "What if I need to update my prices or phone number later?",
    answer:
      "Every project includes 30 to 60 days of complimentary support. You can simply send Aryan a WhatsApp message, and updates are pushed within 24 hours. For frequent updates, we can also connect simple content sheets.",
  },
];
