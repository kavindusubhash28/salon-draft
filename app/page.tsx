import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedPrices from "@/components/home/FeaturedPrices";
import Lookbook from "@/components/home/Lookbook";
import BrandExperience from "@/components/home/BrandExperience";
import Testimonials from "@/components/home/Testimonials";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedPrices />
      <Lookbook />
      <BrandExperience />
      <Testimonials />
      <AppointmentCTA />
    </>
  );
}
