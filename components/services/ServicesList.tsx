"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scissors, Sparkles, Clock, Calendar, ArrowRight } from "lucide-react";
import { MALE_SERVICES, FEMALE_SERVICES, ServiceItem } from "@/lib/salon-data";
import styles from "./ServicesList.module.css";

export default function ServicesList() {
  const [activeGender, setActiveGender] = useState<"male" | "female">("male");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const currentList = activeGender === "male" ? MALE_SERVICES : FEMALE_SERVICES;

  // Extract unique categories for current gender
  const categories = ["All", ...Array.from(new Set(currentList.map((s) => s.category)))];

  const filteredServices =
    selectedCategory === "All"
      ? currentList
      : currentList.filter((s) => s.category === selectedCategory);

  const handleGenderChange = (gender: "male" | "female") => {
    setActiveGender(gender);
    setSelectedCategory("All");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Bespoke Hair &amp; Grooming</span>
          <h1 className={styles.title}>Services &amp; Pricing Menu</h1>
          <p className={styles.description}>
            We provide specialized, private salon studios for men and women. Select
            your studio below to explore tailored treatments, precise tariffs, and durations.
          </p>
        </div>

        {/* Gender Studio Selector */}
        <div className={styles.genderSelector}>
          <div
            className={`${styles.genderCard} ${
              activeGender === "male" ? styles.genderCardActive : ""
            }`}
            onClick={() => handleGenderChange("male")}
          >
            <div className={styles.genderIconWrap}>
              <Scissors size={22} />
            </div>
            <div className={styles.genderInfo}>
              <h3>Gentlemen&apos;s Atelier</h3>
              <p>Fades &bull; Beard Sculpt &bull; Shaves</p>
            </div>
          </div>

          <div
            className={`${styles.genderCard} ${
              activeGender === "female" ? styles.genderCardActive : ""
            }`}
            onClick={() => handleGenderChange("female")}
          >
            <div className={styles.genderIconWrap}>
              <Sparkles size={22} />
            </div>
            <div className={styles.genderInfo}>
              <h3>Ladies&apos; Studio</h3>
              <p>Couture Cuts &bull; Balayage &bull; Keratin</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={styles.categoryFilters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                selectedCategory === cat ? styles.filterBtnActive : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              {service.popular && (
                <span className={styles.badgePopular}>Signature Pick</span>
              )}
              <div>
                <span className={styles.categoryTag}>{service.category}</span>
                <h3 className={styles.serviceTitle}>{service.name}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>

              <div>
                <div className={styles.serviceMetaRow}>
                  <div className={styles.durationWrap}>
                    <Clock size={15} />
                    <span>Est. {service.duration}</span>
                  </div>
                  <div className={styles.priceVal}>{service.price}</div>
                </div>

                <Link
                  href={`/booking?service=${encodeURIComponent(
                    service.name
                  )}&gender=${activeGender}`}
                  className={styles.actionBtn}
                >
                  <Calendar size={14} />
                  <span>Book This Service</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
