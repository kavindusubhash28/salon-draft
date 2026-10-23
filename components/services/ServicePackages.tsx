import React from "react";
import Link from "next/link";
import { Gem, Star, Crown, Check, ArrowRight } from "lucide-react";
import styles from "./ServicePackages.module.css";

export default function ServicePackages() {
  const packages = [
    {
      id: "pkg-1",
      icon: <Gem size={22} />,
      title: "Essential Refresh",
      subtitle: "Haircut + Wash + Styling",
      price: "LKR 2,700",
      popular: false,
      features: [
        "Classic haircut tailored to your style",
        "Hair wash & nourishing cleanse",
        "Professional styling & finish",
      ],
    },
    {
      id: "pkg-2",
      icon: <Star size={22} fill="currentColor" />,
      title: "Signature Grooming",
      subtitle: "Haircut + Beard Trim + Hot Towel Finish",
      price: "LKR 3,400",
      popular: true,
      features: [
        "Precision haircut",
        "Beard trim & line-up",
        "Hot towel finish for a fresh, clean feel",
      ],
    },
    {
      id: "pkg-3",
      icon: <Crown size={22} />,
      title: "Premium Transformation",
      subtitle: "Haircut + Beard Grooming + Scalp Treatment + Styling",
      price: "LKR 5,800",
      popular: false,
      features: [
        "Complete haircut & styling",
        "Beard grooming & line-up",
        "Scalp treatment for healthier hair",
        "Premium styling & finish",
      ],
    },
  ];

  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>GROOMING PACKAGES</h2>
          <p className={styles.subtitle}>
            Curated packages for a complete grooming experience. Great value.
            Exceptional results.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className={styles.cardsGrid}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${pkg.popular ? styles.popularCard : ""
                }`}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>MOST POPULAR</div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>{pkg.icon}</div>
                <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                <span className={styles.pkgSubtitle}>{pkg.subtitle}</span>
              </div>

              <div className={styles.checklist}>
                {pkg.features.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span className={styles.checkText}>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/booking?service=${encodeURIComponent(pkg.title)}`}
                className={styles.priceBar}
              >
                <span className={styles.priceAmount}>{pkg.price}</span>
                <span className={styles.arrowCircle}>
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
