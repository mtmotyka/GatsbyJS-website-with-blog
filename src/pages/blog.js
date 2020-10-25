import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SubpageHeader from '../components/subpageHeader';

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <SubpageHeader title="Blog" />

      <section className="blog-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="single-post">
                <div className="single-post__thumbnail"></div>
                <div className="single-post__content-container content-container">
                  <div className="short-info">
                    <p className="short-info__text text text--author">
                      Andrei Fredy
                    </p>
                    <p className="short-info__text text text--date">
                      April 14, 2019
                    </p>
                    <p className="short-info__text text text--tag">
                      Digital Marketing
                    </p>
                  </div>
                  <h2 className="content-container__title">
                    How to save time using Social Media Management? - 5 Easy steps
                  </h2>
                  <p className="content-container__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse.{' '}
                  </p>
                  <Link to="/" className="content-container__read-more-button">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
