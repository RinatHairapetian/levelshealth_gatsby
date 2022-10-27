import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-hero.module.css";

const PostHero = ({ post }) => {
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
        <div className={`${s.info} col-md-6 col-xl-4 py-3 p-xl-3 ps-xl-0`}>
          {(!!post.categories?.nodes?.length || !!post.types?.nodes?.length) &&
            <div className={s.categories}>
              {/* {post.categories?.nodes?.map((c, i) => {
                return <span key={`cat-${i}`}>{c.name}</span>
              })} */}
              {post.types?.nodes?.map((c, i) => {
                return <span key={`type-${i}`}>{c.name}</span>
              })}
            </div>
          }
          <h2 className={s.title}>{parse(post.title)}</h2>
          <div className={s.excerpt}>{parse(post.excerpt)}</div>
          <h4 className={s.author}>{post.author?.node?.name}</h4>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {!!post.blogSingle?.readingTime &&
              <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
            }
            {!!post.date && <div className={`${s.postDate}`}>{post.date}</div>}
          </div>

          {/* {!!post.tags?.nodes?.length &&
            <div className={s.tags}>
              {post.tags?.nodes?.map((t, i) => {
                return <span key={`tag-${i}`}>{t.name}</span>
              })}
            </div>
          } */}

        </div>
        <div className={`${s.image} col-md-6 col-xl-8 py-3 p-xl-3`} style={imaegStyles}></div>
      </Link>
    </>
  );
};

export default PostHero;
