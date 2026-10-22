"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./ContactBookingForm.module.css";

export default function ContactBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    branch: "Maharagama (Main Branch)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking-form" className={styles.bookingSection}>
      <div className={styles.bookingOverlay} />
      <div className={styles.container}>
        {/* Left Column: Heading, Info Box, and Cursive Flourish */}
        <div className={styles.infoCol}>
          <span className={styles.overline}>MAKE AN APPOINTMENT</span>
          <h2 className={styles.title}>Book Your Appointment</h2>
          <p className={styles.description}>
            Fill in the details below and we'll confirm your appointment via
            phone or WhatsApp. For urgent bookings, feel free to call us
            directly.
          </p>

          <div className={styles.confirmBox}>
            <div className={styles.confirmIconBox}>
              <Calendar size={22} />
            </div>
            <div>
              <h4 className={styles.confirmTitle}>Appointment Confirmation</h4>
              <p className={styles.confirmText}>
                We'll get in touch with you shortly to confirm your preferred
                date and time.
              </p>
            </div>
          </div>

          <div className={styles.cursiveFlourish} aria-hidden="true">
            Same
            <br />
            Great Cuts
            <br />
            See You Soon!
          </div>
        </div>

        {/* Right Column: Interactive Form Card */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successAlert}>
              <CheckCircle2
                size={36}
                color="#16a34a"
                style={{ margin: "0 auto 12px", display: "block" }}
              />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                Appointment Request Received!
              </h3>
              <p style={{ margin: "0 0 16px" }}>
                Thank you, <strong>{formData.fullName}</strong>. Our Maharagama
                team will reach out to <strong>{formData.phone}</strong> shortly to
                confirm your slot.
              </p>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={() => setSubmitted(false)}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              {/* Row 1: Full Name & Phone Number */}
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>
              </div>

              {/* Row 2: Preferred Date & Preferred Time */}
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="date" className={styles.label}>
                    Preferred Date<span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className={`${styles.inputField} ${styles.inputWithIcon}`}
                    />
                    <Calendar size={18} className={styles.fieldIcon} />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="time" className={styles.label}>
                    Preferred Time<span className={styles.requiredStar}>*</span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className={`${styles.selectField} ${styles.inputWithIcon}`}
                    >
                      <option value="">Select time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                    <Clock size={18} className={styles.fieldIcon} />
                  </div>
                </div>
              </div>

              {/* Row 3: Service & Branch */}
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Service<span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.selectField}
                  >
                    <option value="">Select a service</option>
                    <option value="Haircuts & Styling">Haircuts & Styling</option>
                    <option value="Beard & Shaving">Beard & Shaving</option>
                    <option value="Hair Colour">Hair Colour</option>
                    <option value="Hair & Scalp Care">Hair & Scalp Care</option>
                    <option value="Kids & Teens Cuts">Kids & Teens Cuts</option>
                    <option value="Special Occasion Grooming">
                      Special Occasion Grooming
                    </option>
                    <option value="Essential Refresh Package">
                      Essential Refresh Package (LKR 2,700)
                    </option>
                    <option value="Signature Grooming Package">
                      Signature Grooming Package (LKR 3,400)
                    </option>
                    <option value="Premium Transformation Package">
                      Premium Transformation (LKR 5,800)
                    </option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="branch" className={styles.label}>
                    Branch / Location<span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className={styles.selectField}
                  >
                    <option value="Maharagama (Main Branch)">
                      Maharagama (Main Branch)
                    </option>
                    <option value="Colombo 03 (Flagship)">
                      Colombo 03 (Flagship)
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Additional Message */}
              <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Any special requests or details..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textareaField}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                <Calendar size={18} />
                <span>Request Appointment</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
