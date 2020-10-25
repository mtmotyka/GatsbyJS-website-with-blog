const { node } = require('prop-types');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allWpPost {
        nodes {
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
  `);

  const postTemplate = require.resolve('./src/templates/post');

  data.allWpPost.nodes.forEach((post, index) => {
    actions.createPage({
      path: `/blog${post.uri}`,
      component: postTemplate,
      context: {
        id: post.id,
        date: post.date,
        title: post.title,
        content: post.content,
        url: post.uri,
        slug: post.slug,
        thumbnail: post.featuredImage.node.sourceUrl,
        author: post.author.node.name,
        categories: post.categories.nodes.name,
      },
    });
  });
};
