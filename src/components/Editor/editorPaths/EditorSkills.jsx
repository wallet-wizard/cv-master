import React, { useState, useEffect, useRef } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext';

export default function EditorSkills() {
  const { setText, userData, setUserData } = useGlobalContext();
  const [skillsArr, setSkillArr] = useState(userData.stagingCV.skills.skills || ["- **Skill family:** []", "- **Skill family:** []"]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  
const skillEl = skillsArr.map((skill, index) => (
  <div
    key={index}
    draggable={true}
    onDragStart={(e) => dragItem.current = index}
    onDragEnter={(e) => dragOverItem.current = index}
    onDragEnd={handleOnDragEnd}
    onDragOver={(e) => e.preventDefault()}
  >
    <CustomTextarea
      name={"skills-item"}
      id={`skills-item-${index}`}
      defaultValue={skill}
      updateValue={(event) => setText({ event, setState: setUserData, index })}
      placeholder={"-**New Skill**"}
    />
    <button onClick={() => removeTextarea(index)}>remove</button>
  </div>
))

  // Drag n Drop functionality

  function handleOnDragEnd(e) {
    handleSort();
  }

  const handleSort = () => {
    let newSkills = [...skillsArr];
    const draggedItemContent = newSkills.splice(dragItem.current, 1)[0];
    newSkills.splice(dragOverItem.current, 0, draggedItemContent);
    setSkillArr(newSkills)
    setUserData((prev) => {
      
      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          skills: {
            ...prev.stagingCV.skills,
            skills: newSkills,
          },
        },
      };
    });
  };

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
  );

  function addTextarea() {
    setSkillArr(prev => [...prev, ['']]);
    setUserData((prev) => {
      const arr = prev.stagingCV.skills.skills;
      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          skills: {
            ...prev.stagingCV.skills,
            skills: [...arr, ['']],
          },
        },
      };
    });
  }

  function removeTextarea(index) {
    const updatedSkills = skillsArr.filter((_, i) => i !== index);
    setSkillArr(updatedSkills);
    setUserData((prev) => ({
      ...prev,
      stagingCV: {
        ...prev.stagingCV,
        skills: {
          ...prev.stagingCV.skills,
          skills: updatedSkills,
        },
      },
    }));
  }

  const header = userData.stagingCV.skills.header ? userData.stagingCV.skills.header : `## Skills`;

  return (
    <div className="d-block Editor-skills">
      <h3 className='editor-section-title'>Skills</h3>
      <CustomTextarea name={"skills-header"} id="skills-header" defaultValue={header} updateValue={(event) => setText({ event, setState: setUserData })} />
      <div droppable="true" className='draggableArea'>
        {skillEl}
      </div>
      <button onClick={() => addTextarea()} className="addSkill">
        ADD
      </button>
    </div>
  );
}

const skArr = [
  `- **Languages:** HTML, CSS, JavaScript`,
  `- **Frameworks/Libraries:** React, Vite`,
  `- **Responsive Design:** Bootstrap, CSS Grid, Flexbox`,
  `- **Version Control:** Git, GitHub`,
  `- **Build Tools:** Webpack, npm, Vite`,
  `- **Testing:** Jest, Enzyme`,
  `- **UI/UX Design:** Figma, Adobe XD`,
  `- **Web Performance Optimization**`,
];
