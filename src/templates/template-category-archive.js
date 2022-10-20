import { graphql } from "gatsby"
import React from "react"

import Categories from "./../components/categories/categories"
import Layout from "./../components/layout"
import PostHeroCategory from './../components/post-hero-category/post-hero-category'
import Post from "./../components/post/post"
import Seo from "./../components/seo"
const chunk = require(`lodash/chunk`)

const CategoryArchive = ({ data }) => {
  const category = data.wpCategory;
  const postsPerPage = 9;

  let posts = [];
  if (data?.allWpPost?.nodes?.length) {
    posts = [...data?.allWpPost?.nodes];
  }


  let firstPost = undefined;
  let firstPosts = [];
  let postsChunked = [];

  let initialPosts = [];

  if (posts?.length) {
    firstPost = posts.shift();
    firstPosts = posts.splice(0, 4);
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



  return (
    <Layout>
      <Seo
        title={category.name}
        description={''}
        pageSeo={category}
      />
      <Categories />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">{category.name}</h1>
          </div>
        </div>
        <div className="row justify-content-center mb-3" style={{ rowGap: '15px' }}>
          <div className="col-12 col-xl-6">
            {!!firstPost &&
              <PostHeroCategory post={firstPost} />
            }
          </div>
          <div className="col-12 col-xl-6">
            <div className="row" style={{ rowGap: '15px' }}>
              {firstPosts?.length > 0 &&
                firstPosts?.map((post) => {
                  return <div className={`post-hover col-md-6 py-3`} key={post.uri} >
                    <Post post={post} />
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          {showingPosts?.length > 0 &&
            <>
              {showingPosts.map((post) => {
                return <div className={`post-hover col-12 col-md-6 col-xl-4 py-3`} key={post.uri} >
                  <Post post={post} />
                </div>
              })}
              {showingChunkIndex + 1 < postsChunked?.length &&
                <div className="col-12 text-center">
                  <button className="btn btn-outline-dark" onClick={loadMore}>Load More</button>
                </div>
              }
            </>
          }
        </div>
      </div>
    </Layout >
  )
}

export default CategoryArchive

export const pageQuery = graphql`
  query WordPressCategoryPosts(
    $id: String!
  ) {
    wpCategory(id: {eq: $id}) {
      id
      name
      description
      seo {
        metaDesc
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}
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
