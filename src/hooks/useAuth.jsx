// src/hooks/useAuth.js

import { useEffect, useState } from 'react';
import { auth } from '../components/firebase.js';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe(); // Limpia al desmontar
  }, []);

  return user;
};

export default useAuth;