import { graphql, Link } from "gatsby"
import React from "react"
import Categories from "../components/categories/categories"

import Layout from "./../components/layout"
import PostHero from './../components/post-hero/post-hero'
import Post from './../components/post/post'
import Seo from "./../components/seo"
const chunk = require(`lodash/chunk`)

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  let posts = [];
  if (data?.allWpPost?.nodes?.length) {
    posts = [...data?.allWpPost?.nodes];
  }
  const postsPerPage = 9;

  let firstPost = undefined;
  let postsChunked = [];
  let initialPosts = [];

  if (posts?.length) {
    firstPost = posts.shift();
    postsChunked = chunk(posts, postsPerPage);
    initialPosts = postsChunked[0];
  }

  const [showingPosts, setShowingPosts] = React.useState(initialPosts);
  const [showingChunkIndex, setShowingChunkIndex] = React.useState(0);
  const loadMore = () => {
    if (showingChunkIndex + 1 <= postsChunked?.length) {
      let newShowingPosts = [
        ...showingPosts,
        ...postsChunked[showingChunkIndex + 1]
      ];
      setShowingPosts(newShowingPosts);
      setShowingChunkIndex(showingChunkIndex + 1);
    }
  }

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <div className="container">
          <p>
            No blog posts found. Add posts to your WordPress site and they'll
            appear here!
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <Categories />
      <div className="container">
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          {/* {posts.map((post, index) => {
            if (index === 0) {
              return <div className="col-12" key={post.uri} >
                <PostHero post={post} />
              </div>
            } else {
              return <div className="post-hover py-3 col-12 col-md-6 col-xl-4" key={post.uri} >
                <Post post={post} />
              </div>
            }
          })} */}
        </div>
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          {!!firstPost &&
            <div className="col-12" key={firstPost.uri} >
              <PostHero post={firstPost} />
            </div>
          }
          {showingPosts?.length > 0 &&
            <>
              {showingPosts.map((post) => {
                return <div className="post-hover py-3 col-12 col-md-6 col-xl-4" key={post.uri} >
                  <Post post={post} />
                </div>
              })}
              {showingChunkIndex + 1 < postsChunked?.length &&
                <div className="col-12 text-center">
                  <button className="btn btn-outline-dark" onClick={loadMore}>Load More</button>
                </div>
              }
              {
                previousPagePath && (
                  <>
                    <div className="col-6 text-left">
                      <Link to={previousPagePath}>Previous page</Link>
                    </div>
                  </>
                )
              }
              {(showingChunkIndex + 1 >= postsChunked?.length && nextPagePath) &&
                <div className="col-6 text-right">
                  <Link to={nextPagePath}>Next page</Link>
                </div>
              }
            </>
          }
        </div>

        {/* {
          previousPagePath && (
            <>
              <Link to={previousPagePath}>Previous page</Link>
              <br />
            </>
          )
        }
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>} */}
      </div >
    </Layout >
  )
}

export default BlogIndex
/*
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
*/
export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        uri
        date(formatString: "MMMM DD, YYYY")
        author {
          node {
            name
          }
        }
        blogSingle {
          readingTime
        }
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        types {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
