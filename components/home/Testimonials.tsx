import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/salon-data";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Client Words</span>
          <h2 className={styles.title}>The Word On The Street</h2>
          <p className={styles.description}>
            From seasoned diplomats and creatives to style-conscious brides, hear
            from those who trust our chairs week after week.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className={styles.card}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.quoteText}>&ldquo;{item.content}&rdquo;</p>
              </div>

              <div className={styles.cardFooter}>
                <div>
                  <h4 className={styles.authorName}>{item.author}</h4>
                  <p className={styles.authorRole}>{item.role}</p>
                </div>
                <span className={styles.serviceBadge}>{item.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
