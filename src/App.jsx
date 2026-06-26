import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing.jsx';
import ContactPage from './pages/Contact.jsx';
import AboutPage from './pages/About.jsx';
import TestPage from './pages/Test.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
