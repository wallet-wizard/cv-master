import React, { useState } from 'react';
import './editor.css';
import EditorMain from './EditorMain';
import EditorSideBar from './EditorSideBar';



export default function Editor() {

  return (
    <div className="editor-wrapper container-fluid">
      <div className="row">
          <EditorSideBar />
          <EditorMain />
      </div>
    </div>
  );
}
