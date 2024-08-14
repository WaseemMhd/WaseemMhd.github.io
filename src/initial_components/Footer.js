import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FontAwesomeIcon
                icon={faHome}
                color="#fff"
                size="20px"
                style={{ marginRight: "2rem" }}
              ></FontAwesomeIcon>
              Kurunegala, Srilanka
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FontAwesomeIcon
                icon={faPhone}
                color="#fff"
                size="20px"
                style={{ marginRight: "2rem" }}
              ></FontAwesomeIcon>
              +94 772688273
            </h4>
          </div>
          <div className="email">
            <h4>
              <FontAwesomeIcon
                icon={faMailBulk}
                color="#fff"
                size="20px"
                style={{ marginRight: "2rem" }}
              ></FontAwesomeIcon>
              crackit.skills@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Developper :- </h4>
          <p>
            I am waseem, mobile & web app full-stack developer on java,
            JavaScript, react, angular, react-native platforms
          </p>
          <div className="social">
            <a href="Tel:+94 772688273">
              <FontAwesomeIcon
                icon={faPhone}
                color="#fff"
                size="20px"
                style={{ marginRight: "1rem" }}
              ></FontAwesomeIcon>
            </a>

            <a href="mailto:crackit.skills@gmail.com">
              <FontAwesomeIcon
                icon={faMailBulk}
                color="#fff"
                size="20px"
                style={{ marginRight: "1rem" }}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://www.linkedin.com/in/mihlar-wazeem998"
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#fff"
                size="20px"
                style={{ marginRight: "1rem" }}
              ></FontAwesomeIcon>
            </a>

            <a href="https://github.com/WaseemMhd" target={"_blank"}>
              <FontAwesomeIcon
                icon={faGithub}
                color="#fff"
                size="30px"
                style={{ marginRight: "1rem" }}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
