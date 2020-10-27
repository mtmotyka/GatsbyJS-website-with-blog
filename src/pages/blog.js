import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SubpageHeader from '../components/subpageHeader';

const Blog = ({ blogPosts }) => {
  return (
    <Layout>
      <SEO title="Blog" />

      <SubpageHeader title="Blog" />

      <section className="blog-section">
        <div className="container-fluid">
          <div className="row">
            {blogPosts.edges.map(({ node }) => (
              <div className="col-lg-6">
                <div className="single-post">
                  <div
                    className="single-post__thumbnail"
                    style={{
                      backgroundImage: `url(${node.featuredImage.node.sourceUrl})`,
                    }}
                  ></div>
                  <div className="single-post__content-container content-container">
                    <div className="short-info">
                      <p className="short-info__text text text--author">
                        {node.author.node.name}
                      </p>
                      <p className="short-info__text text text--date">
                        {node.date.split('T')[0].split('-').reverse().join('.')}
                      </p>
                      <p className="short-info__text text text--tag">
                        {node.categories.nodes[0].name}
                      </p>
                    </div>
                    <Link to={`/blog/${node.slug}`}>
                      <h2 className="content-container__title">{node.title}</h2>
                    </Link>
                    <p
                      className="content-container__desc"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                    <Link
                      to={`/blog/${node.slug}`}
                      className="content-container__read-more-button"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        blogPosts: allWpPost {
          edges {
            node {
              title
              uri
              id
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                }
              }
              date
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              content
              slug
            }
          }
        }
      }
    `}
    render={data => <Blog {...data} />}
  />
);
