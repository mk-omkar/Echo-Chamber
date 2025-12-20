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
    const queryTopic = searchParams.get("topic");

    if (queryTopic && queryTopic.trim() !== "") {
      setTopic(queryTopic);
      fetchArticles(queryTopic);
    } else {
      setTopic("");
      setArticles([]);
    }
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
          {topic ? (
            <>
              <h2>
                Analysis Results for{" "}
                <span className="topic-highlight">{topic}</span>
              </h2>
              <p>Articles are labeled by political bias and sentiment.</p>
            </>
          ) : (
            <>
              <h2>No topic searched</h2>
              <p>Please enter a topic and click search.</p>
            </>
          )}
        </div>

        {/* CONTENT */}
        {loading ? (
          <p style={{ padding: "20px" }}>Loading articles...</p>
        ) : (
          <section className="articles-section">
            {articles.length > 0 ? (
              <>
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
              </>
            ) : (
              topic && (
                <p style={{ padding: "20px", textAlign: "center" }}>
                  No articles found for this topic.
                </p>
              )
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default Results;
