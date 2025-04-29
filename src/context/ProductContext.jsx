// src/context/ProductContext.js 
import React, { createContext } from 'react';

// Importación de imágenes
import pro1 from '../assets/images/pro1.jpg';
import pro5 from '../assets/images/pro5.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';
import pro31 from '../assets/images/pro31.jpg';
import pro4 from '../assets/images/pro4.jpg';

// Simulación de colecciones y productos
const collections = [
  { id: 'col1', name: 'Perlas' },
  { id: 'col2', name: 'Cuarzos y Ambar' },
  { id: 'col3', name: 'Anillos' },
];

const products = [
    { id: 'p1', name: 'Collar de perlas', price: 100, image: pro1, collectionId: 'col1', description: 'Elegante y clásico.' },
    { id: 'p2', name: 'Collar de Cuarzo', price: 120, image: pro2, collectionId: 'col2', description: 'Moderno y energético.' },
    { id: 'p3', name: 'Collar de granate', price: 100, image: pro31, collectionId: 'col1', description: 'Un toque de color.' },
    { id: 'p4', name: 'Pulsera de cuarzos', price: 110, image: pro5, collectionId: 'col2', description: 'Para energía positiva.' },
    { id: 'p6', name: 'Collar de ámbar', price: 110, image: pro3, collectionId: 'col2', description: 'Brilla con la luz.' }, 
    { id: 'p5', name: 'Anillo de plata', price: 80, image: pro4, collectionId: 'col3', description: 'Sencillez y elegancia.' },
  ];

const productsByCollection = collections.reduce((acc, col) => {
  acc[col.id] = products.filter(p => p.collectionId === col.id);
  return acc;
}, {});

// Creamos el contexto
export const ProductContext = createContext();

// Componente proveedor
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ collections, productsByCollection }}>
      {children}
    </ProductContext.Provider>
  );
};