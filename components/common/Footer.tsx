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
          {/* Column 1: Logo */}
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logoWrap}>
              <Image
                src="/images/logo.jpg"
                alt="Three Brothers Salon Cuts Logo"
                width={80}
                height={80}
                className={styles.logoImg}
              />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
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
          <div className={styles.linksCol}>
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
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Colombo, Sri Lanka</span>
              </div>

              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </div>

              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:threebrothers.saloncuts@gmail.com">
                  threebrothers.saloncuts@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <MessageSquare size={16} className={styles.contactIcon} />
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className={styles.contactItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Column 5 / Brand Ornament */}
          <div className={styles.ornamentCol}>
            <div className={styles.ornamentLine} />
            <h5 className={styles.brandTitle}>THREE BROTHERS SALON CUTS</h5>
            <p className={styles.brandTagline}>
              Expert Grooming. Modern Style.
              <br />A Better You.
            </p>
            <p className={styles.copyrightText}>
              &copy; 2024 Three Brothers Salon Cuts.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
