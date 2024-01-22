import React, { useState, useEffect, useRef } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext';

export default function EditorArrSection(props) {

  const { section } = props

  const { setText, userData, setUserData } = useGlobalContext();
  const [sectionArr, setSectionArr] = useState(userData.stagingCV[section][section] || ["", ""]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    console.log("RAN")
    console.log(userData.stagingCV[section][section])
    setSectionArr(userData.stagingCV[section][section] || ["", ""]);
  }, [section, userData.stagingCV]);

  const sectionEl = userData.stagingCV[section][section].map((sectionItem, index) => (
    <div
      key={index}
      draggable={true}
      onDragStart={(e) => dragItem.current = index}
      onDragEnter={(e) => dragOverItem.current = index}
      onDragEnd={handleOnDragEnd}
      onDragOver={(e) => e.preventDefault()}
    >
      <CustomTextarea
        name={`${section}-item`}
        id={`${section}-item-${index}`}
        defaultValue={sectionItem}
        updateValue={(event) => setText({ event, setState: setUserData, index })}
        placeholder={`-**New ${section} Item**`}
      />
      <button onClick={() => removeTextarea(index)}>remove</button>
    </div>
  ))
  
  
  console.log(sectionEl)
  
  
  // Drag n Drop functionality

  function handleOnDragEnd(e) {
    handleSort();
  }

  const handleSort = () => {
    let updatedSection = [...sectionArr];
    const draggedItemContent = updatedSection.splice(dragItem.current, 1)[0];
    updatedSection.splice(dragOverItem.current, 0, draggedItemContent);
    setSectionArr(updatedSection)
    setUserData((prev) => {

      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          [section]: {
            ...prev.stagingCV[section],
            [section]: updatedSection,
          },
        },
      };
    });
  };


  function addTextarea() {
    setSectionArr(prev => [...prev, ['']]);
    setUserData((prev) => {
      const arr = prev.stagingCV[section][section];
      return {
        ...prev,
        stagingCV: {
          ...prev.stagingCV,
          [section]: {
            ...prev.stagingCV[section],
            [section]: [...arr, ['']],
          },
        },
      };
    });
  }

  function removeTextarea(index) {
    const updatedSection = sectionArr.filter((_, i) => i !== index);
    setSectionArr(updatedSection);
    setUserData((prev) => ({
      ...prev,
      stagingCV: {
        ...prev.stagingCV,
        [section]: {
          ...prev.stagingCV[section],
          [section]: updatedSection,
        },
      },
    }));
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const header = userData.stagingCV[section].header ? userData.stagingCV[section].header : `## ${capitalize(section)}`;

  return (
    <div className={`d-block Editor-${section}`}>
      <h3 className='editor-section-title'>{capitalize(section)}</h3>
      <CustomTextarea name={`${section}-header`} id={`${section}-header`} defaultValue={header} updateValue={(event) => setText({ event, setState: setUserData })} />
      <div droppable="true" className='draggableArea'>
        {sectionEl}
      </div>
      <button onClick={() => addTextarea()} className={`add${capitalize(section)}`}>
        ADD
      </button>
    </div>
  );
}