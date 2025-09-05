import React from 'react';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import ProductionDashboard from '../components/ui/ProductionDashboard/ProductionDashboard';

const DashboardPage: React.FC = () => (
  <>
    <Header />
    <main style={{ minHeight: '80vh', background: '#f7fafc' }}>
      <ProductionDashboard />
    </main>
    <Footer />
  </>
);

export default DashboardPage;
