import React from "react";
import Link from "next/link";
import { Scissors, Calendar, Sparkles, ChevronRight, Award } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.badgePill}>
            <Award size={15} />
            <span>Artisan Master Barbers &bull; Unisex Studio &bull; Colombo 03</span>
          </div>

          <h1 className={styles.heroTitle}>
            Heritage Craft.
            <span className={styles.heroTitleGold}>Modern Precision.</span>
            Uncompromised.
          </h1>

          <p className={styles.heroDesc}>
            Founded by three brothers united by an obsession with razor discipline,
            custom shear architecture, and vibrant color chemistry. Step into our
            dual-studio atelier where every cut is treated as bespoke craftsmanship.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/booking" className={styles.primaryBtn}>
              <Calendar size={17} />
              <span>Reserve Your Chair</span>
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              <Scissors size={17} />
              <span>Explore Menu &amp; Rates</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Master Brothers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>14+</span>
              <span className={styles.statLabel}>Years Heritage</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>18K+</span>
              <span className={styles.statLabel}>Precision Cuts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4.9/5</span>
              <span className={styles.statLabel}>Client Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
