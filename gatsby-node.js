const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          body
          id
          slug
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    console.log(node.frontmatter.path);
    console.log(blogPostTemplate);

    createPage({
      path: "blog/" + node.slug,
      component: blogPostTemplate,
      context: {
        tag: node.frontmatter.title,
        slug: node.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        $images: path.resolve(__dirname, "src/images"),
      },
    },
  });
};
