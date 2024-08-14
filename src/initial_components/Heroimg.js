import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Introimg from "../accets/Intro.jpg";
import "../index.css";
import "./HeroimgStyle.css";

function Heroimg() {
  const text =
    "Do you want to see a wonderfull moment?, that you have ever seen before, press the play icon button to watch the video";
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt={"Intro-Image"} />
      </div>
      <div className="content">
        <p>HI I'M WASEEM</p>
        <h1>FULL STACK DEVELOPER</h1>
        <div>
          <Link to={"/project"}>
            <button className="btn">Project</button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn btn-light">Contact</button>
          </Link>
        </div>
      </div>
      <div style={{ width: "100%" }} className="scrolling-text-container">
        <div className="scrolling-text">{text}</div>
      </div>
    </div>
  );
}

export default Heroimg;
