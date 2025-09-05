import React from 'react';
import styles from './styles/processflow.module.css';
import { FaWarehouse, FaIndustry, FaCubes, FaTruck } from 'react-icons/fa';

const steps = [
  { label: 'Raw Material Storage', icon: <FaWarehouse color="#3182ce" /> },
  { label: 'Mixing & Molding', icon: <FaIndustry color="#38a169" /> },
  { label: 'Curing & Drying', icon: <FaCubes color="#d69e2e" /> },
  { label: 'Dispatch', icon: <FaTruck color="#3182ce" /> },
];

const ProcessFlow: React.FC = () => (
  <section className={styles.flowSection}>
    <h2 className={styles.flowTitle}>Plant Process Flow</h2>
    <div className={styles.flowWrap}>
      {steps.map((step, idx) => (
        <div className={styles.flowStep} key={step.label}>
          <div className={styles.flowIcon}>{step.icon}</div>
          <div className={styles.flowLabel}>{step.label}</div>
          {idx < steps.length - 1 && <div className={styles.flowArrow}>&rarr;</div>}
        </div>
      ))}
    </div>
  </section>
);

export default ProcessFlow;
