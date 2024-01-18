import React from "react";

function Card(props) {
  return (
    <div className="job-card">
      <h2 className="job-title">{props.title}</h2>
      <h3 className="job-company">{props.company}</h3>
      <p className="job-posting-info">
        {props.city}, {props.country} • £{props.salary} per annum
      </p>
      <a href={props.url} target="_blank">
        Apply Now
      </a>
    </div>
  );
}

export default Card;
