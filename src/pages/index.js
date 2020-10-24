import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero-section container-fluid">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="hero-section__text-container text-container">
              <h1 className="text-container__title">
                Increase Your <br /> Social Media Presence
              </h1>
              <p className="text-container__text">
                One of the most used Social Media Management Platform
                wich have a offerwith 25% DISCOUNT for all services in
                week-ends.
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

    <section className="help-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <h2 className="help-section__title small">
              How we can <br /> help you?
            </h2>
            <p className="help-section__desc">
              Lorem ipsum dolor sit amet, consectetur odipiscing elit
              sed do.
            </p>
            <a href="#services" className="btn">
              Our Services
            </a>
          </div>
          <div className="col-md-8">
            <div className="icons-container">
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-checklist.png')}
                  alt=""
                  className="img-fluid single-item__icon"
                />
                <p className="single-item__title">
                  To-do list <br /> for every day
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-research.png')}
                  alt=""
                  className="img-fluid single-item__icon"
                />
                <p className="single-item__title">
                  Research for <br /> fresh content
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-results.png')}
                  alt=""
                  className="img-fluid single-item__icon"
                />
                <p className="single-item__title">
                  Progresive <br /> results
                </p>
              </div>
              <div className="icons-container__single-item single-item">
                <img
                  src={require('../assets/img/ico-presentation.png')}
                  alt=""
                  className="img-fluid single-item__icon"
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

    <section className="video-section">
      <div className="container-fluid">
        <h2 className="video-section__title text-center small color-white">
          Introduction to the <br /> Social Media Management{' '}
        </h2>
        <p className="video-section__desc text-center color-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
          do. usmod tempor incididunt ut labore et dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus
          commodo viverra maecenas accumsan lacus vel facilisis.{' '}
        </p>
        <img
          src={require('../assets/img/video-thumbnail.png')}
          alt="video"
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
