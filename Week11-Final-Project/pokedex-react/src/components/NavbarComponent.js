import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "../main.css";

const NavbarComponent = () => {
  return (
    <nav className="nav-wrapper">
        <Link to='/'><h2>Pokedex</h2></Link>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/myteam'>My Team</NavLink></li>
        </ul>
    </nav>
  );
};

export default withRouter(NavbarComponent);
