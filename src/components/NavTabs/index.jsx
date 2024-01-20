import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navtabs.css'

function NavTabs() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navtabs-nav navbar navbar-expand-sm navbar-light bg-light sticky-top">
      <NavLink to="/" className="navbar-brand">
        CV Master
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="myCVs" className="nav-link">
              My CVs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="searchJobs" className="nav-link">
              Search Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="editor" className="nav-link">
              Editor
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
