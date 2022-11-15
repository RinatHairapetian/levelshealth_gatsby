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
      <div className={`${s.title}`}>
        <h2>{title}</h2>
      </div>
      <div className={`${s.posts}`}>
        {(firstPosts?.length > 0) &&
          firstPosts.map((post, i) => {
            const featuredImage = {
              data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
              alt: post.featuredImage?.node?.altText || ``,
            }
            return <div key={post.uri} className={`${s.post}`}>
              {(!!featuredImage?.data) &&
                <Link to={post.uri} style={{ maxWidth: '119px', maxHeight: '164px' }}>
                  <GatsbyImage
                    loading="eager"
                    placeholder="none"
                    image={featuredImage.data}
                    alt={featuredImage.alt}
                    className={`h-100`}
                  />
                </Link>
              }
              <span>
                <div className={`${s.titleWrap} text-start`}>
                  <h4 className={`${s.postTitle}`} title={parse(post.title)}>
                    <Link to={post.uri} className="title">{parse(post.title)}</Link>
                  </h4>
                </div>
              </span>
            </div>
          }
          )
        }
      </div>
    </div>
  );
};

export default SidebarFeaturedPosts;
