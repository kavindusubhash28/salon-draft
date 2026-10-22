import React from "react";
import { MessageSquare, Zap } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./WhatsAppBooking.module.css";

export default function WhatsAppBooking() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <div className={styles.badge}>
              <Zap size={14} />
              <span>Instant Desk Response</span>
            </div>
            <h2 className={styles.title}>Prefer Direct WhatsApp Messaging?</h2>
            <p className={styles.desc}>
              Skip the form. Message our front desk directly with your haircut photo or preferred day for instant confirmation.
            </p>
          </div>

          <div className={styles.rightCol}>
            <a
              href={`https://wa.me/${SALON_INFO.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}?text=Hello%20Three%20Brothers%20Salon!%20I%20would%20like%20to%20book%20a%20chair.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageSquare size={20} />
              <span>Message {SALON_INFO.whatsapp}</span>
            </a>
            <span className={styles.phoneHint}>Available 8:00 AM – 10:00 PM Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
}
