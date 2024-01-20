import React, { useState, useEffect } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorBasicInfo() {

    const { setText, userData, setUserData } = useGlobalContext()

    console.log(userData)


    // Default Values

    // TITLE
    const title = userData.stagingCV.title ? userData.stagingCV.title : (
        `# Enter Name
## Front End Developer
____
`);

    // SUMMARY
    const summary = userData.stagingCV.summary ? userData.stagingCV.summary : (
        `## Summary

Results-oriented and highly skilled Front-end Developer with [X years] of experience creating and implementing innovative web designs and user experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks. Adept at collaborating with cross-functional teams to drive project success. `
    );




    return (
        <div className="d-block Editor-basicInfo">
            <h3>Basic Info</h3>
            <CustomTextarea name={"title"} id="title" defaultValue={title} updateValue={(event) => setText({event, setState: setUserData})} />
            <CustomTextarea name={"summary"} id="summary" defaultValue={summary} updateValue={(event) => setText({event, setState: setUserData})} />

        </div>
    )
}


