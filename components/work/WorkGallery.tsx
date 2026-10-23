"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./WorkGallery.module.css";

interface PortfolioItem {
  id: string;
  title: string;
  category: string[];
  image: string;
  link?: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "modern-fade",
    title: "Modern Fade",
    category: ["Haircuts", "Styling"],
    image: "/images/card_clean_modern_fade.jpg",
  },
  {
    id: "textured-crop",
    title: "Textured Crop",
    category: ["Haircuts", "Styling"],
    image: "/images/card_clean_textured_crop.jpg",
  },
  {
    id: "classic-cut",
    title: "Classic Cut",
    category: ["Haircuts"],
    image: "/images/card_clean_classic_cut.jpg",
  },
  {
    id: "spiky-texture",
    title: "Spiky Texture",
    category: ["Haircuts", "Styling"],
    image: "/images/card_clean_spiky_texture.jpg",
  },
  {
    id: "creative-cut",
    title: "Creative Cut",
    category: ["Haircuts"],
    image: "/images/card_clean_creative_cut.jpg",
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming",
    category: ["Beard"],
    image: "/images/card_clean_beard_grooming.jpg",
  },
  {
    id: "wavy-style",
    title: "Wavy Style",
    category: ["Styling", "Haircuts"],
    image: "/images/card_clean_wavy_style.jpg",
  },
  {
    id: "hair-colour",
    title: "Hair Colour",
    category: ["Hair Colour"],
    image: "/images/card_clean_hair_colour.jpg",
  },
  {
    id: "curly-cut",
    title: "Curly Cut",
    category: ["Haircuts", "Styling"],
    image: "/images/card_clean_curly_cut.jpg",
  },
];

const CATEGORIES = [
  "All",
  "Haircuts",
  "Beard",
  "Hair Colour",
  "Styling",
  "Transformations",
];

export default function WorkGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    if (category === "Transformations") {
      const el = document.getElementById("transformations");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredItems =
    activeTab === "All" || activeTab === "Transformations"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category.includes(activeTab));

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        {/* Category Filter Bar */}
        <div className={styles.filterBar} role="tablist">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${
                activeTab === category ? styles.filterBtnActive : ""
              }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3x3 Cards Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href="/contact"
              className={styles.card}
              aria-label={`View style details for ${item.title}`}
            >
              <Image
                src={item.image}
                alt={`${item.title} - Three Brothers Salon Cuts`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw"
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <ArrowRight size={18} className={styles.arrowIcon} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
