import type { Metadata } from "next";
import ServicesList from "@/components/services/ServicesList";
import ServicePackages from "@/components/services/ServicePackages";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "Services & Tariffs | Three Brothers Salon Cuts",
  description:
    "Explore our complete grooming and styling menu. Separated male and female studios featuring razor skin fades, beard sculpting, precision women's cuts, balayage, keratin smoothing, and deluxe packages.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesList />
      <ServicePackages />
      <ServiceFAQ />
      <AppointmentCTA />
    </>
  );
}
