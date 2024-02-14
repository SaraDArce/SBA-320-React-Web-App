import { Link } from "react-router-dom";

// import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Movies Movies Movies!</Link>
      <Link to="/About">About</Link>
      <Link to="/Favorites">Favorites</Link>
    </nav>
  );
}
