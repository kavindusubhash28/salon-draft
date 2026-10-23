import React from "react";
import Image from "next/image";
import styles from "./ServicesList.module.css";

export default function ServicesList() {
  const serviceCards = [
    {
      id: "hair-care-styling",
      title: "Hair Care & Styling",
      desc: "Gents haircuts, classic and modern fades, ladies haircuts, layer cuts, hair coloring, highlights, and hair setting.",
      image: "/images/service_haircut.jpg",
    },
    {
      id: "treatments",
      title: "Treatments",
      desc: "Hair conditioning, restorative keratin treatments, and nourishing oil treatments for healthy hair.",
      image: "/images/Services/treatments.jpg",
    },
    {
      id: "grooming-beard",
      title: "Grooming & Beard",
      desc: "Precision beard styling, sharp grooming, and traditional hot towel straight razor shaves.",
      image: "/images/Services/beard.jpg",
    },
    {
      id: "face-skin-care",
      title: "Face & Skin Care",
      desc: "Hydrafacials, carbon laser peels, radiant gold facials, and meticulous eyebrow threading.",
      image: "/images/Services/facieal.jpg",
    },
    {
      id: "nails",
      title: "Nails",
      desc: "Classic manicures, long-lasting gel pedicures, and rejuvenating jelly pedicures.",
      image: "/images/Services/nails.jpg",
    },
    {
      id: "beauty-dressing",
      title: "Beauty & Dressing",
      desc: "Professional makeup artistry and exquisite event dressing for weddings and special occasions.",
      image: "/images/service_occasion.jpg",
    },
  ];

  return (
    <section className={styles.section} id="what-we-offer">
      <div className={styles.container}>
        {/* Center Header */}
        <div className={styles.header}>
          <div className={styles.overlineWrap}>
            <span className={styles.line} />
            <span className={styles.overline}>OUR SERVICES</span>
            <span className={styles.line} />
          </div>

          <h2 className={styles.title}>What We Offer</h2>

          <p className={styles.description}>
            A complete suite of premium grooming, hair artistry, skin therapy,
            and beauty dressing tailored to bring out your best confidence.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className={styles.cardsGrid}>
          {serviceCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.cardImg}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
