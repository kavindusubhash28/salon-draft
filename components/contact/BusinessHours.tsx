import React from "react";
import { Clock } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./BusinessHours.module.css";

export default function BusinessHours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>
            <span className={styles.subheading}>Operating Schedule</span>
            <h2 className={styles.title}>Atelier Working Hours</h2>
          </div>

          <div className={styles.scheduleList}>
            {SALON_INFO.hours.map((item, idx) => (
              <div key={idx} className={styles.scheduleRow}>
                <div className={styles.daysWrap}>
                  <Clock size={18} className={styles.clockIcon} />
                  <span className={styles.days}>{item.days}</span>
                </div>
                <div className={styles.hoursWrap}>
                  <span className={styles.hours}>{item.hours}</span>
                  <span
                    className={`${styles.statusBadge} ${
                      item.status === "Peak Hours" ? styles.statusPeak : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footerNote}>
            <strong>Appointments vs Walk-ins:</strong> Walk-ins are always welcomed
            subject to master chair availability. Advance reservation is strongly
            recommended on Thursday, Friday &amp; Saturday evenings.
          </div>
        </div>
      </div>
    </section>
  );
}
