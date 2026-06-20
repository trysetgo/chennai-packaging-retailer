import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact.jsx';
import AboutPage from './pages/About.jsx';
import LandingPage from './pages/Landing.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
