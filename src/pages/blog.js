import { graphql, Link } from "gatsby";
import React from "react";

import BlogSignup from './../components/blog-signup/blog-signup';
import CategoriesBlog from './../components/categories-blog/categories-blog';
import Fundamentals from "./../components/fundamentals/fundamentals";
import HeaderBlog from './../components/header-blog/header-blog';
import Layout from "./../components/layout";
import PostHero from './../components/post-hero/post-hero';
import PostMiddle from "./../components/post-middle/post-middle";
import PostSmall from "./../components/post-small/post-small";
import Post from './../components/post/post';
import SelectedCategory from "./../components/selected-category/selected-category";
import Seo from "./../components/seo";
import UltimateGuides from './../components/ultimate-guides/ultimate-guides';

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;
  return (
    <Layout>
      <Seo title="Blog page" />
      <HeaderBlog />
      <CategoriesBlog />
      <div className="container px-lg-0">
        <div className="row justify-content-center" style={{ rowGap: '15px' }}>
          <div className="col-12 col-xl-8 col-xxl-9">
            <PostHero post={posts[0]} className="lr-xl" />
          </div>
          <div className="col-12 col-xl-4 col-xxl-3 d-none d-xl-block">
            <BlogSignup />
          </div>
        </div>
      </div>
      <Fundamentals posts={[...posts]} />
      <div className="container px-lg-0">
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
                      view = <div className="col-12 col-xl-8 py-3" key={post.uri} >
                        <PostMiddle post={post} className="lr-xl lb" />
                      </div>
                      break;
                    case 2:
                      view = <div className="col-12 col-xl-4 py-3" key={post.uri} >
                        <Post post={post} className="lr-xl lb" />
                      </div>
                      break;
                    case 3:
                      view = <div className="col-12 col-xl-8 py-3" key={post.uri} >
                        <PostMiddle post={post} className="lr-xl lb lb-xl-none" />
                      </div>
                      break;
                    case 4:
                      view = <div className="col-md-6 col-xl-2 py-3" key={post.uri} >
                        <PostSmall post={post} className="lr-md lb lb-md-none" />
                      </div>
                      break;
                    case 5:
                      view = <div className="col-md-6 col-xl-2 py-3" key={post.uri} >
                        <PostSmall post={post} className="lr-xl" />
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
            <UltimateGuides title={'Ultimate Guides'} posts={[...posts]} link={<Link to="/blog/category/ultimate-guides">More Ultimate Guides</Link>} />
          </div>
        </div>
      </div >
      {data.selectedCategories?.nodes?.length > 0 &&
        data.selectedCategories?.nodes?.map((category) => {
          return <SelectedCategory category={category} key={category.uri} />
        })
      }
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
        date(formatString: "MMM DD, YYYY")
      }
    }

    selectedCategories: allWpCategory (
      filter: {slug: {in: ["weight-loss", "mental-health", "nutrition", "metabolic-basics"]}}
    ) {
      nodes {
        uri
        name
        posts {
          nodes {
            uri
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
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }

  }
`
