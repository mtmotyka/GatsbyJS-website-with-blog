import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const ThankYouPage = () => {
  return (
    <section className="thank-you-section">
      <SEO title="Thank You" />
      <h1 className="thank-you-section__title">Your message has been sent!</h1>
      <p className="thank-you-section__desc">Lorem ipsum dolor sit amet</p>
      <Link to="/" className="btn">
        Home
      </Link>
    </section>
  );
};

export default ThankYouPage;
