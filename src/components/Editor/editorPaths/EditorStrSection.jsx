import React, { useState, useEffect } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorStrSection(props) {

    const { setText, userData, setUserData, capitalize, hideEditorOptions, setHideEditorOptions } = useGlobalContext()
    const { section, elements } = props
    
   // Hide editor Selections
   useEffect(()=> {
    props.setIndex();
    setHideEditorOptions(false)
  }, [])

    // Create elements from prop's arr
    const render = elements.map((el, index) => {
        const value = userData.stagingCV[el];
        return (
            <CustomTextarea 
                key={`${section}-${index}`}  
                name={`${el}`} 
                value={value} 
                id={`${section}-${el}`} 
                updateValue={(event) => setText({event, setState: setUserData})} 
            />
        )
    } )

    return (
        <div className="d-block Editor-basicInfo">
            <h3 className='editor-section-title'>{capitalize(section)}</h3>
            {render}
        </div>
    )
}


