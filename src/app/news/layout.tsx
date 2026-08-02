import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Insights | ForbTech",
  description: "Stay updated with the latest in enterprise technology, AI, and scalable architectures.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
