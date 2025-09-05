
import React from 'react';
import styles from './styles/footer-advanced.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.footerIcon} aria-label="Facebook"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.footerIcon} aria-label="Twitter"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerIcon} aria-label="Instagram"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.footerIcon} aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} <span style={{ fontWeight: 600, letterSpacing: 1 }}>Fly Ash Brick Manufacturing Plant</span>. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
