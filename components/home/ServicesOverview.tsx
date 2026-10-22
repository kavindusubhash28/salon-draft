import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesOverview.module.css";

export default function ServicesOverview() {
  const serviceCards = [
    {
      id: "hair-care-styling",
      title: "Hair Care & Styling",
      desc: "Gents & ladies cuts, skin fades, layer cuts, hair coloring, and styling.",
      image: "/images/service_haircut.jpg",
      href: "/services#what-we-offer",
    },
    {
      id: "treatments",
      title: "Treatments",
      desc: "Hair conditioning, keratin smoothing, and deep oil treatments.",
      image: "/images/Services/treatments.jpg",
      href: "/services#what-we-offer",
    },
    {
      id: "grooming-beard",
      title: "Grooming & Beard",
      desc: "Beard styling, grooming, and luxury hot towel straight razor shaves.",
      image: "/images/Services/beard.jpg",
      href: "/services#what-we-offer",
    },
    {
      id: "face-skin-care",
      title: "Face & Skin Care",
      desc: "Hydrafacials, carbon laser peels, 24K gold facials, and eyebrow threading.",
      image: "/images/Services/facieal.jpg",
      href: "/services#what-we-offer",
    },
    {
      id: "nails",
      title: "Nails & Pedicure",
      desc: "Classic manicures, durable gel pedicures, and jelly pedicure spa.",
      image: "/images/Services/nails.jpg",
      href: "/services#what-we-offer",
    },
    {
      id: "beauty-dressing",
      title: "Beauty & Dressing",
      desc: "Event makeup artistry and elegant wedding & occasion dressing.",
      image: "/images/service_occasion.jpg",
      href: "/services#what-we-offer",
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
