import { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ForbTech Digital Solutions",
    short_name: "ForbTech",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F7FB",
    theme_color: "#1D2A7A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
