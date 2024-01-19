import React, { useState, useEffect } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorBasicInfo() {

    const { newCV, setNewCV, setText } = useGlobalContext()
    const { getLocalStorage, updateLocalStorage } = useGlobalContext()
    // const [title, setTitle] = useState();
    // useEffect(() => {
    //     const userData = getLocalStorage('CVMasterData');
    //     console.log(userData);
    //     console.log(userData.find(obj => obj?.userData?.username === 'userTest2') || null)
    //     const userData = userData.find(obj => obj?.userData?.username === 'userTest2') || null;
    // }, [])

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


    // const [basicInfo, setBasicInfo] = useState({
    //     title: "",
    //     summary: ""
    // });

    // const setText = (event) => {
    //     const { name, value } = event.target;
    //     // console.log(name, '\n', value)
    //     setBasicInfo((prev) => {
    //         return {...prev, [name]: value}
    //     });
    // }

    // console.log(basicInfo)

    return(
        <div className="d-block Editor-basicInfo">
            <h3>Basic Info</h3>
            <CustomTextarea name={"title"} id="title" rows={titleLength} defaultValue={title} setTitle={(event) => setText(event, setNewCV)} />
            <CustomTextarea name={"summary"} id="summary" rows={summaryLength} defaultValue={summary} setTitle={(event) => setText(event, setNewCV)} />

        </div>
    )
}


