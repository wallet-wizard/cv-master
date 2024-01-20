import React, { useState, useEffect } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorSkills() {

  const { setText, userData, setUserData } = useGlobalContext()
  console.log(userData)
  const skillsArr = userData.stagingCV.skills.skills || [1, 2];
  console.log("SkillsArr:", skillsArr)
  const [skillsNum, setSkillsNum] = useState(skillsArr.length > 1 ? skillsArr.length : 1);

  const skills = (
    `- **Languages:** HTML, CSS, JavaScript
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

  const skillElements = skillsArr.length > 0 ? skillsArr.map((skill, index) => (
    <div key={index}>
      <CustomTextarea  
        name={"skills-item"} 
        id={`skills-item-${index}`} 
        defaultValue={skill} 
        updateValue={(event) => setText({event, setState: setUserData, index})} />
        <button onClick={() => removeTextarea(index)}>remove</button>
    </div>
  )) : (
    <>
      <CustomTextarea 
        name={"skills-item"} 
        id="skills" 
        defaultValue={skills} 
        updateValue={(event) => setText({event, setState: setUserData, index: null})} />
    </>
  );

  console.log(skillElements)


  function addTextarea() {
    setUserData(prev => {
      const arr = prev.stagingCV.skills.skills;
      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          skills: {
            ...prev.stagingCV.skills,
            skills: [...arr, ['']]
          }
        }
      }
    })
  }

  function removeTextarea(index) {
    setUserData((prev) => {
      const updatedSkills = prev.stagingCV.skills.skills.filter((_, i) => i !== index);
      console.log("updatedSkills:", updatedSkills)
      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          skills: {
            ...prev.stagingCV.skills,
            skills: updatedSkills,
          },
        },
      };
    });
  }


  // Default Values

  const header = userData.stagingCV.skills.header ? userData.stagingCV.skills.header : `## Skills`



  return (
    <div className="d-block Editor-skills">
      <h3>Skills</h3>
      <CustomTextarea name={"skills-header"} id="skills-header" defaultValue={header} updateValue={(event) => setText({event, setState: setUserData})} />
      {skillElements}
      <button onClick={() => addTextarea()} className="addSkill">ADD</button>
    </div>
  )
}



const skills = (
  `- **Languages:** HTML, CSS, JavaScript
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

const skArr = [
`- **Languages:** HTML, CSS, JavaScript`,
`- **Frameworks/Libraries:** React, Vite`,
`- **Responsive Design:** Bootstrap, CSS Grid, Flexbox`,
`- **Version Control:** Git, GitHub`,
`- **Build Tools:** Webpack, npm, Vite`,
`- **Testing:** Jest, Enzyme`,
`- **UI/UX Design:** Figma, Adobe XD`,
`- **Web Performance Optimization**`

]