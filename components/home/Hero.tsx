"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Hero.module.css";

const HERO_SLIDES = [
  {
    id: "hero1",
    src: "/images/Home/hero1.jpg",
    alt: "Three Brothers Salon Cuts Master Barber Team",
  },
  {
    id: "hero2",
    src: "/images/Home/hero2.jpg",
    alt: "Three Brothers Salon Cuts Styling Team",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  // Automatic timer to swipe between hero1 and hero2 every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left
      nextSlide();
    } else if (distance < -50) {
      // Swiped right
      prevSlide();
    }
  };

  return (
    <section
      className={styles.heroSection}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Hero Image Slider */}
      <div className={styles.imageContainer}>
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              idx === currentSlide ? styles.slideActive : ""
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className={styles.heroImage}
            />
          </div>
        ))}
        <div className={styles.heroOverlay} />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.overline}>GOOD HAIR. GOOD CONFIDENCE.</span>

          <h1 className={styles.heroTitle}>
            THREE BROTHERS
            <br />
            <span className={styles.heroTitleAccent}>SALON CUTS</span>
          </h1>

          <p className={styles.tagline}>
            BARBERING &nbsp;—&nbsp; STYLING &nbsp;—&nbsp; GROOMING
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/services" className={styles.primaryBtn}>
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              <span>VIEW OUR WORK</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className={styles.sliderControls}>
        <button
          type="button"
          className={styles.slideNavBtn}
          onClick={prevSlide}
          aria-label="Previous hero slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.indicatorsGroup}>
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.indicatorBar} ${
                idx === currentSlide ? styles.indicatorBarActive : ""
              }`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.slideNavBtn}
          onClick={nextSlide}
          aria-label="Next hero slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Ticker Strip */}
      <div className={styles.tickerStrip}>
        <div className={styles.tickerContent}>
          <span>CUTS WITH CHARACTER</span>
          <span className={styles.tickerDot}>▪</span>
          <span>DETAIL IN EVERY FINISH</span>
          <span className={styles.tickerDot}>▪</span>
          <span>MADE FOR YOUR STYLE</span>
        </div>
      </div>
    </section>
  );
}
