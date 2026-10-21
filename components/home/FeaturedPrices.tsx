import React from "react";
import Link from "next/link";
import { Scissors, Sparkles, ArrowRight } from "lucide-react";
import styles from "./FeaturedPrices.module.css";

export default function FeaturedPrices() {
  const menHighlights = [
    { name: "Signature Brothers Precision Cut", duration: "45 mins", price: "Rs. 2,200", note: "Consultation + Wash + Clay Finish" },
    { name: "Master Razor Skin Fade & Taper", duration: "45 mins", price: "Rs. 2,600", note: "Japanese Foil & Razor Edging" },
    { name: "Executive Beard Sculpt & Line-Up", duration: "35 mins", price: "Rs. 1,600", note: "Hot Towel + Cedarwood Oil" },
    { name: "Traditional Straight Razor Shave", duration: "40 mins", price: "Rs. 2,000", note: "Triple Towel Compression" },
    { name: "Botanical Scalp Detox Therapy", duration: "40 mins", price: "Rs. 2,800", note: "Acupressure & Tea Tree Steam" },
  ];

  const womenHighlights = [
    { name: "Couture Restyle Cut & Blowout", duration: "60 mins", price: "Rs. 3,800", note: "Face Framing & Volume Finish" },
    { name: "Sun-Kissed Dimensional Balayage", duration: "180 mins", price: "Rs. 16,500+", note: "Root Melt + Glaze + Bond Care" },
    { name: "Organic Brazilian Keratin Smoothing", duration: "150 mins", price: "Rs. 18,000+", note: "Zero Frizz Mirror Finish" },
    { name: "Caviar Deep Hydration Hair Spa", duration: "60 mins", price: "Rs. 4,900", note: "Micro-Mist Steam & Peptide Infusion" },
    { name: "Global Root Touch-Up & Shine", duration: "90 mins", price: "Rs. 7,200", note: "Italian Low-Ammonia Pigment" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Transparent Tariffs</span>
          <h2 className={styles.title}>Featured Rates &amp; Tariffs</h2>
          <p className={styles.description}>
            Transparent, honest pricing reflecting artisan mastery, premium European
            products, and zero rushed services.
          </p>
        </div>

        <div className={styles.boardGrid}>
          {/* Men's Column */}
          <div className={styles.boardColumn}>
            <div className={styles.columnHeader}>
              <Scissors size={20} className={styles.colIcon} />
              <h3 className={styles.colTitle}>Gentlemen&apos;s Tariff</h3>
            </div>
            <div className={styles.priceList}>
              {menHighlights.map((item, idx) => (
                <div key={idx} className={styles.priceItem}>
                  <div className={styles.itemTop}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.dots} />
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <div className={styles.itemDetails}>
                    <span>{item.note}</span>
                    <span className={styles.itemDuration}>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Women's Column */}
          <div className={styles.boardColumn}>
            <div className={styles.columnHeader}>
              <Sparkles size={20} className={styles.colIcon} />
              <h3 className={styles.colTitle}>Ladies Tariff</h3>
            </div>
            <div className={styles.priceList}>
              {womenHighlights.map((item, idx) => (
                <div key={idx} className={styles.priceItem}>
                  <div className={styles.itemTop}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.dots} />
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <div className={styles.itemDetails}>
                    <span>{item.note}</span>
                    <span className={styles.itemDuration}>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flagship Package Banner */}
        <div className={styles.featuredBanner}>
          <div className={styles.bannerText}>
            <h3>The Three Brothers Sovereign Package</h3>
            <p>
              90 Minutes of pure restoration: Master Cut + Razor Skin Fade + Hot Eucalyptus Beard Shave + Charcoal Mask + Neck Massage.
            </p>
          </div>
          <div className={styles.bannerPriceWrap}>
            <div className={styles.bannerPrice}>
              <span className={styles.bannerAmount}>Rs. 5,400</span>
              <span className={styles.bannerTag}>All-Inclusive Experience</span>
            </div>
            <Link href="/booking?service=The+Three+Brothers+Sovereign" className={styles.bannerBtn}>
              Book Sovereign
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
