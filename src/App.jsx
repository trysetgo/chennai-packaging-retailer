import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact.jsx';
import LandingPage from './pages/Landing.jsx';
import AboutPage from './pages/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
