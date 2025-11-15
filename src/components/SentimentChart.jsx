import React from 'react';
import '../styles/SentimentChart.css';

function SentimentChart({ data }) {
  // Default dummy data if none provided
  const defaultData = {
    left: { positive: 45, neutral: 30, negative: 25 },
    center: { positive: 40, neutral: 50, negative: 10 },
    right: { positive: 30, neutral: 25, negative: 45 }
  };

  const sentimentData = data || defaultData;

  const getBiasColor = (bias) => {
    const colors = {
      left: '#3b82f6',
      center: '#8b5cf6',
      right: '#ef4444'
    };
    return colors[bias];
  };

  const getSentimentColor = (sentiment) => {
    const colors = {
      positive: '#10b981',
      neutral: '#f59e0b',
      negative: '#ef4444'
    };
    return colors[sentiment];
  };

  return (
    <div className="sentiment-chart">
      <div className="chart-header">
        <h3>Sentiment Analysis Across Political Spectrum</h3>
        <p>How different outlets cover this topic emotionally</p>
      </div>

      <div className="chart-grid">
        {/* Left Bias */}
        <div className="bias-section">
          <div className="bias-header" style={{ borderColor: getBiasColor('left') }}>
            <h4>Left-Leaning</h4>
            <span className="source-count">5 sources</span>
          </div>
          <div className="sentiment-bars">
            {Object.entries(sentimentData.left).map(([sentiment, value]) => (
              <div key={sentiment} className="sentiment-row">
                <div className="sentiment-label">
                  <span className={`sentiment-icon ${sentiment}`}>
                    {sentiment === 'positive' ? '' : sentiment === 'neutral' ? '' : ''}
                  </span>
                  <span className="sentiment-name">{sentiment}</span>
                </div>
                <div className="bar-container">
                  <div
                    className="bar"
                    style={{
                      width: `${value}%`,
                      background: getSentimentColor(sentiment)
                    }}
                  >
                    <span className="bar-value">{value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Bias */}
        <div className="bias-section">
          <div className="bias-header" style={{ borderColor: getBiasColor('center') }}>
            <h4>Center</h4>
            <span className="source-count">3 sources</span>
          </div>
          <div className="sentiment-bars">
            {Object.entries(sentimentData.center).map(([sentiment, value]) => (
              <div key={sentiment} className="sentiment-row">
                <div className="sentiment-label">
                  <span className={`sentiment-icon ${sentiment}`}>
                    {sentiment === 'positive' ? '' : sentiment === 'neutral' ? '' : ''}
                  </span>
                  <span className="sentiment-name">{sentiment}</span>
                </div>
                <div className="bar-container">
                  <div
                    className="bar"
                    style={{
                      width: `${value}%`,
                      background: getSentimentColor(sentiment)
                    }}
                  >
                    <span className="bar-value">{value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bias */}
        <div className="bias-section">
          <div className="bias-header" style={{ borderColor: getBiasColor('right') }}>
            <h4>Right-Leaning</h4>
            <span className="source-count">5 sources</span>
          </div>
          <div className="sentiment-bars">
            {Object.entries(sentimentData.right).map(([sentiment, value]) => (
              <div key={sentiment} className="sentiment-row">
                <div className="sentiment-label">
                  <span className={`sentiment-icon ${sentiment}`}>
                    {sentiment === 'positive' ? '' : sentiment === 'neutral' ? '' : ''}
                  </span>
                  <span className="sentiment-name">{sentiment}</span>
                </div>
                <div className="bar-container">
                  <div
                    className="bar"
                    style={{
                      width: `${value}%`,
                      background: getSentimentColor(sentiment)
                    }}
                  >
                    <span className="bar-value">{value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="sentiment-summary">
        <div className="summary-card">
          <h5>Overall Sentiment</h5>
          <p>
            Left-leaning sources are <strong>more positive</strong>, while right-leaning sources show{' '}
            <strong>more negative</strong> sentiment on this topic.
          </p>
        </div>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#10b981' }}></span>
            <span>Positive</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#f59e0b' }}></span>
            <span>Neutral</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#ef4444' }}></span>
            <span>Negative</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentChart;
