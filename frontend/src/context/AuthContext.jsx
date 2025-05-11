import React, { createContext, useContext, useState, useEffect } from 'react';

// Auth key for localStorage
const AUTH_KEY = 'health_track_auth';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const userData = localStorage.getItem(AUTH_KEY);
    if (userData) {
      setCurrentUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
  }, []);

  // Login function
  const login = (userData) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Update user data
  const updateUser = (userData) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
    updateUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};