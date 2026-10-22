import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedPrices.module.css";

export default function FeaturedPrices() {
  const priceItems = [
    { name: "Gents Classic Haircut & Fade", price: "LKR 1,800+" },
    { name: "Ladies Haircut & Layer Cut", price: "LKR 3,500+" },
    { name: "Beard Styling & Hot Towel Shave", price: "LKR 1,200+" },
    { name: "Keratin & Deep Conditioning", price: "LKR 5,500+" },
    { name: "Hydrafacial & Carbon Peel", price: "LKR 5,500+" },
    { name: "Manicure & Jelly Pedicure", price: "LKR 2,200+" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Column: Visual Showcase & Headline */}
          <div className={styles.visualCol}>
            <div className={styles.imageBackground}>
              <Image
                src="/images/barber_tools_counter.jpg"
                alt="Three Brothers Barber Craft and Tools"
                fill
                className={styles.bgImg}
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.textContent}>
              <span className={styles.overline}>FEATURED PRICES</span>
              <h2 className={styles.title}>
                Quality in
                <br />
                every detail.
              </h2>
              <p className={styles.description}>
                Premium grooming services delivered with skill, care and
                consistency.
              </p>
            </div>
          </div>

          {/* Right Column: Price List */}
          <div className={styles.pricingCol}>
            <div className={styles.priceList}>
              {priceItems.map((item, index) => (
                <div key={index} className={styles.priceRow}>
                  <span className={styles.serviceName}>{item.name}</span>
                  <span className={styles.servicePrice}>{item.price}</span>
                </div>
              ))}
            </div>

            <div className={styles.footerLinkRow}>
              <Link href="/services" className={styles.fullPriceLink}>
                <span>See Full Price List</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
