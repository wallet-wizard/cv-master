import React, { useState } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorEdu() {

    const { newCV, setNewCV, setText } = useGlobalContext()


    return(
        <div className="d-block Editor-edu">
            <h3 className='editor-section-title'>Education</h3>
            <CustomTextarea name={"edu"} id="edu" rows={eduLength} defaultValue={edu} setTitle={(event) => setText(event, setNewCV)} />
        </div>
    )
}


// Default Values
const edu = (
    `## Education

### Front End Developer Bootcamp - edX | University of Birmongham | 2024
### E[ducation Type] | [University Name] | [Graduation Year]
### E[ducation Type] | [University Name] | [Graduation Year]

`
)

const eduLength = edu.split('\n').length;