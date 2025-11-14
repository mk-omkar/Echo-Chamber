import React from "react";
import "../styles/About.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Header /> {/* Shared header at top */}

      {/* Header content without special wrapper */}
      <div className="about-header-content">
        <h1 className="about-title">About Echo Chamber</h1>
        <p className="about-subtitle">Where Voices Resonate, Ideas Amplify</p>
      </div>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Echo Chamber was born from a simple idea — to create a digital space
            where people could express, connect, and grow together. In a noisy
            online world, we envisioned a calm yet powerful platform where every
            opinion can echo and inspire positive change.
          </p>
          <p>
            From our humble beginnings as a small discussion forum, we’ve
            evolved into a dynamic community platform that empowers thousands to
            share insights, collaborate, and create real impact.
          </p>
        </div>
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Our Story"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-main">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To amplify meaningful voices and bring people together through open,
            respectful, and impactful dialogue.
          </p>
          <h2>What We Do</h2>
          <p>
            We provide a digital platform that allows users to share their
            perspectives, exchange ideas, and engage in transformative
            discussions that matter.
          </p>
          <h2>Our Vision</h2>
          <p>
            We dream of a connected world where every voice contributes to
            building a more understanding, creative, and inclusive society.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
            alt="Vision"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>✨ Transparency</h3>
            <p>We believe in honesty, openness, and authentic conversations.</p>
          </div>
          <div className="value-card">
            <h3>🌍 Inclusivity</h3>
            <p>Every perspective is welcome — we celebrate diversity of thought.</p>
          </div>
          <div className="value-card">
            <h3>💡 Innovation</h3>
            <p>We constantly evolve, blending creativity with technology.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-card">
            <h3>Nandini</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <h3>Omkar</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <h3>Nandini N</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <h3>Chethana</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Join Our Mission</h2>
        <p>
          We’re always looking for passionate people who believe in the power of
          connection and creativity. Be part of our growing community and help
          shape the conversations of tomorrow.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
