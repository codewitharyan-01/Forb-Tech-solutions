export interface TestimonialItem {
  id: string;
  name: string;
  business: string;
  role: string;
  location: string;
  projectSlug: string;
  rating: number;
  quote: string;
  highlight: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-anaya",
    name: "Dr. Anaya & Team",
    business: "Anaya Dental Care",
    role: "Clinic Founder",
    location: "Nikol, Ahmedabad",
    projectSlug: "anaya-dental",
    rating: 5,
    quote:
      "Aryan built a clean, reassuring website for our clinic. Most importantly, patients love that they can see our treatment fees upfront and tap one button to message our clinic receptionist on WhatsApp. Zero hassle.",
    highlight: "Clear treatment fees and instant WhatsApp booking",
  },
  {
    id: "test-life-fitness",
    name: "Gym Management",
    business: "Life Fitness",
    role: "Head of Operations",
    location: "Ahmedabad, Gujarat",
    projectSlug: "life-fitness",
    rating: 5,
    quote:
      "Before the website, our trainers spent half their day answering the same questions about membership prices and equipment on phone calls. Now members check the site, request a 1-day free trial on WhatsApp, and walk straight into the gym.",
    highlight: "Saves 20 minutes per inquiry and boosted trial pass walk-ins",
  },
  {
    id: "test-bhavnagari",
    name: "Bunty Kaka",
    business: "Bhavnagari Bateta Bhungla",
    role: "Owner",
    location: "Gujarat",
    projectSlug: "bhavnagari",
    rating: 5,
    quote:
      "We wanted a digital menu that customers could open on their phone without downloading heavy apps. The WhatsApp order button sends us the customer's parcel order clearly with address. No delivery commission cuts.",
    highlight: "Direct parcel orders without 30% food aggregator commission",
  },
  {
    id: "test-empire",
    name: "Empire Retail Team",
    business: "Empire 799",
    role: "E-Commerce Manager",
    location: "Gujarat",
    projectSlug: "empire-799",
    rating: 5,
    quote:
      "Fast page load speed was our top requirement because our customers browse on mobile data. Aryan delivered an ultra-fast store layout that loads instantaneously. Very responsive communication throughout.",
    highlight: "Sub-2s mobile loading speed on 4G phones",
  },
  {
    id: "test-culinary",
    name: "Dev Munjani",
    business: "Culinary Hub (Dev's Kitchen)",
    role: "Founder & Chef",
    location: "Gujarat",
    projectSlug: "culinary-hub",
    rating: 5,
    quote:
      "Having our specialty dishes, pure veg / Jain options, and cafe ambiance clearly showcased online brought us a steady increase in weekend family table reservations.",
    highlight: "Increased weekend family table reservations",
  },
  {
    id: "test-rajvi",
    name: "Rajvi Foods Team",
    business: "Rajvi Khaman",
    role: "Brand Owner",
    location: "Gujarat",
    projectSlug: "rajvi-khaman",
    rating: 5,
    quote:
      "Aryan respected our traditional food roots and designed a modern identity that helped us capture bulk party and wedding catering inquiries directly.",
    highlight: "Captured bulk party orders and catering inquiries",
  },
];
