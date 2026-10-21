import React from "react";
import Link from "next/link";
import { Calendar, MessageSquare, Clock, MapPin, Sparkles } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./AppointmentCTA.module.css";

export default function AppointmentCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Reservations &bull; Walk-Ins Welcomed</span>
          </div>

          <h2 className={styles.title}>Experience The Difference In The Chair</h2>
          <p className={styles.desc}>
            Reserve your bespoke grooming session with Kasun, Tharindu, or Nuwan.
            Fast online slot selection or instant WhatsApp confirmation.
          </p>

          <div className={styles.actionRow}>
            <Link href="/booking" className={styles.primaryBtn}>
              <Calendar size={17} />
              <span>Book Appointment Online</span>
            </Link>
            <a
              href={`https://wa.me/${SALON_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Three%20Brothers%20Salon!%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageSquare size={17} />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>

          <div className={styles.quickInfo}>
            <span className={styles.quickInfoItem}>
              <Clock size={15} />
              <span>Open 7 Days a Week (Mon-Sat 9AM-8:30PM | Sun 9:30AM-6:30PM)</span>
            </span>
            <span className={styles.quickInfoItem}>
              <MapPin size={15} />
              <span>Opposite Liberty Arcade, Galle Road, Colombo 03</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
