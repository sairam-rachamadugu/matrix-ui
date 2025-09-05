
import React from 'react';
import styles from './styles/mapsection-advanced.module.css';

const MapSection: React.FC = () => (
  <section className={styles.mapSection}>
    <h2 className={styles.mapTitle}>Our Plant Location</h2>
    <div className={styles.mapFrameWrap}>
      <iframe
        title="Plant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406073964624!2d78.4866713148776!3d17.3850440880707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977b3e2b7b2b%3A0x7d1b1b1b1b1b1b1b!2sCharminar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1692873600000!5m2!1sen!2sin"
        width="100%"
        height="420"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);

export default MapSection;
