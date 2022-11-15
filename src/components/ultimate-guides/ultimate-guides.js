import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import parse from "html-react-parser";
import React from "react";
import * as s from "./ultimate-guides.module.css";

const UltimateGuides = ({ title, posts, link }) => {
  let firstPosts = [];
  if (posts?.length) {
    firstPosts = posts.slice(0, 5);
  }
  return (
    <div className={`${s.ultimateGuides} py-3`}>
      <h2 className={`${s.title}`}>{title}</h2>
      <div className={`${s.posts}`}>
        {(firstPosts?.length > 0) &&
          firstPosts.map((post, i) => {
            const featuredImage = {
              data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
              alt: post.featuredImage?.node?.altText || ``,
            }
            return <div to={post.uri} key={post.uri} className={`${s.post}`}>
              <span>
                <div className={`${s.titleWrap}`}>
                  <h4 className={`${s.postTitle}`} title={parse(post.title)}>
                    <Link to={post.uri} key={post.uri} className="title">{parse(post.title)}</Link>
                  </h4>
                </div>
                <h6 className={s.author}>{post.author?.node?.name}</h6>
              </span>
              {/* {(!!post.author?.node?.avatar?.url) &&
                <span className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></span>
              } */}
            </div>
          }
          )
        }
      </div>
      {link}
    </div>
  );
};

export default UltimateGuides;
