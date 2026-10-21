import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/salon-data";
import styles from "./Lookbook.module.css";

export default function Lookbook() {
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <span className={styles.subheading}>Atelier Portfolio</span>
            <h2 className={styles.title}>The Seasonal Lookbook</h2>
          </div>
          <Link href="/work" className={styles.viewAllLink}>
            <span>View Full Gallery &amp; Transformations</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className={styles.galleryGrid}>
          {previewItems.map((item) => (
            <Link key={item.id} href="/work" className={styles.galleryCard}>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={750}
                className={styles.galleryImage}
              />
              <div className={styles.cardOverlay}>
                <span className={styles.tag}>
                  {item.gender === "male" ? "Men's Cut" : "Women's Styling"}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardMeta}>
                  <span>By {item.stylist}</span>
                  <span>{item.timeTaken}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
