import React from 'react';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import QuoteCalculator from '../components/ui/QuoteCalculator/QuoteCalculator';

const QuoteCalculatorPage: React.FC = () => (
  <>
    <Header />
    <main style={{ minHeight: '80vh', background: '#f7fafc' }}>
      <QuoteCalculator />
    </main>
    <Footer />
  </>
);

export default QuoteCalculatorPage;
