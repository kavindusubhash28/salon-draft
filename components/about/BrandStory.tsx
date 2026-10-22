import React from "react";
import Image from "next/image";
import styles from "./BrandStory.module.css";

export default function BrandStory() {
  const stats = [
    { number: "3", label: "BROTHERS" },
    { number: "5+", label: "YEARS OF EXPERIENCE" },
    { number: "1000+", label: "HAPPY CLIENTS" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          {/* Left: Collage with Main Team Image & Inset Tools */}
          <div className={styles.visualCol}>
            <div className={styles.mainImageWrap}>
              <Image
                src="/images/about_team_story.jpg"
                alt="Three Brothers Barber Team Brotherhood"
                fill
                className={styles.mainImg}
              />
            </div>

            <div className={styles.insetCard}>
              <div className={styles.insetImageWrap}>
                <Image
                  src="/images/barber_tools_counter.jpg"
                  alt="Precision Barber Equipment"
                  fill
                  className={styles.insetImg}
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative & 3 Stat Counters */}
          <div className={styles.contentCol}>
            <span className={styles.overline}>OUR STORY</span>

            <h2 className={styles.title}>
              Built on Passion,
              <br />
              Driven by Brotherhood.
            </h2>

            <div className={styles.paragraphs}>
              <p>
                Three Brothers Salon Cuts was founded with a simple idea — to
                create a space where great hair, genuine service and real
                connections come together. What started as a shared passion
                among three brothers has grown into a trusted grooming space
                loved by our community.
              </p>
              <p>
                We believe a great haircut is more than just a style — it’s a
                confidence boost, a fresh start and a way to express who you
                are. Every client who walks in is part of our journey, and we
                continue to raise the standard in men’s and unisex grooming.
              </p>
            </div>

            <div className={styles.statsRow}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
