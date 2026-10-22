import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Hero Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero_barber.jpg"
          alt="Three Brothers Master Barber Craftsman"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.overline}>THREE BROTHERS SALON CUTS</span>

          <h1 className={styles.heroTitle}>
            GOOD HAIR.
            <br />
            GOOD CONFIDENCE.
          </h1>

          <p className={styles.tagline}>
            BARBERING &nbsp;—&nbsp; STYLING &nbsp;—&nbsp; GROOMING
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/services" className={styles.primaryBtn}>
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              <span>VIEW OUR WORK</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Strip */}
      <div className={styles.tickerStrip}>
        <div className={styles.tickerContent}>
          <span>CUTS WITH CHARACTER</span>
          <span className={styles.tickerDot}>▪</span>
          <span>DETAIL IN EVERY FINISH</span>
          <span className={styles.tickerDot}>▪</span>
          <span>MADE FOR YOUR STYLE</span>
        </div>
      </div>
    </section>
  );
}
