import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          LOGO
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="myCVs"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          My CVs
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="searchJobs"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Search Jobs
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="editor"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Editor
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
