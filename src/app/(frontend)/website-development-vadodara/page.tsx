import React from "react";
import type { Metadata } from "next";
import { citiesData } from "@/content/cities";
import { CityPageTemplate } from "@/components/sections/CityPageTemplate";

const city = citiesData.find((c) => c.slug === "website-development-vadodara")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
};

export default function VadodaraCityPage() {
  return <CityPageTemplate city={city} />;
}
