import React from 'react';
import NavBar from './NavBar';
import Logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo-title">
      <img className="logo" src={Logo} alt="Logo Kasilia Creations" />
      <h1 className="title">KASILIA CREATIONS MOVIE HUB</h1>
    </div>
    <div className="nav-container">
      <NavBar />
    </div>
  </header>
);

export default Header;
