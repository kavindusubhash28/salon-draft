"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactFAQ.module.css";

const FAQS = [
  {
    question: "Do I need an appointment?",
    answer:
      "While appointments are recommended to ensure your preferred time, we also welcome walk-ins based on availability.",
  },
  {
    question: "Can I walk in or do I have to book in advance?",
    answer:
      "Walk-ins are always warmly welcomed! However, to avoid waiting during peak salon hours (especially evenings and weekends), booking 1–2 days ahead is advised.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Once you submit the booking form or message us, our team will call or WhatsApp you directly to confirm your stylist and time slot.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes! Complimentary consultation is included before every haircut, colour, and beard grooming service to match your facial features and lifestyle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash (LKR), all major Credit/Debit Cards (Visa, MasterCard), and local QR bank transfer methods.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Certainly. Please inform us via phone or WhatsApp at least 2 hours prior to your scheduled time so we can accommodate other clients.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Column: Heading & Barbershop Imagery */}
        <div className={styles.leftCol}>
          <span className={styles.overline}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.title}>Your Questions, Answered</h2>
          <p className={styles.subtitle}>
            Quick answers to common questions about our appointments and
            services.
          </p>

          <div className={styles.graphicWrapper}>
            <Image
              src="/images/barber_tools_counter.jpg"
              alt="Artisan Barber Tools on Counter - Three Brothers Salon Cuts"
              fill
              sizes="(max-width: 992px) 100vw, 45vw"
              className={styles.graphicImg}
            />
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className={styles.accordionList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionButton}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className={styles.accordionContent}>
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
