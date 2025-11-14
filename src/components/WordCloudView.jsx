// EnhancedSimpleWordCloudView.jsx
import React, { useEffect, useState } from 'react';
import '../styles/WordCloudView.css';

const sampleWords = [
  { text: 'Bias', value: 50 },
  { text: 'Media', value: 40 },
  { text: 'News', value: 30 },
  { text: 'Echo', value: 20 },
  { text: 'Chamber', value: 15 },
  { text: 'Truth', value: 25 },
  { text: 'Opinion', value: 10 },
  { text: 'Focus', value: 18 },
  { text: 'Spectrum', value: 22 },
];

export default function EnhancedSimpleWordCloudView() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(sampleWords);
  }, []);

  // Calculate max and min for color scaling
  const maxValue = Math.max(...words.map((w) => w.value), 1);
  const minValue = Math.min(...words.map((w) => w.value), 0);

  // Function to map value to color (blue shades)
  const mapValueToColor = (value) => {
    const ratio = (value - minValue) / (maxValue - minValue);
    const blueIntensity = Math.floor(100 + ratio * 155); // 100-255
    return `rgb(50, 100, ${blueIntensity})`;
  };

  return (
    <div className="enhanced-wordcloud-container">
      <h2>News Bias Word Cloud (Enhanced)</h2>
      <div className="wordcloud">
        {words.map(({ text, value }, idx) => {
          const fontSize = 12 + (36 * (value - minValue)) / (maxValue - minValue);
          const bgColor = mapValueToColor(value);
          return (
            <div
              key={idx}
              className="word-box"
              style={{ fontSize: `${fontSize}px`, backgroundColor: bgColor }}
              title={`${text} (${value})`}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
