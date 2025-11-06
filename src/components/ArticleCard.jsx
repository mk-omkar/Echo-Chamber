import React, { useState } from 'react';
import '../styles/ArticleCard.css';

function ArticleCard({ title, bias, summary, fullContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <div className={`article-card${isExpanded ? ' expanded' : ''}`} data-bias={bias}>
      <div className="bias-badge">{bias}</div>
      <h4>{title}</h4>
      <div className="article-content">
        <p className="summary">{summary}</p>
        {isExpanded && fullContent && (
          <div className="full-content">
            <p>{fullContent}</p>
          </div>
        )}
      </div>
      <div className="article-actions">
        <button className="read-more-btn" onClick={toggleExpand}>
          {isExpanded ? '▲ Show Less' : '▼ Read More'}
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
