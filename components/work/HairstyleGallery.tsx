"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Scissors } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/salon-data";
import StyleDetailsModal from "./StyleDetailsModal";
import styles from "./HairstyleGallery.module.css";

export default function HairstyleGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { label: "All Cuts & Styles", value: "all" },
    { label: "Gentlemen's Fades & Crops", value: "fades-beards" },
    { label: "Classic Scissor Works", value: "mens-cuts" },
    { label: "Ladies' Styling & Blowouts", value: "womens-styling" },
    { label: "Dimensional Balayage & Color", value: "color-treatments" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Atelier Showcase</span>
          <h1 className={styles.title}>The Hairstyle Gallery</h1>
          <p className={styles.description}>
            A living catalog of precision fades, tailored beard profiles, sun-kissed
            balayage, and restorative women&apos;s styling executed inside our chairs.
            Click any style to inspect techniques.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterRow}>
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.filterBtn} ${
                activeFilter === opt.value ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActiveFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setSelectedItem(item)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={500}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  {item.gender === "male" ? "Men" : "Women"}
                </div>
              </div>

              <div className={styles.cardBody}>
                <div>
                  <h3 className={styles.titleText}>{item.title}</h3>
                  <p className={styles.techniqueText}>{item.technique}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.stylistText}>{item.stylist}</span>
                  <span className={styles.inspectHint}>
                    <Eye size={14} />
                    <span>View Specs</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <StyleDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
