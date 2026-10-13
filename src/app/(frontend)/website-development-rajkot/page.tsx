import React from "react";
import type { Metadata } from "next";
import { citiesData } from "@/content/cities";
import { CityPageTemplate } from "@/components/sections/CityPageTemplate";

const city = citiesData.find((c) => c.slug === "website-development-rajkot")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
};

export default function RajkotCityPage() {
  return <CityPageTemplate city={city} />;
}
