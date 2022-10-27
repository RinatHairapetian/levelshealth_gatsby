import { graphql } from "gatsby";
import React from "react";

import CategoriesBlog from './../components/categories-blog/categories-blog';
import Fundamentals from "./../components/fundamentals/fundamentals";
import HeaderBlog from './../components/header-blog/header-blog';
import Layout from "./../components/layout";
import PostHero from './../components/post-hero/post-hero';
import PostMiddle from "./../components/post-middle/post-middle";
import PostSmall from "./../components/post-small/post-small";
import Post from './../components/post/post';
import Seo from "./../components/seo";

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;
  console.log(data);

  return (
    <Layout>
      <Seo title="Blog page" />
      <HeaderBlog />
      <CategoriesBlog />
      <div className="container">
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          <div className="col-12 col-xl-9 py-3 p-xl-3 grid-item">
            <PostHero post={posts[0]} />
          </div>
          <div className="col-12 col-xl-3">
            Sign up
          </div>
        </div>
      </div>
      <Fundamentals posts={posts} />
      <div className="container">
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          <div className="col-12 col-xl-9">
            <div className="row">
              {posts.length > 0 &&
                posts.map((post, index) => {
                  let view = "";
                  switch (index) {
                    case 0:
                      break;
                    case 1:
                      view = <div className="col-12 col-xl-8 py-3 p-xl-3 grid-item" key={post.uri} >
                        <PostMiddle post={post} showTypes={true} />
                      </div>
                      break;
                    case 2:
                      view = <div className="col-12 col-xl-4 py-3 p-xl-3 grid-item" key={post.uri} >
                        <Post post={post} />
                      </div>
                      break;
                    case 3:
                      view = <div className="col-12 col-xl-8 py-3 p-xl-3 grid-item" key={post.uri} >
                        <PostMiddle post={post} showTypes={true} />
                      </div>
                      break;
                    case 4:
                    case 5:
                      view = <div className="col-md-6 col-xl-2 py-3 p-xl-3 grid-item" key={post.uri} >
                        <PostSmall post={post} showTypes={true} />
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
          <div className="col-12 col-xl-3">
            Ultimate guides
          </div>
        </div>
      </div >
    </Layout >
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpPage {
      nodes {
          title
          slug
      }
      edges {
          node {
          title
          slug
          }
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 6
    ) {
      nodes {
        uri
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
