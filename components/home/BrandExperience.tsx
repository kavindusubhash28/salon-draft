import React from "react";
import Image from "next/image";
import styles from "./BrandExperience.module.css";

export default function BrandExperience() {
  const pillars = [
    {
      num: "01 /",
      title: "Personal attention",
      desc: "We take time to understand your style and preferences.",
    },
    {
      num: "02 /",
      title: "Skilled hands",
      desc: "Experienced barbers who care about the craft.",
    },
    {
      num: "03 /",
      title: "Relaxed atmosphere",
      desc: "A comfortable space made for you to unwind.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.experienceGrid}>
          {/* Left Column: Authentic Barber Chair Photo */}
          <div className={styles.imageCol}>
            <div className={styles.chairImageWrap}>
              <Image
                src="/images/experience_chair.jpg"
                alt="Three Brothers Vintage Heritage Barber Chair"
                fill
                className={styles.chairImg}
              />
            </div>
          </div>

          {/* Right Column: Experience Narrative & 3 Pillars */}
          <div className={styles.contentCol}>
            <span className={styles.overline}>OUR EXPERIENCE</span>
            <h2 className={styles.title}>More than a haircut.</h2>
            <p className={styles.subtitle}>
              A thoughtful experience built around your style, your comfort, and
              the details that matter.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((item, index) => (
                <div key={index} className={styles.pillarItem}>
                  <span className={styles.pillarNum}>{item.num}</span>
                  <h3 className={styles.pillarTitle}>{item.title}</h3>
                  <p className={styles.pillarDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
