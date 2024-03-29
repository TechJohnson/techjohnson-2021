module.exports = {
  siteMetadata: {
    title: `Web Developer & Graphic Designer`,
    author: {
      name: `Steven Johnson`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `Front-end web developer and web specialist with over 10 years experience specializing in user interface (UI), user experience (UX), and general website creation in Pennsylvania.`,
    siteUrl: `https://techjohnson.com/`,
    social: {
      twitter: `techjohnson`,
    },
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-prefetch-google-fonts',
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Ubuntu',
    //         subsets: ['latin'],
    //         variants: ['300', '400', '600', '700'],
    //       },
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-57758617-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
