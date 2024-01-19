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
    userData: {
      username: 'userTest1',
      lastLogin: new Date(),
    },
    stagingCV: {
      title: '',
      summary: '',
      skills: '',
      experience: ['1', '2', '3'],
      education: ['1', '2', '3'],
    },
    userCVs: []
  })

  // New CV Data
  const [newCV, setNewCV] = useState({
    title: '',
    summary: '',
    skills: [],
    experience: [],
    education: [],
  });

  // Function to get data from any localStorage key
  const getLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // Function to update data of any localStorage key
  const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Function to get CV-Master DB from localStorage
  const getCVMDatabase = () => {
    const storedValue = localStorage.getItem('CVMDatabase');
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // Function to get CV-Master logged-in user from localStorage
  const getCVMCurrentUser = () => {
    const storedValue = localStorage.getItem('CVMCurrentUser');
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // Function to update CV-Master DB in localStorage
  const updateCVMDatabase = (data) => {
    // Discard update if data received is not of type 'object'
    if (typeof data !== 'object' || data === null) {
      console.Error("Error updating new Data to local Storage. Data should be type: 'object");
      return;
    }





    // Get current Database
    const CVMDatabase = getCVMDatabase();
    // if (CVMDatabase === null) {
    //   // ...
    // }
    // const username = getCVMCurrentUser();

    // // Check if username exists in current database
    // const existingIndex = CVMDatabase.findIndex(obj => obj.userData.username === username);

    // // If it does, only update that object
    // if (existingIndex !== -1) {
    //   CVMDatabase[existingIndex] = {
    //     ...CVMDatabase[existingIndex],
    //     ...data
    //   };
    // } else {
    //   // If no matching username is found, add a new object to the array
    //   const newObj = {
    //     userData: {
    //       lastLogin: new Data()
    //     },
    //     ...data
    //   };

    //   CVMDatabase.push(newObj);
    // }
  };


  // Sets [name]: value to stateful object
  const setText = (event, setState) => {
    const { name, value } = event.target;
    // console.log(name, '\n', value)
    setState((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  // RUNS ON EVERY APP REFRESH
  useEffect(() => {
    const currentUser = getCVMCurrentUser();
    const CVMDatabase = getCVMDatabase();

    // Create CMDatabase if it doesn't exist
    if (!CVMDatabase) {
      updateCVMDatabase([]);
    }

    // Check if CVMCurrentUser key exists in local storage
    if (currentUser && CVMDatabase) {
      // Check if user exists
      const CVMUserData = CVMDatabase.find(obj => obj?.userData?.username === currentUser) || null;

      // If user exists, set data
      if (CVMUserData) {
        setUserData((prev) => {
          return {
            ...prev,
            ...CVMUserData
          }
        });
      } else {
        const addNewUser = {
          userData: {
            username: currentUser,
            lastLogin: new Date(),
          },
          stagingCV: {
            title: '',
            summary: '',
            skills: '',
            experience: [],
            education: [],
          },
          userCVs: []
        };
      }
    }
  }, [])

  // // Example useEffect for updating data to localStorage on specific state changes
  // useEffect(() => {
  //   // Update data in localStorage when userData or newCV changes
  //   updateLocalStorage('userData', userData);
  //   updateLocalStorage('newCV', newCV);
  // }, [userData, newCV]);


  return (
    <GlobalContext.Provider value={{
      newCV,
      setNewCV,
      userData,
      setUserData,
      getLocalStorage,
      updateLocalStorage,
      setText,
      getCVMCurrentUser,
      getCVMDatabase,
      updateCVMDatabase
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
