"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Haircuts & Styling", href: "/services#what-we-offer" },
    { label: "Beard & Shaving", href: "/services#what-we-offer" },
    { label: "Hair Colour", href: "/services#what-we-offer" },
    { label: "Hair & Scalp Care", href: "/services#what-we-offer" },
    { label: "Kids & Teens Cuts", href: "/services#what-we-offer" },
    { label: "Special Occasion Grooming", href: "/services#what-we-offer" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Column 1: Logo & Branding */}
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logoWrap}>
              <Image
                src="/images/logo.jpg"
                alt="Three Brothers Salon Cuts Logo"
                width={64}
                height={64}
                className={styles.logoImg}
              />
            </Link>
            <h4 className={styles.brandName}>THREE BROTHERS</h4>
            <p className={styles.brandTagline}>Good Hair. Good Confidence.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.linkItem} ${
                        isActive ? styles.linkItemActive : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={styles.linkItem}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>No. 123, High Level Road, Maharagama, Colombo, Sri Lanka</span>
              </div>

              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </div>

              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:info@threebrothers.lk">info@threebrothers.lk</a>
              </div>

              <div className={styles.contactItem}>
                <MessageSquare size={16} className={styles.contactIcon} />
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +94 77 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h4 className={styles.colTitle}>Follow Us</h4>
            <div className={styles.followList}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877f2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
            <p className={styles.followText}>
              Stay connected for our latest works, offers and updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>&copy; 2024 Three Brothers Salon Cuts. All rights reserved.</div>
          <div>Designed with style for sharper men.</div>
        </div>
      </div>
    </footer>
  );
}
