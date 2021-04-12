module.exports = {
  siteMetadata: {
    title: "Ethworks",
    author: "@MonikaZemankiewicz",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Inter`,
              variants: [`400`, `700`],
            },
            {
              family: `Sen`,
              variants: [`400`, `700`],
            },
            {
              family: `Train One`,
              variants: [`400`],
            },
            {
              family: `Open Sans`,
              variants: [`600`],
            },
          ],
        },
      },
    },
  ],
};
