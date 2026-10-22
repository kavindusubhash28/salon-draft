"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { FAQS, SALON_INFO } from "@/lib/salon-data";
import styles from "./ServiceFAQ.module.css";

export default function ServiceFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Frequently Addressed</span>
          <h2 className={styles.title}>Service &amp; Booking Questions</h2>
          <p className={styles.description}>
            Everything you need to know regarding bookings, walk-ins, and studio etiquette.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`${styles.iconWrap} ${
                      isOpen ? styles.iconWrapRotated : ""
                    }`}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>
                {isOpen && <div className={styles.answerBox}>{faq.answer}</div>}
              </div>
            );
          })}
        </div>

        <div className={styles.helpBox}>
          <h4>Have a specialized request or bridal inquiry?</h4>
          <p>
            Send us a message directly with photos of your current hair and your
            desired outcome for a fast personalized quote.
          </p>
          <a
            href={`https://wa.me/${SALON_INFO.whatsapp.replace(
              /[^0-9]/g,
              ""
            )}?text=Hello%20Three%20Brothers%20Salon!%20I%20have%20a%20question%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHelpBtn}
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
