"use client";

import React from "react";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import styles from "./ContactInfoCards.module.css";

const CONTACT_CHANNELS = [
  {
    title: "Call Us",
    icon: Phone,
    description: "Speak to our front desk for immediate inquiries and bookings.",
    value: "+94 117 210 081 / +94 78 972 7272",
    href: "tel:+94117210081",
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    description: "Instant response for appointments, price quotes and queries.",
    value: "+94 78 972 7272",
    href: "https://wa.me/94789727272",
  },
  {
    title: "Email Us",
    icon: Mail,
    description: "Drop us a message for group bookings or special requests.",
    value: "info@threebrothers.lk",
    href: "mailto:info@threebrothers.lk",
  },
];

const OPENING_HOURS = [
  { day: "Monday", hours: "8:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 10:00 PM" },
  { day: "Friday", hours: "8:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 10:00 PM" },
];

export default function ContactInfoCards() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.overline}>GET IN TOUCH</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>
            We'd love to hear from you. Reach out through any of the channels
            below or visit our salon for a premium grooming experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Left: 3 Channels Card */}
          <div className={styles.channelsCard}>
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className={styles.channelItem}>
                  <div className={styles.iconCircle}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.channelTitle}>{channel.title}</h3>
                  <p className={styles.channelDesc}>{channel.description}</p>
                  <a
                    href={channel.href}
                    className={styles.channelValue}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {channel.value}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right: Opening Hours Card */}
          <div className={styles.hoursCard}>
            <div className={styles.hoursHeader}>
              <Clock size={20} />
              <h3 className={styles.hoursTitle}>Opening Hours</h3>
            </div>
            <ul className={styles.scheduleList}>
              {OPENING_HOURS.map((item) => (
                <li key={item.day} className={styles.scheduleRow}>
                  <span className={styles.dayLabel}>{item.day}</span>
                  <span className={styles.timeLabel}>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
