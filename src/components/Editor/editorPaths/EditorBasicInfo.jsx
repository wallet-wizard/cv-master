import React from 'react';
import '../editor.css';
import CustomTextarea from './CustomTextarea';

export default function EditorBasicInfo() {
    return(
        <div className="d-block Editor-BasicInfo">
            <h3>New CV</h3>
            <CustomTextarea />
            <textarea className=" editor-textArea" rows={10}/>
        </div>
    )
}
