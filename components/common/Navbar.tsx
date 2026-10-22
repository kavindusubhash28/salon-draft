"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.navbarHeader}>
      <div className={styles.container}>
        {/* Left: Circular Brand Logo */}
        <Link
          href="/"
          className={styles.brandLink}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Three Brothers Salon Cuts Home"
        >
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.jpg"
              alt="Three Brothers Salon Cuts Logo"
              width={54}
              height={54}
              className={styles.logoImg}
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
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

        {/* Right: Book Appointment Button & Mobile Toggle */}
        <div className={styles.rightActions}>
          <Link href="/booking" className={styles.bookBtn}>
            <Calendar size={14} className={styles.btnCalendar} />
            <span>Book Appointment</span>
            <ArrowRight size={13} className={styles.btnArrow} />
          </Link>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
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
              className={styles.mobileBookBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
