import React from 'react';
import NavBar from './NavBar';

const Header = () => (
  <header className="header">
    <div className="logo-title">
      <img className="logo" src="../assets/logo.png" alt="Logo Kasilia Creations" />
      <h1 className="title">KASILIA CREATIONS MOVIE HUB</h1>
    </div>
    <div className="nav-container">
      <NavBar />
    </div>
  </header>
);

export default Header;
