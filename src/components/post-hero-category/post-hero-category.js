import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-hero-category.module.css";

const PostHeroCategory = ({ post, showTypes, className }) => {


  const image = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  };
  let imaegStyles = {};
  if (!!image.data) {
    imaegStyles["backgroundImage"] = `url(${image.data.images.fallback.src})`;
  }
  return (
    <>
      <div className={`${s.postHero} ${s.catPageHero} ${className ? className : ''}`}>
        {image?.data && (
          <Link to={post.uri} itemProp="url">
            <GatsbyImage
              loading="eager"
              placeholder="none"
              image={image.data}
              alt={image.alt}
            />
          </Link>
        )}
        <div className={s.info}>
          <div>
            {(!!post.categories?.nodes?.length || !!post.types?.nodes?.length) &&
              <div className={s.categories}>
                {!showTypes && post.categories?.nodes?.map((c, i) => {
                  return <span key={`cat-${i}`}>{c.name}</span>
                })}
                {!!showTypes && post.types?.nodes?.map((c, i) => {
                  return <span key={`cat-${i}`}>{c.name}</span>
                })}
              </div>
            }
            <div className={s.titleWrap}><h2 className={`${s.title}`} title={parse(post.title)}>
              <Link to={post.uri} itemProp="url" className="title"> {parse(post.title)}</Link>
            </h2></div>
            {!!post.seo?.metaDesc &&
              <div className={s.excerpt}>{parse(post.seo?.metaDesc)}</div>
            }
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {!!post.author?.node?.avatar?.url &&
                  <div className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></div>
                }
                <h4 className={s.author}>{post.author?.node?.name}</h4>
              </div>
              {!!post.date && <div className={`${s.postDate}`}>{post.date}</div>}
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="d-flex align-items-center"> {/* reviewer */} </div>
              {!!post.blogSingle?.readingTime &&
                <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
              }
            </div>
            {/* <h4 className={s.author}>{post.author?.node?.name}</h4>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {!!post.blogSingle?.readingTime &&
                <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
              }
              {!!post.date && <div className={`${s.postDate}`}>{post.date}</div>}
            </div> */}
          </div>
        </div>
        {/* <Link to={post.uri} itemProp="url" className={s.image} style={imaegStyles}></Link> */}
      </div>
    </>
  );
};

export default PostHeroCategory;
