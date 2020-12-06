const slash = require("slash");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulPostBrand {
          edges {
            node {
              slug
              titulo
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
      result.data.allContentfulPostBrand.edges.forEach((blog) => {
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
