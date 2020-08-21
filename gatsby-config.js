module.exports = {
  siteMetadata: {
    siteTitle: `Botmation Documentation`,
    defaultTitle: `Botmation Documentation`,
    siteTitleShort: `Botmation Docs v2.0.x`,
    siteDescription: `Documentation for the TypeScript library Botmation`,
    siteUrl: `https://botmation.dev`,
    siteAuthor: `Michael Lage`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/mrWh1te/botmation-docs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Botmation Docs`,
        short_name: `Botmation Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1552765-2`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://botmation.dev`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
