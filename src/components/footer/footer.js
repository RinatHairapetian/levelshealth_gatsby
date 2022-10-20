import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </div>
    </footer>
  )
}

export default Footer