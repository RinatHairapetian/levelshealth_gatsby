import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import React, { useEffect } from "react";
import * as s from "../css/blog-post.module.css";


// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css";
import "../css/@wordpress/block-library/build-style/theme.css";

import AlgoliaInitialize, { PostViewed } from '../utils/AlgoliaInitialize';
import HeaderBlog from './../components/header-blog/header-blog';
import Layout from "./../components/layout";
import Seo from "./../components/seo";

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  useEffect(() => {
    AlgoliaInitialize();
    PostViewed([post.id]);
  }, [post.id])
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  }


  let thumbStyle = {};
  if (!!featuredImage.data) {
    thumbStyle["backgroundImage"] = `linear-gradient(180deg, rgba(255, 255, 255, 0) 38.02%, #FFFFFF 100%), url(${featuredImage.data.images.fallback.src})`;
  }

  return (
    <Layout>
      <HeaderBlog />
      <Seo title={post.title} description={post.excerpt} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className={`${s.postThumbnail}`} style={thumbStyle}>
          {post.categories?.nodes?.length > 0 &&
            <div className={`${s.postCategories}`}>
              {post.categories?.nodes?.map((c, i) => {
                return <span key={`cat-${i}`}>{c.name}</span>
              })}
            </div>
          }
          <h1 itemProp="headline">{parse(post.title)}</h1>
        </div>
        <div className="container position-relative">
          {!!post.seo?.metaDesc &&
            <div className={`${s.metaDesc}`}>{post.seo?.metaDesc}</div>
          }

          <div className={`${s.socials}`}>
            <StaticImage
              src="../img/socials/facebook.svg"
              alt="facebook"
              className={`${s.socialItem}`}
            />
            <StaticImage
              src="../img/socials/twitter.svg"
              alt="twitter"
              className={`${s.socialItem}`}
            />
            <StaticImage
              src="../img/socials/linkedin.svg"
              alt="linkedin"
              className={`${s.socialItem}`}
            />
            <StaticImage
              src="../img/socials/link.svg"
              alt="link"
              className={`${s.socialItem}`}
            />
            <StaticImage
              src="../img/socials/email.svg"
              alt="email"
              className={`${s.socialItem}`}
            />
          </div>

          <div className="d-flex justify-content-between my-4">
            <div className="">
              {!!post.author?.node?.name &&
                <div className={`${s.postAuthor} d-flex align-items-center`}>
                  {!!post.author?.node?.avatar?.url &&
                    <div className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></div>
                  }
                  <div className="d-flex flex-column">
                    <h3 className={s.authorName}>{post.author?.node?.name}</h3>
                    <span className={s.authorRole}>Author</span>
                  </div>
                </div>
              }
            </div>
            <div className="">
              {!!post.blogSingle?.readingTime &&
                <div className="d-flex justify-content-end align-items-end h-100">
                  <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
                </div>
              }
            </div>
          </div>

          {post.blogSingle?.contentOverview?.length > 0 &&
            <div className={`${s.highlights}`}>
              <h3>ARTICLE highlights</h3>
              <ul>
                {post.blogSingle?.contentOverview?.map((o, i) => {
                  return <li key={`highlight-${i}`}>{o.item}</li>
                })}
              </ul>
            </div>
          }

          {!!post.content && (
            <section itemProp="articleBody" className={`${s.articleContent}`}>{parse(post.content)}</section>
          )}

          <p className={`${s.postDate}`}>{post.date}</p>

          {post.types?.nodes?.length > 0 &&
            <div className={`${s.postTypes}`}>
              {post.types?.nodes?.map((t, i) => {
                return <span key={`type-${i}`}>{t.name}</span>
              })}
            </div>
          }


          {/* 
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
        </div>
      </article>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          avatar {
            url
          }
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
      seo {
        metaDesc
      }
      blogSingle {
        readingTime
        heroImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        contentReviewer
        contentReviewerBio
        contentOverview {
          item
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
      categories {
        nodes {
          name
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
