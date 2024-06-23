module.exports = {
  siteMetadata: {
    title: `Yehezkiel Blog`,
    siteUrl: `https://yehezkiel.dev`,
    description: `This is my personal website to share blog regarding android and any other tech stuff articles`,
    author: `yehezkiel`,
    keywords: `yehezkiel, google, android, tech, tutorial, yehezkieldev`,
    image: `./src/images/profile.webp`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-postcss",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1020,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/assets/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog-assets`,
        path: `${__dirname}/content/assets/`,
      },
      __key: "blog-assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Yehezkiel Blog",
        short_name: "yehezkiel's blog",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: `minimal-ui`,
        icon: "assets/favicon.svg",
      },
    },
  ],
};
