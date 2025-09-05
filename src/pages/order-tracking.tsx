import React from 'react';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import OrderTimeline from '../components/ui/OrderTimeline/OrderTimeline';

const OrderTrackingPage: React.FC = () => (
  <>
    <Header />
    <main style={{ minHeight: '80vh', background: '#f7fafc' }}>
      <OrderTimeline />
    </main>
    <Footer />
  </>
);

export default OrderTrackingPage;
