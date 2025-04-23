// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import Shop from './components/Shop';
import Jewellery from './components/Jewellery';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // Si tienes una página privada

import { ProductProvider } from './context/ProductContext';
import NavBar from './components/NavBar';

import useAuth from './hooks/useAuth'; // Hook personalizado para detectar usuario

function App() {
  const user = useAuth(); // Verificamos si hay usuario autenticado

  return (
    <ProductProvider>
      <Router>
        <NavBar user={user} /> {/* Puedes pasar el user al NavBar si quieres mostrar "Cerrar sesión", etc. */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Ejemplo de ruta privada */}
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;