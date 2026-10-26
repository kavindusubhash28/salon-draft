import React from "react";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/about/hero.jpg"
          alt="Three Brothers Salon Cuts Exterior"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrap}>
          <span className={styles.overline}>ABOUT US</span>

          <h1 className={styles.title}>
            More than
            <br />
            <span className={styles.caramelHighlight}>just a haircut.</span>
          </h1>

          <p className={styles.description}>
            Three Brothers Salon Cuts — where style, skill and brotherhood come
            together to bring out the best you.
          </p>
        </div>
      </div>
    </section>
  );
}
