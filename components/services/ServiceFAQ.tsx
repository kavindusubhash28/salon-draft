"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import styles from "./ServiceFAQ.module.css";

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need an appointment?",
      a: "While appointments are recommended to ensure your preferred time, we also welcome walk-ins based on availability.",
    },
    {
      q: "How long does a haircut take?",
      a: "A precision haircut usually takes 35–45 minutes, including an initial consultation, hair wash, and custom styling.",
    },
    {
      q: "Do you offer consultations before colour services?",
      a: "Yes, every colour service begins with an in-depth consultation and strand assessment to ensure safe and lasting results.",
    },
    {
      q: "Are walk-ins accepted?",
      a: "Yes, walk-ins are welcomed throughout the day depending on barber chair availability.",
    },
    {
      q: "Which package is best for a full grooming session?",
      a: "Our Signature Grooming and Premium Transformation packages offer the most comprehensive care and exceptional value.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Visual Column with Script Flourish */}
          <div className={styles.visualCol}>
            <div className={styles.chairImageWrap}>
              <Image
                src="/images/experience_chair.jpg"
                alt="Three Brothers Salon Experience Chair"
                fill
                className={styles.chairImg}
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.scriptFlourish}>
              <span>Good</span>
              <span>Hair</span>
              <span>Brighter</span>
              <span>Days</span>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className={styles.contentCol}>
            <div className={styles.overlineWrap}>
              <span className={styles.line} />
              <span className={styles.overline}>FREQUENTLY ASKED QUESTIONS</span>
              <span className={styles.line} />
            </div>

            <h2 className={styles.title}>Your Questions, Answered</h2>
            <p className={styles.subtitle}>
              Quick answers to common questions about our services.
            </p>

            <div className={styles.accordionList}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.toggleIcon}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
