"use client";

import React from "react";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import styles from "./ContactInfoCards.module.css";

const CONTACT_CHANNELS = [
  {
    title: "Call Us",
    icon: Phone,
    description: "Speak to our team for appointments, services or general enquiries.",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    description: "Quick responses for bookings and questions.",
    value: "+94 77 123 4567",
    href: "https://wa.me/94771234567",
  },
  {
    title: "Email Us",
    icon: Mail,
    description: "Drop us a message anytime. We'll get back to you soon.",
    value: "info@threebrothers.lk",
    href: "mailto:info@threebrothers.lk",
  },
];

const OPENING_HOURS = [
  { day: "Monday", hours: "10:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 8:00 PM" },
  { day: "Friday", hours: "10:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 6:00 PM" },
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
