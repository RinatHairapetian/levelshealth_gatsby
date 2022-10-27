import React from "react";
import Footer from './footer/footer';

const Layout = ({ isHomePage, children }) => {

  return (
    <>
      <div data-is-root-path={isHomePage}>

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
