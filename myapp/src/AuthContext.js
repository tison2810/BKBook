import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUserInfo(userData);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserInfo({});
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userInfo, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
