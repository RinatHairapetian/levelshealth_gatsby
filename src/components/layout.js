import { Script } from 'gatsby';
import React from "react";
import Footer from './footer/footer';

const Layout = ({ isHomePage, children }) => {

  return (
    <>
      <div data-is-root-path={isHomePage}>

        <main>{children}</main>

        <Footer />
      </div>
      <Script type="text/javascript">
        {`
          var _dcq = _dcq || [];
                  var _dcs = _dcs || { };
                  _dcs.account = '4080355';

                  (function() {
          var dc = document.createElement('script');
                  dc.type = 'text/javascript'; dc.async = true;
                  dc.src = '//tag.getdrip.com/4080355.js';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(dc, s);
          })();
        `}
      </Script>
    </>
  )
}

export default Layout
