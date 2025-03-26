import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import Shop from './components/Shop';
import Jewellery from './components/Jewellery';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
