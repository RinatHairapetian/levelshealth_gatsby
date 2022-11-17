import parse from "html-react-parser";
import React from "react";
import Post from '../post/post';
import * as s from "./category-basics.module.css";

const CategoryBasics = ({ title, posts }) => {

  let firstPosts = [];
  return (
    <div className={s.categoryBasics}>
      <div className="container px-lg-0">
        <div className="row">
          <div className={`col-12`}>
            <div className={`${s.title}`}>
              <h2>{parse(title)}</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {posts.map((post, index) => {
                let view = "";
                switch (index % 4) {
                  case 0:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} showTypes={true} className="lr-md lb" />
                    </div>
                    break;
                  case 1:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} showTypes={true} className="lr-xl lb" />
                    </div>
                    break;
                  case 2:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} showTypes={true} className="lr-md lb" />
                    </div>
                    break;
                  case 3:
                    view = <div className="col-12 col-md-6 col-xl-3 py-3" key={post.uri} >
                      <Post post={post} showTypes={true} className="lb" />
                    </div>
                    break;
                  default:
                    break;
                }
                return view;
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBasics;
