// src/components/Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js'; // Asegúrate que este path sea correcto

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMensaje('¡Usuario registrado con éxito!');
    } catch (error) {
      console.error(error.message);
      setMensaje('Error al registrar: ' + error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Register;