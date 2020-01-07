/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Enoch Chen`,
    description: `Hey! I'm Enoch - I do some cool things.`,
    siteUrl: `https://enochen.me`,
    author: `Enoch Chen`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Enoch Chen`,
        short_name: `Enoch`,
        start_url: `/`,
        background_color: `#f3f3f3`,
        theme_color: `#6460b8`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
