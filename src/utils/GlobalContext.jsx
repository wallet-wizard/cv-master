import React, { createContext, useContext, useEffect, useState } from 'react';

// We are initializing the Context
const GlobalContext = createContext();


// Provider component
/*
The EditorProvider component is a "provider" for the GlobalContext. 
It provides ALL functions, properties etc.. we want to access on the
wrapped component and its children.
(The children prop is rendered within this provider, 
allowing any components wrapped with EditorProvider 
to access the provided context).
*/
export const GlobalContextProvider = ({ children }) => {
  // User Data
  const [userData, setUserData] = useState({
    username: '',
    lastLogin: new Date(),
    storedCVs: []
  })

  // New CV Data
  const [newCV, setNewCV] = useState({
    title: '',
    summary: '',
    skills: [],
    experience: [],
    education: [],
  });


  
  // Function to get data from localStorage
  const getLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // Function to update data in localStorage
  const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };


  // Example useEffect for updating data to localStorage on specific state changes
  useEffect(() => {
    // Update data in localStorage when userData or newCV changes
    updateLocalStorage('userData', userData);
    updateLocalStorage('newCV', newCV);
  }, [userData, newCV]);


  return (
    <GlobalContext.Provider value={{
      newCV,
      setNewCV,
      userData,
      setUserData,
      getLocalStorage,
      updateLocalStorage
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
