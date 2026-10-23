"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const googleReviews = [
    {
      id: 1,
      author: "Yoshell Delile",
      rating: 5,
      timeAgo: "a month ago",
      quote:
        "“After quite a hectic search for a good salon, I recently visited Three Brothers Salon Cuts, and honestly, I'm glad I did! The customer service was exceptional, the staff was friendly, and the results were flawless. Highly recommended!”",
    },
    {
      id: 2,
      author: "Thishari Hayesha",
      rating: 5,
      timeAgo: "4 months ago",
      quote:
        "“Three brothers saloon cuts is excellent. I went there for hairstyling, makeup, a facial, and eyebrow shaping. All of the staff were very friendly and supportive. The customer service was also of a very high standard. Especially, Miss Ganga, who provided my services, is highly experienced and skilled. I was very happy with the final results. I would highly recommend this salon to anyone looking for quality services.”",
    },
    {
      id: 3,
      author: "chasini imaya",
      rating: 5,
      timeAgo: "10 months ago",
      quote:
        "“Thank you so much 'Three brothers'.. Specially Nimesha, Ganga & Rithu. The service was exceptional; each of us (my friend & I) received a customized treatment, and the staff was very friendly and skilled. Truly a wonderful experience!”",
    },
    {
      id: 4,
      author: "Ishara Nilakshana Ekanayake",
      rating: 5,
      timeAgo: "3 months ago",
      quote:
        "“A huge thank you to Rojer and the amazing crew at Three Brothers Salon Cuts for making me feel so beautiful on my special day! Exceptional attention to detail, hospitality, and brilliant styling.”",
    },
    {
      id: 5,
      author: "Chathurika samarasinghe",
      rating: 5,
      timeAgo: "5 months ago",
      quote:
        "“Very good customer service and I really like the work done on me. Thank you so much Three Brothers. The professional lady did my layer cuts and eyebrows done by Nimesha. She is a kindly girl and very talented. 👌”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
  };

  // Auto transition every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, googleReviews.length]);

  const current = googleReviews[currentIndex];

  return (
    <section className={styles.section} id="reviews">
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

        {/* Quote Carousel (No boxes, pure open editorial style) */}
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className={styles.navBtn}
            aria-label="Previous Google review"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.quoteBox}>
            {/* Stars */}
            <div className={styles.starsRow}>
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="#c5925a"
                  color="#c5925a"
                />
              ))}
            </div>

            {/* Review Quote */}
            <p className={styles.quoteText}>{current.quote}</p>

            {/* Who put it */}
            <div className={styles.authorRow}>
              <span className={styles.authorName}>— {current.author}</span>
              <span className={styles.authorDot}>•</span>
              <span className={styles.authorSource}>Google Review</span>
              <span className={styles.authorDot}>•</span>
              <span className={styles.authorTime}>{current.timeAgo}</span>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={styles.navBtn}
            aria-label="Next Google review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsRow}>
          {googleReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
