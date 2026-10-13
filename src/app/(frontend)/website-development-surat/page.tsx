import React from "react";
import type { Metadata } from "next";
import { citiesData } from "@/content/cities";
import { CityPageTemplate } from "@/components/sections/CityPageTemplate";

const city = citiesData.find((c) => c.slug === "website-development-surat")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
};

export default function SuratCityPage() {
  return <CityPageTemplate city={city} />;
}
