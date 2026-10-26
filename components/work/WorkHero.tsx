import React from "react";
import Image from "next/image";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/work_hero_clean_bg.jpg"
          alt="Three Brothers Salon Cuts - Real People Real Styles"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentBox}>
          <span className={styles.overline}>OUR WORK</span>
          <h1 className={styles.title}>
            Real People.
            <span className={styles.titleHighlight}>Real Styles.</span>
          </h1>
          <p className={styles.description}>
            A collection of our recent work, showcasing the skill and
            creativity of our team.
          </p>
        </div>
      </div>
    </section>
  );
}
