import React, { useState } from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';
import { useGlobalContext } from '../../../utils/GlobalContext'


export default function EditorOther() {

    const { newCV, setNewCV, setText } = useGlobalContext()


    return(
        <div className="d-block Editor-other">
            <h3 className='editor-section-title'>Other Bits</h3>
            <CustomTextarea name={"other"} id="other" rows={otherLength} defaultValue={other} setTitle={(event) => setText(event, setNewCV)} />
        </div>
    )
}


// Default Values
const other = (
    `\n\n\n\n\n\n`
)

const otherLength = other.split('\n').length;