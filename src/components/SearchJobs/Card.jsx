import React from "react";
import Editor from "../Editor/";
import { NavLink, Routes, Route, Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="job-card">
      <h2 className="job-title">{props.title}</h2>
      <h3 className="job-company">{props.company}</h3>
      <p className="job-posting-info">
        {props.city}, {props.country} • £{props.salary} per annum
      </p>
      <strong>
        <div className="job-url-section">
          <a className="job-url" href={props.url} target="_blank">
            Apply Now
          </a>
          <Link to="/editor" relative="path" className="job-url">
            Create a CV
          </Link>
        </div>
      </strong>
    </div>
  );
}

export default Card;
