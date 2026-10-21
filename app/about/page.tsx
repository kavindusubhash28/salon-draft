import type { Metadata } from "next";
import BrandStory from "@/components/about/BrandStory";
import SalonInterior from "@/components/about/SalonInterior";
import TeamProfiles from "@/components/about/TeamProfiles";
import Philosophy from "@/components/about/Philosophy";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "About Us | Three Brothers Salon Cuts",
  description:
    "Learn about the three brothers behind Colombo's premier barbershop and hair salon atelier. Discover our heritage, master barber team profiles, bespoke interior, and craft philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <BrandStory />
      <SalonInterior />
      <TeamProfiles />
      <Philosophy />
      <AppointmentCTA />
    </>
  );
}
