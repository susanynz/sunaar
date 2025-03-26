import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';
import pro31 from '../assets/images/pro31.jpg';
import pro4 from '../assets/images/pro4.jpg';
import pro5 from '../assets/images/pro5.jpg';

const Shop = () => {
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
          <div className="row">
            <div className="col-lg-12">
              <div className="full">
                <p className="large">
                  Sunaar Jewelry es un destino exclusivo donde la elegancia y la autenticidad se encuentran. Nuestra tienda ofrece una cuidada selección de joyas diseñadas para resaltar la belleza de cada persona, con piezas únicas que combinan materiales de alta calidad y un diseño atemporal. En Sunaar, cada joya cuenta una historia, y estamos aquí para ayudarte a contar la tuya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding haf_layout section">
        <div className="container">
          <div className="row product_section">
            {[
              { img: pro1, title: 'Collar de perlas', price: '$100' },
              { img: pro2, title: 'Collar de granate', price: '$100' },
              { img: pro3, title: 'Collar de ámbar', price: '$100' },
              { img: pro31, title: 'Collar de perlas', price: '$100' },
              { img: pro4, title: 'Anillo de plata', price: '$100' },
              { img: pro5, title: 'Pulsera de cuarzos', price: '$100' },
            ].map((producto, index) => (
              <div className="col-md-4" key={index}>
                <div className="full product_blog margin_top_30">
                  <img src={producto.img} alt={producto.title} />
                  <h3>
                    <span style={{ color: '#d0aa90' }}>{producto.price}</span> {producto.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sunaar Joyería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Shop;