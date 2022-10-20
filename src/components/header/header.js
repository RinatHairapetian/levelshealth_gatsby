import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Search from './../search/index';
import * as s from "./header.module.css";
import MobileNav from "./mobile-nav";
const searchIndices = [{ name: `Pages`, title: `Pages` }]


const Header = ({ isHomePage }) => {
  const {
    wpMenu: { wpMenuItems },
  } = useStaticQuery(graphql`
    query HeaderMenuQuery {
      wpMenu(locations: {eq: HEADER}) {
        wpMenuItems: menuItems {
          nodes {
            id
            uri
            url
            title
            target
            label
            linkRelationship
            cssClasses
            parentId
          }
        }
      }
    }
  `)


  const flatListToHierarchical = (
    data = [],
    { idKey = "id", parentKey = "parentId", childrenKey = "items" } = {}
  ) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }
  let wpMenuItemsTree = flatListToHierarchical(wpMenuItems.nodes);


  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <>
      <header className={`${s.globalHeader} global-header`}>
        <div className="global-wrapper container">
          <div className={s.headerWrapper}>
            <Link className="header-link-home" to="/">
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

            <div className="d-none d-md-flex">
              <Search indices={searchIndices} />
            </div>

            <nav className="d-none d-md-flex">
              {wpMenuItemsTree.map((mi, i) => {
                let view = <Link to={mi.uri} key={mi.id}>{mi.label}</Link>;
                let hasProtocol = isValidHttpUrl(mi.uri);
                if (!!hasProtocol) {
                  view = <a href={mi.uri} key={mi.id}>{mi.label}</a>;
                }
                return view;
              })}
            </nav>

          </div>
        </div>
        <div className="d-md-none">
          <MobileNav menuItems={wpMenuItemsTree} />
        </div>
      </header>
    </>
  )
}

export default Header