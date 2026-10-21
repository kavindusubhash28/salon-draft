import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import LocationMap from "@/components/contact/LocationMap";
import BusinessHours from "@/components/contact/BusinessHours";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: "Contact & Location | Three Brothers Salon Cuts",
  description:
    "Find Three Brothers Salon Cuts on Galle Road, Colombo 03 opposite Liberty Arcade. View working hours, phone numbers, WhatsApp, and parking directions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactDetails />
      <LocationMap />
      <BusinessHours />
      <AppointmentCTA />
    </>
  );
}
