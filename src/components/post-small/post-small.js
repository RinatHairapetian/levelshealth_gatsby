import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-small.module.css";

const PostSmall = ({ post, showTypes, className }) => {
  const image = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  };
  return (
    <>
      <article
        className={`${s.postItem}  ${className ? className : ''}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <div to={post.uri} itemProp="url" className={s.postTitle}>
          {image?.data && (
            <Link to={post.uri} itemProp="url" >
              <GatsbyImage
                loading="eager"
                placeholder="none"
                image={image.data}
                alt={image.alt}
                className={s.postImg}
              />
            </Link>
          )}
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
          <div className={s.titleWrap}><h3 itemProp="headline" title={parse(post.title)}>
            <Link to={post.uri} itemProp="url" className="title">{parse(post.title)}</Link>
          </h3></div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className={s.author}>{post.author?.node?.name}</div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostSmall;
