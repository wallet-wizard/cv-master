import React, { useState, useEffect, useRef } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../utils/GlobalContext';

export default function EditorNewCV(props) {
  const { setText, userData, setUserData, hideEditorOptions, setHideEditorOptions } = useGlobalContext();
  const value = userData.stagingCVTitle;
  const navigate = useNavigate();
  const inputRef = useRef(null); // Create a ref for the input element

  // Hide editor Selections
  setHideEditorOptions(true)

  // LOGIC for submit
  function handleGetStarted(e) {
    e.preventDefault();
    console.log('No Title value inserted!');
    if (value) {
      navigate('basic-info');
    }
  }

  // Use useEffect to focus on the input when the component mounts
  useEffect(() => {
    if (!value && inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  return (
    <form onSubmit={(e) => handleGetStarted(e)} className="d-flex flex-column editor-NewCV text-center justify-content-center align-items-center">
      <h3 className='m-5'> Let's create your new CV!</h3>
      <div className='container-fluid input-div mb-3 p-0 d-flex '>
        <label className='col-3 col-sm-2' htmlFor="CVTitle">Title :</label>
        <input
          ref={inputRef} // Assign the ref to the input element
          name='CVTitle'
          className='col'
          value={value}
          onChange={(event) => setText({ event, setState: setUserData })}
          id="username"
          type="text"
        />
      </div>
      <button className='btn btn-get-started' type="submit">GET STARTED</button>
    </form>
  );
}
