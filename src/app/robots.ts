import { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/hq/", "/thank-you"],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
