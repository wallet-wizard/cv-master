import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialStaging } from './defaultValues';

import {
  getLocalStorage,
  updateLocalStorage,
  getCVMCurrentUser,
  getCVMDatabase,
  updateCVMCurrentUser,
  logout
} from './helperLocalStorage';


// We are creating / initializing the Context first
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

  // Global States
  const [userData, setUserData] = useState(null)
  const [authenticated, setAuthenticated] = useState(false);



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
    if (!username) {
      setAuthenticated(false);
    }
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



  // State updaters

  // Sets [name]: value to stateful object
  const setText = ({ event, setState, index }) => {
    const { id, name, value } = event.target;
    const nameArr = name.split('-');

    setState((prev) => {
      if (nameArr.length === 1) {
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [name]: value,
          },
        };
      }

      if (nameArr[1] === "header") {
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [nameArr[0]]: {
              ...prev.stagingCV[nameArr[0]],
              [nameArr[1]]: value,
            },
          },
        };
      }

      if (nameArr[1] === "item") {
        console.log("Updating Item...", index);
        const arr = prev.stagingCV[nameArr[0]][nameArr[0]];
        const arrLength = arr.length;
        const newArr = [...arr, value];
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [nameArr[0]]: {
              ...prev.stagingCV[nameArr[0]],
              [nameArr[0]]: arrLength < 1 ? newArr : [...arr.slice(0, index), value, ...arr.slice(index + 1)],
            },
          },
        };
      }
      // Return the previous state if none of the conditions match
      return prev;
    });
  };



  // Helper functions

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  // SAVE TO LOCAL STORAGE FUNCTIONALITY

  // Saves CV to userCV array in localStorage
  function saveCV(CVTitle=null) {

    CVTitle = prompt("CV Title?")
    if (!CVTitle) {
      return;
    }

    // 1. Create new-CV Object
    const newCV = {
      title: [CVTitle],
      lastModified: new Date(),
      data: {
        ...initialStaging
      }
    }

    // Update if CV Title exists - TBC

    // Update "local" userData
    const newUserData = {
      ...userData,
      userCVs: [
        ...userData.userCVs,
        newCV
      ],
      stagingCV: {
        ...userData.stagingCV
      }
    }
    setUserData((prev) => newUserData);

    // Update localStorage
    updateCVMDatabase(newUserData)

    // Console log:
    console.log("DB Updated:")
    console.log(getCVMDatabase())
  }


  
  // RUNS ON EVERY APP REFRESH + ON USER CHANGE
  useEffect(() => {
    if (!authenticated) {
      console.log("Not authenticated. Returning...")
      return;
    } else {
      console.log("User authenticated.")
    }
    const currentUser = getCVMCurrentUser();
    const CVMDatabase = getCVMDatabase();

    // Create CVMDatabase if it doesn't exist
    if (!CVMDatabase) {
      updateLocalStorage('CVMDatabase', []);
    }

    // Check if current user is set
    if (!currentUser) {
      console.log('User not set. Prompting for login...');
      return;
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
        setUserData({
          userData: {
            username: currentUser,
            signupDate: new Date(),
          },
          stagingCV: initialStaging,
          userCVs: []
        });
      }
    }
  }, [authenticated]);


  return (
    <GlobalContext.Provider value={{
      userData,
      setUserData,
      getLocalStorage,
      updateLocalStorage,
      setText,
      getCVMCurrentUser,
      getCVMDatabase,
      updateCVMDatabase,
      updateCVMCurrentUser,
      authenticated,
      setAuthenticated,
      logout,
      capitalize,
      saveCV
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
