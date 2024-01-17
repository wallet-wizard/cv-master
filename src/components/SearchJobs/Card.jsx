import React from "react"

function Card(props) {
    return (
        <div className="job-card">
            <h1>{props.title}</h1>
            <h2>{props.company}</h2>
            <p>{props.location} • {props.datePosted}</p>
        </div>
    )
}

export default Card