// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const { user } = useContext(AuthContext); // Usamos el contexto de autenticación

  return user ? element : <Navigate to="/login" />; // Si hay usuario, renderiza el componente; si no, redirige al login
};

export default PrivateRoute;