
import React, { useState } from 'react';
import styles from './styles/customertabs-advanced.module.css';

const customers = [
  { name: 'Homeowners', content: 'Guidance and product info for your home projects.' },
  { name: 'Dealers', content: 'Exclusive dealer programs and support for your business.' },
  { name: 'Builders', content: 'Special pricing and bulk orders for construction companies.' },
  { name: 'Architects', content: 'Technical specs and design support for architects and planners.' },  
];

const CustomerTabs: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.customerSection}>
      <h2 className={styles.customerTitle}>For Our Customers</h2>
      <div className={styles.customerTabList}>
        {customers.map((c, idx) => (
          <button
            key={c.name}
            onClick={() => setActive(idx)}
            className={active === idx ? `${styles.customerTab} ${styles.customerTabActive}` : styles.customerTab}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className={styles.customerContent}>
        {customers[active].content}
      </div>
      <div className={styles.orderRequest}>
        <input placeholder='Quantity' type='number' className={styles.inputBox}/>
        <input placeholder='Size' type='number' className={styles.inputBox}/>
        <input placeholder='Rate per unit' type='number' className={styles.inputBox}/>
        <button className={styles.orderButton}>Order Now</button>
      </div>
    </section>
  );
};

export default CustomerTabs;
