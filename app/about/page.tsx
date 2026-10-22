import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import BrandStory from "@/components/about/BrandStory";
import SalonInterior from "@/components/about/SalonInterior";
import TeamProfiles from "@/components/about/TeamProfiles";
import Philosophy from "@/components/about/Philosophy";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Three Brothers Salon Cuts",
  description:
    "Learn about the three brothers behind Colombo's premier barbershop. Built on passion, driven by brotherhood. Discover our heritage, master barber team, bespoke interior, and craft philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <SalonInterior />
      <TeamProfiles />
      <Philosophy />
      <AboutCTA />
    </>
  );
}
