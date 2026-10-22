import React from "react";
import Image from "next/image";
import { Gem, Users, TrendingUp } from "lucide-react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const pillars = [
    {
      icon: <Gem size={26} strokeWidth={1.5} className={styles.pillarIcon} />,
      title: "Quality First",
      desc: "We focus on precision and consistency in every service.",
    },
    {
      icon: <Users size={26} strokeWidth={1.5} className={styles.pillarIcon} />,
      title: "People Always",
      desc: "Our clients are at the heart of everything we do.",
    },
    {
      icon: (
        <TrendingUp
          size={26}
          strokeWidth={1.5}
          className={styles.pillarIcon}
        />
      ),
      title: "Always Improving",
      desc: "We keep learning and adapting to bring you the latest styles and techniques.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Column: Still Life Tools Image */}
          <div className={styles.visualCol}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/barber_tools_counter.jpg"
                alt="Three Brothers Precision Tools and Scissors"
                fill
                className={styles.toolsImg}
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          {/* Right Column: Narrative & 3 Philosophy Pillars */}
          <div className={styles.contentCol}>
            <span className={styles.overline}>OUR PHILOSOPHY</span>

            <h2 className={styles.title}>
              Quality. People.{" "}
              <span className={styles.caramelHighlight}>Progress.</span>
            </h2>

            <p className={styles.description}>
              We believe great grooming is a combination of skill, genuine care
              and continuous learning. Our philosophy guides everything we do —
              from the way we treat our clients to the details in every haircut.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, idx) => (
                <div key={idx} className={styles.pillarItem}>
                  <div className={styles.iconWrap}>{pillar.icon}</div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
