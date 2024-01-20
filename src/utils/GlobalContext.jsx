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
      signupDate: new Date(),
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
    return storedValue ? storedValue : null;
  };

  const updateCVMCurrentUser = (username) => {
    localStorage.setItem('CVMCurrentUser', username);
  }

  // Function to update CV-Master DB in localStorage
  const updateCVMDatabase = (data) => {
    if (typeof data !== 'object' || data === null) {
      console.Error("Error updating new Data to local Storage. Data should be type: 'object");
      return;
    }
    
    // Get current Database
    let CVMDatabase = getCVMDatabase();
    
    // If Database doesn't exist, create one and push the data in
    if (!CVMDatabase) {
      CVMDatabase = [data];
      localStorage.setItem('CVMDatabase', JSON.stringify(CVMDatabase));
      return;
    }

    // Get current username
    const username = getCVMCurrentUser();

    // Check if username exists in current database
    const existingIndex = CVMDatabase.findIndex(obj => obj.userData.username === username);

    // If it does, only update that object
    if (existingIndex !== -1) {
      CVMDatabase[existingIndex] = {
        ...CVMDatabase[existingIndex],
        ...data
      };
    } else {
      // If no matching username is found, add a new object to the array
      CVMDatabase.push(data);
    }
    localStorage.setItem('CVMDatabase', JSON.stringify(CVMDatabase));
    return;
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

  // Create CVMDatabase if it doesn't exist
  if (!CVMDatabase) {
    updateLocalStorage('CVMDatabase', []);
  }

  // Check if current user is set
  if (!currentUser) {
    // Prompt user with login component
    // You can implement this logic here
    // For example, set a state to show a login modal
    // or navigate to a login page

    console.log('User not set. Prompting for login...');
  } else {
    // User is set, check if user exists in the database
    const userExists = CVMDatabase.some(obj => obj.userData.username === currentUser);

    if (userExists) {
      // User exists, retrieve user data from the database
      const userDataFromDB = CVMDatabase.find(obj => obj.userData.username === currentUser);

      // Update global state with user data
      setUserData(userDataFromDB);
    } else {
      // User is new, initiate a new stateful object
      // You might want to customize this based on your requirements
      setUserData({
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
      });
    }
  }

}, []);



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
      updateCVMDatabase,
      updateCVMCurrentUser
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
