import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">Inicio</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/shop">Tienda</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/jewellery">Joyería</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact">Contacto</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/login">Iniciar sesión</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;