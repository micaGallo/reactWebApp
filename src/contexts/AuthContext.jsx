import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  authToken: null,
  setAuthToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(!!token);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (authToken && authToken !== token) {
      localStorage.setItem('authToken', authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }} >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);