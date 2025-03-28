import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import logo from '../assets/images/logo.png';
import telIcon from '../assets/images/i1.png';
import mailIcon from '../assets/images/i2.png';
import locationIcon from '../assets/images/i3.png';
import perlas from '../assets/images/perlas.jpg';
import granate from '../assets/images/granate.jpg';
import minerales from '../assets/images/minerales.jpg';
import plataTurca from '../assets/images/plata-turca.jpg';
import ambar from '../assets/images/ambar.jpg';

const Jewellery = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="jewellery" className="jewellery_page">

      <header className="header">
        <div className="header_top_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <Link to="/"><img src={logo} alt="Logo Sunaar" /></Link>
                </div>
              </div>
              <div className="col-lg-9 site_information">
                <div className="top_section_info">
                  <ul>
                    <li>Contáctanos <img src={telIcon} alt="Tel" /> <a href="tel:+523334488832">3334488832</a></li>
                    <li><img src={mailIcon} alt="Mail" /> <a href="mailto:contacto@sunaar.com">contacto@sunaar.com</a></li>
                    <li><img src={locationIcon} alt="Location" /> Guadalajara, México</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_bottom_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">Sobre nosotros</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/jewellery">Colecciones</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/shop">Tienda</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <h2>Colecciones</h2>
          <p className="large">
            En Sunaar, cada colección es única, diseñada exclusivamente para quienes buscan algo distinto. 
            Nuestros diseños reflejan autenticidad, sofisticación y un estilo único.
          </p>
        </div>
      </section>

      <section className="carousel_section">
        <div className="container">
          <div id="carouselColecciones" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {[0,1,2,3,4].map((item, index) => (
                <button key={index} type="button" data-bs-target="#carouselColecciones" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></button>
              ))}
            </div>

            <div className="carousel-inner">
              {[[perlas,'Perlas'],[granate,'Granate'],[minerales,'Minerales'],[plataTurca,'Plata Turca'],[ambar,'Ámbar']].map((item, index) => (
                <div key={item[1]} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item[0]} className="d-block mx-auto" alt={`Colección ${item[1]}`} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{`Colección ${item[1]}`}</h5>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselColecciones" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselColecciones" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer layout_padding">
        <div className="container">
          <p>&copy; 2025 Sunaar Jewelry. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default Jewellery;