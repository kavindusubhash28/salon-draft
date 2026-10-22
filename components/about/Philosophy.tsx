import React from "react";
import { Scissors, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const pillars = [
    {
      icon: <Scissors size={22} className={styles.pillarIcon} />,
      title: "No Fast-Fashion Cuts",
      desc: "Every cut is designed to grow out naturally and keep its shape for weeks.",
    },
    {
      icon: <ShieldCheck size={22} className={styles.pillarIcon} />,
      title: "Hair Health First",
      desc: "We prioritize fiber integrity over quick chemical services. Honest consultations only.",
    },
    {
      icon: <HeartHandshake size={22} className={styles.pillarIcon} />,
      title: "Barber-Client Trust",
      desc: "An unhurried sanctuary of respect, attentive listening, and true hospitality.",
    },
    {
      icon: <Sparkles size={22} className={styles.pillarIcon} />,
      title: "Razor Craft Discipline",
      desc: "Single-use Japanese carbon blades, steamed eucalyptus towels, zero compromises.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Our Code</span>
          <h2 className={styles.title}>The Craftsman&apos;s Philosophy</h2>
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((item, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                {item.icon}
                <h3 className={styles.pillarTitle}>{item.title}</h3>
              </div>
              <p className={styles.pillarDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
