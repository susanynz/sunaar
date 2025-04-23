import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { ProductContext } from '../context/ProductContext';

const Shop = () => {
  const { collections, productsByCollection } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    // Aquí podrías integrar tu lógica de carrito
    console.log("Producto agregado al carrito:", product.name);
    // ejemplo: addToCart(product); si tienes una función en contexto
  };

  return (
    <div>
      <header>
        <h1>Joyería Sunaar</h1>
      </header>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/shop">Colecciones</Link>
        <Link to="/contact">Contacto</Link>
      </nav>

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
                      <span style={{ color: '#d0aa90', display: 'block', marginBottom: '10px' }}>
                        ${product.price}
                      </span>
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