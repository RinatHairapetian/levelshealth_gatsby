import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import PostHero from '../post-hero/post-hero';
import Post from '../post/post';
import * as s from "./selected-category.module.css";

const SelectedCategory = ({ category }) => {

  let firstPosts = [];
  if (category.posts?.nodes?.length) {
    firstPosts = category.posts?.nodes?.slice(0, 6);
  }
  return (
    <>
      <div className="container px-lg-0">
        <div className="row">
          <div className={`col-12`}>
            <div className={`${s.title}`}>
              <h2>{parse(category.name)}</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {firstPosts.length > 0 &&
                firstPosts.map((post, index) => {
                  let view = "";
                  switch (index) {
                    case 0:
                      view = <div className="col-12 col-md-6 col-xl-9 py-3" key={post.uri} >
                        <PostHero post={post} showTypes={true} className="lr-md lb" />
                      </div>
                      break;
                    case 1:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} className="lb" />
                      </div>
                      break;
                    case 2:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} className="lr-md lb lb-xl-none" />
                      </div>
                      break;
                    case 3:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} className="lr-xl lb lb-xl-none" />
                      </div>
                      break;
                    case 4:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} className="lr-md lb lb-md-none" />
                      </div>
                      break;
                    case 5:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} />
                      </div>
                      break;
                    default:
                      view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                        <Post post={post} showTypes={true} className="lr" />
                      </div>
                      break;
                  }
                  return view;
                })
              }
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <Link to={category.uri} className={s.link}>Show All</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCategory;
