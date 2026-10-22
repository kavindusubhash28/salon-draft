import React from "react";
import Image from "next/image";
import { Scissors, Sparkles, Paintbrush, Droplet, Info } from "lucide-react";
import styles from "./ServicesPricing.module.css";

export default function ServicesPricing() {
  const categories = [
    {
      title: "HAIRCUTS & STYLING",
      icon: <Scissors size={18} />,
      items: [
        { name: "Classic Haircut", price: "LKR 1,800" },
        { name: "Skin Fade", price: "LKR 2,200" },
        { name: "Hair Wash & Style", price: "LKR 1,200" },
        { name: "Kids Haircut", price: "LKR 1,500" },
      ],
    },
    {
      title: "BEARD & SHAVING",
      icon: <Sparkles size={18} />,
      items: [
        { name: "Beard Trim", price: "LKR 900" },
        { name: "Hot Towel Shave", price: "LKR 1,400" },
        { name: "Haircut + Beard Combo", price: "LKR 2,500" },
      ],
    },
    {
      title: "HAIR COLOUR",
      icon: <Paintbrush size={18} />,
      items: [
        { name: "Global Colour", price: "LKR 4,500+" },
        { name: "Grey Blending", price: "LKR 3,000+" },
        { name: "Highlights", price: "LKR 5,500+" },
      ],
    },
    {
      title: "HAIR & SCALP CARE",
      icon: <Droplet size={18} />,
      items: [
        { name: "Scalp Treatment", price: "LKR 2,800" },
        { name: "Deep Conditioning", price: "LKR 2,200" },
        { name: "Hair Spa", price: "LKR 3,500" },
      ],
    },
  ];

  return (
    <section className={styles.section} id="prices">
      {/* Background Barber Counter Image */}
      <div className={styles.bgContainer}>
        <Image
          src="/images/barber_tools_counter.jpg"
          alt="Barber Tools Counter"
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>PRICES &amp; SERVICES</h2>
          <p className={styles.subtitle}>
            Premium grooming at great value. All prices are in Sri Lankan Rupees
            (LKR).
          </p>
        </div>

        {/* 4 Category Pricing Cards Grid */}
        <div className={styles.pricingGrid}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.itemList}>
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={styles.itemRow}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className={styles.disclaimer}>
          <Info size={15} className={styles.infoIcon} />
          <span>
            Final prices may vary depending on hair length, hair condition, or
            consultation with our stylists.
          </span>
        </div>
      </div>
    </section>
  );
}
