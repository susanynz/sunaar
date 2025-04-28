import styles from '../login.module.css';  // Importamos el módulo CSS
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado:', userCredential.user);
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta.');
      } else if (err.code === 'auth/user-not-found') {
        setError(
          <>
            Este correo no está registrado.{' '}
            <Link to="/register" className={styles['toggle-form-link']}>
              ¿Deseas registrarte?
            </Link>
          </>
        );
      } else if (err.code === 'auth/invalid-email') {
        setError('Correo no válido.');
      } else {
        setError('Error al iniciar sesión. Intenta de nuevo.');
      }
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError('No se pudo iniciar sesión con Google.');
    }
  };

  return (
    <div className={styles['background-container']}>
      <div className={styles['auth-container']}>
        <h1>Bienvenida/o a Sunaar</h1>

        <form onSubmit={handleLogin} id="authForm">
          <div className={styles['form-group']}>
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@sunaar.com"
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
            {loading ? 'Cargando...' : 'Ingresar'}
          </button>
        </form>

        <div className={styles['toggle-form']}>
          ¿Primera vez?{' '}
          <Link to="/register" className={styles['toggle-form-link']}>
            Crea una cuenta
          </Link>
        </div>

        <div className={styles['toggle-form']} style={{ marginTop: '1rem' }}>
          <button onClick={handleGoogleLogin} className={styles.btn}>
            Iniciar sesión con Google
          </button>
        </div>

        {error && (
          <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;