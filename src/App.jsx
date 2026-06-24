import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Landing from "./pages/landing.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
