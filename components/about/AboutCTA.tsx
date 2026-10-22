import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
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
        <div className={styles.contentWrap}>
          <h2 className={styles.title}>Be a Part of Our Story</h2>

          <p className={styles.subtitle}>
            Book your next appointment and experience the Three Brothers
            difference.
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
