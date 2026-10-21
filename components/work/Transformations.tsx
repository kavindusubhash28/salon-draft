import React from "react";
import Image from "next/image";
import { TRANSFORMATIONS } from "@/lib/salon-data";
import styles from "./Transformations.module.css";

export default function Transformations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Before &amp; After</span>
          <h2 className={styles.title}>Real Hair Transformations</h2>
          <p className={styles.description}>
            Witness the restorative power of master geometry and chemical correction.
            Real clients, raw hair conditions restored to radiant perfection.
          </p>
        </div>

        <div className={styles.transGrid}>
          {TRANSFORMATIONS.map((item) => (
            <div key={item.id} className={styles.transCard}>
              <div className={styles.compareFrame}>
                <div className={styles.photoWrap}>
                  <Image
                    src={item.beforeImg}
                    alt={`${item.title} Before`}
                    width={500}
                    height={500}
                    className={styles.photo}
                  />
                  <span className={styles.photoBadgeBefore}>Before</span>
                </div>

                <div className={styles.photoWrap}>
                  <Image
                    src={item.afterImg}
                    alt={`${item.title} After`}
                    width={500}
                    height={500}
                    className={styles.photo}
                  />
                  <span className={styles.photoBadgeAfter}>After Atelier</span>
                </div>

                <div className={styles.dividerLine} />
              </div>

              <div className={styles.transBody}>
                <h3 className={styles.transTitle}>{item.title}</h3>
                <div className={styles.transMeta}>
                  <span>By {item.stylist}</span>
                  <span>&bull;</span>
                  <span>{item.service}</span>
                </div>
                <p className={styles.transStory}>{item.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
