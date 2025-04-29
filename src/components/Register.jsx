import styles from '../login.module.css'; // Importamos el mismo CSS bonito
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

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

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError('Error al iniciar sesión con Google. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div className={styles['background-container']}>
      <div className={styles['auth-container']}>
        <h1>Crea tu cuenta en Sunaar</h1>
        
        <form onSubmit={handleRegister}>
          <div className={styles['form-group']}>
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className={styles.btn}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        {error && <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>}

        <div className={styles['toggle-form']}>
          <button onClick={handleGoogleSignIn} disabled={loading} className={styles.btn}>
            {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;