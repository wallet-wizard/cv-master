import React from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';



export default function EditorBasicInfo() {
    return(
        <div className="d-block Editor-BasicInfo">
            <h3>New CV</h3>
            <CustomTextarea id="title" rows={titleLength} defaultValue={title}/>
            <CustomTextarea id="summary" rows={summaryLength} defaultValue={summary}/>
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