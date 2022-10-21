import React from "react";
import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ isHomePage, children }) => {

  return (
    <>
      <Header />
      <div data-is-root-path={isHomePage}>

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
