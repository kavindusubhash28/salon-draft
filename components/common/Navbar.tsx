"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Scissors, Clock, Phone, MapPin, Menu, X, Calendar } from "lucide-react";
import { SALON_INFO } from "@/lib/salon-data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <MapPin size={13} />
              <span>Colombo 03 (Near Liberty Arcade)</span>
            </span>
            <span className={styles.topBarItem}>
              <Clock size={13} />
              <span>Mon – Sat: 9:00 AM – 8:30 PM | Sun: 9:30 AM – 6:30 PM</span>
            </span>
          </div>
          <div className={styles.topBarRight}>
            <a href={`tel:${SALON_INFO.phone}`} className={styles.topBarItem}>
              <Phone size={13} />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.container}>
        <Link href="/" className={styles.brand} onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/images/logo.jpg"
            alt="Three Brothers Salon Cuts Logo"
            width={52}
            height={52}
            className={styles.logoImage}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>Three Brothers</span>
            <span className={styles.brandSubtitle}>Salon Cuts &bull; Heritage</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header CTA Button & Mobile Toggle */}
        <div className={styles.headerActions}>
          <Link href="/booking" className={styles.bookButton}>
            <Calendar size={14} />
            <span>Book Chair</span>
          </Link>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive ? styles.mobileNavLinkActive : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className={styles.bookButton}
            style={{ textAlign: "center", justifyContent: "center", marginTop: "0.5rem" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar size={15} />
            <span>Book Appointment Online</span>
          </Link>
        </div>
      )}
    </header>
  );
}
