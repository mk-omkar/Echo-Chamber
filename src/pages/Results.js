import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Results.css';

function Results() {
  return (
    <div className="results">
      <Header />
      <main style={{ padding: '40px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ color: '#667eea' }}>Results Page Coming Soon</h2>
        <p>Analysis will be displayed here</p>
      </main>
      <Footer />
    </div>
  );
}

export default Results;
