import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Estado de carga
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);  // Activar estado de carga

    // Validación simple de correo
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo ya está registrado. ¿Deseas iniciar sesión?');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setError('Error al registrar. Intenta nuevamente.');
      }
    }

    setLoading(false);  // Desactivar estado de carga
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      await signInWithPopup(auth, provider);
      navigate('/');  // Redirige al usuario a la página principal después de iniciar sesión con Google
    } catch (err) {
      setError('Error al iniciar sesión con Google. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>  {/* Botón deshabilitado mientras carga */}
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {/* Botón para iniciar sesión con Google */}
      <div className="google-signin-container" style={{ marginTop: '20px' }}>
        <button onClick={handleGoogleSignIn} disabled={loading} style={{ padding: '10px', background: '#4285F4', color: 'white', border: 'none', cursor: 'pointer' }}>
          {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
        </button>
      </div>
    </div>
  );
};

export default Register;