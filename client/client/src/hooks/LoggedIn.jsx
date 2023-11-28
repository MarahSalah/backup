import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const LoggedUser = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    //logic 
    setUser(userData);
  };

  const logout = () => {
    // logic
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};