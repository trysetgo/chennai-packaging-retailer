import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Landing from "./pages/Landing.jsx";

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
