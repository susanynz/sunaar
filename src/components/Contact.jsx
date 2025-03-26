import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import gold_c from '../assets/images/gold_c.png';

const Contact = () => {
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
              <div className="full heading_s1">
                <h2>Tu opinión nos importa</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact_section margin_top_30">
                <div className="row">
                  <div className="col-md-6">
                    <div className="gold_con">
                      <img src={gold_c} alt="Contacto Sunaar" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form_cont">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input type="text" name="name" placeholder="Nombre" />
                          </div>
                          <div className="field">
                            <input type="email" name="email" placeholder="Email" />
                          </div>
                          <div className="field">
                            <input type="text" name="phone" placeholder="Teléfono" />
                          </div>
                          <div className="field">
                            <textarea placeholder="Mensaje"></textarea>
                          </div>
                          <div className="field center">
                            <button type="submit">Enviar</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Sunaar Joyería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contact;
