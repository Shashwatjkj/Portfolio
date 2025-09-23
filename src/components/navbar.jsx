import React from "react";
import "../index.css";
import { Link,NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <img src={"public/vite.svg"} alt=""/>
      <ul className="nav-menu">
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

    </div>
    
  );
}
