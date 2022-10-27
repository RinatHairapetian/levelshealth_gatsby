import { Link } from "gatsby";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import Search from './../search/index';
import * as s from "./mobile-nav-blog.module.css";
const searchIndices = [{ name: `Pages`, title: `Pages` }]

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "30px",
    height: "24px",
    right: "36px",
    top: "44px",
  },
  bmBurgerBars: {
    background: "#000",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#ffffff",
  },
  bmCrossButton: {
    top: "20px",
    right: "20px",
    height: "28px",
    width: "28px",
  },
  bmCross: {
    height: "28px",
    background: "#000",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
    height: "100%",
    width: '320px',
  },
  bmMenu: {
    // background: "#E6D9CD",
    background: 'radial-gradient(100% 62.34% at 0% 37.66%, #FFFFFF 38.02%, #E6E6E6 100%)',
    // padding: "0px 50px 0px 18px",
    padding: "0px 18px",
    // fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    flexDirection: "columns",
    color: "#fff",
  },
  bmOverlay: {
    top: "0",
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const MobileNavBlog = () => {
  return (
    <Menu className="mobileNav" right styles={styles}>
      <div className={`d-flex flex-column pb-4 pt-5 mt-3`}>
        <div className={`${s.menuItem} mb-3`}>
          <Search indices={searchIndices} />
        </div>
        <div className={`${s.menuItem} mb-3`}>
          <Link className={`${s.headerLinkBlog}`} to="/blog">METABOLIC INSIGHTS</Link>
        </div>
      </div>
    </Menu>
  );
};

export default MobileNavBlog;
