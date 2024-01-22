import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './navtabs.css';

function NavTabs() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Click occurred outside the navbar, close the menu
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleActive = () => {
    setMenuOpen(false);
  };

  return (
    <nav ref={navbarRef} className="navtabs-nav navbar navbar-expand-sm sticky-top">
      <NavLink to="/" className="navbar-brand">
        CV Master
      </NavLink>

      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
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
