require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {

  siteMetadata: {
    siteTitle: `OsaiFu Inc.`,
    siteTitleAlt: `OsaiFu Inc. Corporate Site`,
    siteHeadline: `OsaiFu Inc. Corporate Site`,
    siteUrl: `https://osai-fu.co.jp`,
    siteDescription: `Since 2020.12. OsaiFu Inc.のコーポレートサイトです`,
    siteLanguage: `ja`,
    author: `OsaiFu Inc.`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `OsaiFu`,
        description: `Since 2020.12. OsaiFu Inc.のコーポレートサイトです`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),

  pathPrefix: `/corporate-site`,

}
