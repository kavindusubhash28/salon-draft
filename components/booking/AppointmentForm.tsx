"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Scissors,
  Sparkles,
  Calendar as CalendarIcon,
  CheckCircle,
  MessageSquare,
  Clock,
  User,
  Phone,
  Mail,
} from "lucide-react";
import {
  MALE_SERVICES,
  FEMALE_SERVICES,
  SERVICE_PACKAGES,
  TEAM_MEMBERS,
  SALON_INFO,
} from "@/lib/salon-data";
import styles from "./AppointmentForm.module.css";

export default function AppointmentForm() {
  const searchParams = useSearchParams();

  const [gender, setGender] = useState<"male" | "female">("male");
  const [stylist, setStylist] = useState<string>("any");
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("10:30 AM");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync with URL query parameters if present (e.g., from service card "Book This Service")
  useEffect(() => {
    const urlGender = searchParams.get("gender");
    const urlService = searchParams.get("service");
    const urlPackage = searchParams.get("package");
    const urlStylist = searchParams.get("stylist");

    if (urlGender === "female" || urlGender === "male") {
      setGender(urlGender);
    }
    if (urlService) {
      setService(urlService);
    } else if (urlPackage) {
      setService(urlPackage);
    }
    if (urlStylist) {
      setStylist(urlStylist);
    }
  }, [searchParams]);

  // When gender changes, reset service to first in list if previous doesn't match
  const availableServices = gender === "male" ? MALE_SERVICES : FEMALE_SERVICES;
  const availablePackages = SERVICE_PACKAGES.filter(
    (p) => p.targetGender === gender || p.targetGender === "unisex"
  );

  const timeSlots = [
    "09:30 AM",
    "10:30 AM",
    "11:45 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:15 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Reservation Request - Three Brothers Salon Cuts*%0A
*Studio:* ${gender === "male" ? "Gentlemen's Atelier" : "Ladies' Studio"}%0A
*Service/Package:* ${service || "General Consultation"}%0A
*Preferred Stylist:* ${stylist === "any" ? "Any Available Brother" : stylist}%0A
*Date:* ${date || "Earliest Available"}%0A
*Time Slot:* ${timeSlot}%0A
*Client Name:* ${fullName}%0A
*Phone:* ${phone}%0A
${notes ? `*Notes:* ${notes}%0A` : ""}`;
    return `https://wa.me/${SALON_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${text}`;
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.successBox}>
            <CheckCircle size={56} className={styles.successIcon} />
            <h2 className={styles.successTitle}>Reservation Request Received</h2>
            <p className={styles.successDesc}>
              Thank you, {fullName || "valued client"}. We have provisionally logged your
              booking in our atelier schedule. To receive instant live confirmation
              or send your reference photo, tap the WhatsApp button below.
            </p>

            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Studio Zone</span>
                <span className={styles.summaryValue}>
                  {gender === "male" ? "Gentlemen's Atelier" : "Ladies' Studio"}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Service</span>
                <span className={styles.summaryValue}>{service || "Selected Service"}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Master Craftsman</span>
                <span className={styles.summaryValue}>
                  {stylist === "any" ? "First Available Brother" : stylist}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Date &amp; Time</span>
                <span className={styles.summaryValue}>
                  {date || "Today / ASAP"} at {timeSlot}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Client Phone</span>
                <span className={styles.summaryValue}>{phone}</span>
              </div>
            </div>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappConfirmBtn}
            >
              <MessageSquare size={18} />
              <span>Confirm &amp; Chat via WhatsApp</span>
            </a>

            <button
              className={styles.resetBtn}
              onClick={() => {
                setSubmitted(false);
                setFullName("");
                setPhone("");
                setEmail("");
                setNotes("");
              }}
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subheading}>Online Chair Booking</span>
          <h1 className={styles.title}>Reserve Your Private Chair</h1>
          <p className={styles.description}>
            Dedicated male and female studios. Fast slot reservation with WhatsApp confirmation.
          </p>
        </div>

        <div className={styles.formBox}>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Gender / Studio */}
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>1</span>
              <span>Select Your Studio (Separated Male &amp; Female Spaces)</span>
            </div>

            <div className={styles.genderOptions}>
              <div
                className={`${styles.genderCard} ${
                  gender === "male" ? styles.genderCardActive : ""
                }`}
                onClick={() => setGender("male")}
              >
                <Scissors size={24} className={styles.genderIcon} />
                <div className={styles.genderText}>
                  <strong>Gentlemen&apos;s Atelier</strong>
                  <span>Fades, Beard Sculpting, Hot Shaves &amp; Treatments</span>
                </div>
              </div>

              <div
                className={`${styles.genderCard} ${
                  gender === "female" ? styles.genderCardActive : ""
                }`}
                onClick={() => setGender("female")}
              >
                <Sparkles size={24} className={styles.genderIcon} />
                <div className={styles.genderText}>
                  <strong>Ladies&apos; Studio</strong>
                  <span>Couture Cuts, Balayage, Keratin &amp; Restorative Care</span>
                </div>
              </div>
            </div>

            {/* Step 2: Service & Stylist Selection */}
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>2</span>
              <span>Service &amp; Craftsman Choice</span>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Choose Service / Package *</label>
                <select
                  required
                  className={styles.select}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">-- Select Service or Package --</option>
                  <optgroup label="Flagship Packages">
                    {availablePackages.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.price})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Individual Services">
                    {availableServices.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.price} &bull; {s.duration})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Preferred Master Brother</label>
                <select
                  className={styles.select}
                  value={stylist}
                  onChange={(e) => setStylist(e.target.value)}
                >
                  <option value="any">First Available Master Brother</option>
                  {TEAM_MEMBERS.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name} ({m.specialty.split(",")[0]})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>3</span>
              <span>Select Date &amp; Preferred Time</span>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Preferred Date *</label>
                <input
                  type="date"
                  required
                  className={styles.input}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Selected Time Slot</label>
                <input
                  type="text"
                  readOnly
                  className={styles.input}
                  value={timeSlot}
                  style={{ background: "#18181b", color: "#ffffff", fontWeight: 600 }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <span className={styles.label}>Available Daily Chair Slots:</span>
            </div>
            <div className={styles.timeSlotsRow}>
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  className={`${styles.timeSlotBtn} ${
                    timeSlot === slot ? styles.timeSlotBtnActive : ""
                  }`}
                  onClick={() => setTimeSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* Step 4: Client Info */}
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>4</span>
              <span>Guest Details &amp; Contact</span>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Roshan Perera"
                  className={styles.input}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +94 77 123 4567"
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.formGroupFull}>
                <label className={styles.label}>Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. roshan@example.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.formGroupFull}>
                <label className={styles.label}>
                  Special Notes, Hair History or Reference Link
                </label>
                <textarea
                  placeholder="Mention previous treatments, allergies, or questions..."
                  className={styles.textarea}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <CalendarIcon size={18} />
              <span>Confirm Appointment Request</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
