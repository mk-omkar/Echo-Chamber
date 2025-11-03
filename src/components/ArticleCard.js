import React from 'react';
import '../styles/ArticleCard.css';

function ArticleCard({ title, bias, summary, link }) {
  return (
    <div className="article-card">
      <h4>{title}</h4>
      <p><strong>Bias:</strong> {bias}</p>
      <p>{summary}</p>
      <a href={link} target="_blank" rel="noreferrer">Read More</a>
    </div>
  );
}

export default ArticleCard;
