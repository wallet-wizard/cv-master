import React, { useState, createContext } from 'react';
import './editor.css';
import EditorMain from './EditorMain';
import EditorSideBar from './EditorSideBar';
import EditorBasicInfo from './editorPaths/EditorBasicInfo';

const EditorContext = createContext(null);

export default function Editor() {

  const [newCV, setNewCV] = useState({
    title: "Hi",
    summary: "there"
  })

  return (
    <div className="editorWrapper container-fluid">
      <div className="row">
        <EditorContext.Provider value={{newCV, setNewCV}}>
          <EditorSideBar />
          <EditorMain />
        </EditorContext.Provider>
      </div>
    </div>
  );
}
