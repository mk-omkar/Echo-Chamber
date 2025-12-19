import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/ArticleCard.css";

function ArticleCard({
  title,
  bias,
  sentiment,
  summary,
  fullContent,
  wikiLink
}) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      {/* ARTICLE CARD */}
      <div
        className="article-card"
        data-bias={bias}
        data-sentiment={sentiment}
      >
        {/* Badges */}
        <div className="bias-badge">{bias}</div>
        <div className="sentiment-badge">{sentiment}</div>

        {/* Title */}
        <h4>{title}</h4>

        {/* Summary */}
        <p className="summary">{summary}</p>

        {/* Read More */}
        <button
          type="button"
          className="read-more-btn"
          onClick={openPopup}
        >
          ▼ Read More
        </button>
      </div>

      {/* POPUP MODAL */}
      {showPopup &&
        ReactDOM.createPortal(
          <div className="popup-overlay" onClick={closePopup}>
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="close-btn" onClick={closePopup}>
                &times;
              </button>

              {/* Colored Meta Labels */}
              <div className="popup-meta">
                <span
                  className={`popup-badge popup-bias ${bias.toLowerCase()}`}
                >
                  {bias}
                </span>
                <span
                  className={`popup-badge popup-sentiment ${sentiment.toLowerCase()}`}
                >
                  {sentiment}
                </span>
              </div>

              {/* Title */}
              <h2>{title}</h2>

              {/* Scrollable Content */}
              <div className="popup-body">
                <p>{fullContent}</p>
              </div>

              {/* Wikipedia Link */}
              {wikiLink && (
                <div className="wiki-link">
                  <a
                    href={wikiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Read more on Wikipedia
                  </a>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ArticleCard;
