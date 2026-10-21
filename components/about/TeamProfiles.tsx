import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/salon-data";
import styles from "./TeamProfiles.module.css";

export default function TeamProfiles() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>The Craftsmen</span>
          <h2 className={styles.title}>Meet The Three Brothers</h2>
          <p className={styles.description}>
            Three complementary masteries, one unified dedication to excellence.
            Reserve your session with your preferred craftsman.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className={styles.memberImg}
                />
                <span className={styles.experienceBadge}>{member.experience}</span>
              </div>

              <div className={styles.infoWrap}>
                <div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>

                  <div className={styles.specialtyBox}>
                    <span className={styles.specialtyLabel}>Discipline &amp; Mastery</span>
                    <span className={styles.specialtyText}>{member.specialty}</span>
                  </div>

                  <p className={styles.memberBio}>{member.bio}</p>
                  <p className={styles.memberQuote}>&ldquo;{member.quote}&rdquo;</p>
                </div>

                <Link
                  href={`/booking?stylist=${encodeURIComponent(member.name)}`}
                  className={styles.bookBtn}
                >
                  <Calendar size={14} />
                  <span>Request {member.name.split(" ")[0]}&apos;s Chair</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
