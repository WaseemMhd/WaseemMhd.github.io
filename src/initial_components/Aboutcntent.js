import React from "react";
import { Link } from "react-router-dom";
import "./Aboutcontentstyle.css";
import top from "../accets/mern2.jpg";
import bottom from "../accets/mern1.webp";

function Aboutcntent() {
  return (
    <div className="about-container">
      <div className="left">
        <h1>Who am I</h1>
        <p>
          Junior Full-stack software developer I able to develop Mobile & Web
          Application Using Java(spring), JavaScript(nodejs),Angular,React and
          React-native" with modern technologies;
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="image-container">
          <div className="top-image">
            <img className="img" src={top} />
          </div>
          <div className="bottom-image">
            <img className="img" src={bottom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutcntent;
