import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/ArticleCard.css";

function ArticleCard({
  title,
  bias,
  sentiment,
  summary,
  fullContent,
  sourceLink
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
        <div className="bias-badge">{bias}</div>
        <div className="sentiment-badge">{sentiment}</div>

        <h4>{title}</h4>
        <p className="summary">{summary}</p>

        <button className="read-more-btn" onClick={openPopup}>
          ▼ Read More
        </button>
      </div>

      {/* POPUP */}
      {showPopup &&
        ReactDOM.createPortal(
          <div className="popup-overlay" onClick={closePopup}>
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closePopup}>
                &times;
              </button>

              <div className="popup-meta">
                <span className={`popup-badge popup-bias ${bias.toLowerCase()}`}>
                  {bias}
                </span>
                <span
                  className={`popup-badge popup-sentiment ${sentiment.toLowerCase()}`}
                >
                  {sentiment}
                </span>
              </div>

              <h2>{title}</h2>

              <div className="popup-body">
                <p>{fullContent}</p>
              </div>

              {/* ✅ SOURCE LINK */}
              {sourceLink && (
                <div className="wiki-link">
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Read original source
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
