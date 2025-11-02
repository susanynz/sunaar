import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import '../styles.css';
import perlas from '../assets/images/perlas.jpg';
import granate from '../assets/images/granate.jpg';
import minerales from '../assets/images/minerales.jpg';
import plataTurca from '../assets/images/plata-turca.jpg';
import ambar from '../assets/images/ambar.jpg';

const Index = () => {
  const colecciones = [
    { src: perlas, label: 'Perlas' },
    { src: granate, label: 'Granate' },
    { src: minerales, label: 'Minerales' },
    { src: plataTurca, label: 'Plata Turca' },
    { src: ambar, label: 'Ámbar' }
  ];

  return (
    <div>
      <header>
        <h1>Joyería Sunaar</h1>
      </header>

      <section className="layout_padding section padding_bottom_0" style={{ paddingTop: '0px' }}>
        <Container>
          <p className="large text-center">
            En Sunaar tenemos colecciones únicas que resaltan el verdadero lujo de tener lo irrepetible
          </p>
        </Container>
      </section>

      <section className="carousel_section">
        <Container>
          <Carousel fade interval={3000}>
            {colecciones.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid"
                  src={item.src}
                  alt={`Colección ${item.label}`}
                />
                <Carousel.Caption>
                  <h5>{`Colección ${item.label}`}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <footer className="footer layout_padding">
        <Container>
          <p>&copy; 2025 Sunaar Jewelry. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Index;
