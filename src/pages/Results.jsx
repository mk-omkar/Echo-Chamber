import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SentimentChart from '../components/SentimentChart';
import ArticleCard from '../components/ArticleCard';
import '../styles/Results.css';

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
  },
  'environment': {
    left: { positive: 50, neutral: 30, negative: 20 },
    center: { positive: 45, neutral: 35, negative: 20 },
    right: { positive: 25, neutral: 30, negative: 45 }
  },
  'technology': {
    left: { positive: 60, neutral: 25, negative: 15 },
    center: { positive: 50, neutral: 35, negative: 15 },
    right: { positive: 30, neutral: 40, negative: 30 }
  },
  'education': {
    left: { positive: 55, neutral: 30, negative: 15 },
    center: { positive: 45, neutral: 40, negative: 15 },
    right: { positive: 25, neutral: 35, negative: 40 }
  },
  'economy': {
    left: { positive: 50, neutral: 30, negative: 20 },
    center: { positive: 45, neutral: 40, negative: 15 },
    right: { positive: 35, neutral: 30, negative: 35 }
  },
  'past': {
    left: { positive: 42, neutral: 37, negative: 21 },
    center: { positive: 38, neutral: 49, negative: 13 },
    right: { positive: 28, neutral: 31, negative: 41 }
  },
  'global health': {
    left: { positive: 65, neutral: 20, negative: 15 },
    center: { positive: 50, neutral: 40, negative: 10 },
    right: { positive: 30, neutral: 35, negative: 35 }
  },
  'space exploration': {
    left: { positive: 70, neutral: 20, negative: 10 },
    center: { positive: 50, neutral: 35, negative: 15 },
    right: { positive: 40, neutral: 30, negative: 30 }
  },
};


const articlesByTopic = {
    'climate change': [
    {
      title: "Climate Crisis Demands Immediate Global Action, Scientists Warn",
      bias: "Left",
      summary: "Leading climate scientists emphasize the urgent need for comprehensive policy changes to address rising global temperatures.",
      fullContent: `The latest IPCC report reveals alarming trends in global warming, with scientists calling for immediate and coordinated international action to prevent catastrophic climate change. The report highlights the accelerated rise in sea levels, increased frequency of extreme weather events including hurricanes, droughts, and floods, and irreversible damage to vulnerable ecosystems. Experts stress the importance of immediate carbon emission reductions, renewable energy adoption, and stringent climate policies to mitigate the dire consequences. Public participation and equitable approaches to climate justice are also emphasized as vital elements for successful global efforts.`,
      link: "https://example.com/article1"
    },
    {
      title: "Youth Activists Rally for Stronger Environmental Protections",
      bias: "Left",
      summary: "Student-led movements across the country demand bold action on climate change, organizing protests and calling for a Green New Deal.",
      fullContent: `Thousands of young activists have mobilized nationwide demanding stronger climate action policies. These movements emphasize the urgency of enacting a comprehensive Green New Deal that combines climate change mitigation with social and economic reforms to promote equity and job creation. The activists engage in diverse strategies including peaceful protests, lobbying lawmakers, and community outreach, highlighting the disproportionate impact of climate change on marginalized groups and calling for intergenerational responsibility. Their activism has garnered national attention and pressured governments to adopt more ambitious environmental legislation.`,
      link: "https://example.com/article2"
    },
    {
      title: "Mixed Research on Climate Change Recovery Efforts",
      bias: "Center",
      summary: "Studies show both positive and negative climate change impacts due to recovery efforts.",
      fullContent: `Recent research provides a nuanced picture of climate change recovery efforts across various regions. While some areas report encouraging signs of reduced pollution levels and increased vegetation coverage due to policy interventions and technological advances, others face setbacks. These setbacks include economic disruptions, increased costs for vulnerable populations, and unintended environmental consequences such as habitat fragmentation. The findings suggest the need for adaptive policies that are context-sensitive, balancing environmental goals with economic and social sustainability to achieve meaningful recovery outcomes.`,
      link: "https://example.com/article7"
    },
    {
      title: "Economic Implications Threaten Climate Regulations",
      bias: "Right",
      summary: "Critics express concerns about the economic impacts of stringent climate regulations on industries and jobs.",
      fullContent: `Critics argue that aggressive climate regulations may lead to significant economic challenges, including job losses in traditional energy sectors such as coal, oil, and natural gas. Businesses voice concerns over increased operational costs, competitiveness at international markets, and risks to supply chains. Policymakers must balance environmental objectives with economic realities to ensure a just transition that includes retraining workers, incentivizing green innovation, and supporting affected communities. Some propose market-based mechanisms over direct regulation to stimulate voluntary climate action without stifling economic growth.`,
      link: "https://example.com/article8"
    }
  ],

  'ai regulation': [
    {
      title: "New AI Regulations on the Horizon Amid Industry Pushback",
      bias: "Center",
      summary: "Governments considering AI regulations face mixed reactions from industry and civil rights groups.",
      fullContent: `Several governments are drafting new comprehensive AI regulations aimed at ensuring transparency, privacy, and accountability in AI systems. These regulations propose requirements for algorithmic auditing, data protection, fairness, and bias mitigation. However, industry stakeholders express concerns about the potential burden on innovation, delays in deployment, and costs. Civil rights groups advocate for robust protections to prevent discriminatory impacts and protect individual rights. The debate centers on finding a regulatory balance that fosters innovation while addressing ethical and social risks.`,
      link: "https://example.com/ai_article1"
    },
    {
      title: "Ethics Debates Heat Up in AI Regulation Discussions",
      bias: "Left",
      summary: "Advocates push for strict ethical standards in AI systems to avoid bias and misuse.",
      fullContent: `Ethics experts call for stringent guidelines to ensure AI systems operate transparently and without bias. Proposed ethical frameworks stress the importance of human oversight, explainability, and adherence to social values. The aim is to prevent harms such as discrimination, misinformation, and privacy violations. Public consultations and multi-stakeholder involvement are considered crucial for effective policy. Critics warn that insufficient ethics governance might erode trust and cause societal harm, urging policymakers to adopt proactive ethical regulations.`,
      link: "https://example.com/ai_article3"
    },
    {
      title: "Business Leaders Warn Against Over-Regulation of AI",
      bias: "Right",
      summary: "Industry leaders caution against regulations that could stifle innovation and competitiveness.",
      fullContent: `Executives from major tech companies argue that overly prescriptive AI regulation could hamper innovation and economic growth. They emphasize the need for flexible, principles-based frameworks that allow rapid technological progress and international cooperation. Industry advocates propose self-regulation, transparency measures, and voluntary standards as alternatives. Concerns include high compliance costs and the risk of driving startups and research offshore. The dialogue focuses on balancing risk mitigation with preserving a competitive global AI marketplace.`,
      link: "https://example.com/ai_article4"
    }
  ],

  'elections 2024': [
    {
      title: "Election Forecasts Show Competitive Races Across Key States",
      bias: "Center",
      summary: "Recent polls indicate tight races in battleground states ahead of 2024 elections.",
      fullContent: `Political analysts discuss the implications of polling data and campaign strategies leading up to the 2024 elections. Key battleground states show volatile swings as candidates intensify outreach efforts. Issues like the economy, healthcare, and climate remain paramount in voter sentiment. The polls underscore the competitive landscape and the potential for shifts in congressional control. Strategies to mobilize voters and combat misinformation will be critical in this high-stakes election period.`,
      link: "https://example.com/election_article1"
    },
    {
      title: "Early Voting Trends Indicate Shifts in Political Engagement",
      bias: "Left",
      summary: "Increased turnout among younger voters could influence election outcomes.",
      fullContent: `Early voting data reveals a surge in participation particularly among younger demographics and minority communities. This trend suggests a heightened political engagement spurred by recent social justice movements and economic concerns. Campaigns are targeting these groups through digital outreach and grassroots organizing. The surge may reshape traditional voting patterns and influence tight electoral races. Analysts predict that these early indicators could substantially affect the final results in key districts.`,
      link: "https://example.com/election_article3"
    },
    {
      title: "Concerns Over Election Security Heighten Amid Rising Threats",
      bias: "Right",
      summary: "Officials warn of potential interference and fraud risks despite safeguards.",
      fullContent: `Federal and state agencies are ramping up security protocols amidst concerns of foreign and domestic interference in the upcoming elections. Enhanced monitoring systems, cybersecurity training, and public awareness campaigns are in place to protect election integrity. Despite these efforts, certain factions raise alarm over vulnerabilities in voting machines and mail-in ballot processes. The discourse has heightened partisan tensions, with calls for transparency and audits escalating. Officials stress the importance of vigilance to safeguard democratic processes against evolving threats.`,
      link: "https://example.com/election_article4"
    }
  ],

  // Add similarly expanded fullContent for healthcare, environment, technology, education, etc.

  'healthcare': [
    {
      title: "Healthcare Reform Debates Intensify in Congress",
      bias: "Left",
      summary: "Policy-makers debate expanding healthcare access nationwide.",
      fullContent: `Congressional leaders are engaged in heated debates over proposed healthcare reforms aiming to expand coverage. Discussions focus on balancing cost containment with quality care improvements. Proposals include enhanced Medicaid expansion, subsidies for private insurance, and increased funding for underserved communities. Advocates emphasize the social equity benefits, while opponents express concerns about budget impacts and government overreach. The reforms could reshape healthcare delivery and financing significantly if enacted.`,
      link: "https://example.com/healthcare_article1"
    },
    {
      title: "Private Healthcare Sector Shows Growth Amid Policy Uncertainty",
      bias: "Center",
      summary: "Despite debates, private healthcare market continues to expand.",
      fullContent: `The private healthcare sector demonstrates robust growth driven by innovation and consumer demand despite ongoing policy uncertainties. Investment focuses on telemedicine, personalized medicine, and healthcare IT solutions. While policymakers debate reforms, private providers navigate regulatory complexities while seeking to expand services. Market dynamics reflect a shift toward value-based care aimed at enhancing outcomes and efficiency. Stakeholders anticipate ongoing transformation with evolving government policies and technological advancements.`,
      link: "https://example.com/healthcare_article3"
    },
    {
      title: "Economic Pressures Challenge Healthcare Providers' Sustainability",
      bias: "Right",
      summary: "Rising costs and regulation pressures create challenges for healthcare operations.",
      fullContent: `Healthcare providers face mounting economic pressures as rising costs for supplies, labor, and compliance strain budgets. Regulatory mandates add complexity and administrative burden. Providers are seeking strategic efficiencies, partnerships, and alternative care models to sustain operations. Financial instability is predicted to drive consolidation and service realignment in coming years. Policymakers debate balancing necessary regulation with flexibility to maintain provider viability and patient access.`,
      link: "https://example.com/healthcare_article4"
    }
  ],

  // Expand for other topics similarly, for example:

  'environment': [
    {
      title: "Global Environment Summit Focuses on Biodiversity Loss",
      bias: "Center",
      summary: "Leaders emphasize urgent action to halt biodiversity loss.",
      fullContent: `At the Global Environment Summit, international leaders underscored the critical importance of biodiversity preservation. Discussions highlighted alarming rates of species extinction and habitat degradation caused by deforestation, pollution, and climate change. The summit called for coordinated global frameworks promoting sustainable land use, conservation funding, and community engagement. Cross-sector partnerships and indigenous knowledge integration were recognized as essential. Concrete commitments to protect wetlands, forests, and oceans aim to safeguard ecological balance for future generations.`,
      link: "https://example.com/environment_article1"
    },
    {
      title: "New Technologies Support Environmental Conservation Efforts",
      bias: "Left",
      summary: "Innovations in monitoring and sustainability show promise.",
      fullContent: `Emerging technologies such as satellite imaging, drones, and AI-powered analytics are revolutionizing environmental conservation. These tools enable precise monitoring of ecosystems, detection of illegal activities, and data-driven policy making. Sustainable agriculture and renewable energy innovations contribute to reduced carbon footprint and resource conservation. Governments and NGOs are increasingly investing in tech solutions to optimize resource management and enforce environmental regulations. The synergy between technology and conservation offers hope for reversing environmental degradation trends.`,
      link: "https://example.com/environment_article2"
    }
  ],

  'technology': [
    {
      title: "Tech Giants Lead Innovation While Addressing Privacy Concerns",
      bias: "Center",
      summary: "Companies innovate but face user data privacy criticisms.",
      fullContent: `Major technology companies continue to push the envelope in AI, cloud computing, and connectivity while facing growing scrutiny over user data privacy. New privacy features, including encryption and data anonymization, are being introduced in response to regulatory pressure and consumer demand. The companies emphasize transparency and user control alongside innovative product development. However, critics demand stronger safeguards and accountability. The tension between innovation and privacy protection shapes much of the current tech landscape and policy debates.`,
      link: "https://example.com/tech_article1"
    },
    {
      title: "AI Breakthroughs and Ethical Challenges",
      bias: "Left",
      summary: "AI progress brings ethical debates and calls for responsibility.",
      fullContent: `Recent breakthroughs in artificial intelligence promise transformative benefits in healthcare, education, and automation. Yet these advances prompt ethical discussions about bias, accountability, job displacement, and decision-making transparency. Experts advocate for multi-stakeholder frameworks guiding responsible AI development, emphasizing fairness, inclusivity, and human oversight. Ongoing research examines mitigating unintended consequences while harnessing AI’s potential. The ethical landscape evolves rapidly requiring adaptive policy and technical standards.`,
      link: "https://example.com/tech_article2"
    },
    {
      title: "Tech Entrepreneurs Push for Deregulation to Spur Growth",
      bias: "Right",
      summary: "Calls for minimal regulation to maintain competitive edge.",
      fullContent: `Startups and venture capitalists are lobbying for deregulation to accelerate innovation and maintain competitiveness globally. They argue that excessive government controls stifle creativity and delay market entry. Proposals focus on reducing compliance costs and promoting market-driven solutions. Critics caution against lax oversight that could compromise consumer protection and market fairness. The debate centers on finding the right balance to foster dynamic growth while ensuring accountability in the tech industry.`,
      link: "https://example.com/tech_article3"
    }
  ],

  'education': [
    {
      title: "Reforming Education Systems for the 21st Century",
      bias: "Center",
      summary: "Policymakers explore modernization efforts in education.",
      fullContent: `Reform initiatives are underway globally to adapt education systems to the rapidly changing economic and technological landscape. Emphasis is on integrating digital literacy, critical thinking, and inclusivity in curricula. Investment in teacher training and infrastructure modernization are seen as key. Collaborative efforts between governments, educators, and communities aim to close achievement gaps and prepare students for future workforce demands. Innovative education models blending online and traditional learning are also gaining traction.`,
      link: "https://example.com/education_article1"
    },
    {
      title: "Education Equity Movements Gain Momentum Across States",
      bias: "Left",
      summary: "Advocates push for equal access and resources in public education.",
      fullContent: `Grassroots and policy advocacy groups campaign vigorously for equitable resource allocation in public schools. Highlighting systemic disparities, these movements seek increased funding for under-resourced districts, culturally responsive teaching, and expanded support services. Lawsuits and policy reforms emphasize the constitutional right to equal education. Community involvement and awareness efforts strive to dismantle structural barriers affecting marginalized students. Success stories from pilot programs provide promising models for wider implementation.`,
      link: "https://example.com/education_article2"
    },
    {
      title: "Private Education Growth Raises Regulatory Questions",
      bias: "Right",
      summary: "Expansion of private institutions fuels debate over standards and oversight.",
      fullContent: `The rapid growth of private education providers prompts discussions on accountability, quality assurance, and regulatory frameworks. Proponents argue that private institutions increase choice and competition, fostering innovation. Opponents raise concerns about equity, access, and consistency in educational outcomes. Policymakers are challenged to create balanced regulations that ensure quality without stifling flexibility. Transparency and accreditation mechanisms play a central role in ongoing debates.`,
      link: "https://example.com/education_article3"
    }
  ],
  // Newly added 'past' theme example
  'past': [
    {
      title: "Learning From Past Climate Policies",
      bias: "Center",
      summary: "Analysts review historic climate policies to inform future actions.",
      fullContent: `A retrospective analysis of past international climate agreements reveals mixed outcomes. While early efforts raised awareness, lack of binding commitments hindered meaningful emission reductions. Lessons highlight the need for enforceable targets and greater cooperation to meet current challenges.`,
      link: "https://example.com/past_article1"
    },
    {
      title: "Historical Perspectives on Public Health Challenges",
      bias: "Left",
      summary: "Reviewing past pandemics to improve current global health responses.",
      fullContent: `Examining the responses to historical pandemics such as the Spanish flu provides critical insights into social, economic, and healthcare preparedness. Lessons learned underscore the importance of early intervention, transparent communication, and equity in healthcare access.`,
      link: "https://example.com/past_article2"
    },
  ],

  // Newly added 'global health'
  'global health': [
    {
      title: "Global Efforts to Combat Infectious Diseases",
      bias: "Center",
      summary: "International collaboration remains vital to controlling epidemics.",
      fullContent: `Organizations like WHO coordinate countries in surveillance, vaccine distribution, and education to stave off epidemic outbreaks. Strengthening health systems worldwide remains a priority to reduce vulnerability and improve response times.`,
      link: "https://example.com/global_health1"
    },
    {
      title: "Disparities in Healthcare Access Worldwide",
      bias: "Left",
      summary: "Global health inequality threatens vulnerable populations.",
      fullContent: `Despite advances, wide disparities persist in access to essential services, medications, and sanitation. Advocacy calls for increased funding and policy reforms to close these gaps and ensure equitable health outcomes.`,
      link: "https://example.com/global_health2"
    },
  ],

  // Newly added 'space exploration'
  'space exploration': [
    {
      title: "Mars Missions Paving Way for Human Colonization",
      bias: "Center",
      summary: "Recent missions reveal new insights toward permanent settlements on Mars.",
      fullContent: `Robotic probes and orbiters have mapped promising areas for future human bases, detecting water ice and analyzing soil composition. NASA and private companies coordinate to develop sustainable habitat concepts and propulsion technology.`,
      link: "https://example.com/space_article1"
    },
    {
      title: "Debates Over Space Policy and International Cooperation",
      bias: "Right",
      summary: "Concerns rise about militarization and governance in outer space.",
      fullContent: `As space activity increases, countries deliberate regulatory frameworks to prevent conflicts and ensure peaceful usage. Opinions vary on the role of government vs. private sector in exploration and resource exploitation.`,
      link: "https://example.com/space_article2"
    }
  ],
  
  // Add more topics similarly as your app scales
};

const defaultSentimentPattern = {
  left: { positive: 45, neutral: 35, negative: 20 },
  center: { positive: 40, neutral: 50, negative: 10 },
  right: { positive: 35, neutral: 30, negative: 35 }
};

function Results() {
  const [searchParams] = useSearchParams();
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentimentData, setSentimentData] = useState(null);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
    const key = Object.keys(articlesByTopic).find(k => searchTopic.toLowerCase().includes(k));
    setArticles(key ? articlesByTopic[key] : []);
    setSentimentData(key ? sentimentPatterns[key] : defaultSentimentPattern);
    setLoading(false);
  };

  const handleReadMoreClick = (article) => setSelectedArticle(article);
  const closePopup = () => setSelectedArticle(null);

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
            {articles.length > 0 ? (
              <>
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
                        onReadMore={() => handleReadMoreClick(article)}
                      />
                    ))}
                  </div>
                </section>

                {sentimentData && (
                  <div className="sentiment-section">
                    <SentimentChart data={sentimentData} />
                  </div>
                )}
              </>
            ) : (
              <p>No articles found for this topic.</p>
            )}
          </>
        )}

        {selectedArticle && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={closePopup}>&times;</button>
              <h2>{selectedArticle.title}</h2>
              <div className="full-content">
                <p>{selectedArticle.fullContent}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Results;
