import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post-hero.module.css";

const PostHero = ({ post, showTypes, className }) => {
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
      <div className={`${s.postHero} ${className ? className : ''}`}>
        <div className={`${s.info} col-md-6 col-xl-4 pe-3`}>
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
            <div className={s.titleWrap}><h2 className={` ${s.title}`} title={parse(post.title)}><Link to={post.uri} itemProp="url" className="title">{parse(post.title)}</Link></h2></div>
            {!!post.seo?.metaDesc &&
              <div className={s.excerpt}>{parse(post.seo?.metaDesc)}</div>
            }
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
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
          </div>

          {/* {!!post.tags?.nodes?.length &&
            <div className={s.tags}>
              {post.tags?.nodes?.map((t, i) => {
                return <span key={`tag-${i}`}>{t.name}</span>
              })}
            </div>
          } */}

        </div>
        <Link to={post.uri} itemProp="url" className={`${s.image} col-md-6 col-xl-8 py-3 p-xl-3`} style={imaegStyles}></Link>
      </div>
    </>
  );
};

export default PostHero;
