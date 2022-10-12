/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaAngellist, FaYoutube,
} from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => (
  <div className="footer">
    <div className="creator">
      <h2 className="copy">© 2022 The Movie Mania Entertainment.</h2>
      <img className="footer-logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB" />
      <h3 className="text1">This product uses the TMDB API but is not endorsed or certified by TMDB.</h3>
      <img className="footer-logo" src={Logo} alt="Kasilia Creations Logo" />
      <h3 className="text2">This Product was build by Kasilia Creations.</h3>
    </div>
    <div className="contacts">
      <h2 className="text1">Contact The Kasilia Creations</h2>
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">GitHub</span>
          <span><a className="socials" href="https://github.com/David-Kasilia"><FaGithub className="fa-brands fa-facebook" /></a></span>
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><a className="socials" href="https://twitter.com/DavidKasilia"><FaTwitter className="fab fa-twitter" /></a></span>
        </li>
        <li className="icon instagram">
          <span className="tooltip">LinkedIn</span>
          <span><a className="socials" href="https://www.linkedin.com/in/david-kasilia/"><FaLinkedin className="fab fa-instagram" /></a></span>
        </li>
        <li className="icon github">
          <span className="tooltip">Angelist</span>
          <span><a className="socials" href="https://angel.co/u/david-kasilia"><FaAngellist className="fa-brands fa-pinterest" /></a></span>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span><a className="socials" href="https://www.youtube.com/channel/UCPWDt0xBP5lH1PVmWoEOgxw"><FaYoutube className="fab fa-youtube" /></a></span>
        </li>
      </ul>
    </div>

  </div>
);

export default Footer;
