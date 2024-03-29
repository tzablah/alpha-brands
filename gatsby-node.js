const slash = require("slash");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulAlphaBrands {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        console.log("Error con data de contenful", result.errors);
      }
      const blogTemplate = path.resolve("./src/templates/brandTemplate.js");
      result.data.allContentfulAlphaBrands.edges.forEach((blog) => {
        createPage({
          path: `/${blog.node.title}`,
          component: slash(blogTemplate),
          context: { title: blog.node.title },
        });
      });
    })
    .catch((error) => {
      console.log(`Error con contenful ${error}`);
    });
};