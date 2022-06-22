module.exports = {
  siteMetadata: {
    title: `Algorithms And Data Structures Visualized`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `algorithms`,
        path: `${__dirname}/algorithms`,
      },
    },

    `gatsby-plugin-mdx`,
  ],
};
