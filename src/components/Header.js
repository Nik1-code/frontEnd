import React from "react";

const Header = () => {
  return (
    <header className="head">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link App-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link App-link" href="#Login">
            Login
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
