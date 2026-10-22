import React from "react";
import Image from "next/image";
import {
  Scissors,
  Sparkles,
  Paintbrush,
  Droplet,
  User,
  Crown,
} from "lucide-react";
import styles from "./ServicesList.module.css";

export default function ServicesList() {
  const serviceCards = [
    {
      id: "haircuts",
      title: "Haircuts & Styling",
      desc: "Classic cuts, modern fades, trims, and styling tailored to each client.",
      image: "/images/service_haircut.jpg",
      icon: <Scissors size={18} strokeWidth={1.8} />,
    },
    {
      id: "shave",
      title: "Beard & Shaving",
      desc: "Beard trims, line-ups, hot towel shaves, and detailed grooming.",
      image: "/images/service_shave.jpg",
      icon: <Sparkles size={18} strokeWidth={1.8} />,
    },
    {
      id: "colour",
      title: "Hair Colour",
      desc: "Colouring, toning, grey blending, and refresh services.",
      image: "/images/service_colour.jpg",
      icon: <Paintbrush size={18} strokeWidth={1.8} />,
    },
    {
      id: "scalp",
      title: "Hair & Scalp Care",
      desc: "Scalp treatments, washes, conditioning, and hair nourishment.",
      image: "/images/service_scalp.jpg",
      icon: <Droplet size={18} strokeWidth={1.8} />,
    },
    {
      id: "kids",
      title: "Kids & Teens Cuts",
      desc: "Stylish, age-appropriate cuts for younger clients.",
      image: "/images/service_kids.jpg",
      icon: <User size={18} strokeWidth={1.8} />,
    },
    {
      id: "occasion",
      title: "Special Occasion Grooming",
      desc: "Polished looks for weddings, events, and photoshoots.",
      image: "/images/service_occasion.jpg",
      icon: <Crown size={18} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className={styles.section} id="what-we-offer">
      <div className={styles.container}>
        {/* Center Header */}
        <div className={styles.header}>
          <div className={styles.overlineWrap}>
            <span className={styles.line} />
            <span className={styles.overline}>OUR SERVICES</span>
            <span className={styles.line} />
          </div>

          <h2 className={styles.title}>What We Offer</h2>

          <p className={styles.description}>
            A complete range of grooming services for modern gentlemen. Quality
            care, expert techniques and a premium salon experience — tailored to
            your unique style.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className={styles.cardsGrid}>
          {serviceCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.cardImg}
                />
                <div className={styles.badgeCircle}>{card.icon}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
