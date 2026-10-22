import React from "react";
import Image from "next/image";
import styles from "./TeamProfiles.module.css";

export default function TeamProfiles() {
  const brothers = [
    {
      num: "BROTHER 01",
      title: "Haircut Specialist",
      desc: "Expert in modern cuts, fades and custom styles tailored to your look.",
      image: "/images/hero_barber.jpg",
    },
    {
      num: "BROTHER 02",
      title: "Styling & Grooming",
      desc: "Specializes in styling, beard grooming and detailed finishing.",
      image: "/images/barber_craftsman.jpg",
    },
    {
      num: "BROTHER 03",
      title: "Colour & Scalp Care",
      desc: "Expert in hair colouring, treatments and scalp care solutions.",
      image: "/images/barber_portrait_kasun.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <div className={styles.titleColumn}>
            <span className={styles.categoryLabel}>MEET THE TEAM</span>
            <h2 className={styles.title}>
              Three Brothers.
              <br />
              One Vision.
            </h2>
          </div>

          <div className={styles.descColumn}>
            <p className={styles.headerDesc}>
              Different personalities, one shared passion. Together, we bring
              skill, creativity and dedication to give you the best grooming
              experience. Each of us plays a unique role, but we all share the
              same goal — to make you look and feel your best.
            </p>
          </div>
        </div>

        {/* 3 Brothers Grid */}
        <div className={styles.brothersGrid}>
          {brothers.map((brother, idx) => (
            <div key={idx} className={styles.brotherCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={brother.image}
                  alt={brother.title}
                  width={550}
                  height={550}
                  className={styles.brotherImg}
                />
              </div>

              <div className={styles.cardInfo}>
                <span className={styles.brotherNum}>{brother.num}</span>
                <h3 className={styles.brotherTitle}>{brother.title}</h3>
                <p className={styles.brotherDesc}>{brother.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
