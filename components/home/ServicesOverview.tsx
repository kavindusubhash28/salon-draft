"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Scissors, Sparkles } from "lucide-react";
import { MALE_SERVICES, FEMALE_SERVICES } from "@/lib/salon-data";
import styles from "./ServicesOverview.module.css";

export default function ServicesOverview() {
  const [activeGender, setActiveGender] = useState<"male" | "female">("male");

  const services = activeGender === "male" ? MALE_SERVICES.slice(0, 3) : FEMALE_SERVICES.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Signature Menu</span>
          <h2 className={styles.title}>Crafted Grooming &amp; Styling</h2>
          <p className={styles.description}>
            Every service begins with a tailored architectural consultation. Choose
            your preferred discipline below to view curated highlights.
          </p>
        </div>

        <div className={styles.toggleContainer}>
          <div className={styles.toggleWrapper}>
            <button
              className={`${styles.toggleBtn} ${
                activeGender === "male" ? styles.toggleBtnActive : ""
              }`}
              onClick={() => setActiveGender("male")}
            >
              Gentlemen&apos;s Atelier
            </button>
            <button
              className={`${styles.toggleBtn} ${
                activeGender === "female" ? styles.toggleBtnActive : ""
              }`}
              onClick={() => setActiveGender("female")}
            >
              Ladies Studio
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((item) => (
            <div key={item.id} className={styles.card}>
              {item.popular && (
                <span className={styles.popularBadge}>Signature Pick</span>
              )}
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>{item.category}</span>
                <h3 className={styles.serviceName}>{item.name}</h3>
                <p className={styles.serviceDesc}>{item.description}</p>
              </div>

              <div>
                <div className={styles.cardMeta}>
                  <span className={styles.duration}>
                    <Clock size={14} />
                    <span>{item.duration}</span>
                  </span>
                  <span className={styles.price}>{item.price}</span>
                </div>

                <div className={styles.cardAction}>
                  <Link
                    href={`/booking?service=${encodeURIComponent(item.name)}&gender=${activeGender}`}
                    className={styles.bookBtn}
                  >
                    <span>Reserve Chair</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerCta}>
          <Link href="/services" className={styles.allServicesBtn}>
            <span>View Full Menu &amp; Deluxe Packages</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
