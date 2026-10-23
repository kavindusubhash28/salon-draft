import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Handshake, ArrowRight } from "lucide-react";
import styles from "./TeamProfiles.module.css";

// Custom Comb Icon matching Image 2
function CombIcon({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="4" rx="1" />
      <line x1="5" y1="10" x2="5" y2="18" />
      <line x1="8" y1="10" x2="8" y2="18" />
      <line x1="11" y1="10" x2="11" y2="18" />
      <line x1="14" y1="10" x2="14" y2="18" />
      <line x1="17" y1="10" x2="17" y2="18" />
      <line x1="20" y1="10" x2="20" y2="18" />
    </svg>
  );
}

export default function TeamProfiles() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.overlineWrap}>
            <span className={styles.line} />
            <span className={styles.overline}>MEET THE TEAM</span>
            <span className={styles.line} />
          </div>

          <h2 className={styles.title}>
            The Artists <span className={styles.highlight}>Behind the Blades.</span>
          </h2>

          <p className={styles.description}>
            Different personalities, one shared passion. Our team brings skill,
            creativity and genuine care to every client, combining modern
            techniques with traditional barbering to give you the best
            experience.
          </p>
        </div>

        {/* Centerpiece Team Photo Banner */}
        <div className={styles.bannerWrapper}>
          <Image
            src="/images/team_hero.jpg"
            alt="Three Brothers Salon Cuts Master Barber Team"
            fill
            priority
            className={styles.bannerImg}
          />

          {/* Watermark Logo Stamp in top-left */}
          <div className={styles.watermarkWrap}>
            <Image
              src="/images/about/logopng.png"
              alt="Three Brothers Salon Cuts Emblem"
              width={160}
              height={160}
              className={styles.watermarkLogo}
            />
          </div>

          {/* Vignette & Gradient Overlays */}
          <div className={styles.gradientOverlay} />

          {/* Cursive Quote on lower-third of photo */}
          <div className={styles.overlayContent}>
            <p className={styles.scriptQuote}>
              Walk in, sit back, and let our team bring your best look to life.
            </p>
          </div>
        </div>

        {/* 3 Feature Highlights in a Row */}
        <div className={styles.featuresRow}>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}>
              <Scissors size={22} strokeWidth={1.8} className={styles.featureIcon} />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Skilled Barbers</h3>
              <p className={styles.featureDesc}>
                Experts in modern cuts, classic styles and detailed grooming.
              </p>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <div className={styles.iconCircle}>
              <Handshake size={22} strokeWidth={1.8} className={styles.featureIcon} />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Friendly Service</h3>
              <p className={styles.featureDesc}>
                A welcoming environment where every client feels at home.
              </p>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <div className={styles.iconCircle}>
              <CombIcon size={22} className={styles.featureIcon} />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Modern Techniques</h3>
              <p className={styles.featureDesc}>
                Combining traditional barbering with the latest trends and tools.
              </p>
            </div>
          </div>
        </div>

        {/* Centered CTA Button */}
        <div className={styles.btnRow}>
          <Link href="/contact" className={styles.teamBtn}>
            <span>MEET OUR TEAM</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
