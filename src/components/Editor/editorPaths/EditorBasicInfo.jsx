import React, { useState } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorBasicInfo() {

    const { newCV, setNewCV } = useGlobalContext()
    // const [basicInfo, setBasicInfo] = useState({
    //     title: "",
    //     summary: ""
    // });

    // const setValue = (event) => {
    //     const { name, value } = event.target;
    //     // console.log(name, '\n', value)
    //     setBasicInfo((prev) => {
    //         return {...prev, [name]: value}
    //     });
    // }

    // console.log(basicInfo)

    const setValue = (event) => {
        const { name, value } = event.target;
        // console.log(name, '\n', value)
        setNewCV((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(newCV)


    return(
        <div className="d-block Editor-BasicInfo">
            <h3>New CV</h3>
            <CustomTextarea name={"title"} id="title" rows={titleLength} defaultValue={title} setTitle={(event) => setValue(event)} />
            <CustomTextarea name={"summary"} id="summary" rows={summaryLength} defaultValue={summary} setTitle={(event) => setValue(event)} />

        </div>
    )
}


// Default Values

// TITLE
const title = `# Enter Name
## Front End Developer
____
`
const titleLength = title.split('\n').length;


// SUMMARY
const summary = (
    `## Summary

Results-oriented and highly skilled Front-end Developer with [X years] of experience creating and implementing innovative web designs and user experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks. Adept at collaborating with cross-functional teams to drive project success. `
    )
const summaryLength = summary.split('\n').length;