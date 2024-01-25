import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './Login.css';

export default function Login(props) {

  const [inputValue, setInputValue] = useState(null)
  const { logout, authenticated, updateCVMCurrentUser } = useGlobalContext();

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
    <div className='login-wrapper py-5 my-5'>
      {!authenticated ? (
        <>
          <h1 className='text-center'>Welcome to CV MASTER</h1>
          <div id='form-div'>
            <form className='my-3' id='login-form' onSubmit={(e) => submitUser(e)}>
              <div id='input-and-label' className='py-4'>
                <label htmlFor="username" className='py-1'>Type your username:</label>
                <input className=''onChange={(e) => handleChange(e)} id="username" type="text" />
              </div>
              <button id='submit-btn' className='btn' type="submit">LOGIN</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div id='logout-area'>
            <h1 id='user-greeting' className='py-3'>Hi, user!</h1>
            <button id='logout-btn' onClick={logout} className="btn btn-lg">Log out?</button>
          </div>
        </>
      )}
    </div>
  )
}