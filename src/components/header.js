import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <a href="#home">
        <img
          src={require('../assets/img/logo.png')}
          alt="Kallyas.pl"
        />
      </a>
    </div>
    <nav className="header__navigation">
      <ul className="navigation__menu">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Platform">Platform</a>
        </li>
        <li>
          <a href="#Facilities">Facilities</a>
        </li>
        <li>
          <a href="#Plans">Plans</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
