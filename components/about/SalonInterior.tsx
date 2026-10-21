import React from "react";
import Image from "next/image";
import styles from "./SalonInterior.module.css";

export default function SalonInterior() {
  const spaces = [
    {
      tag: "Zone A &bull; Barbershop Lounge",
      title: "The Heritage Gentleman's Studio",
      desc: "Reclining vintage barber chairs, dark walnut counters, antique brass mirrors, and warm 2700K lighting designed for the ultimate close razor shave.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "Zone B &bull; Hair & Color Lab",
      title: "The Tranquil Ladies Atelier",
      desc: "An acoustic-insulated light-filled studio with state-of-the-art Italian hair wash basins, specialized color mixing bar, and ergonomic styling stations.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: "Zone C &bull; Guest Hospitality",
      title: "The Espresso & Consultation Bar",
      desc: "Relax before or after your appointment with complimentary dark roast Italian espresso, craft botanical sodas, and curated international menswear and fashion periodicals.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>The Physical Space</span>
          <h2 className={styles.title}>Designed for Uncompromised Sanctuary</h2>
          <p className={styles.description}>
            Step inside 48 Galle Road, Colombo 03. Every corner has been custom
            curated to create tranquility, masculine heritage, and refined aesthetic luxury.
          </p>
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
            <p>UV sterilizer autoclaves for every single blade and shear.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Private Zones</h5>
            <p>Discrete consultation and styling areas for complete client comfort.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Climate &amp; Acoustics</h5>
            <p>Filtered clean air circulation and soothing low ambient jazz.</p>
          </div>
          <div className={styles.featureBox}>
            <h5>Free Reserved Parking</h5>
            <p>Dedicated secure front parking on Galle Road for guests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
