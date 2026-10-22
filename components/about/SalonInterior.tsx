import React from "react";
import Image from "next/image";
import styles from "./SalonInterior.module.css";

export default function SalonInterior() {
  const spaces = [
    {
      tag: "Zone A &bull; Barbershop Lounge",
      title: "The Heritage Men's Studio",
      desc: "Reclining vintage barber chairs, walnut counters, and warm lighting for close razor shaves.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "Zone B &bull; Hair & Color Lab",
      title: "The Tranquil Ladies' Studio",
      desc: "Private acoustic studio with ergonomic wash basins and low-ammonia color bar.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "Zone C &bull; Guest Hospitality",
      title: "Espresso & Lounge Bar",
      desc: "Fresh dark roast Italian espresso, craft sodas, and curated periodicals before your session.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>The Physical Space</span>
          <h2 className={styles.title}>Atelier Sanctuary</h2>
        </div>

        <div className={styles.galleryGrid}>
          {spaces.map((space, idx) => (
            <div key={idx} className={styles.spaceCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={space.image}
                  alt={space.title}
                  width={600}
                  height={400}
                  className={styles.spaceImg}
                />
              </div>
              <div className={styles.contentWrap}>
                <span
                  className={styles.spaceTag}
                  dangerouslySetInnerHTML={{ __html: space.tag }}
                />
                <h3 className={styles.spaceTitle}>{space.title}</h3>
                <p className={styles.spaceDesc}>{space.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featuresStrip}>
          <div className={styles.featureBox}>
            <h5>Hospital-Grade Hygiene</h5>
            <p>UV sterilizers for every single blade and shear.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Private Zones</h5>
            <p>Dedicated separate studios for men and women.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Filtered Acoustics</h5>
            <p>Clean air filtration and low ambient background jazz.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Front Parking</h5>
            <p>Dedicated guest parking right on Galle Road.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
