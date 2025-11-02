import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/images/sunaar logo blanco.png';
import cartIcon from '../assets/images/CARRITO.png';     
import userIcon from '../assets/images/INICIO DE SESION.png';  

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: '#B68D40', paddingBottom: '10px', position: 'relative' }}>
      
      {/* Íconos esquina superior derecha */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <Link to="/cart">
          <img src={cartIcon} alt="Carrito" style={{ height: '20px', width: '20px' }} />
        </Link>
        {!user ? (
          <Link to="/login">
            <img src={userIcon} alt="Usuario" style={{ height: '20px', width: '20px' }} />
          </Link>
        ) : (
          <button 
            onClick={logout}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <img src={userIcon} alt="Cerrar sesión" style={{ height: '20px', width: '20px' }} />
          </button>
        )}
      </div>

      {/* LOGO hasta arriba y centrado */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '10px' }}>
        <Link to="/">
          <img src={logo} alt="Sunaar Logo" style={{ height: '80px' }} />
        </Link>
      </div>

      {/* Menú debajo del logo */}
      <ul style={{
        display: 'flex',
        listStyleType: 'none',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        flexWrap: 'wrap'
      }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Sobre Nosotros</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Tienda</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link>
        </li>
      
      </ul>
    </div>
  );
};

export default NavBar;
