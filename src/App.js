import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import Shop from './components/Shop';
import Jewellery from './components/Jewellery';
import Contact from './components/Contact';

// Importa el ProductProvider
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;