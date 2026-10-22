import React from "react";
import Image from "next/image";
import styles from "./BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroBlock}>
          <span className={styles.subheading}>The Origin</span>
          <h1 className={styles.title}>Three Brothers. Pure Craft.</h1>
          <p className={styles.leadDesc}>
            Built on generational respect for traditional blade work and modern
            hair architecture.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop"
              alt="Three Brothers Barber Craftsmanship"
              width={700}
              height={550}
              className={styles.storyImg}
            />
            <div className={styles.badgeOverlay}>
              Est. Colombo &bull; Family Owned
            </div>
          </div>

          <div className={styles.textColumn}>
            <h3>A Family Dedicated to Hair Craft</h3>
            <p>
              Growing up around barber chairs and straight razors, Kasun, Tharindu,
              and Nuwan understood that a great haircut shapes confidence, posture, and presence.
            </p>
            <p className={styles.highlightQuote}>
              &ldquo;We created a space where gentlemen receive surgical skin fades
              and hot towel shaves, while ladies enjoy bespoke balayage and restorative
              care in complete comfort.&rdquo;
            </p>
            <p>
              Kasun brings European blade discipline, Tharindu leads precision scissor
              geometry, and Nuwan commands organic color chemistry. Together, they
              run Three Brothers on Galle Road, Colombo 03.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
