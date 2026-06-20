import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import LandingPage from './pages/Landing.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
