import React from "react";
import Github from "../assets/icons8-github-50.svg";
import LinkedIn from "../assets/icons8-linkedin-50.svg";
import Twitter from "../assets/icons8-twitter-50.svg";

const Header = () => {
  return (
    <nav className="headerContainer">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">
        Ramonta <span className="alt">Lee</span>
      </h1>
      <p className="intro">
        I enjoy developing creative solutions to unique challenges.
      </p>
      <div className="media">
        <ul>
          <li className="links">
            <a href="https://github.com/Ramonta-Lee" target="blank">
              <img fill="" src={Github} alt="github" />
            </a>
          </li>
          <li className="links">
            <a href="https://www.linkedin.com/in/ramonta-lee/" target="blank">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
          <li className="links">
            <a href="https://twitter.com/RamontaLee" target="blank">
              <img fill="" src={Twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
