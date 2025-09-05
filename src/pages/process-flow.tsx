import React from 'react';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import ProcessFlow from '../components/ui/ProcessFlow/ProcessFlow';

const ProcessFlowPage: React.FC = () => (
  <>
    <Header />
    <main style={{ minHeight: '80vh', background: '#f7fafc' }}>
      <ProcessFlow />
    </main>
    <Footer />
  </>
);

export default ProcessFlowPage;
