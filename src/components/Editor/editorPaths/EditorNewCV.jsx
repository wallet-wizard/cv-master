import React, { useState, useEffect } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorNewCV(props) {

  const { setText, userData, setUserData, capitalize } = useGlobalContext()
  const value = userData.stagingCVTitle;
  console.log(userData.stagingCVTitle)
  return (
    <form className="d-flex flex-column editor-NewCV text-center justify-content-center align-items-center">
      <h3 className='m-5'> Let's create your new CV!</h3>
      <div className='container-fluid input-div mb-3 p-0 d-flex '>
        <label className='col-3 col-sm-2' htmlFor="CVTitle">Title :</label>
        <input name='CVTitle' className='col' value={value} onChange={(event) => setText({event, setState: setUserData})} id="username" type="text" />
      </div>
      <button className='btn btn-get-started' type="button">GET STARTED</button>
    </form>
  )
}


