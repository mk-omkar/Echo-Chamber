import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <Header />
      <main className="about-main">
        <h2>About Echo Chamber</h2>
        <p>This tool helps you analyze media bias across different news sources.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
