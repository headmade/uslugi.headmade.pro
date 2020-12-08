module.exports = {
  siteMetadata: {
    title: 'ИС Услуги - Информационная система органов исполнительной власти',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '46025715',
        webvisor: true,
        trackHash: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blagoustroistvo`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/modules`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/gradoustroistvo`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],

}
