import React, { useState } from 'react';
import '../styles/ArticleCard.css';

function ArticleCard({ title, bias, summary, fullContent }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <div className="article-card" data-bias={bias}>
        <div className="bias-badge">{bias}</div>
        <h4>{title}</h4>
        <div className="article-content">
          <p className="summary">{summary}</p>
        </div>
        <div className="article-actions">
          <button className="read-more-btn" onClick={openPopup}>
            ▼ Read More
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <h2>{title}</h2>
            <div className="full-content">
              <p>{fullContent}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleCard;
