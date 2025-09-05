import React from "react";
import styles from "./styles/ContactUs.module.css";

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUsRoot}>
       <div className={styles.planeAnimation}></div>
      <div className={styles.contactUsContainer}>
        {/* Left Section: Information */}
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactDesc}>
            Have questions or need assistance? We’re here to help. Fill out the form, and we’ll get back to you shortly.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 8l4.47 2.68a2 2 0 001.92 0L21 16M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8m-2 0l-7.89 5.26a2 2 0 01-2.22 0L3 8" />
                </svg>
              </div>
              <span className={styles.contactText}>support@example.com</span>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2m4 0h10M7 16h10m-8-6h8M4 6h16M6 18h12" />
                </svg>
              </div>
              <span className={styles.contactText}>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className={styles.contactFormSection}>
          <h3 className={styles.contactFormTitle}>Contact Us</h3>
          <form className={styles.contactForm}>
            {/* Name */}
            <div className={styles.formRow}>
              <div>
                <label htmlFor="first-name" className={styles.formLabel}>
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  className={styles.formInput}
                />
              </div>
              <div>
                <label htmlFor="last-name" className={styles.formLabel}>
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  className={styles.formInput}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={styles.formInput}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                className={styles.formTextarea}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={styles.formButton}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;