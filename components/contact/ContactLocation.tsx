"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Car, Train } from "lucide-react";
import styles from "./ContactLocation.module.css";

const LOCATION_FEATURES = [
  {
    icon: MapPin,
    text: "304 High Level Road, Gamsaba Junction, Nugegoda 10250, Sri Lanka",
  },
  {
    icon: Car,
    text: "Ample parking available near Gamsaba Junction",
  },
  {
    icon: Train,
    text: "Easily accessible by High Level Road buses and Nugegoda railway",
  },
];

export default function ContactLocation() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        {/* Left Column: Details & Directions */}
        <div className={styles.detailsCol}>
          <span className={styles.overline}>VISIT OUR SALON</span>
          <h2 className={styles.title}>Our Location</h2>
          <p className={styles.description}>
            Find us on High Level Road at Gamsaba Junction, Nugegoda. Conveniently
            located with easy access and dedicated parking, we welcome you to
            experience our full range of salon services in a modern, stylish
            setting. Open daily from 8:00 AM – 10:00 PM.
          </p>

          <ul className={styles.featuresList}>
            {LOCATION_FEATURES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className={styles.featureItem}>
                  <div className={styles.iconCircle}>
                    <Icon size={18} />
                  </div>
                  <p className={styles.featureText}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Stylized Interactive Map */}
        <div className={styles.mapWrapper}>
          <Image
            src="/images/contact_maharagama_map.jpg"
            alt="Location Map of Three Brothers Salon Cuts in Nugegoda Colombo"
            fill
            sizes="(max-width: 992px) 100vw, 55vw"
            className={styles.mapImg}
          />
          <a
            href="https://maps.google.com/?q=304+High+Level+Road+Gamsaba+Junction+Nugegoda+10250+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLinkOverlay}
            aria-label="Open Three Brothers Salon Cuts in Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
