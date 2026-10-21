"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar } from "lucide-react";
import { GalleryItem } from "@/lib/salon-data";
import styles from "./StyleDetailsModal.module.css";

interface Props {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function StyleDetailsModal({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        <div className={styles.modalContent}>
          <div className={styles.imageSide}>
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={700}
              className={styles.modalImg}
            />
          </div>

          <div className={styles.detailsSide}>
            <div>
              <span className={styles.categoryTag}>
                {item.gender === "male" ? "Gentlemen Atelier" : "Ladies Studio"} &bull; {item.category}
              </span>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.description}</p>

              <div className={styles.specsList}>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Craftsman</span>
                  <span className={styles.specVal}>{item.stylist}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Technique</span>
                  <span className={styles.specVal}>{item.technique}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Time Required</span>
                  <span className={styles.specVal}>{item.timeTaken}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Hair Texture</span>
                  <span className={styles.specVal}>{item.hairType}</span>
                </div>
              </div>
            </div>

            <Link
              href={`/booking?style=${encodeURIComponent(item.title)}&stylist=${encodeURIComponent(
                item.stylist
              )}`}
              className={styles.bookBtn}
              onClick={onClose}
            >
              <Calendar size={16} />
              <span>Book This Cut with {item.stylist.split(" ")[0]}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
