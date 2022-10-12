import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul className="navItems">
      <li className="navItem">
        <NavLink to="/" className="link">Home</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/movies" className="link">Movies</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/series" className="link">Series</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/about" className="link">About</NavLink>
      </li>
      <li className="navItem">
        <NavLink to="/profile" className="link"><FaUserCircle /></NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
