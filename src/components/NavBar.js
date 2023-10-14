import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/directors" activeClassName="active">Directors</NavLink>
      <NavLink to="/actors" activeClassName="active">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
//need to take this out bc will nav from movie card link
//<NavLink to="/movies" activeClassName="active">Movies</NavLink>
//In homepage - map over movies and render movieCard to display in body
//This is where the link (in the movie card) to the movie page is
//This may be where I'm failing where I'm not using the createRouter 
//After clicking on link use useparams hook from rrdom find and match
