import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SubpageHeader from '../components/subpageHeader';

const Post = ({ pageContext }) => {
  const { title, content, thumbnail, date, author, categories } = pageContext;
  return (
    <Layout>
      <SEO title="test" />

      <SubpageHeader />

      <section className="single-post">
        <div className="post-content">
          <div
            className="post-content__thumbnail"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <div className="post-content__short-info short-info">
            <p className="short-info__text text text--author">{author}</p>
            <p className="short-info__text text text--date">
              {date.split('T')[0].split('-').reverse().join('.')}
            </p>
            <p className="short-info__text text text--tag"></p>
          </div>
          <h1
            className="post-content__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="post-content__text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Post;
