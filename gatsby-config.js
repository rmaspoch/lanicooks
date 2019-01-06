const config = require('./src/config/siteConfig')

let contentfulConfig
try {
  contentfulConfig = require('./contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  console.log(`spaceId: ${spaceId} accessToken: ${accessToken}`)
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space id and access token need to be provided.')
  }
}

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-contentful`,
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1600,
              backgroundColor: '#fff',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lani Cooks`,
        short_name: `Lani Cooks`,
        start_url: `/`,
        background_color: `#98181c`,
        theme_color: `#98181c`,
        display: `standalone`,
        icon: `src/images/lanicooks-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
}
