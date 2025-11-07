import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // For URL params if topic is passed
import axios from 'axios';
import WordCloudView from '../components/WordCloudView'; // Your existing component
import '../styles/WordCloudView.css'; // Link to the CSS I provided earlier

function WordCloud() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic') || 'climate'; // Default topic; adjust as needed
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch word cloud data from backend on mount or topic change
  useEffect(() => {
    const fetchWordData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(/api/wordcloud?topic=${topic}); // Replace with your actual API endpoint
        setWordData(response.data); // Expected: array like [{ text: 'climate', value: 50 }]
      } catch (err) {
        setError('Failed to load word cloud data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWordData();
  }, [topic]);

  return (
    <div className="wordcloud-page">
      <h1>Word Cloud for Topic: {topic}</h1>
      <p>Explore the most frequent keywords from news articles. Word size indicates usage frequency across sources.</p>
      
      {loading && <p>Loading word cloud...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <WordCloudView data={wordData} />}
      
      {/* Optional: Add a back button or link to results */}
      <button onClick={() => window.history.back()}>Back to Results</button>
    </div>
  );
}

export default WordCloud;