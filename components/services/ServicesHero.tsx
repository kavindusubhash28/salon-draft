import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero_barber.jpg"
          alt="Three Brothers Barber Cutting Hair"
          fill
          priority
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrap}>
          <span className={styles.overline}>THREE BROTHERS SALON CUTS</span>

          <h1 className={styles.title}>
            Services crafted
            <br />
            for your style.
          </h1>

          <p className={styles.description}>
            Expert grooming, styling, barbering and care — all in one place.
            From classic cuts to modern trends, we help you look and feel your
            best.
          </p>

          <div className={styles.btnRow}>
            <Link href="/booking" className={styles.bookBtn}>
              <Calendar size={15} />
              <span>Book Now</span>
              <ArrowRight size={15} />
            </Link>
            <a href="#prices" className={styles.viewPricesBtn}>
              <span>View Prices</span>
            </a>
          </div>
        </div>

        {/* Right cursive script flourish */}
        <div className={styles.scriptFlourish}>
          <span>More</span>
          <span>Than A Cut</span>
          <span className={styles.lifestyleText}>It&apos;s A Lifestyle</span>
        </div>
      </div>
    </section>
  );
}
