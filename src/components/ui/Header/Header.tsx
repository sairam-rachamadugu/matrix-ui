

import React, { useState } from 'react';
import styles from './styles/header-advanced.module.css';
import { FaHome, FaBoxOpen, FaInfoCircle, FaEnvelope, FaSignInAlt, FaLeaf, FaTruck, FaIndustry, FaCalculator } from 'react-icons/fa';

const menu = [
  { label: 'Home', href: '/', icon: <FaHome /> },
  {
    label: 'Features',
    icon: <FaBoxOpen />,
    dropdown: [
      { label: 'Dashboard', href: '/dashboard', icon: <FaBoxOpen /> },
      { label: 'Order Tracking', href: '/order-tracking', icon: <FaTruck /> },
      { label: 'Process Flow', href: '/process-flow', icon: <FaIndustry /> },
      { label: 'Quote Calculator', href: '/quote-calculator', icon: <FaCalculator /> },
    ]
  },
  { label: 'Products', icon: <FaBoxOpen />, dropdown: [
    { label: 'Fly Ash Bricks', href: '/products/flyash', icon: <FaLeaf /> },
    { label: 'Paver Blocks', href: '/products/pavers', icon: <FaBoxOpen /> },
    { label: 'AAC Blocks', href: '/products/aac', icon: <FaBoxOpen /> },
  ]},
  { label: 'About', href: '/about', icon: <FaInfoCircle /> },
  { label: 'Contact', href: '/#contact', icon: <FaEnvelope /> },
  { label: 'Login', href: '/login', icon: <FaSignInAlt /> },
];


interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [open, setOpen] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMenuClick = (idx: number) => {
    if (window.innerWidth <= 700) {
      setOpen(open === idx ? null : idx);
    }
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}><FaLeaf style={{ marginRight: 6 }} />Fly Ash Bricks</div>
        <button className={styles.hamburger} aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
        <ul className={`${styles.menu} ${mobileOpen ? styles.menuOpen : ''}`}>
          {menu.map((item, idx) => (
            <li
              key={item.label}
              className={styles.menuItem}
              onMouseEnter={() => window.innerWidth > 700 && setOpen(idx)}
              onMouseLeave={() => window.innerWidth > 700 && setOpen(null)}
              onClick={() => handleMenuClick(idx)}
            >
              {item.dropdown ? (
                <>
                  <span className={styles.menuLink} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {item.icon} {item.label} &#9662;
                  </span>
                  {open === idx && (
                    <ul className={styles.menuDropdown}>
                      {item.dropdown.map((d) => (
                        <li
                          key={d.label}
                          className={styles.menuDropdownItem}
                          onClick={() => { window.location.href = d.href; }}
                          onMouseDown={e => e.preventDefault()}
                          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                        >
                          {d.icon} {d.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.label === 'Login' ? (
                <button
                  type="button"
                  className={styles.menuLink}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
                  onClick={onLoginClick}
                >
                  {item.icon} {item.label}
                </button>
              ) : (
                <a href={item.href} className={styles.menuLink} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{item.icon} {item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
