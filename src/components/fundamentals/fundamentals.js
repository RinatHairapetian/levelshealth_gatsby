import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import * as s from "./fundamentals.module.css";
import Slider from "react-slick";

const Fundamentals = ({ posts }) => {

  const sliderSettings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    // centerMode: true,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399.9,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199.9,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991.9,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575.9,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };
  return (
    <div className={`${s.fundamentals}`}>
      <div className="container px-lg-0">
        <h2 className={`${s.title}`}>Metabolic Fundamentals: Start Here</h2>

        <Slider {...sliderSettings} >
          {(posts?.length > 0) &&
            posts.map((post, i) =>
              <div key={post.uri}><Link to={post.uri} title={parse(post.title)}><span>{i + 1}</span>{parse(post.title)}</Link></div>
            )
          }
        </Slider>
      </div>
    </div>
  );
};

export default Fundamentals;
