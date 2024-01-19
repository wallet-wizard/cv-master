import React, { useState } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorSkills() {

    const { newCV, setNewCV, setText } = useGlobalContext()
    console.log(newCV)


    return(
        <div className="d-block Editor-skills">
            <h3>Skills</h3>
            <CustomTextarea name={"skills"} id="skills" rows={skillsLength} defaultValue={skills} setTitle={(event) => setText(event, setNewCV)} />
        </div>
    )
}


// Default Values
const skills = (
    `## Skills

- **Languages:** HTML, CSS, JavaScript
- **Frameworks/Libraries:** React, Vite,
- **Responsive Design:** Bootstrap, CSS Grid, Flexbox
- **Version Control:** Git, GitHub
- **Build Tools:** Webpack, npm, Vite
- **Testing:** Jest, Enzyme
- **UI/UX Design:** Figma, Adobe XD
- **Web Performance Optimization**
    
---
`
)

const skillsLength = skills.split('\n').length;