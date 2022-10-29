import React from "react";
import * as s from "./blog-signup.module.css";

const BlogSignup = () => {
  return (
    <div className={s.signUpWrapper}>
      <div className={s.signUp}>
        <h2 className={s.title}>Sign up<br/> for the<br/> Levels Newsletter</h2>
        <div className={s.form}>
          <input type='email' className={s.input} placeholder="Type your email" />
          <button type='button' className={s.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSignup;
