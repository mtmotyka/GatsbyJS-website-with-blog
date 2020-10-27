import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/contactForm';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <span className="anchor" id="home"></span>
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="hero-section__text-container text-container">
              <h1 className="text-container__title">
                Increase Your <br /> Social Media Presence
              </h1>
              <p className="text-container__text">
                One of the most used Social Media Management Platform wich have a
                offerwith 25% DISCOUNT for all services in week-ends.
              </p>
            </div>
            <div className="hero-section__buttons-container buttons-container">
              <a href="#">
                <img
                  src={require('../assets/img/google-play-button.png')}
                  alt=""
                  className="buttons-container__button"
                />
              </a>
              <a href="#">
                <img
                  src={require('../assets/img/app-store-button.png')}
                  alt=""
                  className="buttons-container__button"
                />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src={require('../assets/img/hero-img.png')}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <span className="anchor" id="services"></span>
    <section className="help-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 help-section__text-col">
            <h2 className="help-section__title small">
              How we can <br /> help you?
            </h2>
            <p className="help-section__desc">
              Lorem ipsum dolor sit amet, consectetur odipiscing elit sed do.
            </p>
            <a href="#services" className="btn">
              Our Services
            </a>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="icons-container">
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-checklist.png')}
                  alt=""
                  className="img-fluid single-item__icon img-fluid"
                />
                <p className="single-item__title">
                  To-do list <br /> for every day
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-research.png')}
                  alt=""
                  className="img-fluid single-item__icon img-fluid"
                />
                <p className="single-item__title">
                  Research for <br /> fresh content
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-results.png')}
                  alt=""
                  className="img-fluid single-item__icon img-fluid"
                />
                <p className="single-item__title">
                  Progresive <br /> results
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-presentation.png')}
                  alt=""
                  className="img-fluid single-item__icon img-fluid"
                />
                <p className="single-item__title">
                  Quality content & <br /> clean digital image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <span className="anchor" id="platform"></span>
    <section className="video-section">
      <div className="container-fluid">
        <h2 className="video-section__title text-center small color-white">
          Introduction to the <br /> Social Media Management{' '}
        </h2>
        <p className="video-section__desc text-center color-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. usmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis.{' '}
        </p>
        <img
          src={require('../assets/img/video-thumbnail.png')}
          alt="video"
          className="video-section__video-example img-fluid"
        />
      </div>
    </section>

    <span className="anchor" id="facilities"></span>
    <section className="about-section">
      <div className="container-fluid">
        <h2 className="about-section__title small text-center">How easy can be?</h2>
        <p className="about-section__desc text-center">
          See how easy is to use Kallyas Social Media Management.
        </p>
        <div className="row row--1 align-items-center">
          <div className="col-lg-4 col-md-6 column column--text">
            <h2 className="line-top">
              Real-time Informations & <br />
              Detailed Analytics
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat.
            </p>
          </div>
          <div className="col-lg-8 col-md-6 column column--image">
            <img
              src={require('../assets/img/about-section-img-1.png')}
              alt=""
              className="img-fluid about-section__image image image--right"
            />
          </div>
        </div>
        <div className="row row--2 align-items-center">
          <div className="col-lg-8 col-md-6 column column--image">
            <img
              src={require('../assets/img/about-section-img-2.png')}
              alt=""
              className="img-fluid about-section__image image image--left"
            />
          </div>
          <div className="col-lg-4 col-md-6 column column--text">
            <h2 className="text-right line-top">
              Social Media Platforms <br />
              Plugins Addes
            </h2>
            <p className="text-right">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat.
            </p>
          </div>
        </div>
        <div className="row row--3 align-items-center">
          <div className="col-lg-4 col-md-5 column column--text">
            <h2 className="line-top">
              Connect Everytime With <br />
              Other People
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat.
            </p>
          </div>
          <div className="col-lg-8 col-md-7 column column--image multi-col">
            <img
              src={require('../assets/img/about-section-img-3.png')}
              alt=""
              className="img-fluid about-section__image image--right"
            />
            <div className="multi-col__inner inner">
              <img
                src={require('../assets/img/about-section-img-4.png')}
                alt=""
                className="img-fluid inner__image about-section__image"
              />
              <p className="text-right inner__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
              </p>
              <img
                src={require('../assets/img/about-section-img-5.png')}
                alt=""
                className="img-fluid inner__image about-section__image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-banner">
        <div className="about-banner__single-item single-item">
          <img src={require('../assets/img/ico-content.png')} alt="" />
          <p className="single-item__title color-white">Quality Content</p>
          <p className="single-item__desc">
            Lorem ipsum dolor <br /> sit amet
          </p>
        </div>
        <div className="about-banner__single-item single-item">
          <img src={require('../assets/img/ico-customer.png')} alt="" />
          <p className="single-item__title color-white">24/7 Support</p>
          <p className="single-item__desc">
            Lorem ipsum dolor <br /> sit amet
          </p>
        </div>
        <div className="about-banner__single-item single-item">
          <img src={require('../assets/img/ico-details.png')} alt="" />
          <p className="single-item__title color-white">Details Every Week</p>
          <p className="single-item__desc">
            Lorem ipsum dolor <br /> sit amet
          </p>
        </div>
      </div>
    </section>

    <span className="anchor" id="plans"></span>
    <section className="pricing-section">
      <div className="container-fluid">
        <h2 className="small text-center pricing-section__title">
          Choose a package <br /> tailored to your needs
        </h2>
        <p className="text-center pricing-section__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="pricing-section__packages-container packages-container">
          <div className="packages-container__single-package single-package">
            <div className="title-container">
              <h3 className="title-container__name">Basic</h3>
              <p className="title-container__price">$39.99</p>
            </div>
            <div className="content">
              <p className="content__desc">
                Lorem ipsum dolor sit amet, consectetur adapiscing.
              </p>
              <ul className="content__list list">
                <li className="list__item">Tempor incidudunt ut labore et</li>
                <li className="list__item">Dolore magna aliqua quis ipsum</li>
                <li className="list__item">Suspendisse ultrices gravida risus</li>
              </ul>
              <Link to="/" className="btn btn--small btn--black-shadow">
                Read More
              </Link>
            </div>
          </div>
          <div className="packages-container__single-package single-package single-package--awarded">
            <div className="title-container">
              <h3 className="title-container__name">Premium+</h3>
              <p className="title-container__price">$89.99</p>
            </div>
            <div className="content">
              <p className="content__desc">
                Lorem ipsum dolor sit amet, consectetur adapiscing.
              </p>
              <ul className="content__list list">
                <li className="list__item">Tempor incidudunt ut labore et</li>
                <li className="list__item">Dolore magna aliqua quis ipsum</li>
                <li className="list__item">Suspendisse ultrices gravida risus</li>
                <li className="list__item">Vivamus et urna suscipit</li>
                <li className="list__item">Metus vehicula</li>
                <li className="list__item">Nam ullamcorper lacus eget</li>
              </ul>
              <Link to="/" className="btn btn--small btn--white-shadow btn--white">
                Read More
              </Link>
            </div>
          </div>
          <div className="packages-container__single-package single-package">
            <div className="title-container">
              <h3 className="title-container__name">Standard</h3>
              <p className="title-container__price">$69.99</p>
            </div>
            <div className="content">
              <p className="content__desc">
                Lorem ipsum dolor sit amet, consectetur adapiscing.
              </p>
              <ul className="content__list list">
                <li className="list__item">Tempor incidudunt ut labore et</li>
                <li className="list__item">Dolore magna aliqua quis ipsum</li>
                <li className="list__item">Suspendisse ultrices gravida risus</li>
              </ul>
              <Link to="/" className="btn btn--small btn--black-shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="more-pricing-container">
          <h2 className="more-pricing-container__title text-center small">
            Check all available packages
          </h2>
          <Link to="/" className="btn">
            Pricing
          </Link>
        </div>
      </div>
    </section>

    <span className="anchor" id="contact"></span>
    <section className="contact-section">
      <div className="container-fluid">
        <h2 className="contact-section__title text-center">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
