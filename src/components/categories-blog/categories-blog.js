import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const CategoriesBlog = ({ mainCategories }) => {

  const [modalOpened, setModalOpened] = React.useState(false);

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
    ];
  }

  const filtered_categories = categories.filter((c) => {
    return mainCategories.includes(c.slug);
  })
  return (
    <div className="container-fluid container-lg blog-categories-wrapper">
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
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 position-relative pt-5">
              <button type='button' className="close" onClick={() => { setModalOpened(false) }}>&times;</button>
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-5 pb-2 border-bottom">All Levels Categories</h2>
                </div>
                <div className="col-12 d-flex flex-wrap flex-row justify-content-start align-items-start">
                  {!!categories?.length && categories.map((c) => {
                    return <Link to={c.uri} key={c.id} className="col-12 col-md-6 col-lg-4 text-white text-start text-decoration-none"  onClick={() => { setModalOpened(false) }}>{c.name}</Link>
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