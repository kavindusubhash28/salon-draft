import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <Image
                src="/images/logo.jpg"
                alt="Three Brothers Salon Cuts Logo"
                width={60}
                height={60}
                className={styles.footerLogo}
              />
              <div>
                <h3 className={styles.brandName}>Three Brothers</h3>
                <p className={styles.brandMotto}>{SALON_INFO.motto}</p>
              </div>
            </div>
            <p className={styles.brandBio}>
              Colombo&apos;s sanctuary for bespoke grooming and precision hair artistry.
              Three brothers dedicated to uncompromising scissor mechanics, razor discipline,
              and modern color chemistry.
            </p>
            <div className={styles.socialRow}>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/">Home Sanctuary</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/about">The Three Brothers Story</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Services &amp; Pricing</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/work">Lookbook &amp; Transformations</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">Location &amp; Hours</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/booking">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Peek */}
          <div>
            <h4 className={styles.colTitle}>Specialties</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/services?gender=male">Gentlemen Razor Skin Fades</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services?gender=male">Hot Eucalyptus Towel Shave</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services?gender=male">Architectural Beard Shaping</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services?gender=female">Dimensional Sun Balayage</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services?gender=female">Brazilian Keratin Smoothing</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services?package=sovereign">The Sovereign Ritual</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div>
            <h4 className={styles.colTitle}>Visit The Atelier</h4>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={18} className={styles.infoIcon} />
                <span>{SALON_INFO.address} ({SALON_INFO.landmark})</span>
              </div>
              <div className={styles.infoItem}>
                <Phone size={18} className={styles.infoIcon} />
                <span>{SALON_INFO.phone} / {SALON_INFO.altPhone}</span>
              </div>
              <div className={styles.infoItem}>
                <Mail size={18} className={styles.infoIcon} />
                <span>{SALON_INFO.email}</span>
              </div>
            </div>

            <div className={styles.hoursBlock}>
              <div className={styles.hoursTitle}>Regular Salon Hours</div>
              <p className={styles.hoursText}>
                Mon – Sat: 9:00 AM – 8:30 PM<br />
                Sunday: 9:30 AM – 6:30 PM<br />
                Walk-ins welcomed; reservations prioritized.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className={styles.bottomBar}>
          <div>
            &copy; {new Date().getFullYear()} Three Brothers Salon Cuts. All Rights Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <span>Crafted with Authentic Barber Heritage</span>
            <Link href="/booking">Online Reservations</Link>
            <a href={SALON_INFO.facebook} target="_blank" rel="noopener noreferrer">
              Official Facebook Page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
