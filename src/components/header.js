import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $('header').addClass('shrink');
      } else {
        $('header').removeClass('shrink');
      }
    });
  });

  if (typeof window !== 'undefined') {
    if (isMenuOpen === true) {
      document.body.classList.add('appleFix');
    } else {
      document.body.classList.remove('appleFix');
    }
  }

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={require('../assets/img/logo.png')} alt="Kallyas.pl" />
        </a>
      </div>
      <nav
        className={`header__navigation navigation ${
          isMenuOpen === true ? 'open' : ''
        }`}
      >
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
      <button
        type="button"
        aria-label="Otwórz Menu"
        className={`hamburger hamburger-squeeze ${isMenuOpen ? 'is-active' : ''}`}
        onClick={e => setIsMenuOpen(!isMenuOpen)}
      >
        {Array(4)
          .fill(null)
          .map((item, index) => (
            <span key={index} />
          ))}
      </button>
    </header>
  );
};

export default Header;
