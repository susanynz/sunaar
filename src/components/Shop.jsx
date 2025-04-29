import React, { useContext } from 'react';
import '../styles.css';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const Shop = () => {
  const { collections, productsByCollection } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <header>
        <h1>Joyería Sunaar</h1>
      </header>

      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <p className="large">
            Descubre nuestras colecciones exclusivas, cada una diseñada para resaltar tu estilo y personalidad.
          </p>
        </div>
      </section>

      <section className="layout_padding haf_layout section">
        <div className="container">
          {/* Recorrer las colecciones */}
          {collections.map((collection) => (
            <div key={collection.id} className="collection-section">
              <h2>{collection.name}</h2>
              <div className="row product_section">
                {/* Recorrer los productos de la colección */}
                {productsByCollection[collection.id]?.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <div className="product-card" style={{ marginBottom: '30px' }}>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <span style={{ color: '#d0aa90', display: 'block', marginBottom: '10px' }}>${product.price}</span>
                      {/* Botón para agregar al carrito */}
                      <button className="btn-add-cart" onClick={() => handleAddToCart(product)}>
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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