import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ position: 'relative' }}>
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

        {/* NUEVAS PÁGINAS */}
        <li style={{ margin: '0 10px' }}>
          <Link to="/cart">Carrito</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/payment">Pago</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/confirmation">Confirmación</Link>
        </li>

        {!user && (
          <>
            <li style={{ margin: '0 10px' }}>
              <Link to="/login">Iniciar sesión</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
      </ul>

      {/* Usuario y botón de cerrar sesión */}
      {user && (
        <div style={{ position: 'absolute', top: 10, right: 20, textAlign: 'right' }}>
          <p style={{ margin: 0 }}>Hola, {user.email}</p>
          <button onClick={logout} style={{ marginTop: '5px' }}>Cerrar sesión</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;