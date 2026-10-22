import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesOverview.module.css";

export default function ServicesOverview() {
  const serviceCards = [
    {
      id: "haircuts",
      title: "Haircuts & Styling",
      desc: "Classic cuts, modern styles and custom looks tailored to you.",
      image: "/images/service_haircut.jpg",
      href: "/services",
    },
    {
      id: "shave",
      title: "Beard & Shaving",
      desc: "Beard grooming, shaping and a clean, refreshing shave.",
      image: "/images/service_shave.jpg",
      href: "/services",
    },
    {
      id: "colour",
      title: "Hair Colour",
      desc: "Add character with expert colouring and toning.",
      image: "/images/service_colour.jpg",
      href: "/services",
    },
    {
      id: "scalp",
      title: "Hair & Scalp Care",
      desc: "Professional treatments for a healthier scalp and stronger hair.",
      image: "/images/service_scalp.jpg",
      href: "/services",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <div className={styles.titleColumn}>
            <span className={styles.categoryLabel}>01 / WHAT WE DO</span>
            <h2 className={styles.title}>
              The craft of
              <br />
              looking sharp.
            </h2>
          </div>

          <div className={styles.descColumn}>
            <p className={styles.headerDesc}>
              From timeless cuts to modern styles, we offer a complete range of
              grooming services tailored to your look and lifestyle.
            </p>
          </div>

          <div className={styles.btnColumn}>
            <Link href="/services" className={styles.viewAllBtn}>
              <span>VIEW ALL SERVICES</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.cardsGrid}>
          {serviceCards.map((card) => (
            <Link key={card.id} href={card.href} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
