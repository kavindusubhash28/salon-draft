import { Suspense } from "react";
import type { Metadata } from "next";
import AppointmentForm from "@/components/booking/AppointmentForm";
import WhatsAppBooking from "@/components/booking/WhatsAppBooking";
import LocationMap from "@/components/contact/LocationMap";
import BusinessHours from "@/components/contact/BusinessHours";

export const metadata: Metadata = {
  title: "Book Chair Appointment | Three Brothers Salon Cuts",
  description:
    "Reserve your bespoke haircut, skin fade, beard shave, balayage, or keratin treatment with Kasun, Tharindu, or Nuwan. Dedicated separate male and female studios in Colombo 03.",
};

export default function BookingPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="py-24 text-center text-[#c8a265] font-serif">
            Loading Atelier Schedule...
          </div>
        }
      >
        <AppointmentForm />
      </Suspense>
      <WhatsAppBooking />
      <LocationMap />
      <BusinessHours />
    </>
  );
}
