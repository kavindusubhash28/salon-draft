import React from "react";
import Image from "next/image";
import styles from "./BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroBlock}>
          <span className={styles.subheading}>The Origin</span>
          <h1 className={styles.title}>Three Brothers. One Relentless Obsession.</h1>
          <p className={styles.leadDesc}>
            Born from generational respect for precision cutting and the golden era
            of barbershop hospitality, Three Brothers Salon Cuts was forged to reject
            the rushed commercial salon machine.
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
            <h3>From Family Apprenticeship to Master Atelier</h3>
            <p>
              Growing up around clippers, leather strops, and traditional barber chairs,
              Kasun, Tharindu, and Nuwan learned early on that a haircut isn&apos;t just
              about shortening hair—it&apos;s about architectural proportion, posture, and
              the timeless confidence a person carries when leaving the chair.
            </p>
            <p className={styles.highlightQuote}>
              &ldquo;We wanted a space where gentlemen could get razor-sharp fades and
              hot towel shaves, while ladies could experience world-class balayage and
              organic restorative treatments under one roof, without compromising on specialized mastery.&rdquo;
            </p>
            <p>
              Each brother took a distinct path: Kasun mastered European blade work and
              tapers; Tharindu trained internationally in precision scissor geometry and
              modern wearable textures; Nuwan perfected color formulation and organic
              restorative hair therapy. Together, they founded Three Brothers Salon Cuts in Colombo 03.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
