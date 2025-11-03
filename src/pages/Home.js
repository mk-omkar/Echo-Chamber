import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import '../styles/Home.css';

function Home() {
  const trendingTopics = ['Climate Change', 'AI Regulation', 'Elections 2024', 'Healthcare'];

  return (
    <div className="home">
      <Header />
      
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Expose Media Bias. Discover the Full Story.</h1>
          <p className="hero-subtitle">
            Echo Chamber analyzes news coverage across the political spectrum — from left to right — 
            revealing sentiment, bias patterns, and narrative differences in real-time.
          </p>
          
          {/* Search Bar */}
          <div className="search-container">
            <SearchBar />
            <div className="trending-topics">
              <span className="trending-label">Trending:</span>
              {trendingTopics.map((topic, index) => (
                <button key={index} className="topic-tag">{topic}</button>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">🔍</div>
              <h3>Enter Topic</h3>
              <p>Type any news topic you want to investigate</p>
            </div>
            <div className="step-card">
              <div className="step-icon">🤖</div>
              <h3>AI Analysis</h3>
              <p>We fetch & analyze articles from left, center, and right-leaning sources using NLP</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📊</div>
              <h3>Compare Bias</h3>
              <p>View sentiment charts, word clouds, and side-by-side coverage patterns</p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <div>
                <h4>Multi-Source Coverage</h4>
                <p>Analyzes 10+ news outlets across the political spectrum</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <div>
                <h4>Sentiment Analysis</h4>
                <p>Detects positive, negative, and neutral tones</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <div>
                <h4>Entity Extraction</h4>
                <p>Identifies key people, organizations, and topics</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <div>
                <h4>Visual Insights</h4>
                <p>Interactive charts and word clouds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="why-section">
          <div className="why-content">
            <h2 className="section-title">Why This Matters</h2>
            <p className="why-text">
              In an age of information overload, understanding bias isn't about choosing sides — 
              it's about seeing the full picture. Echo Chamber helps you cut through echo chambers 
              and think critically about the news you consume.
            </p>
            <button className="cta-button">Start Analyzing</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;