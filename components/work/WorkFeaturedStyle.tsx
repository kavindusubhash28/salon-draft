"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./WorkFeaturedStyle.module.css";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/clean_feat_main.jpg",
    thumb: "/images/clean_feat_thumb_1.jpg",
    alt: "Textured Fade Profile View - Three Brothers Salon Cuts",
  },
  {
    id: 2,
    src: "/images/card_clean_textured_crop.jpg",
    thumb: "/images/clean_feat_thumb_2.jpg",
    alt: "Textured Fade Back View - Three Brothers Salon Cuts",
  },
  {
    id: 3,
    src: "/images/card_clean_spiky_texture.jpg",
    thumb: "/images/clean_feat_thumb_3.jpg",
    alt: "Textured Fade 3/4 View - Three Brothers Salon Cuts",
  },
  {
    id: 4,
    src: "/images/card_clean_creative_cut.jpg",
    thumb: "/images/clean_feat_thumb_4.jpg",
    alt: "Textured Fade Detail - Three Brothers Salon Cuts",
  },
];

const SPECS = [
  { label: "Service", value: "Haircut & Styling" },
  { label: "Duration", value: "45 mins" },
  { label: "Price", value: "LKR 1,800" },
  { label: "Best For", value: "Casual / Modern Look" },
];

export default function WorkFeaturedStyle() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        {/* Left Column: Interactive Image Gallery */}
        <div className={styles.mediaCol}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={GALLERY_IMAGES[activeIndex].src}
              alt={GALLERY_IMAGES[activeIndex].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.mainImage}
            />

            {/* Left & Right Arrow Buttons */}
            <button
              type="button"
              className={`${styles.navArrow} ${styles.navArrowLeft}`}
              onClick={handlePrev}
              aria-label="Previous style image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className={`${styles.navArrow} ${styles.navArrowRight}`}
              onClick={handleNext}
              aria-label="Next style image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* 4 Thumbnails */}
          <div className={styles.thumbnailsRow}>
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className={`${styles.thumbBtn} ${
                  activeIndex === idx ? styles.thumbBtnActive : ""
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image angle ${idx + 1}`}
              >
                <Image
                  src={img.thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className={styles.thumbImg}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Spec Info & Booking Button */}
        <div className={styles.infoCol}>
          <span className={styles.overline}>FEATURED STYLE</span>
          <h2 className={styles.title}>Textured Fade</h2>
          <p className={styles.description}>
            A modern textured cut with a clean fade, perfect for a sharp and
            effortless look.
          </p>

          <div className={styles.divider} />

          {/* Specifications List */}
          <div className={styles.specList}>
            {SPECS.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Link href="/booking" className={styles.bookBtn}>
            <span>BOOK THIS STYLE</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </Link>
        </div>
      </div>
    </section>
  );
}
