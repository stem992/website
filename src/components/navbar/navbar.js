import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/chisono">Chi sono</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
