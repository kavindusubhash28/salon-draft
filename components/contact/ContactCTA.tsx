"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <span className={styles.overline}>READY FOR A FRESH LOOK?</span>
          <h2 className={styles.title}>
            Your next cut is
            <span className={styles.titleHighlight}>one message away.</span>
          </h2>
          <p className={styles.subtitle}>
            Book your appointment now or give us a call. Great hair starts here.
          </p>

          <div className={styles.actionRow}>
            <Link href="#booking-form" className={styles.bookBtn}>
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>

            <a href="tel:+94771234567" className={styles.callBtn}>
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Right Cursive Script Flourish */}
        <div className={styles.flourishWrapper} aria-hidden="true">
          <div className={styles.flourishText}>
            More
            <br />
            Than A Cut
            <br />
            It's A Lifestyle
          </div>
        </div>
      </div>
    </section>
  );
}
