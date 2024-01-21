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
      skills: {
        header: '### Skills',
        skills: []
      },
      experience: {
        header: '### Work Experience',
        experience: []
      },
      education: [],
    },
    userCVs: []
  })

  const [authenticated, setAuthenticated] = useState(false);


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

  // Sets [name]: value to stateful object
  const setText = ({ event, setState, index }) => {
    const { id, name, value } = event.target;

    const nameArr = name.split('-');

    if (nameArr.length === 1) {
      setState((prev) => {
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [name]: value,
          },
        };
      });
    }

    if (nameArr[1] === "header") {
      setState(prev => {
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [nameArr[0]]: {
              ...prev.stagingCV[nameArr[0]],
              [nameArr[1]]: value
            }
          }
        }
      })
    }

    if (nameArr[1] === "item") {
      console.log("Cominng..")
      console.log(index)
      setState(prev => {
        const arr = prev.stagingCV[nameArr[0]][nameArr[0]]
        const arrLength = arr.length;
        const newArr = [...arr, value]
        return {
          ...prev,
          stagingCV: {
            ...prev.stagingCV,
            [nameArr[0]]: {
              ...prev.stagingCV[nameArr[0]],
              [nameArr[0]]: arrLength < 1 ? newArr : [...arr.slice(0, index), value, ...arr.slice(index + 1)]
            }
          }
        }
      })
    }

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
            signupDate: new Date(),
          },
          stagingCV: {
            title: '',
            summary: '',
            skills: {
              header: '### Skills',
              skills: stageSkills
            },
            experience: sampleExp,
            education: [],
          },
          userCVs: []
        });
      }
    }

  }, []);

  const logout = () => {
    localStorage.removeItem('CVMCurrentUser');
    window.location.reload();
  }

  // Default Data:
  const stageSkills = [
    `- **Languages:** HTML, CSS, JavaScript`,
    `- **Frameworks/Libraries:** React, Vite`,
    `- **Responsive Design:** Bootstrap, CSS Grid, Flexbox`,
    `- **Version Control:** Git, GitHub`,
    `- **Build Tools:** Webpack, npm, Vite`,
    `- **Testing:** Jest, Enzyme`,
    `- **UI/UX Design:** Figma, Adobe XD`,
    `- **Web Performance Optimization**`

  ]

  const sampleExp = `### Senior Front-end Developer | [Company Name] | [Location] | [Month Year] - Present
  
  - Led the development of [Project Name], resulting in [specific achievements].
  - Collaborated with the design team to implement pixel-perfect and responsive user interfaces.
  - Implemented performance optimizations, reducing page load times by [percentage].
  - Mentored junior developers, conducting code reviews and providing technical guidance.`


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
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
