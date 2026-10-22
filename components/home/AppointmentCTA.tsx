import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./AppointmentCTA.module.css";

export default function AppointmentCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bgContainer}>
        <Image
          src="/images/barber_tools_counter.jpg"
          alt="Barber Tools"
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrap}>
          <h2 className={styles.title}>
            Your next great look
            <br />
            starts <span className={styles.hereHighlight}>here.</span>
          </h2>

          <p className={styles.subtitle}>
            Visit us at the salon or get in touch to reserve your time.
          </p>

          <Link href="/booking" className={styles.bookBtn}>
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
