/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */


// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

require('dotenv').config();

// // gatsby-config.js
// const myQuery = `
//   query {
//     pages: allSitePage {
//       nodes {
//         # try to find a unique id for each node
//         # if this field is absent, it's going to
//         # be inserted by Algolia automatically
//         # and will be less simple to update etc.
//         objectID: id
//         component
//         path
//         componentChunkName
//         jsonName
//         internal {
//           type
//           contentDigest
//           owner
//         }
//       }
//     }
//   }
// `;

// const queries = [
//   {
//     query: myQuery,
//     transformer: ({ data }) => data.pages.nodes, // optional
//     indexName: 'index name to target', // overrides main index name, optional
//     settings: {
//       // optional, any index settings
//       // Note: by supplying settings, you will overwrite all existing settings on the index
//     },
//     matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
//     mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
//     queryVariables: {}, // optional. Allows you to use graphql query variables in the query
//   },
// ];

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://www.levelshealth.com/graphql`,
        // 'http://139.144.44.41/graphql',
        schema: {
          timeout: 3600000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1, // i cant remember if this was a fix or not, but i just killed all concurrency which the command line probably overrode
              maxFileSizeBytes: 100000000, // large images would die if they were larger than.. like, 5mb by default? undocumented and threw no warnings, just died.
            },
          },
        },
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
          allow401Images: true,
        },
        html: {
          useGatsbyImage: false,
        },

      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOn: `none`,
      }
    },
    // `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,


    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "C3FM325ISF",
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: "221b6f535b14c9d19db9452d7b3ebbc5",
        // indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        // queries,
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        // skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
        continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
        algoliasearchOptions: undefined, // default: { timeouts: { connect: 1, read: 30, write: 30 } }, pass any different options to the algoliasearch constructor
      },
    },

    `gatsby-plugin-styled-components`,
  ],
}
