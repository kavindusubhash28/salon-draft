import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import styles from "./ServicesPricing.module.css";

export default function ServicesPricing() {
  const categories = [
    {
      title: "HAIR CARE & STYLING",
      items: [
        { name: "Gents Classic & Scissor Cut", price: "LKR 1,800" },
        { name: "Classic & Modern Skin Fade", price: "LKR 2,200" },
        { name: "Ladies Haircut & Restyle", price: "LKR 3,500" },
        { name: "Layer Cuts & Blowout", price: "LKR 3,800" },
        { name: "Hair Coloring & Highlights", price: "LKR 4,500+" },
        { name: "Hair Setting & Styling", price: "LKR 1,500+" },
      ],
    },
    {
      title: "HAIR TREATMENTS",
      items: [
        { name: "Deep Hair Conditioning", price: "LKR 2,500+" },
        { name: "Restorative Keratin Treatment", price: "LKR 8,000+" },
        { name: "Nourishing Oil Treatment", price: "LKR 2,200+" },
        { name: "Scalp Care & Revitalizing Mask", price: "LKR 3,200" },
      ],
    },
    {
      title: "GROOMING & BEARD",
      items: [
        { name: "Beard Styling & Trimming", price: "LKR 1,200" },
        { name: "Traditional Hot Towel Shave", price: "LKR 1,500" },
        { name: "Haircut + Beard Styling Combo", price: "LKR 2,600" },
        { name: "Razor Line-Up & Edge Detail", price: "LKR 800" },
      ],
    },
    {
      title: "FACE & SKIN CARE",
      items: [
        { name: "Hydrafacial Glow Therapy", price: "LKR 6,500+" },
        { name: "Carbon Laser Peel", price: "LKR 5,500+" },
        { name: "Luxury 24K Gold Facial", price: "LKR 6,000+" },
        { name: "Eyebrow Threading & Shaping", price: "LKR 500" },
      ],
    },
    {
      title: "NAILS & PEDICURE",
      items: [
        { name: "Classic Manicure", price: "LKR 2,200" },
        { name: "High-Gloss Gel Pedicure", price: "LKR 3,500" },
        { name: "Soothing Jelly Pedicure Spa", price: "LKR 4,200" },
        { name: "Complete Mani-Pedi Combo", price: "LKR 5,000" },
      ],
    },
    {
      title: "BEAUTY & DRESSING",
      items: [
        { name: "Professional Event Makeup", price: "LKR 5,500+" },
        { name: "Event & Saree Dressing", price: "LKR 3,500+" },
        { name: "Bridal Styling & Dressing", price: "LKR 12,000+" },
        { name: "Photoshoot Ready Glam", price: "LKR 7,500+" },
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
