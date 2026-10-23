"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { WorkItem } from "@/data/workPortfolio";
import styles from "./WorkSection.module.css";

interface WorkSectionProps {
  sectionNumber: string;
  sectionName: string;
  sectionSuffix?: string;
  theme: "light" | "dark";
  categories: readonly string[];
  items: WorkItem[];
}

export default function WorkSection({
  sectionNumber,
  sectionName,
  sectionSuffix = "WORK",
  theme,
  categories,
  items,
}: WorkSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Filter items by category
  const filteredItems =
    selectedCategory === "ALL"
      ? items
      : items.filter((item) =>
          item.categories.includes(selectedCategory.toUpperCase())
        );

  // Group items by column (1 through 5)
  const columns = [1, 2, 3, 4, 5] as const;

  return (
    <section
      className={`${styles.section} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
      id={sectionName.toLowerCase().replace(/[^a-z0-9]/g, "")}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow}>
          {/* Left Title with Number */}
          <div className={styles.titleWrap}>
            <div className={styles.numberBlock}>
              <span className={styles.sectionNumber}>{sectionNumber}</span>
              <span className={styles.numberLine} />
            </div>
            <h2 className={styles.heading}>
              <span className={styles.headingMain}>{sectionName} </span>
              <span className={styles.headingHighlight}>{sectionSuffix}</span>
            </h2>
          </div>

          {/* Right Filter Category Pills */}
          <div className={styles.filterPills} role="tablist">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.activeFilter : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid: 5-column layout for ALL, consecutive packed grid for filtered */}
        {selectedCategory === "ALL" ? (
          <div className={styles.columnsGrid}>
            {columns.map((colNum) => {
              const colItems = items.filter((item) => item.column === colNum);

              return (
                <div key={colNum} className={styles.column}>
                  {colItems.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.box} ${
                        item.variant === "tall"
                          ? styles.boxTall
                          : item.variant === "short"
                          ? styles.boxShort
                          : styles.boxStandard
                      }`}
                    >
                      {item.image ? (
                        <div className={styles.imageWrap}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            className={styles.realImg}
                          />
                        </div>
                      ) : (
                        <div className={styles.emptyBox}>
                          <div className={styles.emptyCenter}>
                            <Plus size={20} strokeWidth={1.8} className={styles.plusIcon} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.filteredGrid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`${styles.box} ${styles.boxStandard}`}
              >
                {item.image ? (
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className={styles.realImg}
                    />
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <div className={styles.emptyCenter}>
                      <Plus size={20} strokeWidth={1.8} className={styles.plusIcon} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
