import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const [ user, setUser ] = useState(null)
  const { updateCVMCurrentUser } = useGlobalContext()
  const navigate = useNavigate()
  
  // LOGIC for submit
  function submitUser(e) {
    e.preventDefault()
    
    if (!user.trim()) {
      return;
    }

    updateCVMCurrentUser(user);
    props.setAuthenticated(true);
    // window.location.reload();
  }

  function handleChange(e) {
    const { value } = e.target;
    setUser(value);
  }


  useEffect(() => {
    console.log("HI!")
  }, [])

  return (
    <>
      <h1>Hello from Login!</h1>
      <form onSubmit={(e) => submitUser(e)}>
        <label htmlFor="username">Type your user name:</label>
        <button type='submit'>LOGIN</button>
        <input onChange={(e) => handleChange(e)} id="username" type="text"/>
      </form>
    </>
  )
}