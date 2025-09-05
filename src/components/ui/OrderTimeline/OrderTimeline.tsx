import React from 'react';
import styles from './styles/ordertimeline.module.css';
import { FaClipboardList, FaTruckLoading, FaTruckMoving, FaCheckCircle } from 'react-icons/fa';

const timeline = [
  { label: 'Order Placed', icon: <FaClipboardList color="#3182ce" />, status: 'done' },
  { label: 'Processing', icon: <FaTruckLoading color="#38a169" />, status: 'done' },
  { label: 'Dispatched', icon: <FaTruckMoving color="#d69e2e" />, status: 'active' },
  { label: 'Delivered', icon: <FaCheckCircle color="#38a169" />, status: 'pending' },
];

const OrderTimeline: React.FC = () => (
  <section className={styles.timelineSection}>
    <h2 className={styles.timelineTitle}>Order Tracking Timeline</h2>
    <div className={styles.timelineWrap}>
      {timeline.map((step, idx) => (
        <div className={styles.timelineStep} key={step.label}>
          <div className={
            step.status === 'done' ? styles.timelineIconDone :
            step.status === 'active' ? styles.timelineIconActive :
            styles.timelineIconPending
          }>
            {step.icon}
          </div>
          <div className={styles.timelineLabel}>{step.label}</div>
          {idx < timeline.length - 1 && <div className={styles.timelineConnector} />}
        </div>
      ))}
    </div>
  </section>
);

export default OrderTimeline;
