import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const [ inputValue, setInputValue ] = useState(null)
  const { logout, authenticated, updateCVMCurrentUser } = useGlobalContext()
  const navigate = useNavigate()
  
  // LOGIC for submit
  function submitUser(e) {
    e.preventDefault()
    
    if (!inputValue.trim()) {
      return;
    }

    updateCVMCurrentUser(inputValue);
    props.allowUserIn(true);
    // window.location.reload();
  }

  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);
  }


  useEffect(() => {
    console.log("HI!")
  }, [])

  return (
    <div>
    {!authenticated ? (
      <>
        <h1>Hello from Login!</h1>
        <form onSubmit={(e) => submitUser(e)}>
          <label htmlFor="username">Type your user name:</label>
          <input onChange={(e) => handleChange(e)} id="username" type="text" />
          <button type="submit">LOGIN</button>
        </form>
      </>
    ) : (
      <>
        <h1>Hi, user!</h1>
        <button onClick={logout} className="logout">Log out?</button>
      </>
    )}
  </div>
  )
}