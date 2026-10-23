"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import {
  REAL_GOOGLE_REVIEWS,
  GOOGLE_RATING_SUMMARY,
} from "@/lib/google-reviews";
import styles from "./Testimonials.module.css";

// Official Google Multi-color 'G' Logo SVG
function GoogleGLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12c0 2.03.45 3.84 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reviews = REAL_GOOGLE_REVIEWS;
  const current = reviews[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-play carousel every 7 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, reviews.length]);

  return (
    <section className={styles.section} id="reviews">
      {/* Background salon ambiance image with warm overlay */}
      <div className={styles.bgContainer}>
        <Image
          src="/images/client_words_bg.jpg"
          alt="Salon Ambiance"
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.categoryLabel}>CLIENT WORDS</span>
          <h2 className={styles.title}>
            Good words. Great <span className={styles.cutsHighlight}>cuts.</span>
          </h2>
        </div>

        {/* Quote Carousel — Open & Seamless (No box) */}
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className={styles.navBtn}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.quoteArea}>
            {/* 5 Stars */}
            <div className={styles.starsRow}>
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={styles.starIcon}
                  fill="#c5925a"
                  color="#c5925a"
                />
              ))}
            </div>

            {/* Quote Text */}
            <p className={styles.quoteText}>
              &ldquo;{current.content}&rdquo;
            </p>

            {/* Author Attribution */}
            <div className={styles.authorSection}>
              <div className={styles.authorMain}>
                <span className={styles.authorName}>{current.author}</span>
                <span className={styles.verifiedTag}>
                  <GoogleGLogo size={14} />
                  <span>Verified Google Review</span>
                </span>
              </div>

              <div className={styles.metaRow}>
                {current.stylistMentioned && (
                  <span className={styles.metaItem}>
                    Stylist: <strong className={styles.stylistHighlight}>{current.stylistMentioned}</strong>
                  </span>
                )}
                {current.services && current.services.length > 0 && (
                  <>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaItem}>
                      {current.services.join(", ")}
                    </span>
                  </>
                )}
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaTime}>{current.timeAgo}</span>
              </div>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={styles.navBtn}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsRow}>
          {reviews.map((rev, index) => (
            <button
              key={rev.id}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Subtle, Elegant Google Trust Link */}
        <div className={styles.googleFooter}>
          <a
            href={GOOGLE_RATING_SUMMARY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
          >
            <GoogleGLogo size={16} />
            <span>Rated <strong>5.0</strong> on Google Reviews</span>
            <span className={styles.linkDot}>•</span>
            <span className={styles.actionText}>Read all reviews on Google Maps</span>
            <ExternalLink size={13} className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
