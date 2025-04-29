import React from 'react';
import '../styles.css'; 

import videoImg from '../assets/images/video_img.jpg';
import bg10 from '../assets/images/bg10.jpg';

const About = () => {
  return (
    <div>
      <header>
        <h1>Sobre nosotros</h1>
      </header>

      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="full heading_s1">

              </div>
              <div className="full">
                <p className="large">
                  Somos una marca de joyería dedicada a crear piezas únicas que combinan tradición,
                  diseño excepcional y materiales de alta calidad. Con un enfoque en la autenticidad y la
                  elegancia atemporal, Sunaar busca brindar joyas que cuenten historias y resalten la belleza
                  natural de quienes las llevan.
                </p>
              </div>
            </div>
            <div className="col-md-12 text_align_center">
              <img src={videoImg} alt="Sunaar" />
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding section padding_bottom_0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="full heading_s1">
                <h2>Lujo accesible</h2>
              </div>
              <div className="full">
                <p className="large">
                  Sunaar redefine el lujo, ofreciendo joyas excepcionales diseñadas con materiales de alta calidad
                  y un estilo atemporal. Creemos que el lujo debe estar al alcance de todos, por eso creamos
                  piezas únicas que combinan sofisticación y elegancia sin comprometer tu presupuesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout_padding haf_layout section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11">
              <div className="container">
                <div className="col-md-8">
                  <div className="full banner_section">
                    <h3>
                      Colecciones <span style={{ color: '#937659' }}>únicas</span>
                    </h3>
                    <p>
                      En Sunaar, cada colección es única, diseñada exclusivamente para quienes buscan algo distinto...
                    </p>
                  </div>
                  <div className="text_align_center">
                    <img className="img-about" src={bg10} alt="Joyas Sunaar" />
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

export default About;