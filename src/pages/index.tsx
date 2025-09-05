

import Header from 'components/ui/Header/Header';
import LoginPopup from '../components/ui/LoginPopup/LoginPopup';
import styles from '../styles/home-advanced.module.css';
import { FaLeaf, FaShieldAlt, FaRupeeSign } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Footer from 'components/ui/Footer/Footer';
// import ProductionDashboard from '../components/ui/ProductionDashboard/ProductionDashboard';
// import OrderTimeline from '../components/ui/OrderTimeline/OrderTimeline';
// import ProcessFlow from '../components/ui/ProcessFlow/ProcessFlow';
// import QuoteCalculator from '../components/ui/QuoteCalculator/QuoteCalculator';
const Carousel = dynamic(() => import('../components/ui/Carousel/Carousel'), { ssr: false });
const ContactUs = dynamic(() => import('../components/ui/ContactUs/ContactUs'), { ssr: false });
const MapSection = dynamic(() => import('../components/ui/MapSection/MapSection'), { ssr: false });
const CustomerTabs = dynamic(() => import('../components/ui/CustomerTabs/CustomerTabs'), { ssr: false });
//const LoginPage = dynamic(() => import('../components/ui/LoginPage'), { ssr: false });

import { useState } from 'react';

const Home: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  // For demonstration, show login page on /login hash
  if (typeof window !== 'undefined' && window.location.pathname === '/login') {
    return <div />;
  }
  return (
    <div className={styles.homeRoot}>
      <Header onLoginClick={() => setLoginOpen(true)} />
      <LoginPopup open={loginOpen} onClose={() => setLoginOpen(false)} />
        
      <div className={styles.homeMain}>
        {/* <ProductionDashboard /> */}
        {/* <OrderTimeline /> */}
        {/* <ProcessFlow /> */}
        {/* <QuoteCalculator /> */}
        {/* Hero Section with Animated Gradient and Overlapping Cards */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroOverlay} >
          {/* Hero Content */}
          {/* <div className={styles.heroContent}> */}
          {/* <div className={styles.heroContent} style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}> */}
            <div className={styles.heroContent}>
              <h3 className={styles.heroTitle}>
                <FaLeaf className={styles.featureIcon} />
                Welcome to the Future of Bricks
              </h3>
              <p className={styles.heroDesc}>
                Discover our advanced fly ash brick manufacturing plant, where innovation meets sustainability. Explore our products, technology, and commitment to eco-friendly construction.
              </p>
                  {/* Overlapping Feature Cards (Carts) */}
              <div className={styles.features}>
                <div className={styles.featureCard}>
                  <FaLeaf className={styles.featureIcon} />
                  <h2 className={styles.cardTitleBlue}>Eco-Friendly</h2>
                  {/* <p className={styles.cardDesc}>Our bricks are made using fly ash, reducing environmental impact and promoting sustainable construction.</p> */}
                </div>
                <div className={styles.featureCard}>
                  <FaShieldAlt className={styles.featureIcon} />
                  <h2 className={styles.cardTitleGreen}>High Strength</h2>
                  {/* <p className={styles.cardDesc}>Engineered for superior strength and durability, perfect for modern building requirements.</p> */}
                </div>
                <div className={styles.featureCard}>
                  <FaRupeeSign className={styles.featureIcon} />
                  <h2 className={styles.cardTitleGold}>Cost Effective</h2>
                  {/* <p className={styles.cardDesc}>Affordable solutions without compromising on quality, helping you build better for less.</p> */}
                </div>
              
            </div>
            </div>
            <div className={styles.carouselWrap}>
              <Carousel />
            </div>
          
          </div>
        </section>
        {/* Customer Tabs Section */}
        <CustomerTabs />
        {/* Map Section */}
        <MapSection />
        {/* Contact Section with Animation */}
        <div style={{ animation: 'fadeIn 1.2s 1.2s cubic-bezier(.4,2,.6,1) both' }}>
          <ContactUs />
        </div>
      </div>
      <Footer />
      {/* Animations are now in home.module.css */}
    </div>
  );
};

export default Home;