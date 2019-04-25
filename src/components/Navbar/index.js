import React from "react";
import "./style.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/clicky-game/">{props.title}</a>
    <div className="navbar-collapse collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-link" >{props.correctIncorrect}</li>
      </ul>
      <ul className="navbar-nav mr-auto">
        <li className="nav-link" >Score - Top: {props.topScore} | Current: {props.score}</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;