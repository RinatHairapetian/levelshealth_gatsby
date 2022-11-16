import { graphql } from "gatsby"
import React from "react"

import CategoriesBlog from './../components/categories-blog/categories-blog'
import HeaderBlog from './../components/header-blog/header-blog'
import Layout from "./../components/layout"
import PostHeroCategory from './../components/post-hero-category/post-hero-category'
import Post from "./../components/post/post"
import Seo from "./../components/seo"
const chunk = require(`lodash/chunk`)

const CategoryArchive = ({ data }) => {
  const category = data.wpCategory;
  const postsPerPage = 8;

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
      <HeaderBlog />
      <CategoriesBlog />

      <div className="container px-lg-0">
        <div className="row">
          <div className="col-12">
            <h1 className="category-title">{category.name}</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6 py-3">
            {!!firstPost &&
              <PostHeroCategory post={firstPost} className="lr-xl lb" />
            }
          </div>
          <div className="col-12 col-xl-6">
            <div className="row">
              {firstPosts?.length > 0 &&
                firstPosts?.map((post, index) => {
                  let view = "";
                  switch (index) {
                    case 0:
                      view = <div className="col-md-6 py-3" key={post.uri} >
                        <Post post={post} className="lr-md lb" />
                      </div>
                      break;
                    case 1:
                      view = <div className="col-md-6 py-3" key={post.uri} >
                        <Post post={post} className="lb" />
                      </div>
                      break;
                    case 2:
                      view = <div className="col-md-6 py-3" key={post.uri} >
                        <Post post={post} className="lr-md lb" />
                      </div>
                      break;
                    case 3:
                      view = <div className="col-md-6 py-3" key={post.uri} >
                        <Post post={post} className="lb" />
                      </div>
                      break;
                    default:
                      break;
                  }
                  return view;
                })
              }
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {showingPosts?.length > 0 &&
            <>
              {showingPosts.map((post, index) => {
                let view = "";
                switch (index % 4) {
                  case 0:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} className="lr-md lb" />
                    </div>
                    break;
                  case 1:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} className="lr-xl lb" />
                    </div>
                    break;
                  case 2:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} className="lr-md lb" />
                    </div>
                    break;
                  case 3:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} className="lb" />
                    </div>
                    break;
                  default:
                    break;
                }
                return view;
              })}
              {showingChunkIndex + 1 < postsChunked?.length &&
                <div className="col-12 text-center">
                  <button className="load-more" onClick={loadMore}>Load More</button>
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
            avatar {
              url
            }
            name
          }
        }
        blogSingle {
          readingTime
        }
        title
        excerpt
        seo {
          metaDesc
        }
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
