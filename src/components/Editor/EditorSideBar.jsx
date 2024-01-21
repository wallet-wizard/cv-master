import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../utils/GlobalContext';

const EditorSideBar = (props) => {
  const { authenticated, setAuthenticated, updateLocalStorage, getLocalStorage } = useGlobalContext();
  const strr = { one: "AFSFAGDFHADFHG", two: "asfasasf" }
  const [activeElement, setActiveElement] = useState(null)

  function updateActiveLink(e) {
    const { name } = e.target;
    console.log(name);
    setActiveElement(name);
  }
  

  return (
    <aside className='editor-sideBar d-none d-md-flex flex-column justify-content-between m-0 p-0 col-2'>
      <button className="btn btn-primary">PREVIEW</button>
      <nav className="navbar d-block side-nav">
        <ul className='navbar-nav align-items-center justify-content-evenly'>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <Link name="basic-info" onClick={(e) => updateActiveLink(e) } to="basic-info" className={`nav-link p-0 ${activeElement === 'basic-info' ? 'active': ''}`}>Basic Info</Link>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <Link name="skills" onClick={(e) => updateActiveLink(e) } to="skills" className={`nav-link p-0 ${activeElement === 'skills' ? 'active': ''}`}>Skills</Link>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <Link name="experience" onClick={(e) => updateActiveLink(e) } to="experience" className={`nav-link p-0 ${activeElement === 'experience' ? 'active': ''}`}>Experience</Link>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <Link name="education" onClick={(e) => updateActiveLink(e) } to="education" className={`nav-link p-0 ${activeElement === 'education' ? 'active': ''}`}>Education</Link>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center">
            <Link name="other" onClick={(e) => updateActiveLink(e) } to="other" className={`nav-link p-0 ${activeElement === 'other' ? 'active': ''}`}>Other</Link>
          </li>
        </ul>
      </nav>

      <button onClick={() => setAuthenticated(!authenticated)} className="btn btn-primary save-cv-btn">SAVE CV</button>
    </aside>
  );
};

export default EditorSideBar;
