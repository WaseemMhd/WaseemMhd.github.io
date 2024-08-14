import React, { useEffect, useState } from "react";
import "./HomeText.css";
import profileImage from "../accets/profile-pic (1).png";

const TextDisplay = ({ text, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;

      if (index === text.length - 1) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  return (
    <div className="text-container">
      <div className="container-message">{displayedText}</div>
    </div>
  );
};

const HomeTextDisplay = () => {
  const paragraph =
    "Hello I'm waseem, junior Full stack developer, deep knoledge on spring,nodejs,angular,react and react-native. more experiance in micro-service,security,error handling,docker, version control(github),authentication servers(Keycloak)";

  const typingSpeed = 200;

  return (
    <div className="row-container">
      <div className="profile-img-container">
        <img className="profile-image" src={profileImage} />
      </div>
      <div className="genText">
        <TextDisplay text={paragraph} typingSpeed={typingSpeed} />
      </div>
    </div>
  );
};

export default HomeTextDisplay;
