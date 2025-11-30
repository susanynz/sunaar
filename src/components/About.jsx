import React from 'react';
import '../styles.css';

import videoImg from '../assets/images/video_img.jpg';
import bg10 from '../assets/images/bg10.jpg';

const About = () => {
  return (
    <div>
      {/* Header sin margen extra */}
      <header className="text-center" style={{ marginBottom: '0.5rem', paddingTop: '1rem' }}>
        <h1 style={{ marginBottom: 0 }}>Sobre nosotros</h1>
      </header>

      {/* Sección principal de descripción */}
      <section style={{ paddingTop: '0.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 mb-4">
              <p className="lead" style={{ marginTop: 0 }}>
                Somos una marca de joyería dedicada a crear piezas únicas que combinan tradición,
                diseño excepcional y materiales de alta calidad. Con un enfoque en la autenticidad y la
                elegancia atemporal, Sunaar busca brindar joyas que cuenten historias y resalten la belleza
                natural de quienes las llevan.
              </p>
            </div>
            <div className="col-lg-8">
              <img src={videoImg} alt="Sunaar" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Lujo accesible */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 mb-4">
              <h2 className="mb-3">Sobre nosotros</h2>
              <p className="lead">
                Sunaar redefine el lujo, ofreciendo joyas excepcionales diseñadas con materiales de alta calidad
                y un estilo atemporal. Creemos que el lujo debe estar al alcance de todos, por eso creamos
                piezas únicas que combinan sofisticación y elegancia sin comprometer tu presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Colecciones únicas */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="mb-3">
            Misión, visión y <span style={{ color: '#937659' }}>valores</span>
          </h3>
          <p className="mb-4">
            En Sunaar, cada colección es única, diseñada exclusivamente para quienes buscan algo distinto, buscamos crear piezas artesanales auténticas y de calidad, presentadas en una plataforma web clara y confiable que facilite la experiencia del cliente. 
            Aspiramos a consolidarnos como una marca  reconocida por su diseño y cercanía. Nuestros valores —transparencia, confianza, artesanía y sencillez— guían tanto nuestro trabajo como la forma en que nos relacionamos con quienes eligen nuestras joyas.
          </p>
          <img src={bg10} alt="Joyas Sunaar" className="img-fluid rounded" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-4 bg-dark text-white">
        <p className="mb-0">&copy; 2025 Sunaar Joyería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default About;
