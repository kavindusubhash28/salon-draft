import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesPricing from "@/components/services/ServicesPricing";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services & Tariffs | Three Brothers Salon Cuts",
  description:
    "Services crafted for your style. Expert grooming, styling, barbering and care. Explore our complete pricing, transparent tariffs for Gentlemen and Ladies, and FAQs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <ServiceFAQ />
      <ServicesCTA />
    </>
  );
}
