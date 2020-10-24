import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="whole-wrapper">
          <div className="row">
            <div className="col-md-7">
              <div className="footer__menu-container menu-container">
                <div className="menu-container__single-menu single menu">
                  <p className="single-menu__title">Plans</p>
                  <ul className="single-menu__list list">
                    <li className="list__item">
                      <Link to="/">Free</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Basic</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Standard</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Premium +</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Team</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Business</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Enterprise</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Compare Plans</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-container__single-menu single menu">
                  <p className="single-menu__title">Company</p>
                  <ul className="single-menu__list list">
                    <li className="list__item">
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Help</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Coreers</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Leadership</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-container__single-menu single menu">
                  <p className="single-menu__title">Platform</p>
                  <ul className="single-menu__list list">
                    <li className="list__item">
                      <Link to="/">Features</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Networks</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">App Directory</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">What's New</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-container__single-menu single menu">
                  <p className="single-menu__title">Education</p>
                  <ul className="single-menu__list list">
                    <li className="list__item">
                      <Link to="/">Academy</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Resources</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Webinars</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-container__single-menu single menu">
                  <p className="single-menu__title">Enterprise</p>
                  <ul className="single-menu__list list">
                    <li className="list__item">
                      <Link to="/">Solutions</Link>
                    </li>
                    <li className="list__item">
                      <Link to="/">Industries</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer__inner inner">
                <p className="inner__title">About Us</p>
                <p className="inner__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="footer__copyrights copyrights">
            <p className="copyrights__text">
              @2019. Hogash Studio ~ All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
