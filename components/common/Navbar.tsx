"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection: collapse nav bar into hamburger when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run on initial mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`${styles.navbarHeader} ${
        isScrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={styles.container}>
        {/* Left: Prominent Big Brand Logo */}
        <Link
          href="/"
          className={styles.brandLink}
          onClick={() => setDrawerOpen(false)}
          aria-label="Three Brothers Salon Cuts Home"
        >
          <div
            className={`${styles.logoWrapper} ${
              isScrolled ? styles.logoWrapperScrolled : ""
            }`}
          >
            <Image
              src="/images/logo.jpg"
              alt="Three Brothers Salon Cuts Emblem Logo"
              width={100}
              height={100}
              className={styles.logoImg}
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Visible when NOT scrolled) */}
        {!isScrolled && (
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className={styles.navItem}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.navLinkActive : ""
                      }`}
                    >
                      {item.label}
                      {isActive && <span className={styles.activeIndicator} />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {/* Right Actions */}
        <div className={styles.rightActions}>
          {/* When scrolled: Show luxury Hamburger Icon Button on all viewports */}
          {isScrolled ? (
            <>
              <Link href="/contact" className={styles.bookBtn}>
                <Calendar size={14} />
                <span>Book Appointment</span>
              </Link>
              <button
                type="button"
                className={styles.hamburgerBtn}
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={20} className={styles.hamburgerIcon} />
                <span>Menu</span>
              </button>
            </>
          ) : (
            <>
              {/* When at top: Show regular Book button and mobile toggle */}
              <Link href="/contact" className={styles.bookBtn}>
                <Calendar size={14} />
                <span>Book Appointment</span>
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                className={styles.mobileToggle}
                onClick={() => setDrawerOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Luxury Slide-Out Navigation Drawer */}
      {drawerOpen && (
        <div
          className={styles.drawerOverlay}
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className={styles.drawerPanel}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            {/* Drawer Header */}
            <div className={styles.drawerHeader}>
              <Link
                href="/"
                className={styles.drawerBrand}
                onClick={() => setDrawerOpen(false)}
              >
                <div className={styles.drawerLogoWrap}>
                  <Image
                    src="/images/logo.jpg"
                    alt="Three Brothers Salon Cuts Logo"
                    width={48}
                    height={48}
                    className={styles.logoImg}
                  />
                </div>
                <span className={styles.drawerBrandTitle}>
                  THREE BROTHERS
                </span>
              </Link>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className={styles.drawerNavList}>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.drawerNavLink} ${
                        isActive ? styles.drawerNavLinkActive : ""
                      }`}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className={styles.drawerIndex}>
                        {`0${idx + 1}`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quick Contact & Book Action */}
            <div className={styles.drawerFooter}>
              <div className={styles.drawerInfoRow}>
                <strong>Location:</strong>
                304 High Level Road, Gamsaba Junction, Nugegoda
              </div>

              <div className={styles.drawerInfoRow}>
                <strong>Phone & WhatsApp:</strong>
                +94 117 210 081 / +94 78 972 7272
              </div>

              <div className={styles.drawerSocials}>
                <a
                  href="https://www.facebook.com/ThreeBrothersSalonCuts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerSocialLink}
                  aria-label="Follow us on Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877f2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/threebrotherssaloncuts?srtk=azBxZjZlMWlxZDV1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerSocialLink}
                  aria-label="Follow us on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>

              <Link
                href="/contact"
                className={styles.drawerBookBtn}
                onClick={() => setDrawerOpen(false)}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
