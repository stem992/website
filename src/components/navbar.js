import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi sono</a></li>
        <li><a href="/prodotti">Portfolio</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
