const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities })


  // const demoPost = await getDemoPost(gatsbyUtilities)

  // if (!!demoPost.id) {
  //   let demoPosts = [demoPost];
  //   await createDemoPostPage({ demoPosts, gatsbyUtilities });
  // }


  // Query categories from the GraphQL server
  const categories = await getCategories(gatsbyUtilities);
  // If there are categories in WordPress
  if (!!categories.length && categories.length > 0) {
    // Add post categories archive pages
    await createPostCategoriesPages({ categories, gatsbyUtilities });
  }
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: `${post.uri}`,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/blog-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
  query {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  // const { postsPerPage } = graphqlResult.data.wp.readingSettings
  const postsPerPage = 50;

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/blog` : `/blog/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
//    allWpPost(sort: { fields: [date], order: DESC}, limit: 20 ) {
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC} ) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}



// async function getDemoPost({ graphql, reporter }) {
//   const graphqlResult = await graphql(/* GraphQL */ `
//     query DemoPost {
//       # Query all WordPress blog posts sorted by date
//       wpPost(slug: { eq: "the-ultimate-guide-to-metabolic-health" }) {
//         id
//         uri
//       }
//     }
//   `)

//   if (graphqlResult.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading demo blog post`,
//       graphqlResult.errors
//     )
//     return
//   }
//   return graphqlResult.data.wpPost
// }

// const createDemoPostPage = async ({ demoPosts, gatsbyUtilities }) => {
//   return Promise.all(

//     demoPosts.map((post) =>
//       // createPage is an action passed to createPages
//       // See https://www.gatsbyjs.com/docs/actions#createPage for more info
//       gatsbyUtilities.actions.createPage({
//         // Use the WordPress uri as the Gatsby page path
//         path: `${post.uri}`,

//         // use the blog post template as the page component
//         component: path.resolve(`./src/templates/blog-post.js`),

//         // `context` is available in the template as a prop and
//         // as a variable in GraphQL.
//         context: {
//           // we need to add the post id here
//           // so our blog post template knows which blog post
//           // the current page is (when you open it in a browser)
//           id: post.id,

//           // We also use the next and previous id's to query them and add links!
//           previousPostId: null,
//           nextPostId: null,
//         },
//       })
//     )


//   )
// }




/**
 * This function creates all the individual categories pages in this site
 */
 async function createPostCategoriesPages({ categories, gatsbyUtilities }) {
  return Promise.all(
    categories.map((item) => {
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      return gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: item.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/template-category-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          id: item.id,
        },
      })
    }
    )
  )
}
// Get all categories
async function getCategories({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpCategories {
      # Query all WordPress categories
      allWpCategory {
        nodes {
          uri
          slug
          name
          count
          id
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Categories`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpCategory.nodes
}
