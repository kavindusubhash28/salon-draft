import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./SalonInterior.module.css";

export default function SalonInterior() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Column: Narrative & CTA */}
          <div className={styles.textCol}>
            <span className={styles.overline}>OUR SPACE</span>

            <h2 className={styles.title}>
              A Space
              <br />
              Designed for <span className={styles.caramelHighlight}>You.</span>
            </h2>

            <p className={styles.description}>
              Step into a modern and comfortable salon environment where style
              meets relaxation. Our space is designed to give you the best
              grooming experience — with premium equipment, clean interiors and
              a vibe that feels like home.
            </p>

            <Link href="/contact" className={styles.visitBtn}>
              <span>VISIT US TODAY</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: Photo Mosaic Grid */}
          <div className={styles.mosaicCol}>
            {/* Top Wide Image */}
            <div className={styles.topWideWrap}>
              <Image
                src="/images/space_wide.jpg"
                alt="Three Brothers Main Salon Floor and Styling Stations"
                fill
                className={styles.mosaicImg}
              />
            </div>

            {/* Bottom 3 Details Row */}
            <div className={styles.bottomRow}>
              <div className={styles.bottomDetailWrap}>
                <Image
                  src="/images/experience_chair.jpg"
                  alt="Barber Chair Station"
                  fill
                  className={styles.mosaicImg}
                />
              </div>

              <div className={styles.bottomDetailWrap}>
                <Image
                  src="/images/service_scalp.jpg"
                  alt="Wash Basin and Scalp Spa Area"
                  fill
                  className={styles.mosaicImg}
                />
              </div>

              <div className={styles.bottomDetailWrap}>
                <Image
                  src="/images/space_lounge.jpg"
                  alt="Salon Lounge and Waiting Space"
                  fill
                  className={styles.mosaicImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
