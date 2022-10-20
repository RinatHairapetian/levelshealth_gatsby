import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const Categories = () => {
  const {
    allWpCategory: { categories },
  } = useStaticQuery(graphql`
    query CategoriesLineQuery {
      allWpCategory(
        sort: {fields: name, order: ASC},
        filter: {count: {gt: 0}}
      ) {
        categories: nodes {
          name
          id
          uri
        }
      }
    }
  `)
  return (
    <div className="container">
      {!!categories?.length &&
        <div className="blog-categories">
          <Link to="/blog">All</Link>
          {categories.map((c) => {
            return <Link to={c.uri} key={c.id}>{c.name}</Link>
          })}
        </div>
      }
    </div>
  )
}

export default Categories