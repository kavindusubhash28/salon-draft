"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./FeaturedPrices.module.css";

type Audience = "gents" | "ladies";

const tabs: { id: Audience; label: string }[] = [
  { id: "gents", label: "GENTS" },
  { id: "ladies", label: "LADIES" },
];

const priceItems: Record<Audience, { name: string; price: string }[]> = {
  gents: [
    { name: "Gents Classic Haircut & Fade", price: "LKR 1,800+" },
    { name: "Beard Styling & Hot Towel Shave", price: "LKR 1,200+" },
    { name: "Grey Coverage & Hair Fall Therapy", price: "LKR 2,800+" },
    { name: "Charcoal Detox Facial", price: "LKR 4,200+" },
    { name: "Gents Manicure & Pedicure", price: "LKR 1,800+" },
    { name: "Executive Grooming Package", price: "LKR 6,500+" },
  ],
  ladies: [
    { name: "Ladies Haircut & Layer Cut", price: "LKR 3,500+" },
    { name: "Balayage & Highlights", price: "LKR 8,500+" },
    { name: "Keratin & Hair Botox", price: "LKR 12,000+" },
    { name: "Hydrafacial & Gold Facial", price: "LKR 6,000+" },
    { name: "Gel Nails & Acrylic Extensions", price: "LKR 3,500+" },
    { name: "Bridal Styling & Event Makeup", price: "LKR 5,500+" },
  ],
};

export default function FeaturedPrices() {
  const [activeTab, setActiveTab] = useState<Audience>("gents");

  return (
    <section className={styles.section} id="featured-prices">
      <div className={styles.container}>
        {/* Decorative Floating Barber Craft Elements */}
        <div className={styles.decorScissors} aria-hidden="true">
          <Image
            src="/images/barber_scissors.png"
            alt=""
            width={340}
            height={310}
            className={styles.toolImg}
            priority
          />
        </div>

        <div className={styles.decorBrush} aria-hidden="true">
          <Image
            src="/images/barber_brush.png"
            alt=""
            width={300}
            height={210}
            className={styles.toolImg}
            priority
          />
        </div>

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
            <div
              className={styles.tabList}
              role="tablist"
              aria-label="Featured prices category"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`featured-tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls="featured-panel"
                  className={`${styles.tab} ${
                    activeTab === tab.id ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              key={activeTab}
              id="featured-panel"
              role="tabpanel"
              aria-labelledby={`featured-tab-${activeTab}`}
              className={styles.priceList}
            >
              {priceItems[activeTab].map((item, index) => (
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
