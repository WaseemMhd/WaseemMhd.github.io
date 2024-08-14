import React from "react";

function Card(props) {
  return (
    <div className="project-card">
      <img src={props.image} alt="Image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>

        <div className="project-button">
          <a href={props.link} target="_blank" className={"btn"}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
