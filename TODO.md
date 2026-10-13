# ForbTech Rebuild — Data & Asset Supply Checklist (TODO)

Below is the checklist of assets and business data for Aryan to supply or update. All of these values are isolated in typed content files under `src/content/` so they can be changed without touching any components or JSX code.

---

## 1. Contact & Business Details (`src/content/siteConfig.ts`)
- [ ] **Custom Domain**: Update `siteUrl` from `https://forb-tech-solutions.vercel.app` to your production domain (e.g., `https://forbtech.in` or `https://forbtech.com`).
- [ ] **Phone & WhatsApp**: Confirm if `+91 90236 68571` is the final business number for both calls and WhatsApp.
- [ ] **Email**: Confirm `forbteck@gmail.com` or replace with a custom business email (e.g., `aryan@forbtech.in`).
- [ ] **Physical Address / Registered Office**: Specify your exact shop/office address or confirm service area as `"Ahmedabad & Gandhinagar, Gujarat"`.
- [ ] **Business Hours**: Currently set to `Mon - Sat: 9:00 AM - 7:00 PM IST`. Adjust if you have different working hours.
- [ ] **Social Profiles**: Add real profile links for LinkedIn, Instagram, Google Business Profile page (replace placeholders in `siteConfig.ts`).

---

## 2. Pricing & Packages (`src/content/pricing.ts`)
- [ ] **Starter Package**: Currently starting from **₹7,999**. Adjust starting figure if desired.
- [ ] **Growth Package**: Currently starting from **₹17,999**. Adjust starting figure if desired.
- [ ] **Custom Package**: Currently starting from **₹34,999**. Adjust starting figure if desired.
- [ ] **Add-ons**: Confirm pricing for Google Business Profile setup (₹4,999), Business Email setup (₹2,499), and Annual Maintenance (₹5,999/yr).

---

## 3. Project Case Studies & Proof (`src/content/projects.ts`)
- [ ] **15+ Projects Confirmation**: Currently, the site strictly highlights your **6 verified live projects** (`anaya-dental`, `life-fitness`, `bhavnagari`, `empire-799`, `culinary-hub`, `rajvi-khaman`) to maintain 100% credibility. If you confirm "15+ projects", update `stats.projectsCompleted` in `src/content/siteConfig.ts`.
- [ ] **Screenshots**: Place desktop/mobile screenshots of each project into `/public/projects/` if you wish to display actual image files instead of code mockups.
- [ ] **Client Testimonials**: Confirm permission from clinic/shop owners to display their names and quotes.

---

## 4. Legal & Compliance (`src/app/(frontend)/terms/page.tsx` & `privacy/page.tsx`)
- [ ] **Legal Business Name**: If operating under a registered proprietorship, LLP, or Pvt Ltd, update the legal name in `siteConfig.ts` and `terms/page.tsx`.
- [ ] **GSTIN (Optional)**: If GST registered and you want to display GSTIN for tax invoices, add it to `siteConfig.ts` and the footer.

---

## 5. Post-Launch SEO & Setup
- [ ] **Google Search Console**: Verify domain ownership and submit `https://[YOUR-DOMAIN]/sitemap.xml`.
- [ ] **Bing Webmaster Tools**: Import Search Console verification into Bing.
- [ ] **Google Business Profile**: Verify ForbTech's official Google listing with your Gujarat location.
- [ ] **Vercel DNS & 301 Redirect**: Add custom domain in Vercel project settings and ensure permanent 301 redirect from the `vercel.app` subdomain to your custom domain.
