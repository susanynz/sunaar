// src/context/ProductContext.js 
import React, { createContext } from 'react';

// Importación de imágenes
import pro1 from '../assets/images/pro1.jpg';
import pro5 from '../assets/images/pro5.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';
import pro31 from '../assets/images/pro31.jpg';
import pro4 from '../assets/images/pro4.jpg';
import anillogranate from '../assets/images/anillogranate.jpg';
import collarperlasplata from '../assets/images/collarperlasplata.webp';
import juegoperlas from '../assets/images/juegoperlas.jpg';
import juegogranate from '../assets/images/juegogranate.jpg';
import venturina from '../assets/images/venturina.webp';
import collaropalo from '../assets/images/collaropalo.jpg';
import juegoplata from '../assets/images/juegoplata.avif';
import collarplata from '../assets/images/collarplata.jpg';
import juegoambar from '../assets/images/juegoambar.avif';
import collarambar from '../assets/images/collarambar.jpg'

// Simulación de colecciones y productos
const collections = [
  { id: 'col1', name: 'Perlas' },
  { id: 'col2', name: 'Granate' },
  { id: 'col3', name: 'Minerales' },
  { id: 'col4', name: 'Plata Turca' },
  { id: 'col5', name: 'Ámbar' },
];

const products = [
    { id: 'p1', name: 'Collar de perlas', price: 100, image: pro1, collectionId: 'col1', description: 'Elegante collar de perlas clásico con broche de oro ' },
    { id: 'p2', name: 'Collar de perlas multihilos', price: 100, image: collarperlasplata, collectionId: 'col1', description: 'Elegante y clásico collar de perlas multihilo con separadores de plata' },
    { id: 'p3', name: 'Juego completo de perlas', price: 100, image: juegoperlas, collectionId: 'col1', description: 'Juego completo de perlas clásico con pulsera, aretes y collar' },
    { id: 'p4', name: 'Collar de granate ', price: 120, image: pro2, collectionId: 'col2', description: 'Moderno y energético.' },
    { id: 'p5', name: 'Anillo de granate', price: 100, image: anillogranate, collectionId: 'col2', description: 'Elegante sortija con una delicada piedra de granate.' },
    { id: 'p6', name: 'Pulsera de cuarzos', price: 110, image: pro5, collectionId: 'col3', description: 'Para energía positiva.' },
    { id: 'p7', name: 'Collar de ámbar', price: 110, image: pro3, collectionId: 'col5', description: 'Brilla con la luz.' }, 
    { id: 'p8', name: 'Anillo de plata', price: 80, image: pro4, collectionId: 'col4', description: 'Sencillez y elegancia.' },
    { id: 'p9', name: 'Juego de granate', price: 110, image: juegogranate, collectionId: 'col2', description: 'Juego de granate con terminado en plata' },
    { id: 'p10', name: 'Collar de venturina', price: 110, image: venturina, collectionId: 'col3', description: 'Collar de venturina'},
    { id: 'p11', name: 'Collar de ópalo amarillo', price: 110, image: collaropalo, collectionId: 'col3', description: 'Collar de opalo amarillo con doble hilo y dije'},
    { id: 'p12', name: 'Juego de plata', price: 110, image: juegoplata, collectionId: 'col4', description: 'Juego de plata con collar y aretes'},
    { id: 'p12', name: 'Collar de plata', price: 110, image: collarplata, collectionId: 'col4', description: 'Collar de plata clásico'},
    { id: 'p13', name: 'Juego de ámbar', price: 110, image: juegoambar, collectionId: 'col5', description: 'Juego de ámbar montado en plata'},
    { id: 'p14', name: 'Collar de ámbar chiapaneco', price: 110, image: collarambar, collectionId: 'col5', description: 'Collar de ámbar chiapaneco'},

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