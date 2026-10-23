import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MessageSquare,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import styles from "./ServicesCTA.module.css";

export default function ServicesCTA() {
  return (
    <section className={styles.section} id="book-appointment">
      {/* Background Barber Chair with Dark Vignette */}
      <div className={styles.bgContainer}>
        <Image
          src="/images/experience_chair.jpg"
          alt="Three Brothers Barber Chair"
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Column: Narrative & Action Buttons */}
          <div className={styles.contentCol}>
            <span className={styles.overline}>BOOK YOUR APPOINTMENT</span>

            <h2 className={styles.title}>Ready for your next look?</h2>

            <p className={styles.subtitle}>
              Reserve an appointment with our expert barbers and experience
              premium grooming at Three Brothers Salon Cuts.
            </p>

            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                <Calendar size={15} />
                <span>Book Appointment</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/94789727272?text=Hello%20Three%20Brothers%20Salon!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <MessageSquare size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Glassmorphic Details Card */}
          <div className={styles.cardCol}>
            <div className={styles.infoGlassCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <MapPin size={18} className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4 className={styles.infoHeading}>Our Location</h4>
                  <p className={styles.infoLine1}>304 High Level Road, Gamsaba Junction</p>
                  <p className={styles.infoLine2}>Nugegoda 10250, Sri Lanka</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Clock size={18} className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4 className={styles.infoHeading}>Opening Hours</h4>
                  <p className={styles.infoLine1}>Mon — Sun : 8:00 AM — 10:00 PM</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Phone size={18} className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4 className={styles.infoHeading}>Contact Us</h4>
                  <p className={styles.infoLine1}>+94 117 210 081 / +94 78 972 7272</p>
                  <p className={styles.infoLine2}>WhatsApp: +94 78 972 7272</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
