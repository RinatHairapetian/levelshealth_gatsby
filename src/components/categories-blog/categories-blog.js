import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Search from './../search/index';
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const CategoriesBlog = ({ mainCategories }) => {

  const [modalOpened, setModalOpened] = React.useState(false);

  const escFunction = React.useCallback((event) => {
    if (event.key === "Escape") {
      setModalOpened(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const {
    allWpCategory: { categories },
  } = useStaticQuery(graphql`
    query CategoriesBlogLineQuery {
      allWpCategory(
        sort: {fields: name, order: ASC},
        filter: {count: {gt: 0}}
      ) {
        categories: nodes {
          name
          id
          uri
          slug
        }
      }
    }
  `)

  if (!mainCategories?.length) {
    mainCategories = [
      'metabolic-health',
      'mental-health',
      'nutrition',
      'nutrition',
      'physical-fitness',
      'weight-loss',
      'ultimate-guides',
      'womens-health',
    ];
  }

  const filtered_categories = categories.filter((c) => {
    return mainCategories.includes(c.slug);
  })
  return (
    <div className="container px-lg-0 blog-categories-wrapper">
      <div className="d-flex justify-content-between" style={{ gap: '20px' }}>
        {!!filtered_categories?.length &&
          <div className="blog-categories">
            {filtered_categories.map((c) => {
              return <Link to={c.uri} key={c.id}>{c.name}</Link>
            })}
          </div>
        }
        <button className="more-button" onClick={() => { setModalOpened(true) }} type="button">More <span className="burger"></span></button>
      </div>
      {modalOpened}
      <div className={`more-categories ${modalOpened ? 'd-flex' : 'd-none'}`}>
        <div className="container mh-100 overflow-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xxl-8 position-relative py-5">
              <button type='button' className="close" onClick={() => { setModalOpened(false) }}>&times;</button>
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom d-flex justify-content-between align-items-stretch flex-column flex-md-row align-items-md-end"
                    style={{paddingBottom: '0.65em', marginBottom: '2em'}}>
                    <h2 className="mb-0">All Levels Categories</h2>
                    <div className="d-flex justify-content-between align-items-end">
                      <Search indices={searchIndices} white={true} />
                      <svg className="levels_icon ms-2" xmlns="http://www.w3.org/2000/svg" fill="#54ecca" width="25" height="30.35" viewBox="0 0 25 30.35">
                        <g id="Group_100" data-name="Group 100">
                          <path id="Path_81" data-name="Path 81" className="cls-1" d="M10.84,27.12,0,30.35v-.43Q0,16.75,0,3.58c0-.28.07-.41.36-.49l10.16-3L10.84,0Z"></path>
                          <path id="Path_82" data-name="Path 82" className="cls-1" d="M25,14.55V15c0,3.91,0,7.81,0,11.72a.45.45,0,0,1-.36.53h0c-3.33,1-6.66,2-10,3l-.44.12c0-.15,0-.26,0-.38V18.12c0-.22,0-.37.28-.45l10.26-3Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex flex-wrap flex-row justify-content-start align-items-start">
                  {!!categories?.length && categories.map((c) => {
                    return <Link to={c.uri} key={c.id} className="col-12 col-md-6 col-lg-4 text-white text-start text-decoration-none pb-3" onClick={() => { setModalOpened(false) }}>{c.name}</Link>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CategoriesBlog