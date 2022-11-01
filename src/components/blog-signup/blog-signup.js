import React from "react";
import * as s from "./blog-signup.module.css";

const BlogSignup = () => {
  return (
    <div className={s.signUpWrapper}>
      <div className={s.signUp}>
        <div className={s.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="25" height="30.34" viewBox="0 0 25 30.34">
            <g id="Logo">
              <g id="Group_207" data-name="Group 207">
                <path id="Path_112" data-name="Path 112" class="cls-1" fill="#fff" d="M10.81,0,0,3.21V30.3l.06,0,10.8-3.2V0Z" />
                <path id="Path_113" data-name="Path 113" class="cls-1" fill="#fff" d="M14.14,17.78V30.29l0,.05L25,27.14V14.61l-.06,0Z" />
              </g>
            </g>
          </svg>
        </div>
        <h2 className={s.title}>Sign up<br /> for the<br /> Levels Newsletter</h2>
        <div className={s.form}>
          <input type='email' className={s.input} placeholder="Type your email" />
          <button type='button' className={s.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSignup;
