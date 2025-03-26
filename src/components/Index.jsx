import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import perlas from '../assets/images/perlas.jpg';
import pro4 from '../assets/images/pro4.jpg';

const Index = () => {
  return (
    <div>
      <header>
        <h1>Joyería Sunaar</h1>
      </header>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/About">Sobre Nosotros</Link>
        <Link to="/Shop">Colecciones</Link>
        <Link to="/Contact">Contacto</Link>
      </nav>

      <section className="hero">
        <h2>Descubre Nuestras Colecciones</h2>
        <p>
          Elegancia y lujo en cada pieza de joyería artesanal. Hechas a mano en
          Guadalajara con materiales nobles.
        </p>
        <a href="#products" className="btn">Explorar Colecciones</a>
      </section>

      <section id="products" className="products">
        <div className="product-card">
          <img
            src={perlas}
            alt="Collar de perlas Sunaar Joyería"
          />
          <h4>Collar de Perlas Cultivadas</h4>
          <p>Perlas blancas de 8mm con cerradura de oro 14k.</p>
          <p className="price">$1,850 MXN</p>
          <a href="#contact" className="btn">Consultar</a>
        </div>

        <div className="product-card">
          <img
            src={pro4}
            alt="Anillo de diamantes Sunaar"
          />
          <h4>Anillo Solitario de Diamante</h4>
          <p>Diamante natural de 0.5ct en montura de plata esterlina.</p>
          <p className="price">$3,200 MXN</p>
          <a href="#contact" className="btn">Consultar</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          En Sunaar Joyería fusionamos técnicas ancestrales con diseño
          contemporáneo. Cada pieza es creada por artesanos mexicanos con
          estándares de calidad excepcionales.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Contáctanos</h2>
        <div className="contact-info">
          <ul>
            <li>
              📞 Teléfono:{' '}
              <a href="tel:+523334488832">333 448 8832</a>
            </li>
            <li>
              📧 Email:{' '}
              <a href="mailto:contacto@sunaar.com">contacto@sunaar.com</a>
            </li>
            <li>📍 Ubicación: Guadalajara, México</li>
          </ul>
        </div>
        <form id="contactForm">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            required
            autoComplete="name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tu mensaje o consulta sobre productos..."
            rows="5"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" className="btn">Enviar mensaje</button>
        </form>
        <div className="social-icons">
          <a href="https://facebook.com/tuperfil" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="Facebook de Sunaar Joyería"
            />
          </a>
          <a href="https://instagram.com/tuperfil" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram de Sunaar Joyería"
            />
          </a>
          <a href="https://wa.me/523334488832" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
              alt="WhatsApp de Sunaar Joyería"
            />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sunaar Joyería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
