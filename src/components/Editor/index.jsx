import React from 'react';
import './editor.css';
import EditorMain from './EditorMain';
import EditorSideBar from './EditorSideBar';
import EditorBasicInfo from './editorPaths/EditorBasicInfo';

export default function Editor() {
  return (
    <div className="editorWrapper container-fluid">
      <div className="row">
            <EditorSideBar />
            <EditorMain />
      </div>
    </div>
  );
}
