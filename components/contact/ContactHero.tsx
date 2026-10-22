"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <span className={styles.overline}>THREE BROTHERS SALON CUTS</span>
          <h1 className={styles.title}>
            Let’s Book Your
            <span className={styles.titleHighlight}>Next Look.</span>
          </h1>
          <p className={styles.description}>
            Get in touch with us, reserve your appointment, or simply ask for
            grooming advice. We're here to help you look and feel your best.
          </p>

          <div className={styles.actionRow}>
            <Link href="#booking-form" className={styles.bookBtn}>
              <Calendar size={18} />
              <span>Book Appointment</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/94789727272"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Cursive Flourish */}
        <div className={styles.flourishWrapper} aria-hidden="true">
          <div className={styles.flourishText}>
            Good
            <br />
            Hair
            <br />
            Brings
            <br />
            Good Days.
          </div>
        </div>
      </div>
    </section>
  );
}
