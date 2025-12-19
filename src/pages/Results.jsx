import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import "../styles/Results.css";

function Results() {
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryTopic = searchParams.get("topic") || "climate change";
    setTopic(queryTopic);
    fetchArticles(queryTopic);
  }, [searchParams]);

  const fetchArticles = async (searchTopic) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/articles?topic=${encodeURIComponent(
          searchTopic
        )}`
      );
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="results">
      <Header />

      <main className="results-main">
        {/* HEADER */}
        <div className="results-header">
          <h2>
            Analysis Results for{" "}
            <span className="topic-highlight">{topic}</span>
          </h2>
          <p>Articles are labeled by political bias and sentiment.</p>
        </div>

        {/* CONTENT */}
        {loading ? (
          <p style={{ padding: "20px" }}>Loading articles...</p>
        ) : (
          <section className="articles-section">
            <h3 className="articles-title">
              📰 Analyzed Articles ({articles.length})
            </h3>

            <div className="articles-grid">
              {articles.map((article) => (
                <ArticleCard
                  key={article._id}
                  title={article.title}
                  bias={article.bias}
                  sentiment={article.sentiment}
                  summary={article.summary}
                  fullContent={article.fullContent}
                  wikiLink={article.wikiLink} 
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Results;
