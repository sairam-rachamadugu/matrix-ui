import React from 'react';
import styles from './styles/productiondashboard.module.css';
import { FaCubes, FaTruck, FaBoxes, FaLeaf } from 'react-icons/fa';

const stats = [
  { label: 'Bricks Produced Today', value: 12000, icon: <FaCubes color="#3182ce" /> },
  { label: 'Orders Dispatched', value: 8, icon: <FaTruck color="#38a169" /> },
  { label: 'Stock in Inventory', value: 54000, icon: <FaBoxes color="#d69e2e" /> },
  { label: 'CO₂ Saved (kg)', value: 3200, icon: <FaLeaf color="#38a169" /> },
];

const ProductionDashboard: React.FC = () => (
  <section className={styles.dashboardSection}>
    <h2 className={styles.dashboardTitle}>Live Production Dashboard</h2>
    <div className={styles.statsGrid}>
      {stats.map((s) => (
        <div className={styles.statCard} key={s.label}>
          <div className={styles.statIcon}>{s.icon}</div>
          <div className={styles.statValue}>{s.value.toLocaleString()}</div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductionDashboard;
