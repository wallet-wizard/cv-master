import React from 'react';
import { Link } from 'react-router-dom';
import './editor.css';

const EditorSideBar = () => {
  return (
    <aside className='editor-sideBar d-none d-md-block col-2'>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="basic-info" className="nav-link">Basic Info</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default EditorSideBar;
