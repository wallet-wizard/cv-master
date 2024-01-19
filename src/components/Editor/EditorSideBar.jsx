import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './editor.css';
import { useGlobalContext } from '../../utils/GlobalContext';

const EditorSideBar = (props) => {
  const { updateLocalStorage, getLocalStorage } = useGlobalContext();
  const strr = {one:"AFSFAGDFHADFHG", two:"asfasasf"}

  // useEffect(() => {
  //   const localStorage = getLocalStorage('newCV');
  //   console.log(localStorage)
  // }, []);

  return (
    <aside className='editor-sideBar d-none d-md-block col-2'>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="basic-info" className="nav-link">Basic Info</Link>
            <Link to="skills" className="nav-link">Skills</Link>
            <Link to="experience" className="nav-link">Experience</Link>
            <Link to="education" className="nav-link">Education</Link>
            <Link to="other" className="nav-link">Other</Link>
            <button onClick={() => updateLocalStorage('newCV', strr)} className="btn btn-primary">SAVE</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default EditorSideBar;
