import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import parse from "html-react-parser";
import React from "react";
import * as s from "./sidebar-featured-posts.module.css";

const SidebarFeaturedPosts = ({ title, posts }) => {
  let firstPosts = [];
  if (posts?.length) {
    firstPosts = posts.slice(0, 5);
  }
  return (
    <div className={`${s.sidebarFeaturedPosts} py-3`}>
      <h2 className={`${s.title}`}>{title}</h2>
      <div className={`${s.posts}`}>
        {(firstPosts?.length > 0) &&
          firstPosts.map((post, i) => {
            const featuredImage = {
              data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
              alt: post.featuredImage?.node?.altText || ``,
            }
            return <Link to={post.uri} key={post.uri} className={`${s.post}`}>
              {(!!featuredImage?.data) &&
                <GatsbyImage
                  loading="eager"
                  placeholder="none"
                  image={featuredImage.data}
                  alt={featuredImage.alt}
                  className={``}
                  style={{ maxWidth: '130px', maxHeight: '164px'}}
                />
              }
              <span>
                <div className={`${s.titleWrap} text-start`}><h4 className={`${s.postTitle} title`} title={parse(post.title)}>{parse(post.title)}</h4></div>
              </span>
            </Link>
          }
          )
        }
      </div>
    </div>
  );
};

export default SidebarFeaturedPosts;
