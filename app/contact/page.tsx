import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactBookingForm from "@/components/contact/ContactBookingForm";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Three Brothers Salon Cuts",
  description:
    "Let's book your next look. Get in touch with Three Brothers Salon Cuts at Maharagama, Colombo. Reserve appointments, view opening hours, and direct WhatsApp booking.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactBookingForm />
      <ContactLocation />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}
