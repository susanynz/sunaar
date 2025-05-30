// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import { CartProvider } from './context/CartContext'; // nuevo import

import { ProductProvider } from './context/ProductContext';
import NavBar from './components/NavBar';

import { AuthProvider } from './context/AuthContext'; // Importamos solo el AuthProvider

// Componente para rutas privadas
import PrivateRoute from './components/PrivateRoute'; // Lo creamos para manejar rutas privadas

function App() {
  return (
    <AuthProvider> {/* Envuelves tu aplicación con AuthProvider */}
      <ProductProvider>
      <CartProvider>
        <Router>
          <NavBar /> {/* Agregamos el NavBar para navegación */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/index" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            
            {/* Usamos PrivateRoute para proteger la ruta privada */}
            <Route
              path="/private"
              element={<PrivateRoute element={<Index />} />} // Solo accesible si hay usuario autenticado
            />
          </Routes>
        </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;