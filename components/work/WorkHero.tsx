"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
} from "lucide-react";
import styles from "./WorkHero.module.css";

export interface WorkHeroService {
  id: string;
  number: string;
  category: string;
  cardCategory: string;
  title: string;
  cardTitle: string;
  subtitle: string;
  description: string;
  image: string;
  bgImage: string;
  badge?: string;
  filterCategory?: string;
}

const SERVICES_SHOWCASE: WorkHeroService[] = [
  {
    id: "haircuts-beard",
    number: "01",
    category: "Master Barbering",
    cardCategory: "Barbering",
    title: "Haircuts & Beard Grooming",
    cardTitle: "Haircuts & Beard",
    subtitle: "Precision cuts, skin fades, hot towel razor shaves",
    description:
      "Explore our precision fades, classic gentlemen's scissor cuts, sharp beard sculpting, and traditional hot towel razor finishes crafted to elevate your personal style.",
    image: "/images/Services/beard.jpg",
    bgImage: "/images/Services/beard.jpg",
    filterCategory: "all",
  },
  {
    id: "treatments",
    number: "02",
    category: "Hair Therapy & Care",
    cardCategory: "Hair Therapy",
    title: "Hair Treatments & Care",
    cardTitle: "Treatments & Care",
    subtitle: "Restorative keratin, scalp therapy, deep nourishment",
    description:
      "Witness the revitalizing power of keratin smoothing, intensive restorative oil therapies, and deep conditioning rituals designed to restore healthy shine and vitality.",
    image: "/images/Services/treatments.jpg",
    bgImage: "/images/Services/treatments.jpg",
    filterCategory: "haircut",
  },
  {
    id: "face-skin-care",
    number: "03",
    category: "Skin & Aesthetics",
    cardCategory: "Aesthetics",
    title: "Face & Skin Care",
    cardTitle: "Face & Skin",
    subtitle: "Hydrafacials, carbon peel, 24K gold facials",
    description:
      "Discover our advanced hydrafacials, carbon laser peels, purifying cleansing therapies, and gold facial treatments to rejuvenate skin and leave you feeling completely refreshed.",
    image: "/images/Services/facieal.jpg",
    bgImage: "/images/Services/facieal.jpg",
    filterCategory: "all",
  },
  {
    id: "pedicure-foot-care",
    number: "04",
    category: "Wellness & Spa",
    cardCategory: "Foot Care",
    title: "Pedicure & Foot Care",
    cardTitle: "Pedicure & Spa",
    subtitle: "Relaxing foot bath, scrub, massage & grooming",
    description:
      "Indulge in soothing foot spa therapies, gentle exfoliating scrubs, nail care, and restorative massage designed for total relaxation from head to toe.",
    badge: "Subject to confirmation",
    image: "/images/Services/nails.jpg",
    bgImage: "/images/Services/nails.jpg",
    filterCategory: "all",
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds

export default function WorkHero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const cardsTrackRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % SERVICES_SHOWCASE.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIdx(
      (prev) => (prev - 1 + SERVICES_SHOWCASE.length) % SERVICES_SHOWCASE.length
    );
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, currentIdx]);


  // Touch swipe support
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
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const activeService = SERVICES_SHOWCASE[currentIdx];

  const scrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={styles.heroSection}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Our Work & Services Showcase Hero"
    >
      {/* Background Slides */}
      <div className={styles.imageContainer}>
        {SERVICES_SHOWCASE.map((service, idx) => (
          <div
            key={service.id}
            className={`${styles.bgSlide} ${
              idx === currentIdx ? styles.bgSlideActive : ""
            }`}
          >
            <Image
              src={service.bgImage}
              alt={service.title}
              fill
              priority={idx === 0}
              className={styles.bgImage}
            />
          </div>
        ))}
        <div className={styles.heroOverlay} />
      </div>

      {/* Main Content Grid */}
      <div className={styles.heroContainer}>
        {/* Left Column: Active Service Details */}
        <div className={styles.leftContent}>
          <div key={activeService.id} className={styles.animatedContent}>
            <div className={styles.categoryRow}>
              <span className={styles.categoryLine} />
              <span className={styles.overline}>OUR WORK &bull; {activeService.category}</span>
              {activeService.badge && (
                <span className={styles.badgeTag}>{activeService.badge}</span>
              )}
            </div>

            <h1 className={styles.heroTitle}>
              {activeService.title.split("&").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && (
                    <>
                      {" & "}
                      <br className={styles.titleBreak} />
                    </>
                  )}
                </React.Fragment>
              ))}
            </h1>

            <p className={styles.description}>{activeService.description}</p>

            <div className={styles.ctaGroup}>
              <Link
                href="/booking"
                className={styles.iconCircleBtn}
                aria-label="Book an Appointment"
              >
                <Calendar size={18} />
              </Link>

              <button
                type="button"
                onClick={scrollToGallery}
                className={styles.primaryBtn}
              >
                <span>VIEW GALLERY WORK</span>
                <ArrowDown size={14} />
              </button>

              <Link href="/services" className={styles.secondaryBtn}>
                <span>SERVICE DETAILS</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Cards Deck (Globe Express style) */}
        <div className={styles.cardsColumn}>
          <div ref={cardsTrackRef} className={styles.cardsTrack}>
            {SERVICES_SHOWCASE.map((service, idx) => {
              const isActive = idx === currentIdx;
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${
                    isActive ? styles.serviceCardActive : ""
                  }`}
                  onClick={() => setCurrentIdx(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentIdx(idx);
                    }
                  }}
                  aria-label={`Show ${service.title}`}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={styles.cardImage}
                    />
                    <div className={styles.cardGradient} />
                  </div>

                  <div className={styles.cardInfo}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardCategory}>
                        {service.number} / {service.cardCategory}
                      </span>
                      {isActive && (
                        <span className={styles.activePill}>
                          <Sparkles size={10} /> ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className={styles.cardTitle}>{service.cardTitle}</h3>
                  </div>

                  {isActive && <div className={styles.activeBorderGlow} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation Arrows, Progress Timeline & Numbers */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          {/* Arrow Buttons */}
          <div className={styles.navButtonsGroup}>
            <button
              type="button"
              className={styles.navCircleBtn}
              onClick={prevSlide}
              aria-label="Previous Service"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className={styles.navCircleBtn}
              onClick={nextSlide}
              aria-label="Next Service"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Progress Timeline Line */}
          <div className={styles.timelineWrap}>
            <div
              key={`${currentIdx}-${isPaused}`}
              className={`${styles.timelineFill} ${
                isPaused ? styles.timelinePaused : ""
              }`}
              style={{ animationDuration: `${AUTOPLAY_DURATION}ms` }}
            />
          </div>

          {/* Slide Numbers Indicator */}
          <div className={styles.counterWrap}>
            <span className={styles.counterCurrent}>
              {activeService.number}
            </span>
            <span className={styles.counterDivider}>/</span>
            <span className={styles.counterTotal}>04</span>
          </div>
        </div>
      </div>
    </section>
  );
}
