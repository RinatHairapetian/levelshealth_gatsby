import { Link } from "gatsby";
import React from "react"
import CategoriesBlog from './../categories-blog/categories-blog';
import * as s from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={`${s.top} d-none d-lg-block`}>
          <div className="global-wrapper container-fluid container-lg px-lg-0 py-0">
            <div className={s.footerLinksWrapper}>
              <Link className={``} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="144.47" height="23.05" viewBox="0 0 144.47 23.05">
                  <polygon points="87.11 2.46 82.02 16.67 81.96 16.67 76.88 2.46 73.43 2.46 73.39 2.51 80.15 20.59 83.86 20.59 90.49 2.51 90.45 2.46 87.11 2.46"></polygon>
                  <path d="M142.25,12h0L136.7,8.52a1.66,1.66,0,0,1-.84-1.41,1.57,1.57,0,0,1,1.57-1.55h5.89V2.46H137.6a4.77,4.77,0,0,0-4.81,4.76h0A4.61,4.61,0,0,0,135,11.1l5.63,3.48a1.56,1.56,0,0,1,.75,1.3,1.68,1.68,0,0,1-1.68,1.61h-5.44l-1.85,3.05v.05h7.23a4.8,4.8,0,0,0,4.82-4.76h0A4.64,4.64,0,0,0,142.25,12Z"></path>
                  <path d="M120.3,17.5h0v-15h-3.1V20.59h9.25l1.85-3V17.5Z"></path>
                  <path d="M41.07,17.5v-15H38V20.59h9.25l1.85-3V17.5Z"></path>
                  <polygon points="55.58 20.59 67.12 20.59 67.12 17.5 58.69 17.5 58.69 13.08 65.96 13.08 65.96 9.98 58.69 9.98 58.69 5.56 67.12 5.56 67.12 2.46 55.58 2.46 55.58 20.59"></polygon>
                  <polygon points="96.99 20.59 108.52 20.59 108.52 17.5 100.09 17.5 100.09 13.08 107.36 13.08 107.36 9.98 100.09 9.98 100.09 5.56 108.52 5.56 108.52 2.46 96.99 2.46 96.99 20.59"></polygon>
                  <polygon points="0 2.45 0 23.02 0.04 23.05 8.25 20.61 8.25 0.03 8.21 0 0 2.45"></polygon>
                  <polygon points="10.73 13.51 10.73 23.02 10.78 23.05 18.99 20.6 18.99 11.1 18.95 11.06 10.73 13.51"></polygon>
                </svg>
              </Link>
              <span className="d-none d-lg-inline-block">|</span>
              <Link className={`d-none d-lg-inline-block`} to="/blog">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="316.03" height="18.66" viewBox="0 0 316.03 18.66">
                  <path d="M93.2,9.33V9.2a5,5,0,0,0,.91-.93,5,5,0,0,0,.91-3,4.86,4.86,0,0,0-4.66-5h-9V18.4h8.68a4.86,4.86,0,0,0,5.18-4.52h0v-.52a4.76,4.76,0,0,0-1-3.09A3.82,3.82,0,0,0,93.2,9.33ZM84.79,3.24h4.66a2.1,2.1,0,0,1,2.21,2h0a1.61,1.61,0,0,1,0,.31,2.06,2.06,0,0,1-1.93,2.2,1,1,0,0,1-.25,0H84.82Zm4.94,12.18H84.81V10.75h4.92a2.34,2.34,0,0,1,0,4.67Z"></path>
                  <polygon points="10.25 12.96 9.72 12.96 5.45 0.25 0 0.25 0 18.4 3.37 18.4 3.37 5.83 3.9 5.83 8.17 18.4 11.8 18.4 16.08 5.83 16.6 5.83 16.6 18.4 19.96 18.4 19.96 0.25 14.52 0.25 10.25 12.96"></polygon>
                  <path d="M65.47.25,59,18.4h3.76l1.37-3.89h7.63l1.37,3.89h3.77L70.38.25ZM65.21,11.4l2.46-7.25h.51l2.47,7.25Z"></path>
                  <polygon points="43.17 3.49 48.62 3.49 48.62 18.4 51.98 18.4 51.98 3.49 57.42 3.49 57.42 0.25 43.17 0.25 43.17 3.49"></polygon>
                  <polygon points="26.45 18.4 38.63 18.4 38.63 15.29 29.82 15.29 29.82 10.89 38.12 10.89 38.12 7.77 29.82 7.77 29.82 3.37 38.63 3.37 38.63 0.25 26.45 0.25 26.45 18.4"></polygon>
                  <path d="M109.15,0c-4.9,0-8.81,3.86-8.81,9.33s3.91,9.33,8.81,9.33S118,14.8,118,9.33,114.05,0,109.15,0Zm0,15.42c-3.11,0-5.45-2.35-5.45-6.09s2.34-6.09,5.45-6.09,5.44,2.36,5.44,6.09S112.26,15.42,109.15,15.42Z"></path>
                  <rect x="140.65" y="0.25" width="3.37" height="18.15"></rect>
                  <rect x="231.64" y="0.25" width="3.37" height="18.15"></rect>
                  <path d="M249.92,11.4h4.54v.13a4.76,4.76,0,0,1-4.92,3.89c-3.12,0-5.45-2.35-5.45-6.09s2.33-6.09,5.45-6.09a5,5,0,0,1,4.66,3.24h3.5A8.22,8.22,0,0,0,249.54,0c-4.91,0-8.82,3.86-8.82,9.33s3.91,9.33,8.85,9.33a7,7,0,0,0,4-1.16,5,5,0,0,0,1.3-1.17H255l.26,2.07h2.6V8.83H250Z"></path>
                  <polygon points="275.46 7.51 267.3 7.51 267.3 0.25 263.92 0.25 263.92 18.4 267.3 18.4 267.3 10.89 275.46 10.89 275.46 18.4 278.83 18.4 278.83 0.25 275.46 0.25 275.46 7.51"></polygon>
                  <path d="M310.71,8l-2.85-.53c-1.94-.33-2.45-1-2.45-2.07,0-1.33,1-2.33,3.36-2.33S312.41,4.4,312.41,6h3.36c0-3.37-2.33-6-7-6C304.5,0,302,2.43,302,5.44c0,2.6,1.4,4.41,4.54,4.93l3.11.52c2.33.41,3,1.27,3,2.33,0,1.32-1,2.34-3.63,2.34s-4-1.27-4-2.86h-3.37c0,3.37,2.72,6,7.39,6s7-2.33,7-5.44S314.35,8.68,310.71,8Z"></path>
                  <polygon points="283.89 3.49 289.33 3.49 289.33 18.4 292.69 18.4 292.69 3.49 298.15 3.49 298.15 0.25 283.89 0.25 283.89 3.49"></polygon>
                  <path d="M220.62,8l-2.85-.53c-1.94-.33-2.46-1-2.46-2.07,0-1.33,1-2.33,3.37-2.33S222.31,4.4,222.31,6h3.37c0-3.37-2.33-6-7-6C214.41,0,212,2.43,212,5.44c0,2.6,1.4,4.41,4.53,4.93l3.12.52c2.34.41,3,1.27,3,2.33,0,1.32-1,2.34-3.63,2.34s-4-1.27-4-2.86h-3.37c0,3.37,2.72,6,7.39,6s7-2.33,7-5.44S224.28,8.68,220.62,8Z"></path>
                  <polygon points="127.04 0.25 123.67 0.25 123.67 18.4 135.6 18.4 135.6 15.16 127.04 15.16 127.04 0.25"></polygon><rect x="181.22" y="0.25" width="3.37" height="18.15"></rect>
                  <path d="M158.54,3.24a4.93,4.93,0,0,1,4.67,3.36h3.5A8.26,8.26,0,0,0,158.54,0c-4.91,0-8.82,3.86-8.82,9.33s3.95,9.33,8.82,9.33a8.21,8.21,0,0,0,8.17-6.73h-3.5a4.88,4.88,0,0,1-4.67,3.5c-3.12,0-5.45-2.36-5.45-6.09S155.42,3.24,158.54,3.24Z"></path>
                  <polygon points="202.74 12.83 202.22 12.83 195.61 0.25 191.07 0.25 191.07 18.4 194.44 18.4 194.44 5.83 194.96 5.83 201.57 18.4 206.11 18.4 206.11 0.25 202.74 0.25 202.74 12.83"></polygon>
                </svg>
              </Link>
            </div>
          </div>
          <CategoriesBlog />
        </div>
        <div className={s.bottom}>
          <div className="container-fluid container-md px-md-0">
            <div className={s.logo}>
              <Link className={``} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.86 21.39">
                  <g>
                    <path fillRule="evenodd" fill="#fff" d="M76.28,15.37,71.51,3H68.27l6.31,15.8h3.48L84.28,3H81.1L76.34,15.4Z"></path>
                    <path fillRule="evenodd" fill="#fff" d="M132.84,11.25l-5.21-3A1.43,1.43,0,0,1,126.85,7a1.42,1.42,0,0,1,1.48-1.35h5.49V3h-5.36a4.34,4.34,0,0,0-4.52,4.16A4,4,0,0,0,126,10.52l5.29,3a1.37,1.37,0,0,1,.7,1.15,1.49,1.49,0,0,1-1.55,1.39h-5.11l-1.74,2.67h6.76a4.34,4.34,0,0,0,4.51-4.16,4,4,0,0,0-2.08-3.39"></path>
                    <path fillRule="evenodd" fill="#fff" d="M112.27,16.09V3h-2.91V18.8h8.7l1.74-2.66v-.05Z"></path>
                    <path fillRule="evenodd" fill="#fff" d="M37.92,16.09V3H35V18.8h8.7l1.74-2.66v-.05Z"></path>
                    <polygon fillRule="evenodd" fill="#fff" points="52.28 2.9 52.28 18.9 52.28 18.9 62.16 18.9 62.16 18.9 62.16 16.16 54.94 16.16 54.94 12.27 61.17 12.27 61.17 9.53 54.94 9.53 54.94 5.63 62.16 5.63 62.16 2.9 52.28 2.9"></polygon>
                    <polygon fillRule="evenodd" fill="#fff" points="90.56 2.9 90.56 18.9 90.56 18.9 100.43 18.9 100.43 18.9 100.43 16.16 93.21 16.16 93.21 12.27 99.45 12.27 99.45 9.53 93.21 9.53 93.21 5.63 100.43 5.63 100.43 2.9 90.56 2.9"></polygon>
                    <path fillRule="evenodd" fill="#fff" d="M7.3,0,0,2.27V21.39H0l7.3-2.27V0h0"></path>
                    <path fillRule="evenodd" fill="#fff" d="M9.54,12.55v8.84h0l7.3-2.27V10.31h0Z"></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          <div className={s.disclaimerSocialMenus}>
            <div className="container-fluid container-md px-md-0">
              <div className="row">
                <div className="col-md-6 py-3 py-md-0">
                  <div className={`${s.disclaimerSocial} lr-md lb lb-md-none`}>
                    <div className={s.disclaimer}>
                      <p>The Levels program, products, and services are intended only for maintaining and encouraging a healthy lifestyle and are not to be used for the diagnosis,
                        cure, management, prevention, or treatment of any disease or condition.</p>
                      <p>The Levels app, products, and services should never be used for medication management or dosing decisions.</p>
                    </div>
                    <ul className={s.socials}>
                      <li className="icon-facebook">
                        <a href="https://facebook.com/LevelsHealth" target="_blank" aria-label="Go to Levels Facebook" data-location="external">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z" fill="#464646"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-instagram">
                        <a href="https://www.instagram.com/levels/" target="_blank" aria-label="Go to Levels Instagram" data-location="external">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.76 22.76">
                            <g>
                              <path className="icon-social-instagram-path" fill="#05473c" d="M22.68 16.07a6.78 6.78 0 01-1.84 4.77 6.76 6.76 0 01-4.76 1.84c-1.88.1-7.51.1-9.39 0a6.77 6.77 0 01-4.77-1.84 6.74 6.74 0 01-1.84-4.77C0 14.19 0 8.56.08 6.68a6.74 6.74 0 011.84-4.77A6.78 6.78 0 016.69.08C8.57 0 14.2 0 16.08.08a6.76 6.76 0 014.76 1.84 6.68 6.68 0 011.84 4.77c.11 1.88.11 7.5 0 9.38zm-2-4.69c0-1.66.14-5.21-.45-6.71a3.84 3.84 0 00-2.17-2.16c-1.49-.59-5.05-.46-6.71-.46s-5.21-.14-6.7.46a3.84 3.84 0 00-2.14 2.16c-.59 1.49-.45 5.05-.45 6.71s-.14 5.21.45 6.71a3.84 3.84 0 002.17 2.16c1.49.59 5.05.46 6.7.46s5.21.13 6.71-.46a3.87 3.87 0 002.17-2.16c.59-1.5.45-5.09.45-6.71zm-3.49 0a5.84 5.84 0 11-5.84-5.84 5.83 5.83 0 015.87 5.84zm-2 0a3.8 3.8 0 10-3.8 3.79 3.8 3.8 0 003.79-3.79zm2.28-4.71a1.37 1.37 0 111.36-1.36 1.36 1.36 0 01-1.37 1.36z"></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-twitter">
                        <a href="https://twitter.com/levels" target="_blank" aria-label="Go to Levels Twitter" data-location="external">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19.08">
                            <g>
                              <path className="icon-social-twitter-path" fill="#05473c" d="M21.56,4.77v.6a13.7,13.7,0,0,1-.91,4.83A13.81,13.81,0,0,1,18,14.61a14,14,0,0,1-4.4,3.23,13.78,13.78,0,0,1-6,1.24,15.31,15.31,0,0,1-2-.14,13.9,13.9,0,0,1-2-.41,13.11,13.11,0,0,1-1.84-.69A12.82,12.82,0,0,1,0,16.92l.59,0h.58a10.35,10.35,0,0,0,3.29-.53,9.11,9.11,0,0,0,2.85-1.53,4.63,4.63,0,0,1-2.88-1,5,5,0,0,1-1.76-2.39,2.61,2.61,0,0,0,.46.08h.48a4.83,4.83,0,0,0,.67,0,5,5,0,0,0,.64-.1A4.9,4.9,0,0,1,2.11,9.84,4.61,4.61,0,0,1,1,6.79V6.7a5.38,5.38,0,0,0,1,.43,4,4,0,0,0,1.16.16,4.7,4.7,0,0,1-1.6-1.68A4.64,4.64,0,0,1,1,3.3,4.47,4.47,0,0,1,1.17,2,5.57,5.57,0,0,1,1.69.87a13.11,13.11,0,0,0,2,2A14.17,14.17,0,0,0,6.12,4.41a13.93,13.93,0,0,0,2.72,1,14,14,0,0,0,3,.46c0-.19-.08-.37-.1-.55a3.48,3.48,0,0,1,0-.55,4.78,4.78,0,0,1,.38-1.88,5,5,0,0,1,1.06-1.53,4.79,4.79,0,0,1,1.56-1A4.78,4.78,0,0,1,16.59,0a5,5,0,0,1,2,.41,5.3,5.3,0,0,1,1.6,1.1,9.9,9.9,0,0,0,1.64-.44,8.61,8.61,0,0,0,1.5-.7,4.59,4.59,0,0,1-.84,1.51A5.31,5.31,0,0,1,21.19,3a11.65,11.65,0,0,0,1.43-.28A7.87,7.87,0,0,0,24,2.25,11.69,11.69,0,0,1,22.89,3.6,11.25,11.25,0,0,1,21.56,4.77Z"></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-youtube">
                        <a href="https://www.youtube.com/channel/UClwMr26t47qS1L9S59P35Mg/" target="_blank" aria-label="Go to Levels Youtube" data-location="external">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path className="icon-social-youtube-path" fill="#05473c" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-linkedin">
                        <a href="https://www.linkedin.com/company/levels-health/" target="_blank" aria-label="Go to Levels LinkedIn" data-location="external">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z" fill="#464646"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-apple">
                        <a href="https://podcasts.apple.com/ca/podcast/a-whole-new-level/id1563263076" target="_blank" aria-label="Go to Levels on Apple Podcasts" data-location="external">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" style={{ "enableBackground": "new 0 0 300 300" }}>
                            <g id="Layer_1">
                              <path className="st0" fill="#FFFFFF" d="M233.3,0H66.7C29.9,0,0,29.9,0,66.7v166.5C0,270.1,29.9,300,66.7,300h166.5c36.9,0,66.7-29.9,66.7-66.7V66.7 C300,29.9,270.1,0,233.3,0z M170.1,229.6c-2.9,20.7-4.5,25.9-8.5,29.5c-5.5,4.9-13.3,6.2-20.7,3.6l-0.1,0c-9-3.2-10.9-7.5-14.5-33 c-4.3-29.6-5.2-48-2.7-53.8c3.3-7.7,12.2-12.1,24.6-12.1c12.3,0,21.3,4.4,24.6,12.1C175.3,181.6,174.4,200,170.1,229.6z M105.4,174.8l5.2,6.2v7.6c0,4.2-0.3,7.6-0.7,7.6c-0.4,0-3.3-2-6.4-4.5l-0.4-0.1c-10.4-8.3-19.6-23-23.4-37.5 c-2.3-8.7-2.3-25.3,0.1-34c6.3-23.5,23.6-41.7,47.6-50.2c8.2-2.9,26.4-3.6,36.5-1.3c34.8,7.8,59.5,42.6,54.7,77.2 c-1.9,13.9-6.7,25.4-15.2,36c-4.2,5.4-14.4,14.4-16.2,14.4c-0.3,0-0.6-3.4-0.6-7.5V181l5.2-6.2c19.6-23.5,18.2-56.3-3.2-77.8 c-8.3-8.4-17.9-13.3-30.3-15.6c-8-1.5-9.7-1.5-18.1-0.1c-12.8,2.1-22.6,7-31.4,15.7C87.2,118.3,85.8,151.3,105.4,174.8z M137.9,150.7l-0.2,0c-8.9-4.1-13.7-12-13.8-22.1c0-9.2,5.1-17.1,13.9-21.8c5.6-2.9,15.5-2.9,21.1,0c6.1,3.2,11.1,9.3,13,15.7 C177.7,142.3,156.8,159.6,137.9,150.7z M252.4,155.1c-4.6,26.2-19.2,50.1-40.5,66.2c-7.6,5.7-26.2,15.8-29.2,15.8 c-1.1,0-1.2-1.1-0.7-5.8c0.9-7.4,1.8-8.9,6-10.7c6.7-2.8,18.1-10.9,25.1-17.9c12.1-12,21-27.7,25.1-44.2 c2.6-10.3,2.3-33.2-0.6-43.8C228.5,81,201,54.8,167.3,47.8c-9.8-2-27.6-2-37.5,0c-34.1,7-62.3,34.5-70.9,69.1 c-2.3,9.4-2.3,32.3,0,41.7c5.7,22.9,20.5,43.9,39.9,56.4c3.8,2.5,8.4,5.1,10.3,5.9c4.2,1.8,5.1,3.3,5.9,10.7 c0.5,4.5,0.4,5.8-0.7,5.8c-0.7,0-5.8-2.2-11.2-4.8l-0.5-0.4c-30.9-15.2-50.7-40.9-57.9-75.1c-1.8-8.8-2.1-29.9-0.4-38 c4.5-21.8,13.1-38.8,27.4-53.8c20.6-21.7,47.1-33.2,76.6-33.2c29.2,0,55.6,11.3,75.7,32.3c15.3,15.9,23.9,32.7,28.3,54.9 C253.8,126.7,253.8,146.8,252.4,155.1z"></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-medium">
                        <a href="https://medium.com/levelshealth" target="_blank" aria-label="Go to Levels on Medium" data-location="external">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71">
                            <g>
                              <path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36" fill="#ffffff"></path>
                              <path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279" fill="#ffffff"></path>
                              <path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94" fill="#ffffff"></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <div className={s.footerLinks}>
                      <a href="https://levels.link/waitlist-international" target="_blank" className={`${s.button} btn_notusa`} title="Join Levels" data-location="external">Request Access</a>
                      <a href="https://app.levelshealth.com/profile/login" target="_blank" className={`${s.button} ${s.noborder}`} title="Login" data-location="external">Login</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 py-3 py-md-0">
                  <div className={s.footerLinksWrapper}>
                    <div className={s.footerLinks}>
                      <ul >
                        <li><a href="https://support.levelshealth.com" data-location="external" target="_blank">Support</a></li>
                        <li>
                          <a href="https://www.notion.so/levelshealth/Frequently-Asked-Questions-fc629e6b81c6416482c9dab8d88061c6" data-location="external" target="_blank">FAQ</a>
                        </li>
                        <li><Link to="/blog">Levels Blog</Link></li>
                        <li><a href="mailto:press@levelshealth.com" data-location="external" target="_blank">Press</a></li>
                        <li><a href="https://levels.link/careers" data-location="external" target="_blank">Careers</a></li>
                        <li><a href="https://www.levelshealth.com/inside-the-company" data-location="external" target="_blank">Inside the Company</a></li>
                        <li><a href="https://medium.com/levelshealth" data-location="external" target="_blank">Team Publications</a></li>
                        <li><a href="https://www.levelshealth.com/press" data-location="external" target="_blank">Press Appearances</a></li>
                        <li><a href="https://www.levelshealth.com/videos" data-location="external" target="_blank">Video&nbsp;Appearances</a></li>
                        <li><a href="https://www.levelshealth.com/podcasts" data-location="external" target="_blank">Podcast Appearances</a></li>
                      </ul>
                      <ul >
                        <li><a href="https://www.levelshealth.com/#frontpage-demo" data-location="external" target="_blank">About Levels</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-programs" data-location="external" target="_blank">Our Program</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-keypoints" data-location="external" target="_blank">User Profiles</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-testimonials" data-location="external" target="_blank">Testimonials</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-founders" data-location="external" target="_blank">Founders</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-medical" data-location="external" target="_blank">Advisors</a></li>
                        <li><a href="https://www.levelshealth.com/#frontpage-access" data-location="external" target="_blank">Registration</a></li>
                        <li><a href="https://levels.link/privacy" data-location="external" target="_blank">Privacy Policy</a></li>
                        <li>
                          <a href="https://levelshealth.notion.site/Levels-Assets-for-Media-Content-Creators-January-2022-f7e9b3066e2444cfae92dc786c2f8a32" data-location="external" target="_blank">Media &amp; Creators</a>
                        </li>
                        <li><a href="https://app.levelshealth.com/profile/login" data-location="external" target="_blank">Member Login</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.copyright}>
            <div className="container-fluid container-lg px-lg-0">
              <p> © {new Date().getFullYear()} Levels. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer