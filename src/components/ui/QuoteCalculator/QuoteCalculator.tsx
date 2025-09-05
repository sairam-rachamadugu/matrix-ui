import React, { useState } from 'react';
import styles from './styles/quotecalculator.module.css';
import { FaCalculator, FaRupeeSign } from 'react-icons/fa';

const pricePerBrick = 6.5; // Example price per brick in INR

const QuoteCalculator: React.FC = () => {
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const qty = parseInt(quantity, 10);
    if (!qty || qty <= 0) {
      setTotal(null);
      return;
    }
    setTotal(qty * pricePerBrick);
  };

  return (
    <section className={styles.calcSection}>
      <h2 className={styles.calcTitle}><FaCalculator style={{marginRight:8}}/>Quick Quote Calculator</h2>
      <form className={styles.calcForm} onSubmit={handleCalculate}>
        <input
          type="text"
          placeholder="Enter quantity (bricks)"
          value={quantity}
          onChange={handleChange}
          className={styles.calcInput}
        />
        <button type="submit" className={styles.calcButton}>Calculate</button>
      </form>
      {total !== null && (
        <div className={styles.calcResult}>
          <FaRupeeSign style={{marginRight:4}}/>{total.toLocaleString()} <span className={styles.calcResultLabel}>INR</span>
        </div>
      )}
    </section>
  );
};

export default QuoteCalculator;
