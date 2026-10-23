"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./WorkCTA.module.css";

export default function WorkCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <h2 className={styles.title}>
            Your Next Look <br />
            <span className={styles.titleHighlight}>Starts Here.</span>
          </h2>
          <p className={styles.subtitle}>
            Book an appointment and let us create a style that fits you.
          </p>
          <Link href="/contact" className={styles.bookBtn}>
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight size={15} className={styles.btnArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
}
