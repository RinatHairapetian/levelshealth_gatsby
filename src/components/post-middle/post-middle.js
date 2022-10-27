import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-middle.module.css";

const PostMiddle = ({ post }) => {
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
      <Link to={post.uri} itemProp="url" className={`${s.postHero}`}>
        <div className={s.info}>
          {(!!post.categories?.nodes?.length || !!post.types?.nodes?.length) &&
            <div className={s.categories}>
              {post.categories?.nodes?.map((c, i) => {
                return <span key={`cat-${i}`}>{c.name}</span>
              })}
            </div>
          }
          <h2 className={s.title}>{parse(post.title)}</h2>
          <div className={s.excerpt}>{parse(post.excerpt)}</div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className={s.author}>{post.author?.node?.name}</div>
            {!!post.blogSingle?.readingTime &&
              <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
            }
          </div>
        </div>
        <div className={s.image} style={imaegStyles}></div>
      </Link>
    </>
  );
};

export default PostMiddle;
