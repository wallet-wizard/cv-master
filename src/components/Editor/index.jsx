import React, { useState, useEffect } from 'react';
import './editor.css';
import EditorMain from './EditorMain';
import EditorSideBar from './EditorSideBar';
import { usePreventReload } from '../../utils/usePreventReload'

export default function Editor() {

  // Custom hook to prevent user from reloading page
  usePreventReload()

  return (
    <div className="editor-wrapper container-fluid">
      <div className="row">
          <EditorSideBar />
          <EditorMain />
      </div>
    </div>
  );
}
