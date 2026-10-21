import React from "react";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { SERVICE_PACKAGES } from "@/lib/salon-data";
import styles from "./ServicePackages.module.css";

export default function ServicePackages() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Curated Combinations</span>
          <h2 className={styles.title}>All-Inclusive Atelier Packages</h2>
          <p className={styles.description}>
            Save time and experience our most comprehensive ritual transformations.
            Crafted for full grooming overhauls, bridal preparations, and VIP events.
          </p>
        </div>

        <div className={styles.packagesGrid}>
          {SERVICE_PACKAGES.map((pkg) => (
            <div key={pkg.id} className={styles.packageCard}>
              <div>
                {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
                <span className={styles.targetTag}>
                  {pkg.targetGender === "male"
                    ? "Gentlemen's Ritual"
                    : "Ladies' Luxury Ritual"}
                </span>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDesc}>{pkg.description}</p>

                <div className={styles.includesTitle}>Experience Inclusions:</div>
                <ul className={styles.includesList}>
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className={styles.includeItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.packageFooter}>
                <div className={styles.priceWrap}>
                  <span className={styles.priceVal}>{pkg.price}</span>
                  <span className={styles.durationVal}>Approx. {pkg.duration}</span>
                </div>
                <Link
                  href={`/booking?package=${encodeURIComponent(
                    pkg.name
                  )}&gender=${pkg.targetGender}`}
                  className={styles.bookPackageBtn}
                >
                  Reserve Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
