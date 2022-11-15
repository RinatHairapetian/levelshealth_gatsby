import { graphql, Script } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
import BlogSignup from './../components/blog-signup/blog-signup';
import CategoriesBlog from './../components/categories-blog/categories-blog';
import HeaderBlog from './../components/header-blog/header-blog';
import Layout from "./../components/layout";
import Seo from "./../components/seo";
import SidebarFeaturedPosts from './../components/sidebar-featured-posts/sidebar-featured-posts';

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
      <CategoriesBlog />
      <Seo title={post.title} description={post.excerpt} />
      {/* {!!post?.id &&
        <Script src="https://cdn.social9.com/js/socialshare.min.js" async defer content={process.env.SOCIAL9_CONTENT || "1533dc2b1123411b82328f3010cf5b69"}/>
      } */}
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >

        <div className="container px-lg-0">
          <div className="row">
            <div className="col-xl-9">
              <div className="lr-xl">

                {featuredImage?.data && (
                  <GatsbyImage
                    loading="eager"
                    placeholder="none"
                    image={featuredImage.data}
                    alt={featuredImage.alt}
                    className={`w-100`}
                  // style={{ aspectRatio: '12 / 5', }}
                  />
                )}

                {(post.categories?.nodes?.length > 0 || post.types?.nodes?.length > 0) &&
                  <div className={`${s.postCategories}`}>
                    {post.categories?.nodes?.map((c, i) => {
                      return <span key={`cat-${i}`}>{c.name}</span>
                    })}
                    {post.types?.nodes?.map((t, i) => {
                      return <span key={`type-${i}`}>{t.name}</span>
                    })}
                  </div>
                }
                {/* {post.types?.nodes?.length > 0 &&
                  <div className={`${s.postTypes}`}>
                    {post.types?.nodes?.map((t, i) => {
                      return <span key={`type-${i}`}>{t.name}</span>
                    })}
                  </div>
                } */}
                <h1 className={s.title} itemProp="headline">{parse(post.title)}</h1>
                {!!post.seo?.metaDesc &&
                  <div className={`${s.metaDesc}`}>{post.seo?.metaDesc}</div>
                }
                <div className={`${s.postAuthorWrapper} row flex-xl-nowrap mx-0 align-items-center`}>
                  <div className="col-xl-8 px-0 pe-xl-3">
                    {!!post.author?.node?.name &&
                      <div className={`${s.postAuthor} d-flex align-items-center`}>
                        {!!post.author?.node?.avatar?.url &&
                          <div className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></div>
                        }
                        <div className="d-flex flex-column">
                          <span className={s.authorRole}>Written by</span>
                          <h3 className={s.authorName}>{post.author?.node?.name}</h3>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="col-xl-4 px-0 ps-xl-3 mt-3 mt-xl-0 d-flex align-items-center justify-content-between">
                    <div>
                      <div className={`${s.postDate} text-start text-xl-end`}>UPDATED: {post.modified}</div>
                      <div className={`${s.postDate} text-start text-xl-end`}>PUBLISHED: {post.date}</div>
                    </div>
                    {!!post.blogSingle?.readingTime &&
                      <div className="d-flex justify-content-end align-items-center h-100 col-4 px-0">
                        <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
                      </div>
                    }
                  </div>
                </div>

                <div className="d-block d-xl-none">
                  {post.postSidebar?.spotifyCode && parse(post.postSidebar?.spotifyCode)}
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

              </div>

            </div>
            <div className="col-xl-3">
              <div className="mb-3">
                <BlogSignup />
              </div>
              <div className="d-none d-xl-block">
                {post.postSidebar?.spotifyCode && parse(post.postSidebar?.spotifyCode)}
              </div>
              {post.postSidebar?.featuredSidebar?.length > 0 &&
                <div className="sticky-top">
                  <SidebarFeaturedPosts title={post.postSidebar?.featuredSidebarIntro} posts={[...post.postSidebar?.featuredSidebar]} />
                </div>
              }
            </div>
          </div>
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
      date(formatString: "MM/DD/YYYY")
      modified(formatString: "MM/DD/YYYY")
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
      blogSingleAuthor {
        isItAPostWithMultipleAuthors
        isItAPublicationWithAAuthorReviewer
        selectAuthoresReviewer {
          avatar {
            url
          }
          name
          nodeType
        }
        selectAuthores {
          name
          avatar {
            url
          }
        }
      }
      postSidebar {
        spotifyCode
        featuredSidebarIntro
        featuredSidebar {
          ... on WpPost {
            title
            uri
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
