import React from "react";
import { Phone, MapPin, Mail, MessageSquare } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./ContactDetails.module.css";

export default function ContactDetails() {
  const cards = [
    {
      icon: <Phone size={24} />,
      title: "Direct Phone Calls",
      text: "Speak with our receptionist for instant chair availability and group inquiries.",
      actionLabel: SALON_INFO.phone,
      actionHref: `tel:${SALON_INFO.phone}`,
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Official WhatsApp",
      text: "Send hair inspiration photos, request custom quotes, or book directly via chat.",
      actionLabel: "Chat on WhatsApp",
      actionHref: `https://wa.me/${SALON_INFO.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit The Studio",
      text: `${SALON_INFO.address}. ${SALON_INFO.landmark}.`,
      actionLabel: "View Map & Parking",
      actionHref: "#map",
    },
    {
      icon: <Mail size={24} />,
      title: "Email & Press",
      text: "For wedding party bookings, corporate styling packages, and general inquiries.",
      actionLabel: SALON_INFO.email,
      actionHref: `mailto:${SALON_INFO.email}`,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Get in Touch</span>
          <h1 className={styles.title}>Contact The Atelier</h1>
          <p className={styles.description}>
            We are situated in the heart of Colombo 03 on Galle Road. Whether you
            have a question or wish to reserve your favorite craftsman, connect with us.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardText}>{c.text}</p>
              <a href={c.actionHref} className={styles.cardAction}>
                {c.actionLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
