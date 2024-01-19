import React, { useState } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorExp() {

    const { newCV, setNewCV, setText } = useGlobalContext()


    return(
        <div className="d-block Editor-exp">
            <h3>Experience</h3>
            <CustomTextarea name={"exp"} id="exp" rows={expLength} defaultValue={exp} setTitle={(event) => setText(event, setNewCV)} />
        </div>
    )
}


// Default Values
const exp = (
    `## Work Experience

### Senior Front-end Developer | [Company Name] | [Location] | [Month Year] - Present

- Led the development of [Project Name], resulting in [specific achievements].
- Collaborated with the design team to implement pixel-perfect and responsive user interfaces.
- Implemented performance optimizations, reducing page load times by [percentage].
- Mentored junior developers, conducting code reviews and providing technical guidance.
`
)

const expLength = exp.split('\n').length;