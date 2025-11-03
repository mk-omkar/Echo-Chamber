import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SentimentChart from '../components/SentimentChart';
import WordCloudView from '../components/WordCloudView';
import ArticleCard from '../components/ArticleCard';
import '../styles/Results.css';

function Results() {
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentimentData, setSentimentData] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const queryTopic = searchParams.get('topic');
    if (queryTopic) {
      setTopic(queryTopic);
      fetchResults(queryTopic);
    }
  }, [searchParams]);

  const fetchResults = async (searchTopic) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockSentimentData = getMockSentimentData(searchTopic);
    const mockArticles = getMockArticles(searchTopic);

    setSentimentData(mockSentimentData);
    setArticles(mockArticles);
    setLoading(false);
  };

  const getMockSentimentData = (searchTopic) => {
    const sentimentPatterns = {
      'climate change': {
        left: { positive: 60, neutral: 25, negative: 15 },
        center: { positive: 40, neutral: 50, negative: 10 },
        right: { positive: 20, neutral: 30, negative: 50 }
      },
      'ai regulation': {
        left: { positive: 55, neutral: 25, negative: 20 },
        center: { positive: 35, neutral: 55, negative: 10 },
        right: { positive: 15, neutral: 35, negative: 50 }
      },
      'elections 2024': {
        left: { positive: 65, neutral: 20, negative: 15 },
        center: { positive: 30, neutral: 60, negative: 10 },
        right: { positive: 70, neutral: 15, negative: 15 }
      },
      'healthcare': {
        left: { positive: 70, neutral: 20, negative: 10 },
        center: { positive: 40, neutral: 45, negative: 15 },
        right: { positive: 20, neutral: 25, negative: 55 }
      }
    };

    const key = searchTopic.toLowerCase();
    return sentimentPatterns[key] || {
      left: { positive: 45, neutral: 35, negative: 20 },
      center: { positive: 40, neutral: 50, negative: 10 },
      right: { positive: 35, neutral: 30, negative: 35 }
    };
  };

  const getMockArticles = (searchTopic) => {
    const articlesByTopic = {
      'climate change': [
        {
          title: "Climate Crisis Demands Immediate Global Action, Scientists Warn",
          bias: "Left",
          summary: "Leading climate scientists emphasize the urgent need for comprehensive policy changes to address rising global temperatures.",
          fullContent: "The latest IPCC report reveals alarming trends in global warming, with scientists calling for immediate action to prevent catastrophic climate change. The report emphasizes the need for renewable energy investments, carbon reduction targets, and international cooperation. Experts warn that without significant policy changes, the world faces irreversible damage to ecosystems and human societies.",
          link: "https://example.com/article1"
        },
        {
          title: "Youth Activists Rally for Stronger Environmental Protections",
          bias: "Left",
          summary: "Student-led movements across the country demand bold action on climate change, organizing protests and calling for a Green New Deal.",
          fullContent: "Thousands of young activists have taken to the streets demanding stronger climate action. The movement, inspired by global youth leaders, calls for a comprehensive Green New Deal that addresses both environmental sustainability and social justice. Organizers emphasize that climate change disproportionately affects marginalized communities and future generations.",
          link: "https://example.com/article2"
        },
        {
          title: "New Study Reveals Mixed Data on Climate Change Impacts",
          bias: "Center",
          summary: "Recent research presents a nuanced view of climate patterns, showing both concerning trends and areas of improvement.",
          fullContent: "A comprehensive study published in Nature presents a complex picture of climate change impacts. While some regions show alarming warming trends, others demonstrate resilience and adaptation. Scientists emphasize the importance of continued monitoring and evidence-based policy decisions rather than reactive measures.",
          link: "https://example.com/article3"
        },
        {
          title: "Bipartisan Committee Explores Balanced Climate Solutions",
          bias: "Center",
          summary: "A congressional committee works to find common ground on environmental policy, seeking approaches that balance economic growth with ecological preservation.",
          fullContent: "Members from both parties are working together to develop practical climate solutions. The committee focuses on incentivizing clean energy innovation while protecting existing jobs. Both Democrats and Republicans express cautious optimism about finding middle-ground policies.",
          link: "https://example.com/article4"
        },
        {
          title: "Climate Regulations Face Pushback Over Economic Concerns",
          bias: "Right",
          summary: "Business leaders and economists question the feasibility of proposed climate regulations, citing potential job losses and economic disruption.",
          fullContent: "Industry groups warn that aggressive climate regulations could devastate the economy and eliminate millions of jobs. Economists argue that market-based solutions and technological innovation should drive environmental improvements rather than government mandates. They advocate for gradual transitions that protect workers and businesses.",
          link: "https://example.com/article5"
        },
        {
          title: "Energy Companies Invest in Innovation Over Regulation",
          bias: "Right",
          summary: "Major energy firms announce technological advancements aimed at reducing emissions through innovation rather than government mandates.",
          fullContent: "Private sector leaders demonstrate that free-market solutions can address environmental challenges more effectively than regulations. Energy companies have invested billions in clean technology development, proving that innovation drives progress better than government intervention. Industry experts argue this approach protects American competitiveness while improving environmental outcomes.",
          link: "https://example.com/article6"
        }
      ]
    };

    const key = searchTopic.toLowerCase();
    return articlesByTopic[key] || articlesByTopic['climate change'];
  };

  return (
    <div className="results">
      <Header />
      <main className="results-main">
        {topic && (
          <div className="results-header">
            <h2>Analysis Results for: <span className="topic-highlight">{topic}</span></h2>
          </div>
        )}

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Analyzing articles from multiple sources...</p>
            <p className="loading-subtext">Fetching data from left, center, and right-leaning outlets</p>
          </div>
        ) : (
          <>
            {articles.length > 0 && (
              <section className="articles-section">
                <h3 className="articles-title">📰 Analyzed Articles ({articles.length})</h3>
                <div className="articles-grid">
                  {articles.map((article, index) => (
                    <ArticleCard 
                      key={index}
                      title={article.title}
                      bias={article.bias}
                      summary={article.summary}
                      fullContent={article.fullContent}
                      link={article.link}
                    />
                  ))}
                </div>
              </section>
            )}

            {sentimentData && (
              <div className="sentiment-section">
                <SentimentChart data={sentimentData} />
              </div>
            )}

            <WordCloudView />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Results;
