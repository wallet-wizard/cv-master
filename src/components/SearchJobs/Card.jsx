import React from "react";
import { useSpring, animated, to as interpolate } from "@react-spring/web";

function Card(props) {
  //   const [springs, api] = useSpring(() => ({
  //     from: { x: 0 },
  //   }));

  //   const handleClick = () => {
  //     api.start({
  //       from: {
  //         x: 0,
  //       },
  //       to: {
  //         x: 100,
  //       },
  //     });
  //   };

  return (
    <div className="job-card">
      <h2 className="job-title">{props.title}</h2>
      <h3 className="job-company">{props.company}</h3>
      <p className="job-posting-info">
        {props.city}, {props.country} • £{props.salary} per annum
      </p>
      <strong>
        <a className="job-url" href={props.url} target="_blank">
          Apply Now
        </a>
      </strong>
    </div>
  );
}

export default Card;
