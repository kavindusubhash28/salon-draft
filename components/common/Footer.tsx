import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Column 1: Round Logo */}
          <div className={styles.logoCol}>
            <div className={styles.logoWrap}>
              <Image
                src="/images/logo.jpg"
                alt="Three Brothers Salon Cuts Logo"
                width={80}
                height={80}
                className={styles.logoImg}
              />
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Explore</h4>
            <ul className={styles.linkList}>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.linkItem}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <div>
                  <span className={styles.contactPrimary}>Colombo, Sri Lanka</span>
                  <span className={styles.contactSecondary}>(Your Address Here)</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <div>
                  <a href="tel:+94XXXXXXXXX" className={styles.contactPrimary}>
                    +94 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <div>
                  <a
                    href="mailto:info@threebrothers.lk"
                    className={styles.contactPrimary}
                  >
                    info@threebrothers.lk
                  </a>
                  <span className={styles.contactSecondary}>(Your Email Here)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className={styles.followCol}>
            <h4 className={styles.colTitle}>Follow Us</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebookLink}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.fbIcon}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </a>
            <p className={styles.followText}>
              Stay connected for our latest styles, updates and more.
            </p>
          </div>
        </div>

        {/* Divider & Bottom copyright bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; 2026 Three Brothers Salon Cuts. All rights reserved.
          </p>
          <p className={styles.motto}>Designed with style. For a sharper you.</p>
        </div>
      </div>
    </footer>
  );
}
