module.exports = {
  siteMetadata: {
    title: `Algorithms And Data Structures Visualized`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `DSA`,
        path: `${__dirname}/DSA`,
      },
    },
  ],
};
