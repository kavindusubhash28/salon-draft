"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import styles from "./ServicesPricing.module.css";

type Audience = "gents" | "ladies";

const tabs: { id: Audience; label: string }[] = [
  { id: "gents", label: "GENTS" },
  { id: "ladies", label: "LADIES" },
];

const pricing: Record<
  Audience,
  { title: string; items: { name: string; price: string }[] }[]
> = {
  gents: [
    {
      title: "HAIRCUTS & STYLING",
      items: [
        { name: "Gents Classic & Scissor Cut", price: "LKR 1,800" },
        { name: "Classic & Modern Skin Fade", price: "LKR 2,200" },
        { name: "Buzz Cut & Clipper Trim", price: "LKR 1,200" },
        { name: "Kids Haircut (Under 12)", price: "LKR 1,000" },
        { name: "Wash, Cut & Style", price: "LKR 2,500" },
      ],
    },
    {
      title: "BEARD & SHAVE",
      items: [
        { name: "Beard Styling & Trimming", price: "LKR 1,200" },
        { name: "Traditional Hot Towel Shave", price: "LKR 1,500" },
        { name: "Razor Line-Up & Edge Detail", price: "LKR 800" },
        { name: "Beard Coloring", price: "LKR 1,800" },
      ],
    },
    {
      title: "HAIR COLOR & TREATMENTS",
      items: [
        { name: "Grey Coverage Color", price: "LKR 2,800+" },
        { name: "Anti-Dandruff Scalp Treatment", price: "LKR 2,500" },
        { name: "Hair Fall Control Therapy", price: "LKR 3,500+" },
        { name: "Men's Keratin Smoothing", price: "LKR 6,500+" },
      ],
    },
    {
      title: "FACIALS & SKIN",
      items: [
        { name: "Deep Cleansing Facial", price: "LKR 3,500" },
        { name: "Charcoal Detox Facial", price: "LKR 4,200" },
        { name: "Blackhead Removal Treatment", price: "LKR 2,000" },
        { name: "De-Tan Face & Neck", price: "LKR 2,800" },
      ],
    },
    {
      title: "HAND & FOOT CARE",
      items: [
        { name: "Gents Express Manicure", price: "LKR 1,800" },
        { name: "Gents Classic Pedicure", price: "LKR 2,500" },
        { name: "Foot Spa & Callus Removal", price: "LKR 3,200" },
      ],
    },
    {
      title: "GROOMING PACKAGES",
      items: [
        { name: "Haircut + Beard Styling Combo", price: "LKR 2,600" },
        { name: "Executive Grooming Package", price: "LKR 6,500" },
        { name: "Groom's Wedding Package", price: "LKR 15,000+" },
        { name: "Father & Son Combo", price: "LKR 2,500" },
      ],
    },
  ],
  ladies: [
    {
      title: "HAIRCUTS & STYLING",
      items: [
        { name: "Ladies Haircut & Restyle", price: "LKR 3,500" },
        { name: "Layer Cuts & Blowout", price: "LKR 3,800" },
        { name: "Fringe & Trim", price: "LKR 1,200" },
        { name: "Blow Dry & Curls", price: "LKR 2,500+" },
        { name: "Hair Setting & Updo", price: "LKR 3,000+" },
      ],
    },
    {
      title: "HAIR COLOR",
      items: [
        { name: "Global Hair Color", price: "LKR 6,500+" },
        { name: "Balayage & Ombré", price: "LKR 12,000+" },
        { name: "Highlights & Lowlights", price: "LKR 8,500+" },
        { name: "Root Touch-Up", price: "LKR 3,500+" },
      ],
    },
    {
      title: "HAIR TREATMENTS",
      items: [
        { name: "Restorative Keratin Treatment", price: "LKR 15,000+" },
        { name: "Hair Rebonding", price: "LKR 18,000+" },
        { name: "Deep Hair Conditioning", price: "LKR 3,500+" },
        { name: "Hair Botox Therapy", price: "LKR 12,000+" },
      ],
    },
    {
      title: "FACE & SKIN CARE",
      items: [
        { name: "Hydrafacial Glow Therapy", price: "LKR 6,500+" },
        { name: "Luxury 24K Gold Facial", price: "LKR 6,000+" },
        { name: "Eyebrow Threading & Shaping", price: "LKR 500" },
        { name: "Full Face Threading", price: "LKR 1,500" },
      ],
    },
    {
      title: "NAILS & PEDICURE",
      items: [
        { name: "Classic Manicure", price: "LKR 2,200" },
        { name: "High-Gloss Gel Pedicure", price: "LKR 3,500" },
        { name: "Acrylic Nail Extensions", price: "LKR 6,500+" },
        { name: "Nail Art (Per Set)", price: "LKR 1,500+" },
      ],
    },
    {
      title: "BRIDAL & BEAUTY",
      items: [
        { name: "Professional Event Makeup", price: "LKR 5,500+" },
        { name: "Event & Saree Dressing", price: "LKR 3,500+" },
        { name: "Bridal Styling & Dressing", price: "LKR 35,000+" },
        { name: "Photoshoot Ready Glam", price: "LKR 7,500+" },
      ],
    },
  ],
};

export default function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<Audience>("gents");
  const categories = pricing[activeTab];

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

        {/* Gents / Ladies Tabs */}
        <div
          className={styles.tabList}
          role="tablist"
          aria-label="Service category"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`pricing-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls="pricing-panel"
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Pricing Cards Grid */}
        <div
          key={activeTab}
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${activeTab}`}
          className={styles.pricingGrid}
        >
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
