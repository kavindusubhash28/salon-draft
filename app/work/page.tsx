import type { Metadata } from "next";
import HairstyleGallery from "@/components/work/HairstyleGallery";
import Transformations from "@/components/work/Transformations";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "Our Work & Lookbook | Three Brothers Salon Cuts",
  description:
    "Explore our filterable portfolio of precision gentleman fades, beard contours, women's layered restyles, dimensional balayage, and real before/after client transformations.",
};

export default function WorkPage() {
  return (
    <>
      <HairstyleGallery />
      <Transformations />
      <AppointmentCTA />
    </>
  );
}
