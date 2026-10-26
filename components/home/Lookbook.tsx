import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Lookbook.module.css";

export default function Lookbook() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <div className={styles.titleColumn}>
            <span className={styles.categoryLabel}>02 / THE LOOKBOOK</span>
            <h2 className={styles.title}>
              Styles that speak
              <br />
              for themselves.
            </h2>
          </div>

          <div className={styles.descColumn}>
            <p className={styles.headerDesc}>
              A look at our recent work. Real people. Real styles. Find
              inspiration for your next visit.
            </p>
          </div>

          <div className={styles.btnColumn}>
            <Link href="/work" className={styles.exploreBtn}>
              <span>EXPLORE OUR WORK</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Asymmetrical 4-Column Gallery Grid */}
        <div className={styles.galleryGrid}>
          {/* Column 1: Modern Fade (Tall) */}
          <div className={styles.galleryCol}>
            <div className={styles.tallImageWrap}>
              <Image
                src="/images/Home/1.jpg"
                alt="Modern Fade Haircut"
                fill
                className={styles.galleryImg}
              />
            </div>
            <span className={styles.caption}>MODERN FADE</span>
          </div>

          {/* Column 2: Two Stacked Images */}
          <div className={`${styles.galleryCol} ${styles.stackedCol}`}>
            <div className={styles.stackedItem}>
              <div className={styles.stackedImageWrap}>
                <Image
                  src="/images/Home/2.jpg"
                  alt="Textured Style"
                  fill
                  className={styles.galleryImg}
                />
              </div>
              <span className={styles.caption}>TEXTURED STYLE</span>
            </div>

            <div className={styles.stackedItem}>
              <div className={styles.stackedImageWrap}>
                <Image
                  src="/images/Home/lookbook_3.jpg"
                  alt="Master Barber Styling and Beard Grooming"
                  fill
                  className={styles.galleryImg}
                />
              </div>
              <span className={styles.caption}>BEARD GROOMING</span>
            </div>
          </div>

          {/* Column 3: Creative Cuts (Tall) */}
          <div className={styles.galleryCol}>
            <div className={styles.tallImageWrap}>
              <Image
                src="/images/Home/4.jpg"
                alt="Creative Cuts Razor Art"
                fill
                className={styles.galleryImg}
              />
            </div>
            <span className={styles.caption}>CREATIVE CUTS</span>
          </div>

          {/* Column 4: Natural Texture (Tall) */}
          <div className={styles.galleryCol}>
            <div className={styles.tallImageWrap}>
              <Image
                src="/images/Home/5.jpg"
                alt="Natural Texture Hair"
                fill
                className={styles.galleryImg}
              />
            </div>
            <span className={styles.caption}>NATURAL TEXTURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
