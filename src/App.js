import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import About from './pages/About';
import Footer from './components/Footer';   // <-- Import Footer
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>

      {/* All pages will load here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        
      </Routes>

      {/* Footer should be outside Routes */}
      <Footer />

    </Router>
  );
}

export default App;
