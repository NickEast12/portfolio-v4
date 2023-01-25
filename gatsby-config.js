const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Dewynters Starter`,
    description: `Dewynters`,
    author: `Dewynters`,
    siteName: `Dewynters`,
    siteUrl: process.env.GATSBY_FRONTEND_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dewynters Starter`,
        short_name: `Dewynters Starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 8,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_URL,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '00000000',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: '00000000',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_FRONTEND_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_FRONTEND_URL,
        sitemap: `${process.env.GATSBY_FRONTEND_URL}/sitemap/sitemap-index.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          staging: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
