/** HELPER FUNCTIONS:
 * 'localStorage' related helper functions.
 * They are imported in GlobalContext.jsx to provide
 * global functionality that allows communication
 * between the whole App and localStorage.
*/


// GENERAL ONES 

// Function to get and parse data from any localStorage key
export const getLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

// Function to stringify and set data of any localStorage key
export const updateLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};


// DATABASE-SPECIFIC

// Function to get CV-Master logged-in user from localStorage
export const getCVMCurrentUser = () => {
  const storedValue = localStorage.getItem('CVMCurrentUser');
  return storedValue ? storedValue : null;
};

// Function to get CV-Master DB from localStorage
export const getCVMDatabase = () => {
  const storedValue = localStorage.getItem('CVMDatabase');
  return storedValue ? JSON.parse(storedValue) : null;
};

// Updates current user in localStorage
export const updateCVMCurrentUser = (username) => {
  localStorage.setItem('CVMCurrentUser', username);
}


// I/O

// Removes key that holds current user in localStorage
export const logout = () => {
  localStorage.removeItem('CVMCurrentUser');
  window.location.reload();
}