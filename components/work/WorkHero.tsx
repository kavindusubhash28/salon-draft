"use client";

import React from "react";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <span className={styles.overline}>OUR WORK</span>
          <h1 className={styles.title}>
            Real People.
            <span className={styles.titleHighlight}>Real Styles.</span>
          </h1>
          <p className={styles.description}>
            A collection of cuts, colours and grooming styles created at Three
            Brothers Salon Cuts.
          </p>
        </div>
      </div>
    </section>
  );
}
