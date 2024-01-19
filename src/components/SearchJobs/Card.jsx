import React from "react";

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
          <a
            className="job-url"
            href="https://cv-master.netlify.app/editor"
            target="_blank"
          >
            Create a CV
          </a>
        </div>
      </strong>
    </div>
  );
}

export default Card;
