import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from '../components/firebase'; // Este es el archivo que contiene la instancia de auth

// Crear el contexto
export const AuthContext = createContext();

// Exportar AuthProvider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Configurar persistencia para la sesión
  useEffect(() => {
    const configurePersistence = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        console.log("Persistencia configurada correctamente");
      } catch (error) {
        console.error("Error al configurar persistencia", error);
      }
    };

    configurePersistence();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Estado de autenticación cambiado:", currentUser);  // Verifica si el usuario cambia correctamente
      setUser(currentUser);
    });

    return () => unsubscribe(); // Limpieza al desmontar
  }, []);

  const logout = async () => {
    await signOut(auth); // Cerrar sesión
    console.log("Sesión cerrada correctamente");
    setUser(null); // Limpia el estado de usuario
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};