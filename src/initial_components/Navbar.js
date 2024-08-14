import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import "../index.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [barclick, setbarClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handlewinscroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handlewinscroll);
  const handleclick = () => {
    setbarClick(!barclick);
  };

  return (
    <div className={scroll ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>Portfolio</h1>
      </Link>

      <ul className={barclick ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/waseem.pdf" className="cv" download="waseem">
            Download CV
          </a>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/project"}>Project</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleclick}>
        {barclick ? (
          <FontAwesomeIcon
            icon={faTimes}
            color="#fff"
            size="20px"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            color="#fff"
            size="20px"
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  );
}

export default Navbar;
