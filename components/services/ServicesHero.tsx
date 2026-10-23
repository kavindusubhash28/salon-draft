"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import styles from "./ServicesHero.module.css";

export interface ServicesHeroService {
  id: string;
  number: string;
  category: string;
  cardCategory: string;
  title: string;
  line1: string;
  line2: string;
  cardTitle: string;
  subtitle: string;
  description: string;
  image: string;
  bgImage: string;
  badge?: string;
}

const SERVICES_SHOWCASE: ServicesHeroService[] = [
  {
    id: "haircuts-beard",
    number: "01",
    category: "Master Barbering",
    cardCategory: "Barbering",
    title: "Haircuts & Beard Grooming",
    line1: "Haircuts &",
    line2: "Beard Grooming",
    cardTitle: "Haircuts & Beard",
    subtitle: "Precision cuts, skin fades, hot towel razor shaves",
    description:
      "Explore our precision fades, classic gentlemen's scissor cuts, sharp beard sculpting, and traditional hot towel razor finishes crafted to elevate your personal style.",
    image: "/images/Services/beard.jpg",
    bgImage: "/images/Services/beard.jpg",
  },
  {
    id: "treatments",
    number: "02",
    category: "Hair Therapy & Care",
    cardCategory: "Hair Therapy",
    title: "Hair Treatments & Care",
    line1: "Hair Treatments",
    line2: "& Care",
    cardTitle: "Treatments & Care",
    subtitle: "Restorative keratin, scalp therapy, deep nourishment",
    description:
      "Witness the revitalizing power of keratin smoothing, intensive restorative oil therapies, and deep conditioning rituals designed to restore healthy shine and vitality.",
    image: "/images/Services/treatments.jpg",
    bgImage: "/images/Services/treatments.jpg",
  },
  {
    id: "face-skin-care",
    number: "03",
    category: "Skin & Aesthetics",
    cardCategory: "Aesthetics",
    title: "Face & Skin Care",
    line1: "Face &",
    line2: "Skin Care",
    cardTitle: "Face & Skin",
    subtitle: "Hydrafacials, carbon peel, 24K gold facials",
    description:
      "Discover our advanced hydrafacials, carbon laser peels, purifying cleansing therapies, and gold facial treatments to rejuvenate skin and leave you feeling completely refreshed.",
    image: "/images/Services/facieal.jpg",
    bgImage: "/images/Services/facieal.jpg",
  },
  {
    id: "pedicure-foot-care",
    number: "04",
    category: "Wellness & Spa",
    cardCategory: "Foot Care",
    title: "Pedicure & Foot Care",
    line1: "Pedicure &",
    line2: "Foot Care",
    cardTitle: "Pedicure & Spa",
    subtitle: "Relaxing foot bath, scrub, massage & grooming",
    description:
      "Indulge in soothing foot spa therapies, gentle exfoliating scrubs, nail care, and restorative massage designed for total relaxation from head to toe.",
    badge: "Subject to confirmation",
    image: "/images/Services/nails.jpg",
    bgImage: "/images/Services/nails.jpg",
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds

export default function ServicesHero() {
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

  const scrollToServices = () => {
    const el = document.getElementById("what-we-offer");
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
      aria-label="Services Showcase Hero"
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
              <span className={styles.overline}>
                OUR SERVICES &bull; {activeService.category}
              </span>
              {activeService.badge && (
                <span className={styles.badgeTag}>{activeService.badge}</span>
              )}
            </div>

            <h1 className={styles.heroTitle}>
              <span>{activeService.line1}</span>
              <br />
              <span>{activeService.line2}</span>
            </h1>

            <p className={styles.description}>{activeService.description}</p>

            <div className={styles.ctaGroup}>
              <button
                type="button"
                onClick={scrollToServices}
                className={styles.primaryBtn}
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Cards Deck */}
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
    </section>
  );
}
