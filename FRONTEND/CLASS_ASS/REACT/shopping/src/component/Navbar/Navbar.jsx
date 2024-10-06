import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  
  return (
    <nav className="container">
      <div className="logo">
        <FontAwesomeIcon icon={faGifts} size="2x" className="text-secondary" />
        SHOPPER
      </div>
      <div className="menu">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">men</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">kids</a>
          </li>
        </ul>
      </div>
      <div className="login_container">
        <button className="btn btn-success">login</button>
        <div>
          <FontAwesomeIcon
            icon={faCartArrowDown}
            size="2x"
            className="text-secondary"
          ></FontAwesomeIcon>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
