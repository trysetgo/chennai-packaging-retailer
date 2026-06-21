import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About.jsx';
import LandingPage from './pages/Landing.jsx';
import ContactPage from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
