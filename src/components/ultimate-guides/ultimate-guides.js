import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./ultimate-guides.module.css";
import Slider from "react-slick";

const UltimateGuides = ({ title, posts, link }) => {
  let firstPosts = [];
  if (posts?.length) {
    firstPosts = posts.slice(0, 4);
  }
  return (
    <div className={`${s.ultimateGuides} py-3`}>
      <h2 className={`${s.title}`}>{title}</h2>
      <div className={`${s.posts}`}>
        {(firstPosts?.length > 0) &&
          firstPosts.map((post, i) =>
            <Link to={post.uri} key={post.uri} className={`${s.post}`}>
              <span>
                <h4 className={`${s.postTitle}`}>{parse(post.title)}</h4>
                <h6 className={s.author}>{post.author?.node?.name}</h6>
              </span>
              {!!post.author?.node?.avatar?.url &&
                <span className={s.avatar} style={{ backgroundImage: `url(${post.author?.node?.avatar?.url})` }}></span>
              }
            </Link>
          )
        }

      </div>
      {link}
    </div>
  );
};

export default UltimateGuides;
