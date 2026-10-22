import React from "react";
import { MapPin, Navigation, Car, Bus } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./LocationMap.module.css";

export default function LocationMap() {
  return (
    <section id="map" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Map Frame */}
          <div className={styles.mapFrameWrap}>
            <iframe
              title="Three Brothers Salon Cuts Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.793774883446!2d79.8512198758832!3d6.909282318485293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259695d73e047%3A0xf673ebf6e021a815!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapNotice}>
              304 High Level Road &bull; Gamsaba Junction, Nugegoda 10250
            </div>
          </div>

          {/* Directions & Parking Details */}
          <div className={styles.directionsContent}>
            <span className={styles.subheading}>Find Your Way</span>
            <h2 className={styles.title}>Salon Location &amp; Parking</h2>
            <p className={styles.lead}>
              Located prominently on High Level Road at Gamsaba Junction, Nugegoda
              with convenient access from all Colombo suburbs.
            </p>

            <div className={styles.landmarkList}>
              <div className={styles.landmarkItem}>
                <MapPin size={18} className={styles.landmarkIcon} />
                <div>
                  <strong>Key Landmarks</strong>
                  <span>Gamsaba Junction, High Level Road, Nugegoda 10250.</span>
                </div>
              </div>

              <div className={styles.landmarkItem}>
                <Car size={18} className={styles.landmarkIcon} />
                <div>
                  <strong>Guest Parking</strong>
                  <span>Dedicated, secure front bay parking reserved for Three Brothers clients.</span>
                </div>
              </div>

              <div className={styles.landmarkItem}>
                <Bus size={18} className={styles.landmarkIcon} />
                <div>
                  <strong>Public Transit</strong>
                  <span>Gamsaba Junction Bus Stop and Nugegoda Railway Station nearby.</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=304+High+Level+Road+Gamsaba+Junction+Nugegoda+10250+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.getDirectionsBtn}
            >
              <Navigation size={16} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
