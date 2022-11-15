import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-middle.module.css";

const PostMiddle = ({ post, showTypes, className }) => {
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
      <div itemProp="url" className={`${s.postHero} ${className ? className : ''}`}>
        <div className={s.info}>
          <div>
            {(!!post.categories?.nodes?.length || !!post.types?.nodes?.length) &&
              <div className={s.categories}>
                {!showTypes && post.categories?.nodes?.map((c, i) => {
                  return <span key={`cat-${i}`}>{c.name}</span>
                })}
                {!!showTypes && post.types?.nodes?.map((c, i) => {
                  return <span key={`type-${i}`}>{c.name}</span>
                })}
              </div>
            }
            <div className={s.titleWrap}><h2 className={`${s.title}`} title={parse(post.title)}>
              <Link to={post.uri} itemProp="url" className={`title`}>{parse(post.title)}</Link>
            </h2></div>
            {!!post.seo?.metaDesc &&
              <div className={s.excerpt}>{parse(post.seo?.metaDesc)}</div>
            }
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className={s.author}>{post.author?.node?.name}</div>
            {!!post.blogSingle?.readingTime &&
              <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
            }
          </div>
        </div>
        <Link to={post.uri} itemProp="url" className={s.image} style={imaegStyles}></Link>
      </div>
    </>
  );
};

export default PostMiddle;
