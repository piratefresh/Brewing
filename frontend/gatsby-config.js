module.exports = {
  siteMetadata: {
    title: `Brewing Company`,
    subtitle: `We brew beers!`,
    author: `Magnus Nilsen`,
    description: `Brewing company website.`,
    siteUrl: `localhost:5000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `localhost:9999/`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          '/*/*/categories',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          '/*/*/tags',
          '/*/*/taxonomies',
          '/*/*/beers',
          '/*/*/events',
          '/*/*/users',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}