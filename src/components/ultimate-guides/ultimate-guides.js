import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import parse from "html-react-parser";
import React from "react";
import * as s from "./ultimate-guides.module.css";

const UltimateGuides = ({ title, posts, link, showFeaturedImage }) => {
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
            return <Link to={post.uri} key={post.uri} className={`${s.post}`}>
              {(!!showFeaturedImage && !!featuredImage?.data) &&
                <GatsbyImage
                  loading="eager"
                  placeholder="none"
                  image={featuredImage.data}
                  alt={featuredImage.alt}
                  className={``}
                  style={{
                    minWidth: '110px',
                    height: '110px',
                    aspectRatio: '1 / 1'
                  }}
                />
              }
              <span>
                <div className={`${s.titleWrap} ${!!showFeaturedImage ? 'text-end' : ''}`}><h4 className={`${s.postTitle} title`} title={parse(post.title)}>{parse(post.title)}</h4></div>
                <h6 className={s.author}>{post.author?.node?.name}</h6>
              </span>
              {(!showFeaturedImage && !!post.author?.node?.avatar?.url) &&
                <span className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></span>
              }
            </Link>
          }
          )
        }

      </div>
      {link}
    </div>
  );
};

export default UltimateGuides;
