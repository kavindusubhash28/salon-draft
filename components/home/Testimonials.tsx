"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "“Every detail matters — from the first consultation to the final look.”",
    },
    {
      id: 2,
      quote:
        "“The mastery of scissor discipline and razor edge work is second to none in Colombo.”",
    },
    {
      id: 3,
      quote:
        "“An unhurried experience in an authentic space. You walk out looking and feeling completely elevated.”",
    },
    {
      id: 4,
      quote:
        "“From the hot towel ritual to the precision fade, Three Brothers sets the gold standard.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section}>
      {/* Background salon ambiance image with soft overlay */}
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

        {/* Quote Carousel */}
        <div className={styles.carouselWrapper}>
          <button
            onClick={prevSlide}
            className={styles.navBtn}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              {testimonials[currentIndex].quote}
            </p>
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
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
