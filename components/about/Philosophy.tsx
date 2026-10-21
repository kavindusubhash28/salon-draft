import React from "react";
import { Scissors, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const pillars = [
    {
      icon: <Scissors size={24} className={styles.pillarIcon} />,
      title: "Zero Fast-Fashion Haircuts",
      desc: "A good cut looks great walking out of our doors; an artisan cut looks great 4 weeks later. We cut into the natural growth direction of your follicle patterns so your hairstyle maintains its silhouette as it grows.",
    },
    {
      icon: <ShieldCheck size={24} className={styles.pillarIcon} />,
      title: "Fiber Health Over Commercial Profit",
      desc: "We will never perform high-lift chemical bleaching or aggressive styling on compromised hair just to make a sale. Our consultation is brutally honest—if your hair needs restoration first, that is what we prescribe.",
    },
    {
      icon: <HeartHandshake size={24} className={styles.pillarIcon} />,
      title: "The Barber-Client Sacred Trust",
      desc: "The barber chair is a sanctuary. Whether you seek quiet meditation after a grueling workweek or spirited conversation with trusted friends, our chairs are a haven of respect, discretion, and community.",
    },
    {
      icon: <Sparkles size={24} className={styles.pillarIcon} />,
      title: "The Master Craftsman Oath",
      desc: "Every straight razor blade is single-use, Japanese carbon steel or surgical feather grade. Every towel is freshly steamed with natural eucalyptus oil. No cut corners, ever.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Our Code</span>
          <h2 className={styles.title}>The Craftsman&apos;s Philosophy</h2>
          <p className={styles.description}>
            Four uncompromising pillars that guide every razor stroke, scissor shear,
            and color formulation inside our atelier.
          </p>
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
