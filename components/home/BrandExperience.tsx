import React from "react";
import Image from "next/image";
import styles from "./BrandExperience.module.css";

export default function BrandExperience() {
  const experiences = [
    {
      num: "01",
      title: "Direct Master Barber Oversight",
      desc: "Unlike commercial chain salons where apprentices practice unchecked, every client at Three Brothers is either directly styled or guided by one of the three founders.",
    },
    {
      num: "02",
      title: "Dual Purpose Private Sanctuaries",
      desc: "We engineered two distinct atmospheres: an oak-and-leather heritage gentleman's lounge for razor work and fades, and a serene, sunlit studio for ladies' couture cuts and color.",
    },
    {
      num: "03",
      title: "Japanese Steel & Italian Low-Ammonia Chemistry",
      desc: "We refuse to cut corners on tools. We cut with handcrafted cobalt steel shears and use organic European treatments that fortify your hair fibers rather than strip them.",
    },
    {
      num: "04",
      title: "The Complimentary Atelier Ritual",
      desc: "From dark roast Italian espresso upon arrival to steamed eucalyptus hot towels and neck tension release, every visit is treated as a restorative luxury pause.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Visual Showcase */}
          <div className={styles.imageSide}>
            <div className={styles.mainImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop"
                alt="Three Brothers Barber Craftsmanship"
                width={700}
                height={600}
                className={styles.mainImage}
              />
            </div>
            <div className={styles.floatingBadge}>
              <div className={styles.floatingBadgeNumber}>100%</div>
              <div className={styles.floatingBadgeLabel}>
                Uncompromising attention to personal hair geometry and razor discipline.
              </div>
            </div>
          </div>

          {/* Experience Narrative */}
          <div className={styles.textSide}>
            <span className={styles.subheading}>The Atelier Standard</span>
            <h2 className={styles.title}>Why Discerning Clients Choose Three Brothers</h2>
            <p className={styles.leadText}>
              In an era of mass-produced, rushed 15-minute chops, we stand firm on traditional
              craftsmanship, unhurried precision, and the relationship between client and craftsman.
            </p>

            <div className={styles.featureList}>
              {experiences.map((exp) => (
                <div key={exp.num} className={styles.featureItem}>
                  <div className={styles.featureNumber}>{exp.num}</div>
                  <div className={styles.featureContent}>
                    <h4>{exp.title}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
