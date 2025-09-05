
import React, { useState, useEffect } from 'react';
import styles from './styles/carousel.module.css';

const images = [
  '/carousel2.jpg',
  '/carousel1.jpg',
  
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={idx === current ? styles.carouselImg : styles.carouselImgHidden}
        />
      ))}
      <div className={styles.carouselDots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? `${styles.carouselDot} ${styles.carouselDotActive}` : styles.carouselDot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
