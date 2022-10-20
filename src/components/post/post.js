import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import React from "react";
import * as s from "./post.module.css";

const Post = ({ post }) => {
  const image = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  };
  return (
    <>
      <article
        className={`${s.postItem}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <Link to={post.uri} itemProp="url" className={s.postTitle}>
          {image?.data && (
            <GatsbyImage
              loading="eager"
              placeholder="none"
              image={image.data}
              alt={image.alt}
              className={s.postImg}
            />
          )}
          <h3 itemProp="headline">{parse(post.title)}</h3>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className={s.author}>{post.author?.node?.name}</div>
            {!!post.blogSingle?.readingTime &&
              <div className={`${s.readingTime}`}>{post.blogSingle?.readingTime} read</div>
            }
          </div>
        </Link>
      </article>
    </>
  );
};

export default Post;