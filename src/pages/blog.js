import { graphql } from "gatsby";
import React from "react";

import CategoriesBlog from './../components/categories-blog/categories-blog';
import HeaderBlog from './../components/header-blog/header-blog';
import Layout from "./../components/layout";
import PostHero from './../components/post-hero/post-hero';
import PostMiddle from "./../components/post-middle/post-middle";
import PostSmall from "./../components/post-small/post-small";
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
          
          {posts.length > 0 &&
            posts.map((post, index) => {
              let view = "";
              switch (index) {
                case -1:
                  view = <div className="col-12 py-3 p-0" key={post.uri} >
                    <PostHero post={post} />
                  </div>
                  break;
                case 0:
                case 1:
                  view = <div className="col-6 col-xl-4 py-3 p-xl-4 grid-item" key={post.uri} >
                    <PostSmall post={post} />
                  </div>
                  break;
                case 2:
                  view = <div className="d-none d-xl-block col-xl-4 py-3 p-xl-4 grid-item" key={post.uri} >
                    <PostSmall post={post} />
                  </div>
                  break;
                case 3:
                  view = <div className="col-12 col-xl-8 py-3 p-xl-4 grid-item" key={post.uri} >
                    <PostMiddle post={post} />
                  </div>
                  break;
                case 4:
                default:
                  view = <div className="d-none d-xl-block col-xl-4 py-3 p-xl-4 grid-item" key={post.uri} >
                    <PostSmall post={post} />
                  </div>
                  break;
              }
              return view;
            })
          }
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
