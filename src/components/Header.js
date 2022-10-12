import React from 'react';
import NavBar from './NavBar';
import '../App.css';
import Logo from '../assets/logo2.png';

const Header = () => (
  <header className="header">
    <div className="logo-title">
      <img className="logo" src={Logo} alt="Logo Kasilia Creations" />
      <h1 className="title">The Movie Mania Entertainment</h1>
    </div>
    <div className="nav-container">
      <NavBar />
    </div>
  </header>
);

export default Header;
