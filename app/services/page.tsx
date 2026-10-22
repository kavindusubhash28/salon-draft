import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesPricing from "@/components/services/ServicesPricing";
import ServicePackages from "@/components/services/ServicePackages";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services & Tariffs | Three Brothers Salon Cuts",
  description:
    "Services crafted for your style. Expert grooming, styling, barbering and care. Explore our complete pricing, transparent tariffs, signature grooming packages, and FAQs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <ServicePackages />
      <ServiceFAQ />
      <ServicesCTA />
    </>
  );
}
