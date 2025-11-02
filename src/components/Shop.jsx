import React, { useContext, useState } from 'react';
import '../styles.css';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const Shop = () => {
  const { collections, productsByCollection } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const categories = ['Todas', 'Perlas', 'Granate', 'Minerales', 'Plata Turca', 'Ámbar'];

  return (
    <div>
      <header>
        <h1>Tienda</h1>
      </header>

      {/* Botones de Categorías */}
      <section className="layout_padding section padding_bottom_0">
        <div className="container" style={{ textAlign: 'center' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                margin: '5px',
                padding: '10px 20px',
                backgroundColor: selectedCategory === category ? '#b88c6a' : '#B68D40',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Texto descriptivo */}
      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <p className="large" style={{ textAlign: 'center' }}>
            Descubre nuestras colecciones exclusivas, cada una diseñada para resaltar tu estilo y personalidad.
          </p>
        </div>
      </section>

           {/* Productos */}
      {/* Productos */}
      <section className="py-5">
        <div className="container">
          {collections.map((collection) => (
            (selectedCategory === 'Todas' || collection.name === selectedCategory) && (
              <div key={collection.id} className="mb-5">
                <h2 className="titulo-sunaar text-center mb-4">{collection.name}</h2>
                <div className="row justify-content-center">
                  {productsByCollection[collection.id]?.map((product) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                      <div className="product-card shadow-sm h-100 d-flex flex-column justify-content-between">
                        <img src={product.image} alt={product.name} className="product-image mb-3" />
                        <div className="product-info">
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-description">{product.description}</p>
                          <span className="product-price">${product.price}</span>
                        </div>
                        <div className="text-center">
                          <button
                            onClick={() => handleAddToCart(product)}
                            style={{
                              margin: '10px 0 0 0',
                              padding: '10px 20px',
                              backgroundColor: '#B68D40',
                              color: 'white',
                              border: 'none',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              fontSize: '16px',
                            }}
                          >
                            Agregar al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sunaar Joyería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Shop;
