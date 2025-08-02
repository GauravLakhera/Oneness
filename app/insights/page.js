"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import InsightsHero from "@/components/Insights/InsightsHero";
import InsightsArticles from "@/components/Insights/InsightsArticles";
import ContactCTA from "@/components/Insights/ContactCTA";

export default function Insights() {
  return <>
  <InsightsHero />
  <InsightsArticles />
  <ContactCTA />
  </>;
}
