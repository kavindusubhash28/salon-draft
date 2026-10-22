"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./WorkTransformations.module.css";

export default function WorkTransformations() {
  return (
    <section id="transformations" className={styles.transformationSection}>
      <div className={styles.container}>
        {/* Left Column: Heading & Description */}
        <div className={styles.contentBox}>
          <span className={styles.overline}>TRANSFORMATIONS</span>
          <h2 className={styles.title}>
            Same People.
            <span className={styles.titleHighlight}>Different Look.</span>
          </h2>
          <p className={styles.description}>
            From subtle changes to complete makeovers, see how the right cut and
            style can make a big difference.
          </p>
        </div>

        {/* Right Column: Before & After Cards */}
        <div className={styles.compareWrapper}>
          {/* Before Card */}
          <div className={styles.compareCard}>
            <Image
              src="/images/clean_trans_before.jpg"
              alt="Before Haircut Transformation - Three Brothers Salon Cuts"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className={styles.compareImg}
            />
            <span className={styles.tagPill}>BEFORE</span>
          </div>

          {/* Floating Center Transition Circle */}
          <div className={styles.centerArrowBadge} aria-hidden="true">
            <ArrowRight size={20} />
          </div>

          {/* After Card */}
          <div className={styles.compareCard}>
            <Image
              src="/images/clean_trans_after.jpg"
              alt="After Haircut Transformation - Three Brothers Salon Cuts"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className={styles.compareImg}
            />
            <span className={styles.tagPill}>AFTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}
