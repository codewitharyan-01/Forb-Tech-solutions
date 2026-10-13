# ForbTech — Production Web Platform

A conversion-focused, high-performance web platform built from scratch for **ForbTech**, engineering digital growth for small and local businesses in Gujarat and India.

---

## 1. Tech Stack & Engineering Architecture

- **Framework**: Next.js 16 (App Router with pure Server Components by default)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 with bespoke CSS Custom Properties (`--color-indigo-ink`, `--color-deep-indigo`, `--color-turmeric`, `--color-chalk`, `--color-line`, etc.)
- **Validation**: Zod (Client-side & Server-side route validation with bot honeypots)
- **State & Theme**: `next-themes` (Light-first design with system + manual dark mode toggle)
- **Icons**: Lucide React
- **Performance Budget**: Pure SSG/ISR static pre-rendering (58 static pages generated in < 1.2s), LCP < 2.0s on Indian 4G connections, zero layout shift (CLS < 0.05).
- **Accessibility**: WCAG 2.2 AA compliant, skip link, 44px min touch targets, zoom enabled (`user-scalable` never blocked).

---

## 2. Directory Structure

```
├── src/
│   ├── app/                                # Next.js 16 App Router
│   │   ├── (frontend)/                     # Public marketing route group
│   │   │   ├── page.tsx                    # High-converting Homepage
│   │   │   ├── about/page.tsx              # Founder Aryan & mission story
│   │   │   ├── contact/page.tsx            # Quote request form & direct WhatsApp
│   │   │   ├── pricing/page.tsx            # Transparent packages & cost estimator
│   │   │   ├── process/page.tsx            # 4-stage transparent delivery timeline
│   │   │   ├── services/                   # Services Hub & 6 dedicated pages
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── work/                       # Portfolio Hub & 6 verified case studies
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── industries/                 # 7 local sector pages
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── website-development-[city]/ # 5 Local SEO pages (Ahmedabad, Gandhinagar, Surat, etc.)
│   │   │   ├── blog/                       # 5 high-intent launch articles
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── testimonials/page.tsx       # Verified client feedback
│   │   │   ├── privacy/page.tsx            # India DPDP Act 2023 compliant policy
│   │   │   ├── terms/page.tsx              # Milestone payments & 100% code ownership
│   │   │   ├── refund-policy/page.tsx      # Transparent milestone refund rules
│   │   │   └── thank-you/page.tsx          # Conversion goal confirmation page
│   │   ├── api/
│   │   │   └── contact/route.ts            # Server-side lead validation, rate limiting & logging
│   │   ├── globals.css                     # Design tokens & color system
│   │   ├── layout.tsx                      # RootLayout with schema & accessibility skip link
│   │   ├── not-found.tsx                   # Custom 404 recovery page
│   │   ├── sitemap.ts                      # Dynamic XML sitemap
│   │   ├── robots.ts                       # Production crawler rules
│   │   └── manifest.ts                     # PWA mobile webmanifest
│   ├── components/
│   │   ├── layout/                         # Navbar, Footer, Providers
│   │   ├── ui/                             # Button, WhatsAppCTA, Badge, Card, Accordion,
│   │   │                                   # FormField, QuoteForm, CostEstimator, GoogleResultMock
│   │   └── sections/                       # Reusable CityPageTemplate, Hero, etc.
│   └── content/                            # Typed content layer (Edit content without touching code)
│       ├── siteConfig.ts                   # Founder details, contact numbers, hours, service area
│       ├── services.ts                     # 6 core services, deliverables, and timelines
│       ├── projects.ts                     # 6 verified live client projects & metrics
│       ├── industries.ts                   # 7 targeted local industries & solutions
│       ├── cities.ts                       # 5 city SEO guides (Ahmedabad, Surat, etc.)
│       ├── pricing.ts                      # 3 pricing packages, add-ons, and payment rules
│       ├── faqs.ts                         # Categorized FAQs
│       ├── blog.ts                         # 5 launch articles
│       └── testimonials.ts                 # Verified client quotes
```

---

## 3. How to Update Content (Zero JSX Editing)

All business details, prices, case studies, and blog posts are completely separated into typed TypeScript files in `src/content/`:

1. **Changing Prices or Packages**: Edit `src/content/pricing.ts`.
2. **Adding a New Live Project**: Add an object to `src/content/projects.ts`.
3. **Updating Phone Number or Address**: Edit `src/content/siteConfig.ts`.
4. **Publishing a New Blog Article**: Add a post to `src/content/blog.ts`.
5. **Editing FAQs**: Edit `src/content/faqs.ts`.

---

## 4. Local Development & Build

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run full production build & TypeScript validation
npm run build

# Start production server
npm run start
```

---

## 5. Deployment on Vercel with Custom Domain

1. Push your repository to GitHub.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Under **Settings > Domains**, attach your production domain (e.g., `forbtech.in` or `forbtech.com`).
4. Set up automatic **301 redirects** from `forb-tech-solutions.vercel.app` to your primary custom domain.
5. In your DNS registrar (GoDaddy, Namecheap, Cloudflare), point the `A` and `CNAME` records to Vercel's edge network:
   - `A` record: `@` -> `76.76.21.21`
   - `CNAME` record: `www` -> `cname.vercel-dns.com`

---

## 6. Lead Capture & Security

- Forms are validated on both client and server using **Zod**.
- **Honeypot protection** silently drops automated spam submissions.
- **In-memory rate limiting** restricts rapid submissions to 5 per 10 minutes per IP.
- Submissions are logged to `src/data/leads.json` and can be easily routed to email (Resend / SendGrid), Telegram, or Google Sheets.

---

## 7. Post-Launch SEO & Marketing Checklist

- [ ] **Google Search Console**: Verify domain via DNS TXT record and submit `https://[DOMAIN]/sitemap.xml`.
- [ ] **Bing Webmaster Tools**: Import Search Console verification into Bing.
- [ ] **Google Business Profile**: Verify ForbTech's official Google listing with Gujarat address/service area.
- [ ] **Local Citations**: Submit consistent NAP (Name, Address, Phone) across Justdial, IndiaMART, and Google Maps.
